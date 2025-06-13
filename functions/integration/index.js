const axios = require("axios");
const catalyst = require("zcatalyst-sdk-node");

module.exports = async (event, context) => {
  // console.log("Updated log", event);

 const credentials = {
    CRMConnector: {
      client_id: "1000.YUYUE1MA2D8KZ2XVGFR8B1TLAV9R8E",
      client_secret: "e7801223cffc4f08379e76ab549e3d8eae0e38d9b2",
      auth_url: "https://accounts.zoho.com/oauth/v2/token",
      refresh_url: "https://accounts.zoho.com/oauth/v2/token",
      refresh_token:
        "1000.0e2acaadd0aac833db7f4570658596fe.4c7b65267c02f009fab45231604dc7f5",
    },
  };


  try {
    // Validate event data
    const DATA_ARRAY = event.data;
    if (!Array.isArray(DATA_ARRAY) || DATA_ARRAY.length === 0) {
      console.error("No data found in the event.");
      return context.closeWithFailure();
    }

    const DATA = DATA_ARRAY[0];
    const PAGE_ID = DATA.pageId;
    const LeadID = DATA.ROWID;

    // console.log("Event Data:", DATA);

    if (!PAGE_ID) {
      console.error("PAGE_ID is missing in the data.");
      return context.closeWithFailure();
    }

    const app = catalyst.initialize(context);
    const cache = app.cache();
    const segment = cache.segment();

    // Retrieve or fetch the access token
    let accessToken = await segment.getValue("ZC_CONN_CRMConnector");
    if (!accessToken) {
    // console.log("Access token not found in cache. Fetching new token...");
      accessToken = await app
        .connection(credentials)
        .getConnector("CRMConnector")
        .getAccessToken();

      // Store the access token in the cache with a TTL of 3600 seconds (1 hour)
      // console.log("Storing new access token in cache...");
      await segment.put("crm_access_token", accessToken, 1);
    }

    // Fetch row metadata from Catalyst Datastore
    const dataStoreService = app.datastore();
    const pageDataTable = dataStoreService.table("Pages");
    const leadsTable = dataStoreService.table("Leads");
    const formMetadata = await pageDataTable.getRow(PAGE_ID);

    if (!formMetadata) {
      console.error(`No form metadata found for PAGE_ID: ${PAGE_ID}`);
      throw new Error("Form metadata not found.");
    }

    // Parse the formMapping field
    let mappedFields;
    try {
      mappedFields = JSON.parse(formMetadata.formMapping); // Assuming formMapping is a valid JSON
      // console.log("Form Mapping Parsed:", mappedFields);
    } catch (error) {
      throw new Error("Failed to parse formMapping. Ensure it is valid JSON.");
    }

    // Extract Lead_data (this is the data we received)
    let leadData;
    try {
      leadData = JSON.parse(DATA.Lead_data); // Parse Lead_data JSON field
       console.log("Lead Data Parsed:", leadData);
    } catch (error) {
      throw new Error("Failed to parse Lead_data. Ensure it is valid JSON.");
    }

    // Check if the 'Last Name' field exists in the incoming Lead data
    const lastName = leadData["Last Name"] || "";
    // console.log("Last Name in Lead Data:", lastName);

    // If 'Last Name' is empty or null, use static text "Updating"
    const crmLeadData = Object.keys(mappedFields).reduce((acc, crmField) => {
      const formField = mappedFields[crmField];
      let fieldValue = leadData[formField] || "N/A"; // Default to "N/A" if the value is missing

      // Special handling for 'Last Name'
      if (crmField === "Last_Name" && !fieldValue) {
        // console.log("Last Name is missing, setting static value 'Updating'...");
        fieldValue = "Updating"; // Static value for missing Last Name
      }

      acc[crmField] = fieldValue;
      // console.log(`Mapped Field: ${crmField}, Value: ${fieldValue}`);
      return acc;
    }, {});

    crmLeadData.Catalyst_Lead_ID = LeadID;
    crmLeadData.Lead_Source = "Landing Pages";
    crmLeadData.Lead_Status = "Initial interaction";
    // Add layout information if needed
    if (formMetadata.layoutId) {
      crmLeadData.layout = {
        id: formMetadata.layoutId,
      };
      // console.log("Layout Info Added:", crmLeadData.layout);
    }

    // Upsert the lead in Zoho CRM
    const crmResponse = await axios.post(
      "https://www.zohoapis.com/crm/v7/Leads/upsert",
      {
        data: [crmLeadData],
        duplicate_check_fields: ["Catalyst_Lead_ID"], // Check duplicates based on Email and Phone
        trigger: ["workflow"], // Optional: Trigger workflow, approval, or blueprint
      },
      {
        headers: {
          Authorization: `Zoho-oauthtoken ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    // console.log("Zoho CRM Response:", crmResponse.data.data[0]);

    // Update the CRMId in Catalyst Datastore if the upsert was successful
    if (
      crmResponse.data &&
      crmResponse.data.data &&
      crmResponse.data.data[0] &&
      crmResponse.data.data[0].details &&
      crmResponse.data.data[0].details.id
    ) {
      const crmId = crmResponse.data.data[0].details.id;
      // console.log("CRM ID received from Zoho CRM:", crmId);
    if(crmResponse.data.data[0].action == 'insert'){
        const resp = await leadsTable.updateRow({
          ROWID: LeadID,
          CRMId: crmId, // Save the CRM ID in the leads table
          CRMSync: true, // Update the CRMSync field to true when the push is successful
        });
        // console.log("Updated CRMSync",resp);
      }
    } else {
      console.error("Upsert failed, setting CRMSync to false.");
      // If CRM upsert fails, update the CRMSync field to false
      // await leadsTable.updateRow({
      //   ROWID: LeadID,
      //   CRMSync: false, // Set CRMSync to false if CRM push fails
      // });
    }

    context.closeWithSuccess();
  } catch (error) {
    console.error("Error occurred:", error.message);
    console.error("Stack trace:", error.stack);

    // If any error occurs, set CRMSync to false
    const DATA_ARRAY = event.data;
    const LeadID = DATA_ARRAY[0].ROWID;

    const dataStoreService = catalyst.initialize(context).datastore();
    const leadsTable = dataStoreService.table("Leads");

    // await leadsTable.updateRow({
    //   ROWID: LeadID,
    //   CRMSync: false, // Set CRMSync to false if an error occurs
    // });

    context.closeWithFailure();
  }
};
