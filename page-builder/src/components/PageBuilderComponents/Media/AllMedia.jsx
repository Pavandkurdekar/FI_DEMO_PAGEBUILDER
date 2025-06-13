import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "primereact/button";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { toast } from "react-toastify";
import { PropagateLoader } from "react-spinners";
import "react-toastify/dist/ReactToastify.css";

const AllMedia = ({ refreshKey }) => {
  const [mediaList, setMediaList] = useState([]);
  const [loadingMedia, setLoadingMedia] = useState(false);

  const fetchMedia = async () => {
    setLoadingMedia(true);
    try {
      const res = await axios.get("/server/page_builder_function/api/media");
      const rows = res.data.data || [];

      // Sort newest first by CREATEDTIME
      rows.sort((a, b) => {
        const dateA = new Date(a.CREATEDTIME.replace(/:(\d+)$/, ".$1"));
        const dateB = new Date(b.CREATEDTIME.replace(/:(\d+)$/, ".$1"));
        return dateB - dateA;
      });

      setMediaList(rows);
    } catch (err) {
      console.error(err);
      toast.error("Could not load media list.");
    } finally {
      setLoadingMedia(false);
    }
  };

  useEffect(() => {
    fetchMedia();
  }, [refreshKey]);

  const handleCopy = (url) => {
    navigator.clipboard.writeText(url);
    toast.success("URL copied!");
  };

  const confirmDelete = (item) => {
    confirmDialog({
      message: "Are you sure you want to delete this media?",
      header: "Confirm Delete",
      icon: "pi pi-exclamation-triangle",
      acceptLabel: "Yes",
      rejectLabel: "No",
      accept: async () => {
        try {
          await axios.delete(
            `/server/page_builder_function/api/media/${item.ROWID}`
          );
          toast.success("Deleted successfully");
          fetchMedia();
        } catch (err) {
          console.error(err);
          toast.error("Delete failed");
        }
      },
    });
  };

  const styles = {
    containerWrapper: {
      position: "relative",
    },
    container: {
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)",
      gap: "1.5rem",
      padding: "2rem",
      backgroundColor: "rgb(238 244 255)",
      borderRadius: "8px",
      maxHeight: "500px",
      overflowY: "auto",
      boxSizing: "border-box",
    },
    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(255,255,255,0.7)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 10,
    },
    card: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#fff",
      borderRadius: "8px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      overflow: "visible",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
 
    preview: {
      width: "100%",
      height: "160px",
      objectFit: "cover",
    },
    footer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0.75rem 1rem",
      backgroundColor: "rgb(240 246 250)",
      borderTop: "1px solidrgb(214, 216, 240)",
    },
    fileName: {
      fontSize: "0.9rem",
      color: "#333",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      maxWidth: "140px",
    },
    actions: {
      display: "flex",
      gap: "0.5rem",
    },
    emptyMessage: {
      gridColumn: "1 / -1",
      textAlign: "center",
      color: "#666",
      fontSize: "1rem",
    },
  };

  return (
    <>
      <ConfirmDialog />

      <div style={styles.containerWrapper}>
        {loadingMedia && (
          <div style={styles.overlay}>
            <PropagateLoader color="#3169be" size={10} />
          </div>
        )}

        <div style={styles.container}>
          {!loadingMedia && mediaList.length === 0 ? (
            <div style={styles.emptyMessage}>No media found.</div>
          ) : (
            mediaList.map((item) => {
              const url = item.File_Url;
              const isImage = /\.(jpe?g|png|gif|svg)$/i.test(url);
              return (
                <div
                  key={item.ROWID}
                  style={styles.card}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-6px)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 16px rgba(0,0,0,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 12px rgba(0,0,0,0.1)";
                  }}
                >
                  <div style={styles.previewWrapper}>
                    {isImage ? (
                      <img
                        src={url}
                        alt={item.File_Name}
                        style={styles.preview}
                      />
                    ) : (
                      <video src={url} controls style={styles.preview} />
                    )}
                  </div>
                  <div style={styles.footer}>
                    <span style={styles.fileName}>{item.File_Name}</span>
                    <div style={styles.actions}>
                      <Button
                        icon="pi pi-copy"
                        className="p-button-rounded p-button-text"
                        onClick={() => handleCopy(url)}
                        tooltip="Copy URL"
                      />
                      <Button
                        icon="pi pi-trash"
                        className="p-button-rounded p-button-text p-button-danger"
                        onClick={() => confirmDelete(item)}
                        tooltip="Delete"
                      />
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default AllMedia;
