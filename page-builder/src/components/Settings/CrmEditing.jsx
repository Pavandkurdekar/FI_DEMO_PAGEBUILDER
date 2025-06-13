import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios for API requests
import { Modal, Button, notification, Select } from "antd";
import { PropagateLoader } from "react-spinners";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const CrmEditing = ({ mappedData, layoutId, onClose, pageid, fetchpages }) => {
  // console.log("Mapped Data = ", mappedData);

  const [crmFields, setCrmFields] = useState([]); // State to store CRM fields data
  const [crmData, setCrmData] = useState([]); // State to store the formatted CRM data
  const [selectedMappings, setSelectedMappings] = useState({}); // State to store selected mappings (CRM fields)
  const [mandatoryFields, setMandatoryFields] = useState([]); // State to store mandatory CRM field API names
  const [isDataChanged, setIsDataChanged] = useState(false); // State to track if the data has been changed by the user
  const [isLoading, setIsLoading] = useState(true); // State to track loading
  const [visible, setVisible] = useState(false); // State to control visibility of save confirmation modal
  const [isSaving, setIsSaving] = useState(false); // State to track saving state
  const [actualdataBeforeSaving, SetactualDataBeforeSaving] = useState([]); // State to

  // Define fields to be filtered out
  const filterOutFields = [
    "Utm_Campaign",
    "Utm_Medium",
    "Utm_Term",
    "Utm_Content",
    "Utm_Source",
    "layoutId",
    "Landing_Page_Name",
  ];

  // Fetch CRM fields using axios as soon as the component renders
  useEffect(() => {
    const fetchCrmFields = async () => {
      try {
        const response = await axios.get(
          `/server/verification/crm/meta/fields?layoutId=${layoutId}`
        );
        // console.log("Fetched CRM Fields:", response.data.fields);
        setCrmFields(response.data.fields); // Assuming response.data is an array

        // Filter mandatory fields and store their API names
        const mandatoryFieldApis = response.data.fields
          .filter((field) => field.is_mandatory)
          .map((field) => field.api_name);

        setMandatoryFields(mandatoryFieldApis);

        // Print the mandatory fields array to console
        //console.log("Mandatory Fields Array:", mandatoryFieldApis);
      } catch (error) {
        console.error("Error fetching CRM fields:", error);
        setCrmFields([]); // In case of error, set crmFields to empty array
      } finally {
        setIsLoading(false); // Hide loader after data is fetched
      }
    };

    if (layoutId) {
      fetchCrmFields();
    }
  }, [layoutId]);

  // Prepare the CRM data for table rendering
  useEffect(() => {
    if (mappedData && Object.keys(mappedData).length > 0) {
      //console.log("mappedData:", mappedData);

      // Filter out the unwanted fields
      const filteredMappedData = { ...mappedData };
      filterOutFields.forEach((field) => {
        delete filteredMappedData[field];
      });

      //console.log("Filtered Mapped Data:", filteredMappedData);

      const preparedData = Object.entries(filteredMappedData).map(
        ([key, value]) => {
          const crmField = crmFields.find((field) => field.api_name === key);
          return {
            formFieldValue: value,
            crmFieldKey: key,
            crmFieldLabel: crmField ? crmField.label : key,
          };
        }
      );

      //   console.log("Prepared CRM Data:", preparedData);
      setCrmData(preparedData);
    } else {
      //console.log("No mappedData available.");
    }
  }, [mappedData, crmFields]);

  // Handle changes in the CRM Mapping dropdown
  const handleMappingChange = (value, crmFieldKey, rowData) => {
    //  console.log("CRM Data Before = ", crmData);
    //  console.log("Whole rowdata = ", rowData.formFieldValue);
    // console.log("Value = ", value + " Key = " + crmFieldKey);

    setSelectedMappings((prevMappings) => ({
      ...prevMappings,
      [crmFieldKey]: value,
    }));

    // Ensure the latest state is used by passing a function to setCrmData
    setCrmData((prevCrmData) => {
      const updatedCrmData = prevCrmData.map((item) => {
        // Update only if both crmFieldKey and formFieldValue match
        if (
          item.crmFieldKey === crmFieldKey &&
          item.formFieldValue === rowData.formFieldValue
        ) {
          //    console.log(`Updating ${item.crmFieldKey} with value ${value}`);
          return { ...item, crmFieldKey: value, crmFieldLabel: "" }; // Update key & clear label
        }
        return item;
      });

      //  console.log("Updated CRM Data:", updatedCrmData);
      return updatedCrmData;
    });

    //  console.log("Updated CRM Data 2:", crmData);
    setIsDataChanged(true); // Mark the data as changed
  };

  // Handle save button click
  const handleSave = () => {
    //   console.log("Full Data to Save:", crmData);
    //   console.log("Mandatory Fields = ", mandatoryFields);

    // Check if all mandatory fields are present in crmData
    const crmFieldKeys = crmData.map((item) => item.crmFieldKey);

    const missingMandatoryFields = mandatoryFields
      .filter((field) => field !== "Lead_Source")
      .filter((field) => !crmFieldKeys.includes(field)) // Find missing fields
      .map((fieldApiName) => {
        const matchedField = crmFields.find((f) => f.api_name === fieldApiName);
        return matchedField ? matchedField.label : fieldApiName; // ✅ Show label instead of API name
      });

    if (missingMandatoryFields.length > 0) {
      let errorMessage = `<ul style="padding-left: 20px;">`;

      errorMessage += missingMandatoryFields
        .map(
          (field, index) =>
            `<li><span style="color: #e74c3c; font-weight: bold;">${
              index + 1
            }.</span> ${field}</li>`
        )
        .join("");

      errorMessage += `</ul>`; // Close the list

      notification.warning({
        message: "Mandatory Fields Missing",
        description: <div dangerouslySetInnerHTML={{ __html: errorMessage }} />,
        duration: 3,
      });

      return;
    }

    // Proceed with reducing the crmData to prepare data for saving if all mandatory fields are present
    // const Databeforesaving = crmData.reduce((acc, row) => {
    //   // Only include fields for saving that are in the crmData
    //   const selectedCrmField = selectedMappings[row.crmFieldKey] || row.crmFieldKey;
    //   acc[selectedCrmField] = row.formFieldValue;
    //   return acc;
    // }, {});

    // // Log the prepared data after transforming it
    // console.log("Data to Save:", Databeforesaving);

    // Show confirmation modal before saving
    setVisible(true);
  };

  const confirmSave = () => {
    // console.log("Full Data to Save:", crmData);
    setIsSaving(true); // Show the loader while saving

    // const  = crmData.reduce((acc, row) => {
    //   // Use CRM API names for saving the data
    //   const selectedCrmField = selectedMappings[row.crmFieldKey] || row.crmFieldKey;
    //   acc[selectedCrmField] = row.formFieldValue;
    //   return acc;
    // }, {});

    const finalData = crmData.reduce((acc, row) => {
      // Directly use crmFieldKey as the key and formFieldValue as the value
      acc[row.crmFieldKey] = row.formFieldValue;
      return acc;
    }, {});

    //   console.log("Final Data to Save (before adding back filtered fields):", finalData);

    // Add back the filtered out fields
    filterOutFields.forEach((field) => {
      if (mappedData[field]) {
        finalData[field] = mappedData[field];
        //console.log(`Added back field: ${field} with value:`, mappedData[field]);
      }
    });

    //console.log("Final Data to Save (after adding back filtered fields):", finalData);

    // Convert finalData to text format (JSON string)
    const textFormatData = JSON.stringify(finalData);
    console.log("Converted To String= ", textFormatData);

    // Send the final data using API
    axios
      .put(`/server/page_builder_function/update/page/${pageid}`, {
        formMapping: textFormatData, // Send the data as a string in the body
      })
      .then((response) => {
        //console.log("Update Response:", response.data);
        notification.success({
          message: "Mapping saved successfully!",
          duration: 3,
        });
        fetchpages();
        setIsSaving(false); // Hide the loader
        setVisible(false); // Close confirmation modal
        onClose(); // Close the parent component modal as well
      })
      .catch((error) => {
        console.error("Error saving the changes:", error);
        notification.error({
          message: "Failed to save the changes.",
          duration: 3,
        });
        setIsSaving(false); // Hide the loader in case of error
      });
  };

  const cancelSave = () => {
    setVisible(false); // Close confirmation modal
  };

  return (
    <Modal
      visible={true}
      title="Remap Crm Fields "
      onCancel={onClose}
      footer={[
        <Button key="back" onClick={onClose}>
          Close
        </Button>,
        isDataChanged && !isSaving ? (
          <Button key="submit" type="primary" onClick={handleSave}>
            Save Changes
          </Button>
        ) : null,
      ]}
      width={800}
    >
      {isLoading ? (
        <div style={{ textAlign: "center" }}>
          <PropagateLoader color="#3169be" size={15} />
        </div>
      ) : (
        <DataTable
          value={crmData}
          paginator
          rows={10}
          responsiveLayout="scroll"
        >
          <Column field="formFieldValue" header="Form Fields" />
          <Column
            field="crmFieldLabel"
            header="CRM Fields"
            body={(rowData) => (
              <Select
                defaultValue={rowData.crmFieldLabel}
                style={{ width: 200 }}
                onChange={(value) =>
                  handleMappingChange(value, rowData.crmFieldKey, rowData)
                }
                showSearch // Enable search functionality
                filterOption={(input, option) => {
                  // Extract text content from option.children and compare with input
                  const optionText = React.Children.toArray(option.children)
                    .map((child) =>
                      typeof child === "string" ? child : child.props.children
                    ) // Get text from JSX
                    .join("")
                    .toLowerCase();

                  return optionText.includes(input.toLowerCase()); // Case-insensitive search
                }}
              >
                {Array.isArray(crmFields) &&
                  crmFields
                    .filter(
                      (field) =>
                        ![
                          "Lead_Source",
                          "Utm_Campaign",
                          "Utm_Medium",
                          "Utm_Term",
                          "Utm_Content",
                          "Utm_Source",
                        ].includes(field.api_name)
                    )
                    .map((field) => (
                      <Select.Option
                        key={field.api_name}
                        value={field.api_name}
                      >
                        {field.is_mandatory ? (
                          <span style={{ color: "red" }}>{field.label} *</span>
                        ) : (
                          field.label
                        )}
                      </Select.Option>
                    ))}
              </Select>
            )}
          />
        </DataTable>
      )}

      <Modal
        visible={visible}
        title="Save Changes"
        onCancel={cancelSave}
        footer={[
          <Button key="back" onClick={cancelSave}>
            Cancel
          </Button>,
          <Button
            key="submit"
            type="primary"
            onClick={confirmSave}
            loading={isSaving}
          >
            Confirm
          </Button>,
        ]}
      >
        <p>Are you sure you want to save the changes?</p>
      </Modal>
    </Modal>
  );
};

export default CrmEditing;
