import React, { useState } from "react";
import { Select, Button, notification } from "antd";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import axios from "axios";
import { useNavigate } from "react-router";

const MetadataViewer = ({
  metadata,
  apiFields,
  layoutId,
  pageId,
  layoutName,
  onClose,
  onSubmit,
  fetchPages,
}) => {
  const [fieldMappings, setFieldMappings] = useState({});
  const [loading, setLoading] = useState(false);

  //const navigate = useNavigate();

  // console.log("Meta Data = ",metadata)

  const handleMappingChange = (metadataFieldName, apiFieldName) => {
    setFieldMappings((prevMappings) => {
      // Remove the previous mapping if it exists
      const updatedMappings = { ...prevMappings };

      // Find and remove the old key assigned to this metadataFieldName
      Object.keys(updatedMappings).forEach((key) => {
        if (updatedMappings[key] === metadataFieldName) {
          delete updatedMappings[key];
        }
      });

      // Add the new mapping
      updatedMappings[apiFieldName] = metadataFieldName;

      return updatedMappings;
    });
  };

  const handleSubmit = async () => {
    // Check if all rows in the "Map to API Field" column have a selected value
    const unmappedFields = filteredMetadata.filter(
      (row) => !Object.values(fieldMappings).includes(row.name)
    );

    // Print all row names for debugging
    // console.log("All row names:", filteredMetadata.map(row => row.name));

    // Find mandatory fields that are not mapped
    const unmappedMandatoryFields = apiFields
      .filter(
        (apiField) =>
          apiField.is_mandatory && apiField.api_name !== "Lead_Source"
      )
      .filter(
        (apiField) => !Object.keys(fieldMappings).includes(apiField.api_name)
      );

    // If both unmapped fields & mandatory fields exist, show both in error
    if (unmappedFields.length > 0 || unmappedMandatoryFields.length > 0) {
      let errorMessage = "";

      if (unmappedFields.length > 0) {
        errorMessage += `Please Map All The Below Mandatory Fields Before Submitting.<br/><ul style="padding-left: 20px;">`;
      }

      if (unmappedMandatoryFields.length > 0) {
        errorMessage += unmappedMandatoryFields
          .map(
            (field, index) =>
              `<li><span style="color: #e74c3c; font-weight: bold;">${
                index + 1
              }.</span> ${field.label}</li>`
          )
          .join("");
      }

      errorMessage += `</ul>`; // Close the list

      notification.error({
        message: "Field Mapping Required",
        description: <div dangerouslySetInnerHTML={{ __html: errorMessage }} />,
      });

      return;
    }

    // Add static key-value pairs to the final mapping
    const staticKeyValuePairs = {
      Utm_Campaign: "utm_campaign",
      Utm_Medium: "utm_medium",
      Utm_Term: "utm_term",
      Utm_Content: "utm_content",
      Utm_Source: "utm_source",
      Landing_Page_Name:"Landing_Page_Name",
    };

    const finalMapping = { ...fieldMappings, ...staticKeyValuePairs, layoutId };
    // console.log(
    //   "Final Mapping with Static Key-Value Pairs: ",
    //   JSON.stringify(finalMapping)
    // );

    try {
      console.log("Final Mapping = ", JSON.stringify(finalMapping));
      setLoading(true);
      const response = await axios.put(
        `/server/page_builder_function/update/page/${pageId}`,
        {
          formMapping: JSON.stringify(finalMapping),
        }
      );
      notification.success({
        message: "Success",
        description: "Form Mapping Saved successfully.",
      });
      //  fetchPages();
      onSubmit(finalMapping);
    } catch (error) {
      notification.error({
        message: "Error",
        description:
          error.response?.data?.message || "Failed to update metadata.",
      });
    } finally {
      setLoading(false);
    }
  };

  // Exclude static fields from metadata
  // Exclude static fields and fields of type "captcha" from metadata
  const filteredMetadata = metadata.filter(
    (row) =>
      !["Utm_Campaign", "Utm_Medium", "Utm_Term", "Utm_Content"].includes(
        row.name
      ) && row.type !== "captcha" // Exclude fields of type "captcha"
  );

  const mappingTemplate = (rowData) => {
    return (
      <Select
        placeholder="Select API Field"
        style={{ width: "100%" }}
        onChange={(value) => handleMappingChange(rowData.name, value)} // Set field name instead of label
        showSearch // Enable search functionality
        filterOption={(input, option) => {
          // Safely get the text content of the option
          const optionText = option.children?.toString()?.toLowerCase();
          return optionText?.includes(input.toLowerCase());
        }}
      >
        {apiFields
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
          .map((apiField) => (
            <Select.Option
              key={apiField.api_name}
              value={apiField.api_name}
              style={apiField.is_mandatory ? { color: "red" } : {}}
            >
              {apiField.label} {/* Display the field name instead of label */}
              {apiField.is_mandatory && (
                <span style={{ color: "red", marginLeft: "5px" }}>*</span>
              )}
            </Select.Option>
          ))}
      </Select>
    );
  };

  return (
    <div>
      {/* Layout Name and Module headings next to each other */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          marginBottom: "20px",
        }}
      >
        <h2 style={{ marginRight: "20px", marginTop:"20px"}}>
          Layout: {layoutName}, Module: Leads
        </h2>
      </div>
      <div
        style={{
          flex: 1,
          overflow: "auto",
          maxHeight: "60vh",
          paddingBottom: "20px",
        }}
      >
        <DataTable
          value={filteredMetadata}
          //  paginator
          //  rows={5}
          responsiveLayout="scroll"
        >
          <Column field="name" header="Field Name"></Column>
          <Column field="type" header="Field Type"></Column>
          <Column field="step" header="Step"></Column>
          <Column header="Map to API Field" body={mappingTemplate}></Column>
        </DataTable>
      </div>
      <div style={{ marginTop: "20px" }}>
        <Button onClick={onClose}>Back</Button>
        <Button
          type="primary"
          style={{ marginLeft: "50px" }}
          onClick={handleSubmit}
          loading={loading}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default MetadataViewer;
