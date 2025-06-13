import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { PropagateLoader } from "react-spinners";
import { toast } from "react-toastify";
import { Button } from "antd";
import CrmEditing from "./CrmEditing"; // Import the CrmEditing component
import { Modal } from "antd";
import { IoIosCloseCircleOutline } from "react-icons/io";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import CustomNotification from "../CustomNotification";
import axios from "axios";
import { Eye, Pencil, Trash2 } from "lucide-react"; // Importing better icons

export default function MappedPages() {
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(false); // Loading state for fetching pages
  const [selectedFormMapping, setSelectedFormMapping] = useState(null); // State to store selected form mapping
  const [layoutId, setLayoutId] = useState(null);
  const [mappedData, setMappedData] = useState({});
  const [showCrmEditing, setShowCrmEditing] = useState(false); // State to control popup visibility
  const [rowid, setRowId] = useState("");
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [rowtodelete, setRowtodelete] = useState(null);
  const [notification, setNotification] = useState(null); // State to store notification

  // Fetch pages on component mount

  useEffect(() => {
    fetchPages();
  }, []);

  const fetchPages = async () => {
    console.log("Reloading pages...");
    setLoading(true);
    //console.log("Fetching pages...");
    try {
      const response = await fetch("/server/page_builder_function/pages");
      const data = await response.json();
      //console.log("Fetched data:", data);

      if (data.success) {
        // Filter pages based on formMapping, only keep those where formMapping is not null
        const filteredPages = data.data.filter(
          (page) => page.formMapping !== null && page.formMapping !== undefined
        );
        setPages(filteredPages);
      } else {
        toast.error("Failed to fetch pages.");
      }
    } catch (error) {
      console.error("Error fetching pages:", error);
      toast.error("Error fetching pages.");
    } finally {
      setLoading(false);
      //console.log("Pages fetching complete.");
    }
  };

  // Open form mapping popup
  const viewFormMapping = (rowData) => {
    if (rowData.formMapping) {
      try {
        const parsedFormMapping = JSON.parse(rowData.formMapping); // Parse formMapping JSON
        setSelectedFormMapping(parsedFormMapping); // Store the parsed formMapping
      } catch (error) {
        console.error("Error parsing formMapping:", error);
        toast.error("Error parsing formMapping data.");
      }
    } else {
      toast.info("No form mapping data available.");
    }
  };

  const cancelSave = () => {
    setShowConfirmationModal(false);
  };

  // Close form mapping popup
  const closeFormMapping = () => {
    setSelectedFormMapping(null);
  };

  // Add View and Edit Icons in the DataTable
  const viewTemplate = (rowData) => {
    return (
      <div>
        {/* View Button */}
        <Button
          icon={<Eye />}
          onClick={() => viewFormMapping(rowData)}
          type="link"
          style={{ color: "#1890ff", marginRight: "10px" }}
        ></Button>

        {/* Edit Button */}
        <Button
          icon={<Pencil />}
          onClick={() => handleEdit(rowData)} // Log the row data on click
          type="link"
          style={{ color: "#ffbf00", marginRight: "10px" }}
        ></Button>
        <Button
          icon={<Trash2 />}
          onClick={() => handleDeleteModal(rowData)} // Log the row data on click
          type="link"
          style={{ color: "rgb(238 48 48)" }}
        ></Button>
      </div>
    );
  };

  //Handle Delete Button Click

  const handleDeleteModal = (rowData) => {
    setRowtodelete(rowData);
    setShowConfirmationModal(true);
  };

  const handleDelete = async () => {
    setLoading(true); // Set loading to true before API call

    if (rowtodelete) {
      const pageid = rowtodelete.ROWID;

      try {
        const deleteresponse = await axios.put(
          `/server/page_builder_function/update/page/${pageid}`,
          { formMapping: null }
        );
        if (deleteresponse.data.success) {
          setNotification({
            message: "Mapped Form Deleted Successfully",
            type: "success",
          });

          fetchPages();
        } else {
          setNotification({
            message: "Failed to delete the mapped form.",
            type: "error",
          });
        }
      } catch (error) {
        setNotification({
          message: "An error occurred while deleting the mapped form.",
          type: "error",
        });
      } finally {
        setLoading(false);
        setShowConfirmationModal(false);
      }
    }
  };

  // Handle Edit . click
  const handleEdit = (rowData) => {
    //console.log("Editing row data:", rowData);  // Log row data to console

    // Extract the ROWID from rowData
    const rowId = rowData.ROWID;

    // Parse the formMapping if it is a JSON string
    let stringdate = rowData.formMapping;
    let parsedData = {};

    try {
      parsedData = JSON.parse(stringdate); // Parse formMapping JSON
    } catch (error) {
      console.error("Error parsing formMapping:", error);
    }

    // Pass the parsedData and rowId to the CrmEditing component
    setMappedData(parsedData);
    setLayoutId(parsedData.layoutId); // Extract layoutId from the parsed data
    setShowCrmEditing(true); // Show CrmEditing popup
    setRowId(rowId); // Store the ROWID for use in CrmEditing
  };

  // Close CrmEditing popup
  const closeCrmEditing = () => {
    setShowCrmEditing(false);
  };

  return (
    <div style={{ padding: "0px", maxWidth: "100%" }}>
      {/* Show loader while fetching data */}
      {loading && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(255, 255, 255, 0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <PropagateLoader color="#3169be" size={15} />
        </div>
      )}
      {/* Heading with left alignment and margin-bottom */}
      <h2 style={{ textAlign: "left", marginBottom: "20px", marginTop: "0px" }}>
        Mapped Pages
      </h2>
      <DataTable
        value={pages}
        paginator
        rows={10}
        dataKey="ROWID"
        emptyMessage="No mapped pages found."
        rowClassName="page-row" // Add a custom class for the row
      >
        <Column field="PageName" header="Page Name" />
        <Column field="Status" header="Status" />
        <Column field="CREATEDTIME" header="Created Time" />
        <Column field="MODIFIEDTIME" header="Modified Time" />
        <Column field="CreatedBy" header="Created By" />
        <Column header="Actions" body={viewTemplate} />
      </DataTable>
      {/* Show form mapping data in a popup */}
      <Modal
        title="Form Mapping Details"
        visible={!!selectedFormMapping}
        onCancel={closeFormMapping}
        footer={null}
        width={600}
        style={{
          position: "fixed",
          top: "0",
          right: selectedFormMapping ? "0" : "-400px", // ✅ Slide-in effect
          height: "100vh",
          margin: "0",
          padding: "20px",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px 0 0 8px",
          transition: "right 0.3s ease-in-out", // ✅ Smooth sliding transition
        }}
        bodyStyle={{
          padding: "16px",
          maxHeight: "calc(100vh - 64px)",
          overflowY: "auto",
          backgroundColor: "#f9f9f9",
        }}
        closeIcon={
          <Button
            type="text"
            icon={
              <IoIosCloseCircleOutline
                style={{ color: "#d33", fontSize: "24px" }}
              />
            }
            onClick={closeFormMapping}
            style={{
              color: "#d33",
              fontSize: "18px",
            }}
          />
        }
        transitionName="modal-slide-right"
        maskClosable={false} // ✅ Prevent closing on outside click
      >
        {selectedFormMapping && (
          <div
            style={{
              maxWidth: "100%",
              padding: "16px",
              borderRadius: "8px",
              backgroundColor: "#fff",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
              marginBottom: "16px",
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                textAlign: "left",
                boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
              }}
            >
              <thead>
                <tr style={{ backgroundColor: "#f5f5f5", fontWeight: "bold" }}>
                  <th
                    style={{ padding: "12px", borderBottom: "2px solid #ddd" }}
                  >
                    CRM Fields
                  </th>
                  <th
                    style={{ padding: "12px", borderBottom: "2px solid #ddd" }}
                  >
                    Form Fields
                  </th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(selectedFormMapping).map(
                  ([crmField, formField], index) => (
                    <tr key={index} style={{ borderBottom: "1px solid #ddd" }}>
                      <td
                        style={{
                          padding: "8px",
                          fontWeight: "bold",
                          maxWidth: "250px",
                        }}
                      >
                        {crmField}
                      </td>
                      <td style={{ padding: "8px" }}>{formField || "N/A"}</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        )}
      </Modal>
      {/* CrmEditing Popup */}
      {showCrmEditing && (
        <CrmEditing
          fetchpages={fetchPages}
          mappedData={mappedData}
          layoutId={layoutId}
          onClose={closeCrmEditing}
          pageid={rowid} // Pass ROWID to CrmEditing
        />
      )}
      <style jsx>{`
        .page-row {
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.3s ease;
        }

        .form-mapping-popup {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          padding: 20px;
          background-color: white;
       
          border-radius: 10px;
          z-index: 100;
          width: 400px;
          max-height: 80%;
          overflow-y: auto;
          border: 2px solid #1890ff;
        }

        .form-mapping-popup h3 {
          text-align: center;
          color: #1890ff;
          margin-bottom: 20px;
        }

        .form-mapping-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 14px;
        }

        .form-mapping-table th,
        .form-mapping-table td {
          padding: 10px;
          text-align: left;
          border-bottom: 1px solid #ddd;
        }

        .form-mapping-table th {
          background-color: #f4f4f4;
          font-weight: bold;
          color: #555;
        }

        .form-mapping-table tr:nth-child(even) {
          background-color: #f9f9f9;
        }

        .form-mapping-table tr:hover {
          background-color: #f1f1f1;
        }
      `}</style>
      {showConfirmationModal && (
        <Modal
          visible={showConfirmationModal}
          title="Delete"
          onCancel={cancelSave}
          footer={[
            <Button key="back" onClick={cancelSave}>
              Cancel
            </Button>,
            <Button key="submit" type="primary" onClick={handleDelete}>
              Confirm
            </Button>,
          ]}
        >
          <p>Are you sure you want to delete this mapped page?</p>
        </Modal>
      )}
      {notification && (
        <CustomNotification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
    </div>
  );
}
