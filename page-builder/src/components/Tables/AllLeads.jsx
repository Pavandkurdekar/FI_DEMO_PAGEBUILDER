import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { FilterMatchMode } from "primereact/api";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { toast, ToastContainer } from "react-toastify";
import { FaEye, FaTrash } from "react-icons/fa";
import { Modal } from "antd";
import Swal from "sweetalert2";
import { PropagateLoader } from "react-spinners";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "react-toastify/dist/ReactToastify.css";
import { Paginator } from "primereact/paginator";
import { useDispatch, useSelector } from "react-redux";
import { leadActions } from "../../store/leadSlice"; // Adjust the path to your Redux slice
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";

export default function AllLeads() {
  const dispatch = useDispatch();

  const {
    data: leads,
    nextToken,
    hasMore,
  } = useSelector((state) => state.leads);

  const [leads1, setLeads] = useState([]);
  const [pages, setPages] = useState({});
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10); // Rows per pages
  const [loading, setLoading] = useState(true);
  const [selectedLeads, setSelectedLeads] = useState([]);
  const [showViewDialog, setShowViewDialog] = useState(false);
  const [viewingLead, setViewingLead] = useState(null);
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    area_name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    pincode: { value: null, matchMode: FilterMatchMode.EQUALS },
    pageId: { value: null, matchMode: FilterMatchMode.EQUALS },
  });
  const [pageOptions, setPageOptions] = useState([]);

  const [globalFilterValue, setGlobalFilterValue] = useState("");

  useEffect(() => {
    fetchInitialLeads();
    fetchPages();
  }, []);

  useEffect(() => {
    fetchInitialLeads();
  }, []);

  const fetchInitialLeads = async () => {
    setLoading(true);
    try {
      const response = await fetch("/server/page_builder_function/leads");
      const data = await response.json();
      if (data.success) {
        // console.log("Leads", data)
        dispatch(
          leadActions.setLeads({
            data: data.data.map((lead) => {
              const parsed = lead.Lead_data ? JSON.parse(lead.Lead_data) : {};
              return {
                ...lead,
                Lead_data: parsed,
                pageId: parsed.pageId || null, // ✅ flatten pageId
              };
            }),

            nextToken: data.pagination?.next_token || null,
            hasMore: data.pagination?.more_records || false,
          })
        );
      }
    } catch (error) {
      console.error("Error fetching leads:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchMoreLeads = async () => {
    if (!hasMore || !nextToken) return;

    setLoading(true);
    try {
      const response = await fetch(
        `/server/page_builder_function/leads?token=${nextToken}`
      );
      const data = await response.json();
      if (data.success) {
        dispatch(
          leadActions.addLeads({
            data: data.data.map((lead) => {
              const parsed = lead.Lead_data ? JSON.parse(lead.Lead_data) : {};
              return {
                ...lead,
                Lead_data: parsed,
                pageId: parsed.pageId || null, // ✅ flatten pageId
              };
            }),

            nextToken: data.pagination?.next_token || null,
            hasMore: data.pagination?.more_records || false,
          })
        );
      }
    } catch (error) {
      console.error("Error fetching more leads:", error);
    } finally {
      setLoading(false);
    }
  };

  const onPageChange = (event) => {
    const newPage = event.page;
    const lastPage = Math.ceil((leads.length + (hasMore ? 1 : 0)) / rows);

    setFirst(event.first);
    setRows(event.rows);

    if (newPage + 1 === lastPage) {
      fetchMoreLeads();
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
        setPageOptions(
          Object.entries(pageMapping).map(([id, name]) => ({
            label: name,
            value: id,
          }))
        );
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
            dispatch(leadActions.deleteLead(rowData));

            Swal.fire({
              title: "Deleted!",
              text: "Lead has been deleted successfully.",
              icon: "success",
              confirmButtonColor: "#3085d6",
            });
            //  fetchInitialLeads();
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
            fetchInitialLeads();
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

  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    setGlobalFilterValue(value);
    setFilters((prevFilters) => ({
      ...prevFilters,
      global: { value, matchMode: FilterMatchMode.CONTAINS },
    }));
  };
  const pageNameFilterTemplate = (options) => {
    return (
      <Dropdown
        value={options.value}
        options={pageOptions}
        onChange={(e) => options.filterApplyCallback(e.value)}
        placeholder="Select Page"
        className="p-column-filter"
        showClear
        style={{ minWidth: "12rem" }}
      />
    );
  };

  return (
    <>
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
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              width: "auto", // Ensure that it doesn't stretch
              gap: "10px", // Add space between the elements
              alignItems: "center",
            }}
          >
            {/* Search box */}
            <InputText
              value={globalFilterValue}
              onChange={onGlobalFilterChange}
              placeholder="Keyword Search"
              style={{ width: "200px" }} // Adjust the width of the search box as needed
            />

            {/* Delete Button */}
            {selectedLeads.length > 0 && (
              <Button
                onClick={deleteSelectedLeads}
                icon="pi pi-trash"
                className="p-button-danger p-button-sm"
              ></Button>
            )}
          </div>
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
          <>
            <DataTable
              value={leads.slice(first, first + rows)} // Paginate locally
              filters={filters}
              rows={rows}
              selection={selectedLeads}
              onSelectionChange={(e) => setSelectedLeads(e.value)}
              selectionMode="checkbox"
              responsiveLayout="scroll"
              globalFilterFields={[
                "Lead_data.First Name",
                "Lead_data.Last Name",
                "Lead_data.Email",
              ]}
              //header="Leads"
              emptyMessage="No leads found."
            >
              <Column selectionMode="multiple" headerStyle={{ width: "3em" }} />

              {/* Lead ID Column: Show last 4 digits prefixed with 'LD' */}
              <Column
                field="Lead_data.LeadId"
                header="Lead ID"
                body={(rowData) => `LD${rowData.ROWID.slice(-4)}`}
              />
              <Column
                field="Lead_data.First Name"
                header="First Name"
              />
              <Column
                field="Lead_data.Last Name"
                header="Last Name"
              />
              <Column field="Lead_data.Email" header="Email" />

              {/* Page Name Column */}
              <Column
                field="pageId" // ✅ updated
                header="Page Name"
                body={(rowData) => pages[rowData.pageId] || "Unknown"} // ✅ updated
                filter
                filterField="pageId" // ✅ updated
                filterElement={pageNameFilterTemplate}
                showFilterMatchModes={false}
                style={{ minWidth: "180px" }}
              />

              {/* CRMSync Column */}
              <Column
                field="CRMSync"
                header="CRM Sync"
                body={(rowData) => {
                  const syncStatus = rowData.CRMSync
                    ? rowData.CRMSync.toString().toUpperCase()
                    : "UNKNOWN"; // Convert to string if necessary
                  const icon =
                    syncStatus === "TRUE" ? (
                      <span style={{ color: "green", fontSize: "20px" }}>
                        ✅
                      </span>
                    ) : syncStatus === "FALSE" ? (
                      <span style={{ color: "red", fontSize: "20px" }}>❌</span>
                    ) : (
                      <span>-</span>
                    );
                  return (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      {icon}
                    </div>
                  );
                }}
              />

              {/* Actions Column */}
              <Column header="Actions" body={actionBodyTemplate} />
            </DataTable>

            <Paginator
              first={first}
              rows={rows}
              totalRecords={leads.length + (hasMore ? 1 : 0)} // Include additional placeholder for more records
              onPageChange={onPageChange}
              rowsPerPageOptions={[5, 10, 20, 50]}
            />
          </>
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
          // closeIcon={
          //   <Button
          //     type="text"
          //     // icon={
          //     //   <IoIosCloseCircleOutline
          //     //     style={{ color: "#d33", fontSize: "24px" }}
          //     //   />
          //     // }
          //     onClick={() => setShowViewDialog(false)}
          //     style={{
          //       color: "#d33",
          //       fontSize: "18px",
          //     }}
          //   />
          // }
          transitionName="modal-slide-right"
          //  maskClosable={false} // Disable closing on click outside
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
                      console.log("Lead data = ", viewingLead.Lead_data);
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
                        <tr
                          key={key}
                          style={{ borderBottom: "1px solid #ddd" }}
                        >
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
    </>
  );
}
