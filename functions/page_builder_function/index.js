const express = require("express");
const fileUpload = require("express-fileupload");
const fs = require("fs");
const os = require("os");
const path = require("path");
const catalyst = require("zcatalyst-sdk-node");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
// Middleware setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// Middleware setup for JSON body parsing and file upload
app.use(express.json());
app.use(fileUpload());

app.use(
  cors({
    origin: "*", // Allows all origins, this is the default setting.
    methods: ["GET", "POST"], // Specify allowed methods
    allowedHeaders: ["Content-Type", "Authorization"], // Specify allowed headers
  })
);

const folderId = "1380000001397365"; // Replace with your actual folder ID in Catalyst Filestore

// API route to upload HTML file and save metadata
app.post("/save/page", async (req, res) => {
  // console.log("I am Entered in the save page route");
  try {
    const capp = catalyst.initialize(req); // Initialize Catalyst

    // Check if file is uploaded
    if (!req.files || !req.files.file) {
      return res
        .status(400)
        .json({ success: false, message: "No file uploaded." });
    }
    console.log("Body", req.body);

    const file = req.files.file;
    const status = req.body.status; // Get status from the request body
    const pageName = req.body.name; // Get the page name from the request body
    const stepformdata = req.body.stepformdata;
    const slug = req.body.slug;
    const pageTitle = req.body.pageTitle;
    const tempDir = os.tmpdir(); // Use a temporary directory to store the file
    const tempFilePath = path.join(tempDir, file.name);

    // console.log("Status:", status);
    // console.log("Page Name:", pageName);

    // Move file to temporary path
    await file.mv(tempFilePath);

    // Upload file to Catalyst Filestore
    const filestore = capp.filestore();
    const folder = filestore.folder(folderId);
    const uploadResponse = await folder.uploadFile({
      code: fs.createReadStream(tempFilePath),
      name: file.name,
    });
    // console.log("Uploaded response:", uploadResponse);

    if (!uploadResponse || !uploadResponse.id) {
      throw new Error("Failed to upload the file.");
    }

    const fileId = uploadResponse.id; // Get the File ID
    const fileUrl = uploadResponse.file_location; // Get the File URL

    // Save file metadata in Catalyst Datastore
    const pagesTable = capp.datastore().table("Pages");
    const pageData = {
      FileID: fileId,
      Status: status, // Use the status provided by the user
      PageName: pageName || file.name, // Use provided page name or file name
      stepformdata: stepformdata,
      pageTitle: pageTitle,
      pageSlug: slug,
    };

    const pageRow = await pagesTable.insertRow(pageData);
    // console.log("Data store response:", pageRow);

    if (!pageRow || !pageRow.ROWID) {
      throw new Error("Failed to save page metadata.");
    }

    // Respond with success, including the page ID and file URL
    return res.status(200).json({
      success: true,
      message: "HTML file uploaded and metadata saved successfully",
      pageId: pageRow.ROWID,
      fileUrl,
    });
  } catch (error) {
    // console.error("Error:", error.message);
    return res.status(500).json({ success: false, message: error.message });
  }
});

// API route to retrieve an HTML file by its Page ID
app.get("/page/:pageId", async (req, res) => {
  try {
    const capp = catalyst.initialize(req);
    const pageId = req.params.pageId; // Extract page ID from the URL

    // Fetch page metadata from Catalyst Datastore
    const zcql = capp.zcql();
    const query = `SELECT * FROM Pages WHERE ROWID = '${pageId}'`;
    const queryResp = await zcql.executeZCQLQuery(query);
    // console.log("Response", queryResp);

    if (!queryResp || queryResp.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "Page not found." });
    }

    const page = queryResp[0].Pages; // Extract the page details
    const fileId = page.FileID;
    const pageName = page.PageName;

    // Fetch the file from Catalyst Filestore using the File ID
    const filestore = capp.filestore();
    const folder = filestore.folder(folderId);
    const fileObject = await folder.downloadFile(fileId);

    if (!fileObject) {
      return res
        .status(404)
        .json({ success: false, message: "File not found." });
    }

    // Respond with the HTML file content
    res.writeHead(200, {
      "Content-Type": "text/html",
      "Content-Disposition": `attachment; filename="page_${fileId}.html"`,
    });
    res.end(fileObject);
  } catch (error) {
    // console.error("Error:", error.message);
    return res.status(500).json({ success: false, message: error.message });
  }
});

