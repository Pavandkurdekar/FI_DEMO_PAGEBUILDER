import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Tag } from "primereact/tag";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Tooltip } from "primereact/tooltip";
import { FaLink } from "react-icons/fa6";
import { toast } from "react-toastify";
//import { FaTimes } from "react-icons/fa";

import {
  FaEye,
  FaEdit,
  FaTrash,
  FaCheck,
  FaTimes,
  FaPencilAlt,
} from "react-icons/fa";
import { FaClone } from "react-icons/fa6";
import { PropagateLoader } from "react-spinners";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import axios from "axios";
import RestorePageIcon from "@mui/icons-material/RestorePage";

export default function PageTable({
  pages,
  globalFilterValue,
  onGlobalFilterChange,
  viewPage,
  editPage,
  confirmDeletePage,
  fetchPage, // Pass down delete confirmation from AllPages
}) {
  const [filteredPages, setFilteredPages] = useState(pages);
  const [editingStatus, setEditingStatus] = useState(null);
  const [editingPageName, setEditingPageName] = useState(null);
  const [temporaryPageName, setTemporaryPageName] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const [isCloneModalVisible, setIsCloneModalVisible] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [newPageName, setNewPageName] = useState("");
  const [loadiing, setLoadiing] = useState(false);
  const [copylinkModal, setCopylinkModal] = useState(false);
  const [slug, setSlug] = useState("");

  const [utm, setUtm] = useState({
    source: "",
    medium: "",
    campaign: "",
    term: "",
    content: "",
  });
  const [link, setLink] = useState(
    `https://new-page-builder-771555683.development.catalystserverless.com/#${slug}?utm_source=`
  );
  useEffect(() => {
    filterPages(globalFilterValue);
  }, [globalFilterValue, pages]);

  useEffect(() => {
    setLink(
      `https://new-page-builder-771555683.development.catalystserverless.com/#${slug}?utm_source=${utm.source}&utm_medium=${utm.medium}&utm_campaign=${utm.campaign}&utm_term=${utm.term}&utm_content=${utm.content}`
    );
  }, [utm, slug]);

  const filterPages = (searchValue) => {
    if (!searchValue) {
      setFilteredPages(pages);
    } else {
      const lowercasedValue = searchValue.toLowerCase();
      const filtered = pages.filter(
        (page) =>
          page.PageName.toLowerCase().includes(lowercasedValue) ||
          page.Status.toLowerCase().includes(lowercasedValue) ||
          page.CREATEDTIME.toLowerCase().includes(lowercasedValue) ||
          page.MODIFIEDTIME.toLowerCase().includes(lowercasedValue)
      );
      setFilteredPages(filtered);
    }
  };

  const openCloneModal = (rowData) => {
    setSelectedRowData(rowData);
    setNewPageName("");
    setIsCloneModalVisible(true);
  };

  const copyPageLink = () => {
    navigator.clipboard.writeText(link);
    toast.success("Page Link Copied ");
  };

  const handleClonePage = async () => {
    try {
      // Replace with your actual endpoint
      setLoadiing(true);
      const endpoint = `/server/page_builder_function/clone/page/${selectedRowData.ROWID}`;

      const payload = {
        status: "Draft", // Assuming `ROWID` identifies the page to clone
      };

      const response = await axios.post(endpoint, payload);

      if (response.status === 200) {
        toast.success("Page cloned successfully!");
        setIsCloneModalVisible(false);
        fetchPage();
        // Optionally refresh the table data
      } else {
        toast.error(response.data?.message || "Failed to clone the page.");
      }
    } catch (error) {
      console.error("Error cloning page:", error);
      toast.error("An error occurred while cloning the page.");
    } finally {
      setLoadiing(false);
    }
  };

  const renderHeader = () => (
    <div style={{ display: "flex", justifyContent: "end" }}>
      <InputText
        value={globalFilterValue}
        onChange={onGlobalFilterChange}
        placeholder="Search by keyword"
        style={{ width: "300px" }}
      />
    </div>
  );

  const header = renderHeader();

  const getSeverity = (status) => {
    switch (status.toLowerCase()) {
      case "published":
        return "success";
      case "draft":
        return "danger";
      case "deleted":
        return "info";
      default:
        return "info";
    }
  };

  const statusOptions = [
    { label: "Published", value: "Published" },
    { label: "Draft", value: "Draft" },
  ];

  const handleStatusChange = async (newStatus, rowData) => {
    setShowTooltip(false);
    try {
      const response = await fetch(
        `/server/page_builder_function/update/page/${rowData.ROWID}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status: newStatus }),
        }
      );

      if (response.ok) {
        toast.success("Page status updated successfully!");
        rowData.Status = newStatus;
        setEditingStatus(null);
        filterPages(globalFilterValue);
      } else {
        toast.error("Failed to update page status.");
      }
    } catch (error) {
      toast.error("An error occurred while updating the status.");
    } finally {
      setShowTooltip(true);
    }
  };

  const handlePageNameChange = async (newName, rowData) => {
    setShowTooltip(false);
    try {
      const response = await fetch(
        `/server/page_builder_function/update/page/${rowData.ROWID}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ PageName: newName }),
        }
      );

      if (response.ok) {
        toast.success("Page name updated successfully!");
        rowData.PageName = newName;
        setEditingPageName(null);
        setTemporaryPageName("");
        filterPages(globalFilterValue);
      } else {
        toast.error("Failed to update page name.");
      }
    } catch (error) {
      toast.error("An error occurred while updating the page name.");
    } finally {
      setShowTooltip(true);
    }
  };

  const cancelPageNameEdit = () => {
    setEditingPageName(null);
    setTemporaryPageName("");
  };

  const pageNameBodyTemplate = (rowData) => (
    <div
      style={{ position: "relative", display: "flex", alignItems: "center" }}
    >
      {editingPageName?.ROWID === rowData.ROWID ? (
        <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
          <InputText
            value={temporaryPageName}
            onChange={(e) => setTemporaryPageName(e.target.value)}
            style={{
              width: "100%",
              marginRight: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              padding: "4px 8px",
            }}
          />
          <FaCheck
            onClick={() => handlePageNameChange(temporaryPageName, rowData)}
            style={{
              cursor: "pointer",
              color: "#4caf50",
              marginRight: "8px",
              fontSize: "16px",
            }}
            title="Save"
          />
          <FaTimes
            onClick={cancelPageNameEdit}
            style={{
              cursor: "pointer",
              color: "#f44336",
              fontSize: "16px",
            }}
            title="Cancel"
          />
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
          // onMouseEnter={() =>
          //   (document.getElementById(
          //     `pencil-${rowData.ROWID}`
          //   ).style.opacity = 1)
          // }
          // onMouseLeave={() =>
          //   (document.getElementById(
          //     `pencil-${rowData.ROWID}`
          //   ).style.opacity = 0)
          // }
        >
          <FaPencilAlt
            id={`pencil-${rowData.ROWID}`}
            style={{
              marginRight: "8px",
              fontSize: "14px",
              color: "#1890ff",
              cursor: "pointer",
              // opacity: 0,
              // transition: "opacity 0.3s ease",
            }}
            onClick={() => {
              setEditingPageName(rowData);
              setTemporaryPageName(rowData.PageName);
            }}
          />
          <span
            onClick={() => {
              setEditingPageName(rowData);
              setTemporaryPageName(rowData.PageName);
            }}
            style={{
              color: "#1890ff",
            }}
          >
            {rowData.PageName}
          </span>
        </div>
      )}
    </div>
  );

  const statusBodyTemplate = (rowData) => (
    <div>
      {editingStatus?.ROWID === rowData.ROWID ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            width: "100%",
          }}
        >
          <Dropdown
            value={rowData.Status}
            options={statusOptions}
            onChange={(e) => handleStatusChange(e.value, rowData)}
            placeholder="Select a Status"
            style={{ width: "100%" }}
          />
          <FaTimes
            onClick={() => setEditingStatus(null)} // Close the dropdown
            style={{
              cursor: "pointer",
              color: "#f44336",
              fontSize: "16px",
            }}
            title="Cancel"
          />
        </div>
      ) : (
        <Tag
          value={
            <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              {rowData.Status}
              <RestorePageIcon
                styl={{ color: "#333333", fontSize: "1rem" }}
              />{" "}
              {/* React Icon */}
            </span>
          }
          severity={getSeverity(rowData.Status)}
          style={{
            backgroundColor:
              rowData.Status.toLowerCase() === "published"
                ? "#4caf50"
                : rowData.Status.toLowerCase() === "draft"
                ? "#ff9999"
                : "orange",
            color: "#fff",
            cursor: "pointer",
          }}
          onClick={() => setEditingStatus(rowData)}
          id={`status-${rowData.ROWID}`}
        />
      )}
      {showTooltip && !editingStatus && (
        <Tooltip
          target={`#status-${rowData.ROWID}`}
          content={
            rowData.Status.toLowerCase() === "deleted"
              ? "Restore Page"
              : "Change Page Status"
          }
          position="top"
          showEvent="mouseenter"
          hideEvent="mouseleave"
        />
      )}
    </div>
  );
  const isAnyUtmEmpty = () => {
    return (
      !utm.source.trim() ||
      !utm.medium.trim() ||
      !utm.campaign.trim() ||
      !utm.term.trim() ||
      !utm.content.trim()
    );
  };

  const handleEdit = async (rowData) => {
    setIsEditing(true);
    try {
      await editPage(rowData);
    } finally {
      setIsEditing(false);
    }
  };

  const totalClicksTemplate = (rowData) => <div>{rowData.View_Count || 0}</div>;
  const actionBodyTemplate = (rowData) => (
    <div style={{ display: "flex", gap: "8px" }}>
      {/* View Icon */}
      <FaEye
        onClick={() => {
          if (
            rowData.Status.toLowerCase() !== "draft" &&
            rowData.Status.toLowerCase() !== "deleted"
          ) {
            viewPage(rowData);
          }
        }}
        style={{
          fontSize: "18px",
          color:
            rowData.Status.toLowerCase() === "draft" ||
            rowData.Status.toLowerCase() === "deleted"
              ? "#d3d3d3"
              : "#4caf50",
          cursor:
            rowData.Status.toLowerCase() === "draft" ||
            rowData.Status.toLowerCase() === "deleted"
              ? "not-allowed"
              : "pointer",
        }}
        title="View"
      />
      {/* Edit Icon */}
      <FaEdit
        onClick={() => {
          if (
            // rowData.Status.toLowerCase() !== "draft" &&
            rowData.Status.toLowerCase() !== "deleted"
          ) {
            handleEdit(rowData);
          }
        }}
        style={{
          fontSize: "18px",
          color:
            // rowData.Status.toLowerCase() === "draft" ||
            rowData.Status.toLowerCase() === "deleted" ? "#d3d3d3" : "#2196f3",
          cursor:
            // rowData.Status.toLowerCase() === "draft" ||
            rowData.Status.toLowerCase() === "deleted"
              ? "not-allowed"
              : "pointer",
        }}
        title="Edit"
      />
      {/* Copy Page Link */}
      <FaLink
        onClick={() => {
          setCopylinkModal(true);
          setSlug(rowData.pageSlug);
        }}
        style={{
          fontSize: "18px",
          color:
            //  rowData.Status.toLowerCase() === "draft" ||
            rowData.Status.toLowerCase() === "deleted" ? "#d3d3d3" : "#e74d68",
          cursor:
            //   rowData.Status.toLowerCase() === "draft" ||
            rowData.Status.toLowerCase() === "deleted"
              ? "not-allowed"
              : "pointer",
        }}
        title="Copy Page Link"
      />

      {/* Clone Icon */}
      <FaClone
        onClick={() => {
          if (
            //  rowData.Status.toLowerCase() !== "draft" &&
            rowData.Status.toLowerCase() !== "deleted"
          ) {
            openCloneModal(rowData);
          }
        }}
        style={{
          fontSize: "18px",
          color:
            //  rowData.Status.toLowerCase() === "draft" ||
            rowData.Status.toLowerCase() === "deleted" ? "#d3d3d3" : "orange",
          cursor:
            //   rowData.Status.toLowerCase() === "draft" ||
            rowData.Status.toLowerCase() === "deleted"
              ? "not-allowed"
              : "pointer",
        }}
        title="Clone Page"
      />

      {/* Delete Icon */}
      <FaTrash
        onClick={() => confirmDeletePage(rowData)} // Trigger delete confirmation from parent component
        style={{
          fontSize: "18px",
          color: "#f44336",
          cursor: "pointer",
        }}
        title="Delete"
      />
    </div>
  );

  const renderCloneFooter = () => (
    <div>
      <Button
        label="Cancel"
        icon="pi pi-times"
        onClick={() => setIsCloneModalVisible(false)}
        className="p-button-text"
      />
      <Button
        label={loadiing ? "Cloning..." : "Clone"}
        icon={loadiing ? "" : "pi pi-check"}
        onClick={handleClonePage}
        autoFocus
        disabled={loadiing} // Disable button if loading is true
        style={{
          cursor: loadiing ? "not-allowed" : "pointer", // Change cursor to not-allowed when loading
          opacity: loadiing ? 0.6 : 1, // Add opacity for disabled look
        }}
      />
    </div>
  );

  return (
    <div style={{ position: "relative" }}>
      <Dialog
        header="Add UTM Parameters"
        visible={copylinkModal}
        onHide={() => {
          setCopylinkModal(false);
          setUtm({
            content: "",
            term: "",
            campaign: "",
            source: "",
            medium: "",
          });
          setLink("");
        }}
        style={{
          width: "650px",
          backgroundColor: "#fff",
          border: "1px solid #3169BE",
          borderRadius: "8px",
        }}
        modal
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            padding: "10px",
            backgroundColor: "rgb(214 219 237)", // light tint ofrgb(181, 194, 236)
            borderRadius: "8px",
          }}
        >
          {/* Input Fields */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
            }}
          >
            {[
              { id: "utmSource", label: "UTM Source", value: utm.source },
              { id: "utmMedium", label: "UTM Medium", value: utm.medium },
              { id: "utmCampaign", label: "UTM Campaign", value: utm.campaign },
              { id: "utmTerm", label: "UTM Term", value: utm.term },
            ].map((field) => (
              <div key={field.id}>
                <label htmlFor={field.id} style={{ fontWeight: 500 }}>
                  {field.label}
                </label>
                <input
                  type="text"
                  id={field.id}
                  value={field.value}
                  onChange={(e) =>
                    setUtm({
                      ...utm,
                      [field.id.replace("utm", "").toLowerCase()]:
                        e.target.value,
                    })
                  }
                  style={{
                    width: "100%",
                    padding: "8px",
                    borderRadius: "4px",
                    border: "1px solid #3169BE",
                    backgroundColor: "#fff",
                  }}
                />
              </div>
            ))}

            {/* UTM Content */}
            <div style={{ gridColumn: "span 2" }}>
              <label htmlFor="utmContent" style={{ fontWeight: 500 }}>
                UTM Content
              </label>
              <input
                type="text"
                id="utmContent"
                value={utm.content}
                onChange={(e) => setUtm({ ...utm, content: e.target.value })}
                style={{
                  width: "100%",
                  padding: "8px",
                  borderRadius: "4px",
                  border: "1px solid #3169BE",
                  backgroundColor: "#fff",
                }}
              />
            </div>
          </div>

          {/* Preview */}
          <div>
            <h4 style={{ marginBottom: "0.5rem", color: "#3169BE" }}>
              Generated Link
            </h4>
            <div
              style={{
                background: "#fff",
                padding: "10px",
                borderRadius: "4px",
                border: "1px solid #3169BE",
                fontSize: "0.9rem",
                wordBreak: "break-all",
                marginBottom: "1rem",
                color: "#333",
              }}
            >
              {link}
            </div>

            <Button
              label="Copy URL"
              onClick={copyPageLink}
              size="small"
              disabled={isAnyUtmEmpty()}
              icon="pi pi-copy"
              style={{
                backgroundColor: "#3169BE",
                border: "none",
                color: "#fff",
                padding: "6px 12px",
              }}
            />
          </div>
        </div>
      </Dialog>

      {isEditing && (
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

      <Tooltip target="[data-pr-tooltip]" />

      <DataTable
        value={filteredPages}
        paginator
        rows={10}
        dataKey="ROWID"
        header={header}
        emptyMessage="No pages found."
        style={{ opacity: isEditing ? 0.5 : 1 }}
      >
        <Column
          field="PageName"
          header="Page Name"
          body={pageNameBodyTemplate}
          style={{ minWidth: "12rem" }}
        />
        <Column
          field="Status"
          header="Status"
          body={statusBodyTemplate}
          style={{ minWidth: "12rem" }}
        />
        <Column
          field="CREATEDTIME"
          header="Created Time"
          style={{ minWidth: "14rem" }}
        />
        <Column
          field="MODIFIEDTIME"
          header="Modified Time"
          style={{ minWidth: "14rem" }}
        />
        <Column
          field="CreatedBy"
          header="Created By"
          style={{ minWidth: "14rem" }}
        />
        <Column
          body={totalClicksTemplate}
          header="Total Visits"
          style={{ minWidth: "8rem" }}
        />
        <Column
          body={actionBodyTemplate}
          header="Actions"
          style={{ minWidth: "8rem" }}
        />
      </DataTable>
      {/* Clone Modal */}
      <Dialog
        header="Confirm Clone Page"
        visible={isCloneModalVisible}
        style={{ width: "450px" }}
        footer={renderCloneFooter}
        onHide={() => setIsCloneModalVisible(false)}
      >
        <div>Are you sure you want to clone this page?</div>
      </Dialog>
    </div>
  );
}
