import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageTabs from "./PageTabs";
import PageTable from "./PageTable";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Modal } from "antd";
import { PropagateLoader } from "react-spinners";

export default function AllPages() {
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [pageToDelete, setPageToDelete] = useState(null);
  const [selectedTab, setSelectedTab] = useState("All Pages");
  const [globalFilterValue, setGlobalFilterValue] = useState("");
  const [viewing, setViewing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPages();
  }, [selectedTab]);

  const fetchPages = async () => {
    setLoading(true);
    try {
      const response = await fetch("/server/page_builder_function/pages");
      const data = await response.json();
      console.log("Pages = ", data.data);
      

      if (data.success) {
        setPages(data.data);
      } else {
        toast.error("Failed to fetch pages.");
      }
    } catch (error) {
      toast.error("Error fetching pages.");
    } finally {
      setLoading(false);
    }
  };

  const filteredPages = pages.filter((page) => {
    if (selectedTab === "All Pages")
      return page.Status.toLowerCase() !== "deleted";
    const statusToMatch =
      selectedTab === "Drafted" ? "draft" : selectedTab.toLowerCase();
    return page.Status.toLowerCase() === statusToMatch;
  });

  const onGlobalFilterChange = (e) => {
    setGlobalFilterValue(e.target.value);
  };

  const viewPage = (rowData) => {
    console.log("RowData:", rowData);
  
    const url = `${window.location.origin}/#/${rowData.pageSlug}`;
    console.log("Opening URL:", url);
  
    const newWindow = window.open(url, "_blank");
  
    // Optionally check if the window opened successfully
    if (newWindow) {
      console.log("New window opened successfully:", newWindow);
    } else {
      console.warn("Popup blocked or failed to open.");
    }
  };
  

  const editPage = async (rowData) => {
    setViewing(true);
    try {
      const response = await fetch(
        `/server/page_builder_function/page/${rowData.ROWID}`
      );
      const htmlContent = await response.text();

      navigate("/page-editor", {
        state: {
          htmlContent,
          rowId: rowData.ROWID,
          initialPageName: rowData.PageName,
          initialStatus: rowData.Status,
        },
      });
    } catch (error) {
      toast.error("Error fetching page for editing.");
    } finally {
      setViewing(false);
    }
  };

  const confirmDeletePage = (rowData) => {
    setPageToDelete(rowData);
    setDeleteModalVisible(true);
  };

  const handleDeletePage = async () => {
    if (pageToDelete) {
      setLoading(true);
      try {
        let response;
        const isAlreadyDeleted =
          pageToDelete.Status.toLowerCase() === "deleted";

        if (isAlreadyDeleted) {
          response = await fetch(
            `/server/page_builder_function/delete/page/${pageToDelete.ROWID}`,
            {
              method: "DELETE",
            }
          );
        } else {
          response = await fetch(
            `/server/page_builder_function/update/page/${pageToDelete.ROWID}`,
            {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ status: "Deleted" }),
            }
          );
        }

        if (response.ok) {
          toast.success(
            isAlreadyDeleted
              ? "Page permanently deleted!"
              : "Page moved to Recycle Bin!"
          );
          fetchPages();
        } else {
          toast.error("Failed to delete the page.");
        }
      } catch (error) {
        toast.error("An error occurred while deleting the page.");
      } finally {
        setLoading(false);
        setDeleteModalVisible(false);
        setPageToDelete(null);
      }
    }
  };

  return (
    <div style={{ padding: "20px", position: "relative" }}>
      <ToastContainer
        position="top-right"
        style={{ marginTop: "150px" }}
        autoClose={3000}
      />

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

      <PageTabs selectedTab={selectedTab} onSelectTab={setSelectedTab} />

      <PageTable
        pages={filteredPages}
        globalFilterValue={globalFilterValue}
        onGlobalFilterChange={onGlobalFilterChange}
        viewPage={viewPage}
        editPage={editPage}
        confirmDeletePage={confirmDeletePage}
        fetchPage={fetchPages}
      />

      <Modal
        title="Confirm Delete"
        visible={deleteModalVisible}
        onOk={handleDeletePage}
        onCancel={() => setDeleteModalVisible(false)}
        okText={
          pageToDelete?.Status?.toLowerCase() === "deleted"
            ? "Yes, Permanently Delete"
            : "Yes, Move to Recycle Bin"
        }
        cancelText="Cancel"
      >
        <p style={{ lineHeight: "1.5rem" }}>
          {pageToDelete?.Status?.toLowerCase() === "deleted" ? (
            <>
              <strong>{pageToDelete?.PageName}</strong> is already in the{" "}
              <strong>Recycle Bin</strong>.<br />
              Do you want to <strong>permanently delete</strong> this page?
              <br />
              <span style={{ color: "red" }}>
                This action cannot be undone.
              </span>
            </>
          ) : (
            <>
              Are you sure you want to move{" "}
              <strong>{pageToDelete?.PageName}</strong> to the{" "}
              <strong>Recycle Bin</strong>?
              <br />
              You can restore it later if needed.
            </>
          )}
        </p>
      </Modal>
    </div>
  );
}