// API route to update an existing page's HTML content or metadata
app.put("/update/page/:pageId", async (req, res) => {
  try {
    // console.log("Entered the update page route");
    const capp = catalyst.initialize(req);
    const pageId = req.params.pageId;
    // console.log("Page ID:", pageId);

    // Fetch existing metadata for the page
    const zcql = capp.zcql();
    const query = `SELECT * FROM Pages WHERE ROWID = '${pageId}'`;
    // console.log("Executing ZCQL query:", query);
    const queryResp = await zcql.executeZCQLQuery(query);
    // console.log("ZCQL query response:", queryResp);

    if (!queryResp || queryResp.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Page not found for update.",
      });
    }

    const page = queryResp[0].Pages;
    const fileId = page.FileID;

    if (req.files && req.files.file) {
      const file = req.files.file;
      // console.log("New file uploaded:", file.name);

      const tempDir = os.tmpdir();
      const tempFilePath = path.join(tempDir, file.name);

      // Move the file to a temporary path
      await file.mv(tempFilePath);

      // Delete the old file from Catalyst Filestore
      const filestore = capp.filestore();
      const folder = filestore.folder(folderId);
      await folder.deleteFile(fileId);

      // Upload the new file to Catalyst Filestore
      const uploadResponse = await folder.uploadFile({
        code: fs.createReadStream(tempFilePath),
        name: file.name,
      });

      if (!uploadResponse || !uploadResponse.id) {
        throw new Error("Failed to upload the new file.");
      }

      const newFileId = uploadResponse.id;

      // Update the file metadata with the new details
      const pagesTable = capp.datastore().table("Pages");
      const updatedData = {
        FileID: newFileId,
        PageName: req.body.PageName || file.name,
        ROWID: pageId,
        Status: req.body.status,
        stepformdata: req.body.stepformdata,
        formMapping: req.body.formMapping,
      };

      const updateResponse = await pagesTable.updateRow(updatedData);
      // console.log("Update response:", updateResponse);

      return res.status(200).json({
        success: true,
        message: "HTML file and metadata updated successfully",
        pageId,
      });
    } else {
      // Update only metadata if no new file is uploaded
      const pagesTable = capp.datastore().table("Pages");
      const updatedData = {
        PageName: req.body.PageName || page.PageName,
        Status: req.body.status || page.Status,
        ROWID: pageId,
        stepformdata: req.body.stepformdata,
        formMapping: req.body.formMapping,
      };

      const updateResponse = await pagesTable.updateRow(updatedData);
      // console.log("Metadata update response:", updateResponse);

      return res.status(200).json({
        success: true,
        message: "Page metadata updated successfully",
        pageId,
      });
    }
  } catch (error) {
    // console.error("Error during page update:", error.message);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// API route to delete a page and its associated file
app.delete("/delete/page/:pageId", async (req, res) => {
  try {
    const capp = catalyst.initialize(req);
    const pageId = req.params.pageId;

    // Retrieve page metadata to get the FileID before deletion
    const zcql = capp.zcql();
    const query = `SELECT * FROM Pages WHERE ROWID = '${pageId}'`;
    const queryResp = await zcql.executeZCQLQuery(query);

    if (!queryResp || queryResp.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Page not found for deletion.",
      });
    }

    const page = queryResp[0].Pages;
    const fileId = page.FileID;

    // Delete the page metadata from Catalyst Datastore
    const pagesTable = capp.datastore().table("Pages");
    await pagesTable.deleteRow(pageId);

    // Delete the file from Catalyst Filestore
    const filestore = capp.filestore();
    const folder = filestore.folder(folderId);
    await folder.deleteFile(fileId);

    // Respond with success message
    return res.status(200).json({
      success: true,
      message: "Page and associated file deleted successfully",
    });
  } catch (error) {
    // console.error("Error:", error.message);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// API route to retrieve all pages' metadata
app.get("/pages", async (req, res) => {
  try {
    const capp = catalyst.initialize(req);
    // Get user management instance
    const stratus = capp.stratus();
    const userManagement = capp.userManagement();

    // Fetch all users
    const users = await userManagement.getAllUsers(10090242015); // Replace with your actual Org ID

    // Create a map of userId to full name for easy lookup
    const userMap = users.reduce((acc, user) => {
      const fullName = `${user.first_name} ${user.last_name}`.trim();
      acc[user.user_id] = fullName;
      return acc;
    }, {});

    // Fetch all pages metadata from Catalyst Datastore
    const zcql = capp.zcql();
    const query = `SELECT * FROM Pages`;
    const queryResp = await zcql.executeZCQLQuery(query);

    // Check if any pages were found
    if (!queryResp || queryResp.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No pages found." });
    }

    // Map through the results to extract page details and replace CREATORID with the user's name
    const pages = queryResp.map((record) => {
      const page = record.Pages;
      const creatorName = userMap[page.CREATORID] || "Admin"; // Default to "Admin" if no match is found
      return {
        ...page,
        CreatedBy: creatorName, // Replace CREATORID with the corresponding user's name
      };
    });

    // Send the list of pages as a JSON response
    return res.status(200).json({
      success: true,
      data: pages,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
});

//genrating the leads via form

app.post("/submit/form", async (req, res) => {
  try {
    const capp = catalyst.initialize(req);
    const leadsTable = capp.datastore().table("Leads");

    // console.log("Request Body:", req.body);
    const leadId = req.body.leadId; // If leadId is provided, update; otherwise, insert.
    const { pageId, otpVerified } = req.body;

    console.log("Lead Body", req.body);

    // Prepare the data to be stored in the "Lead_data" field as JSON
    const leadData = {
      pageId,
      otpVerified,
      Lead_data: JSON.stringify(req.body), // Store entire body as JSON for insertion
    };

    console.log("Lead Data:", leadData);

    if (leadId) {
      const zcql = capp.zcql();
      // Fetch the lead data using ZCQL
      const zcqlQuery = `SELECT * FROM Leads WHERE ROWID = '${leadId}'`;
      const existingLead = await zcql.executeZCQLQuery(zcqlQuery);

      console.log("Existing Lead Data:", existingLead);

      if (existingLead.length > 0) {
        const existingLeadData = existingLead[0].Leads;

        console.log("Inside the loop data", existingLeadData.Lead_data);

        // Safely parse the existing "Lead_data" JSON, adding error handling for invalid data
        let existingDataJson = {};
        try {
          if (existingLeadData.Lead_data) {
            existingDataJson = JSON.parse(existingLeadData.Lead_data); // Parse existing "Lead_data" JSON
          }
        } catch (error) {
          console.error("Error parsing existing Lead_data:", error);
          existingDataJson = {}; // Fallback to empty object if parsing fails
        }

        // Merge the new data with the existing lead data, preserving important fields
        const updatedData = preserveExistingData(existingDataJson, req.body);

        // Now, we need to make sure the merged data is correctly stored as JSON
        leadData.Lead_data = JSON.stringify(updatedData);

        // Update the lead record.
        leadData.ROWID = leadId; // Add ROWID for the update operation
        await leadsTable.updateRow(leadData);

        return res.status(200).json({
          success: true,
          message: "Lead data updated successfully",
          leadId: leadId,
        });
      } else {
        return res.status(404).json({
          success: false,
          message: "Lead not found for the provided leadId.",
        });
      }
    } else {
      // If leadId is not provided, insert a new lead record with the form data as JSON.
      const newLead = await leadsTable.insertRow(leadData);
      return res.status(201).json({
        success: true,
        message: "Lead data inserted successfully",
        leadId: newLead.ROWID,
      });
    }
  } catch (error) {
    console.error("Error handling form submission:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while processing the form submission.",
      error: error.message,
    });
  }
});

// Helper function for merging existing data with new data
function preserveExistingData(existingData, newData) {
  // console.log("Raw existing data coming", existingData);
  const mergedData = { ...existingData }; // Start by copying the existing data

  // console.log("Existing data which is stored in the array", mergedData);

  for (const key in newData) {
    if (newData.hasOwnProperty(key)) {
      if (!(key in existingData)) {
        // console.log(`Adding new field: ${key} with value: ${newData[key]}`);
        mergedData[key] = newData[key]; // Add new field to merged data
      } else {
        // If the field exists, update it with the new value from newData

        mergedData[key] = newData[key]; // Update value with new data
      }
    }
  }

  return mergedData;
}

app.all("/pincode/:id?", async (req, res) => {
  const { id } = req.params;
  const entity = "Pincodes";
  const capp = catalyst.initialize(req);
  const zcql = capp.zcql();
  const table = capp.datastore().table(entity); // Assumes entity matches the table name

  try {
    switch (req.method) {
      case "GET":
        if (id) {
          // Fetch a specific record by ID
          const query = `SELECT * FROM ${entity} WHERE pincode = '${id}'`;
          const queryResp = await zcql.executeZCQLQuery(query);

          if (!queryResp || queryResp.length === 0) {
            return res.status(404).json({
              success: false,
              message: `${entity} with ID ${id} not found.`,
            });
          }

          return res
            .status(200)
            .json({ success: true, data: queryResp[0][entity] });
        } else {
          const nextToken = req.query.token || null;

          // console.log("Fetching data with nextToken:", nextToken);

          try {
            // Fetch paginated data from the table
            const paginatedRows = await table.getPagedRows({
              nextToken: nextToken,
              maxRows: 100,
            });

            if (!paginatedRows.data || paginatedRows.data.length === 0) {
              return res.status(404).json({
                success: false,
                message: `No records found for ${entity}.`,
              });
            }

            // Send data and next token to the frontend
            return res.status(200).json({
              success: true,
              data: paginatedRows.data,
              pagination: {
                more_records: paginatedRows.more_records,
                next_token: paginatedRows.next_token,
              },
            });
          } catch (error) {
            console.error("Error fetching paginated data:", error.message);
            return res.status(500).json({
              success: false,
              message: "Error fetching paginated data.",
              error: error.message,
            });
          }
        }

      case "POST":
        if (Array.isArray(req.body)) {
          // Bulk insert
          const rows = await table.insertRows(req.body);
          return res.status(201).json({
            success: true,
            message: `${entity} records created successfully.`,
            data: rows,
          });
        } else {
          // Single insert
          const row = await table.insertRow(req.body);
          return res.status(201).json({
            success: true,
            message: `${entity} record created successfully.`,
            data: row,
          });
        }

      case "PUT":
        if (!id) {
          return res.status(400).json({
            success: false,
            message: `ID is required for updating a ${entity} record.`,
          });
        }

        const updateData = req.body;
        updateData.ROWID = id;

        const updatedRow = await table.updateRow(updateData);
        return res.status(200).json({
          success: true,
          message: `${entity} record updated successfully.`,
          data: updatedRow,
        });

      case "DELETE":
        if (!id) {
          // Multi-delete support
          if (req.body && Array.isArray(req.body.rowIds)) {
            const rowIds = req.body.rowIds;
            const deleteResponse = await table.deleteRows(rowIds);

            return res.status(200).json({
              success: true,
              message: `${rowIds.length} ${entity} records deleted successfully.`,
              data: deleteResponse,
            });
          } else {
            return res.status(400).json({
              success: false,
              message: `ID or array of row IDs is required for deleting ${entity} record(s).`,
            });
          }
        } else {
          // Single delete by ID
          await table.deleteRow(id);
          return res.status(200).json({
            success: true,
            message: `${entity} record with ID ${id} deleted successfully.`,
          });
        }

      default:
        return res.status(405).json({
          success: false,
          message: `Method ${req.method} not allowed for this route.`,
        });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Error processing request for ${entity}.`,
      error: error.message,
    });
  }
});

// API route to retrieve all pages' metadata
app.get("/metadata/:pageId", async (req, res) => {
  try {
    const capp = catalyst.initialize(req);
    const pageId = req.params.pageId;

    // Fetch all pages metadata from Catalyst Datastore
    const zcql = capp.zcql();
    const query = `SELECT * FROM Pages WHERE ROWID = ${pageId}`;
    const queryResp = await zcql.executeZCQLQuery(query);

    // Check if any pages were found
    if (!queryResp || queryResp.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No pages found." });
    }

    // Extract page details without wrapping in an additional object
    const pages = queryResp.map((record) => record.Pages);

    // Send the list of pages as a JSON response
    return res.status(200).json({
      success: true,
      data: pages,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
});

// Dynamic CRUD route for Leads
app.all("/leads/:id?", async (req, res) => {
  const { id } = req.params;
  const entity = "Leads";
  const capp = catalyst.initialize(req);
  const zcql = capp.zcql();
  const table = capp.datastore().table(entity);

  try {
    switch (req.method) {
      case "GET":
        if (id) {
          // Fetch a specific lead by ID
          const query = `SELECT * FROM ${entity} WHERE ROWID = '${id}'`;
          const queryResp = await zcql.executeZCQLQuery(query);

          if (!queryResp || queryResp.length === 0) {
            return res.status(404).json({
              success: false,
              message: `${entity} with ID ${id} not found.`,
            });
          }

          return res
            .status(200)
            .json({ success: true, data: queryResp[0][entity] });
        } else {
          const nextToken = req.query.token || null;
          try {
            // Fetch paginated data from the table
            const paginatedRows = await table.getPagedRows({
              nextToken: nextToken,
              maxRows: 100,
            });

            if (!paginatedRows.data || paginatedRows.data.length === 0) {
              return res.status(200).json({
                success: false,
                message: `No records found for ${entity}.`,
              });
            }

            // Send data and next token to the frontend
            return res.status(200).json({
              success: true,
              data: paginatedRows.data,
              pagination: {
                more_records: paginatedRows.more_records,
                next_token: paginatedRows.next_token,
              },
            });
          } catch (error) {
            console.error("Error fetching paginated data:", error.message);
            return res.status(500).json({
              success: false,
              message: "Error fetching paginated data.",
              error: error.message,
            });
          }
        }
      case "POST":
        if (Array.isArray(req.body)) {
          // Bulk insert for leads
          const rows = await table.insertRows(req.body);
          return res.status(201).json({
            success: true,
            message: `${entity} records created successfully.`,
            data: rows,
          });
        } else {
          // Single insert for a lead
          const row = await table.insertRow(req.body);
          return res.status(201).json({
            success: true,
            message: `${entity} record created successfully.`,
            data: row,
          });
        }

      case "PUT":
        if (!id) {
          return res.status(400).json({
            success: false,
            message: `ID is required for updating a ${entity} record.`,
          });
        }

        const updateData = req.body;
        updateData.ROWID = id;

        const updatedRow = await table.updateRow(updateData);
        return res.status(200).json({
          success: true,
          message: `${entity} record updated successfully.`,
          data: updatedRow,
        });

      case "DELETE":
        if (!id) {
          // Check if body contains array of IDs for bulk delete
          if (req.body && Array.isArray(req.body.rowIds)) {
            const rowIds = req.body.rowIds;
            const rowPromise = table.deleteRows(rowIds);
            const deleteResult = await rowPromise;

            return res.status(200).json({
              success: true,
              message: `${rowIds.length} ${entity} records deleted successfully.`,
              data: deleteResult,
            });
          } else {
            return res.status(400).json({
              success: false,
              message: `ID or array of row IDs is required for deleting ${entity} record(s).`,
            });
          }
        } else {
          // Single delete by ID
          await table.deleteRow(id);
          return res.status(200).json({
            success: true,
            message: `${entity} record with ID ${id} deleted successfully.`,
          });
        }

      default:
        return res.status(405).json({
          success: false,
          message: `Method ${req.method} not allowed for this route.`,
        });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Error processing request for ${entity}.`,
      error: error.message,
    });
  }
});

//Cloning the existing page//clonig the page
//clonig the page
app.post("/clone/page/:id", async (req, res) => {
  try {
    const capp = catalyst.initialize(req);
    const pageId = req.params.id;
    const { pageName, status } = req.body;

    if (!pageId) {
      return res
        .status(400)
        .json({ success: false, message: "Page ID is required for cloning." });
    }

    const zcql = capp.zcql();
    const query = `SELECT * FROM Pages WHERE ROWID = '${pageId}'`;
    const queryResp = await zcql.executeZCQLQuery(query);

    if (!queryResp || queryResp.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "Page not found." });
    }

    const page = queryResp[0].Pages;
    const fileId = page.FileID;
    const originalPageName = page.PageName;
    const newPageName = pageName || `${originalPageName} clone`.slice(0, 255);
    const newStatus = status || page.Status;
    const newStepFormData = page.stepformdata;
    const newSlug = `${page.pageSlug}_clone`;
    const newPageTitle = page.pageTitle;

    const filestore = capp.filestore();
    const folder = filestore.folder(folderId);
    const fileObject = await folder.downloadFile(fileId);

    if (!fileObject) {
      return res
        .status(404)
        .json({ success: false, message: "File not found." });
    }

    const tempDir = os.tmpdir();
    const tempFilePath = path.join(tempDir, `${newPageName}.html`);
    fs.writeFileSync(tempFilePath, fileObject);

    const uploadResponse = await folder.uploadFile({
      code: fs.createReadStream(tempFilePath),
      name: `${newPageName}.html`,
    });

    if (!uploadResponse || !uploadResponse.id) {
      throw new Error("Failed to upload the cloned file.");
    }

    const clonedFileId = uploadResponse.id;

    const pagesTable = capp.datastore().table("Pages");
    const clonedPageData = {
      FileID: clonedFileId,
      Status: newStatus,
      PageName: newPageName,
      stepformdata: newStepFormData,
      isClone: true,
      pageSlug:newSlug,
      pageTitle:newPageTitle
    };

    const clonedPageRow = await pagesTable.insertRow(clonedPageData);

    if (!clonedPageRow || !clonedPageRow.ROWID) {
      throw new Error("Failed to save the cloned page metadata.");
    }

    return res.status(200).json({
      success: true,
      message: "Page cloned and metadata saved successfully.",
      pageId: clonedPageRow.ROWID,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: error.message });
  }
});
app.get("/slug/:slug", async (req, res) => {
  try {
    const capp = catalyst.initialize(req);
    const slug = req.params.slug; // Extract page ID from the URL
    // console.log("Slug for the page",slug);

    // Fetch page metadata from Catalyst Datastore
    const zcql = capp.zcql();
    const query = `SELECT * FROM Pages WHERE pageSlug = '${slug}'`;
    const queryResp = await zcql.executeZCQLQuery(query);
    // console.log("Response", queryResp);

    if (!queryResp || queryResp.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "Page not found." });
    }

    const page = queryResp[0].Pages; // Extract the page details
    const fileId = page.FileID;
    const pageName = page.PageName;

    // Fetch the file from Catalyst Filestore using the File ID
    const filestore = capp.filestore();
    const folder = filestore.folder(folderId);
    const fileObject = await folder.downloadFile(fileId);

    if (!fileObject) {
      return res
        .status(404)
        .json({ success: false, message: "File not found." });
    }

    // Respond with the HTML file content
    res.writeHead(200, {
      "Content-Type": "text/html",
      "Content-Disposition": `attachment; filename="page_${fileId}.html"`,
    });
    res.end(fileObject);
  } catch (error) {
    // console.error("Error:", error.message);
    return res.status(500).json({ success: false, message: error.message });
  }
});

