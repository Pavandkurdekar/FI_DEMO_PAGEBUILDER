import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "antd";
import { toast, ToastContainer } from "react-toastify";
import { FaEye, FaTrash } from "react-icons/fa";
import { Modal } from "antd";
import Swal from "sweetalert2";
import { PropagateLoader } from "react-spinners";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "react-toastify/dist/ReactToastify.css";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { leadActions } from "../../store/leadSlice";
import { useDispatch, useSelector } from "react-redux";
export default function AllLeads() {
  const dispatch = useDispatch();
  const [leads, setLeads] = useState([]);
  const [pages, setPages] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedLeads, setSelectedLeads] = useState([]);
  const [showViewDialog, setShowViewDialog] = useState(false);
  const [viewingLead, setViewingLead] = useState(null);

  useEffect(() => {
    fetchLeads();
    fetchPages();
  }, []);

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const response = await fetch("/server/page_builder_function/leads");
      const data = await response.json();
      console.log("Data", data);
      if (data.success) {
        setLeads(
          data.data.map((lead) => ({
            ...lead,
            Lead_data: lead.Lead_data ? JSON.parse(lead.Lead_data) : {}, // Ensure Lead_data is always an object
          }))
        );
      } else if (data.message === "No records found for Leads.") {
        toast.success("No records Found");
      } else {
      }
    } catch (error) {
      toast.error("Error fetching leads.");
    } finally {
      setLoading(false);
    }
  };

  const fetchPages = async () => {
    try {
      const response = await fetch("/server/page_builder_function/pages");
      const data = await response.json();
      if (data.success) {
        const pageMapping = data.data.reduce((acc, page) => {
          acc[page.ROWID] = page.PageName;
          return acc;
        }, {});
        setPages(pageMapping);
      } else {
        toast.error("Failed to fetch pages.");
      }
    } catch (error) {
      toast.error("Error fetching pages.");
    }
  };

  const viewLeadDetails = (rowData) => {
    setViewingLead(rowData);
    setShowViewDialog(true);
  };

  const handleDeleteLead = async (rowData) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This lead will be deleted.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Delete",
      cancelButtonText: "No, keep it",
      confirmButtonColor: "#d33",
    }).then(async (result) => {
      if (result.isConfirmed) {
        setLoading(true);
        try {
          const response = await fetch(
            `/server/page_builder_function/leads/${rowData.ROWID}`,
            {
              method: "DELETE",
              headers: { "Content-Type": "application/json" },
            }
          );

          if (response.ok) {
            Swal.fire({
              title: "Deleted!",
              text: "Lead has been deleted successfully.",
              icon: "success",
              confirmButtonColor: "#3085d6",
            });
            fetchLeads();
          } else {
            Swal.fire({
              title: "Failed!",
              text: "Failed to delete the lead.",
              icon: "error",
              confirmButtonColor: "#d33",
            });
          }
        } catch (error) {
          Swal.fire({
            title: "Error!",
            text: "Error occurred while deleting lead.",
            icon: "error",
            confirmButtonColor: "#d33",
          });
        } finally {
          setLoading(false);
        }
      }
    });
  };

  const deleteSelectedLeads = async () => {
    if (selectedLeads.length === 0) return;

    Swal.fire({
      title: "Are you sure?",
      text: "The selected leads will be deleted.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Delete",
      cancelButtonText: "No, keep it",
      confirmButtonColor: "#d33",
    }).then(async (result) => {
      if (result.isConfirmed) {
        setLoading(true);
        const rowIds = selectedLeads.map((lead) => lead.ROWID);
        try {
          const response = await fetch(`/server/page_builder_function/leads`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ rowIds }),
          });

          if (response.ok) {
            dispatch(leadActions.deletemultipleLead(rowIds));
            Swal.fire({
              title: "Deleted!",
              text: "Selected leads have been deleted successfully.",
              icon: "success",
              confirmButtonColor: "#3085d6",
            });
            fetchLeads();
            setSelectedLeads([]);
          } else {
            Swal.fire({
              title: "Failed!",
              text: "Failed to delete selected leads.",
              icon: "error",
              confirmButtonColor: "#d33",
            });
          }
        } catch (error) {
          Swal.fire({
            title: "Error!",
            text: "Error occurred while deleting leads.",
            icon: "error",
            confirmButtonColor: "#d33",
          });
        } finally {
          setLoading(false);
        }
      }
    });
  };

  const actionBodyTemplate = (rowData) => (
    <div style={{ display: "flex", gap: "8px" }}>
      <FaEye
        onClick={() => viewLeadDetails(rowData)}
        style={{ cursor: "pointer", color: "#4caf50" }}
        title="View"
      />
      <FaTrash
        onClick={() => handleDeleteLead(rowData)}
        style={{ cursor: "pointer", color: "#f44336" }}
        title="Delete"
      />
    </div>
  );

  return (
    <div style={{ position: "relative", padding: "20px" }}>
      {showViewDialog && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.5)",
            zIndex: 999,
            filter: "blur(4px)",
          }}
        />
      )}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 15px",
          background: "#fff",
          borderBottom: "1px solid #ddd",
        }}
      >
        <h2 style={{ margin: 0 }}>Leads</h2>
        {selectedLeads.length > 0 && (
          <Button
            onClick={deleteSelectedLeads}
            style={{
              background: "#f44336",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
            }}
          >
            Delete Selected Leads
          </Button>
        )}
      </div>

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
          <PropagateLoader color="#3169be" size={20} />
        </div>
      )}

      {!loading && (
        <DataTable
          value={leads}
          paginator
          rows={10}
          selection={selectedLeads}
          onSelectionChange={(e) => setSelectedLeads(e.value)}
          selectionMode="checkbox"
          responsiveLayout="scroll"
        >
          <Column selectionMode="multiple" headerStyle={{ width: "3em" }} />
          <Column
            field="Lead_data.First Name ( as per Aadhar )"
            header="First Name"
          />
          <Column
            field="Lead_data.Last Name (as Per Aadhar)"
            header="Last Name"
          />

          <Column field="Lead_data.Email ID" header="Email" />
          <Column
            field="CRMSync"
            header="CRM Sync"
            body={(rowData) => {
              const syncStatus = rowData.CRMSync
                ? rowData.CRMSync.toUpperCase()
                : "UNKNOWN";
              const icon =
                syncStatus === "TRUE" ? (
                  <span style={{ color: "green", fontSize: "20px" }}>✅</span>
                ) : syncStatus === "FALSE" ? (
                  <span style={{ color: "red", fontSize: "20px" }}>❌</span>
                ) : (
                  <span>-</span>
                );
              return (
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  {icon}
                </div>
              );
            }}
          />

          <Column
            field="Lead_data.pageId"
            header="Page Name"
            body={(rowData) => pages[rowData.Lead_data.pageId] || "Unknown"}
          />
          <Column header="Actions" body={actionBodyTemplate} />
        </DataTable>
      )}

      <ToastContainer position="bottom-right" autoClose={5000} />

      <Modal
        title="Lead Details"
        visible={showViewDialog}
        onCancel={() => setShowViewDialog(false)}
        footer={null}
        width={600}
        style={{
          position: "fixed",
          top: "0",
          right: showViewDialog ? "0" : "-400px", // Slide in/out effect
          height: "100vh",
          margin: "0",
          padding: "20px",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px 0 0 8px",
          transition: "right 0.3s ease-in-out", // Smooth sliding transition
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
            onClick={() => setShowViewDialog(false)}
            style={{
              color: "#d33",
              fontSize: "18px",
            }}
          />
        }
        transitionName="modal-slide-right"
        // maskClosable={false} // Disable closing on click outside
      >
        {viewingLead && (
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
              <tbody>
                {Object.entries(viewingLead.Lead_data)
                  .filter(([key]) => {
                    console.log("Filtering key:", key);
                    return (
                      key !== "authorizeCheckbox" &&
                      key !== "leadId" &&
                      key != "null"
                    );
                  })
                  .map(([key, value]) => {
                    console.log("Rendering key:", key, "with value:", value);
                    const formattedKey = key
                      .replace(/_/g, " ") // Replace underscores with spaces
                      .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize first letter of each word
                    return (
                      <tr key={key} style={{ borderBottom: "1px solid #ddd" }}>
                        <td
                          style={{
                            padding: "8px",
                            fontWeight: "bold",
                            maxWidth: "250px",
                          }}
                        >
                          {formattedKey}:
                        </td>
                        <td style={{ padding: "8px" }}>{value || "N/A"}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        )}
      </Modal>
    </div>
  );
}