// GET /api/verify-slug?slug=loan-demo
app.get("/verify-slug", async (req, res) => {
  try {
    const { slug } = req.query;
    if (!slug) {
      return res.status(400).json({ error: "Missing slug parameter" });
    }
    const catalystApp = catalyst.initialize(req);
    const searchService = catalystApp.search();
    const config = {
      search: `${slug}`,
      search_table_columns: {
        Pages: ["pageSlug"], // adjust this to your actual table name & column
      },
    };
    const response = await searchService.executeSearchQuery(config);
    // Exact match check
    const hasExactMatch = Object.values(response).some(
      (records) =>
        Array.isArray(records) &&
        records.some((record) => record.pageSlug === slug)
    );
    res.json({ isUnique: !hasExactMatch });
  } catch (err) {
    console.error("Slug verification error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// API route to retrieve all pages' metadata using slug
app.get("/metadata/slug/:slug", async (req, res) => {
  try {
    const capp = catalyst.initialize(req);
    const slug = req.params.slug;

    // Fetch all pages metadata from Catalyst Datastore
    const zcql = capp.zcql();
    const query = `SELECT * FROM Pages WHERE pageSlug = '${slug}'`;
    const queryResp = await zcql.executeZCQLQuery(query);
    // console.log("response",queryResp)

    // Check if any pages were found
    if (!queryResp || queryResp.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No pages found." });
    }

    // Extract page details without wrapping in an additional object
    const pages = queryResp.map((record) => record.Pages);

    // Send the list of pages as a JSON response
    return res.status(200).json({
      success: true,
      data: pages,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
});

app.get("/dashboard-analytics", async (req, res) => {
  const catalystApp = catalyst.initialize(req);
  const zcql = catalystApp.zcql();

  try {
    // ZCQL queries
    const totalLeadsQuery = "SELECT COUNT(ROWID) FROM Leads";
    const unsyncedLeadsQuery =
      "SELECT COUNT(ROWID) FROM Leads WHERE CRMSync IS NULL";

    const totalPagesQuery = "SELECT COUNT(ROWID) FROM Pages";
    const draftedPagesQuery =
      "SELECT COUNT(ROWID) FROM Pages WHERE Status = 'Draft'";
    const deletedPagesQuery =
      "SELECT COUNT(ROWID) FROM Pages WHERE Status = 'Deleted'";
    const publishedQuery =
      "SELECT COUNT(ROWID) FROM Pages WHERE Status = 'Published'";

    // Execute all queries in parallel
    const [
      totalLeads,
      unsyncedLeads,
      totalPages,
      draftedPages,
      deletedPages,
      publishedPages,
    ] = await Promise.all([
      zcql.executeZCQLQuery(totalLeadsQuery),
      zcql.executeZCQLQuery(unsyncedLeadsQuery),
      zcql.executeZCQLQuery(totalPagesQuery),
      zcql.executeZCQLQuery(draftedPagesQuery),
      zcql.executeZCQLQuery(deletedPagesQuery),
      zcql.executeZCQLQuery(publishedQuery),
    ]);

    // Cleaned-up response
    res.status(200).json({
      leads: {
        total: parseInt(totalLeads[0].Leads["COUNT(ROWID)"], 10),
        unsynced: parseInt(unsyncedLeads[0].Leads["COUNT(ROWID)"], 10),
      },
      pages: {
        total: parseInt(totalPages[0].Pages["COUNT(ROWID)"], 10),
        drafted: parseInt(draftedPages[0].Pages["COUNT(ROWID)"], 10),
        deleted: parseInt(deletedPages[0].Pages["COUNT(ROWID)"], 10),
        published: parseInt(publishedPages[0].Pages["COUNT(ROWID)"], 10),
      },
    });
  } catch (error) {
    console.error("Error fetching dashboard analytics:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// startus and media routes
app.post("/api/media", async (req, res) => {
  // const file = req.files.file;

  const file = req.files.file;


  if (!file) {
    return res.status(400).json({ msg: "No file uploaded" });
  }

  try {
    const capp = catalyst.initialize(req);
    const stratus = capp.stratus();
    const bucket = stratus.bucket("cms-files");
    
    const timestamp = Date.now();
    const uniqueFileName = `${timestamp}_filename${file.name}`;
    const uploadPath = "media/" + `${uniqueFileName}`;
    const tempFilePath = path.join(os.tmpdir(), uniqueFileName);
    await file.mv(tempFilePath);

    await bucket.putObject(uploadPath, fs.createReadStream(tempFilePath));

    const objectIns = bucket.object(uploadPath);
    const objectRes = await objectIns.getDetails();
    console.log(
      `File ${uniqueFileName} uploaded to Catalyst Stratus.`,
      objectRes
    );

    const fileUrl = objectRes.object_url;
    const fileName = file.name;
    const table = capp.datastore().table("Media");
    const response = await table.insertRow({
      File_Name: fileName,
      File_Url: fileUrl,
    });

    res.status(200).json({
      msg: "Response Generated Successfully",
      data: response,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Error uploading file", error: err.message });
  }
});

app.get("/api/media", async (req, res) => {
  const capp = catalyst.initialize(req);
  const table = capp.datastore().table("Media");
  const response = await table.getAllRows();
  
  res.status(200).json({
    msg: "Response Generated Successfully",
    data: response,
  });
});
app.delete("/api/media/:id", async (req, res) => {
  const id = req.params.id;
   
  if (!id) {
  return res.status(400).json({ msg: "No id provided" });
  }
   
  try {
  const capp = catalyst.initialize(req);
  const table = capp.datastore().table("Media");
  const response = await table.deleteRow(id);
  res.status(200).json({
  msg: "Response Generated Successfully",
  data: response,
  });
  } catch (err) {
  console.error(err);
  res.status(500).json({ msg: "Error deleting file", error: err.message });
  }
  });



  //cloning the page via slug

  // app.post("/clone/page-by-slug/:slug", async (req, res) => {
  //   try {
  //     const capp = catalyst.initialize(req);
  //     const slug = req.params.slug;
  //     const { pageName, status } = req.body;
  
  //     if (!slug) {
  //       return res
  //         .status(400)
  //         .json({ success: false, message: "Slug is required for cloning." });
  //     }
  
  //     const zcql = capp.zcql();
  //     const query = `SELECT * FROM Pages WHERE Slug = '${slug}'`;
  //     const queryResp = await zcql.executeZCQLQuery(query);
  
  //     if (!queryResp || queryResp.length === 0) {
  //       return res
  //         .status(404)
  //         .json({ success: false, message: "Page not found." });
  //     }
  
  //     const page = queryResp[0].Pages;
  //     const fileId = page.FileID;
  //     const originalPageName = page.PageName;
  //     const newPageName = pageName || `${originalPageName} clone`.slice(0, 255);
  //     const newStatus = status || page.Status;
  //     const newStepFormData = page.stepformdata;
  
  //     const filestore = capp.filestore();
  //     const folder = filestore.folder(folderId); // Ensure folderId is defined in your scope
  //     const fileObject = await folder.downloadFile(fileId);
  
  //     if (!fileObject) {
  //       return res
  //         .status(404)
  //         .json({ success: false, message: "File not found." });
  //     }
  
  //     const tempDir = os.tmpdir();
  //     const tempFilePath = path.join(tempDir, `${newPageName}.html`);
  //     fs.writeFileSync(tempFilePath, fileObject);
  
  //     const uploadResponse = await folder.uploadFile({
  //       code: fs.createReadStream(tempFilePath),
  //       name: `${newPageName}.html`,
  //     });
  
  //     if (!uploadResponse || !uploadResponse.id) {
  //       throw new Error("Failed to upload the cloned file.");
  //     }
  
  //     const clonedFileId = uploadResponse.id;
  
  //     const pagesTable = capp.datastore().table("Pages");
  //     const clonedPageData = {
  //       FileID: clonedFileId,
  //       Status: newStatus,
  //       PageName: newPageName,
  //       stepformdata: newStepFormData,
  //       isClone: true,
  //     };
  
  //     const clonedPageRow = await pagesTable.insertRow(clonedPageData);
  
  //     if (!clonedPageRow || !clonedPageRow.ROWID) {
  //       throw new Error("Failed to save the cloned page metadata.");
  //     }
  
  //     return res.status(200).json({
  //       success: true,
  //       message: "Page cloned via slug and metadata saved successfully.",
  //       pageId: clonedPageRow.ROWID,
  //     });
  //   } catch (error) {
  //     console.error(error);
  //     return res.status(500).json({ success: false, message: error.message });
  //   }
  // });
  


//Increase the visit count and track the page

// /view-count PUT route using Zoho Catalyst
app.put("/view-count", async (req, res) => {
  try {
    console.log("Entered");

    const catalystApp = catalyst.initialize(req);
    const datastore = catalystApp.datastore();
    const pageTable = datastore.table("Pages");
    const zcql = catalystApp.zcql();

    const slug = req.query.slug;
    if (!slug) {
      return res.status(400).json({ error: "Missing slug parameter" });
    }

    const query = `SELECT View_Count, ROWID FROM Pages WHERE pageSlug = '${slug}'`;
    const results = await zcql.executeZCQLQuery(query);

    if (!results || results.length === 0 || !results[0].Pages) {
      return res.status(404).json({ message: "No Data Found" });
    }

    const pageRow = results[0].Pages;

    // Safely cast View_Count to number
    const currentCount = parseInt(pageRow.View_Count, 10);
    const safeCount = isNaN(currentCount) ? 0 : currentCount;

    const updatedData = {
      ROWID: pageRow.ROWID,
      View_Count: safeCount + 1,
    };

    const updatedRow = await pageTable.updateRow(updatedData);

    return res.status(200).json({
      success: true,
      message: "View count updated successfully.",
      data: updatedRow,
    });

  } catch (err) {
    console.error("Failed to update view count:", err);
    res.status(500).json({ error: "Server error" });
  }
});



module.exports = app;
