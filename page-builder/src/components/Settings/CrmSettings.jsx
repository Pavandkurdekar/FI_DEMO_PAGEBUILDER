import React, { useState, useEffect } from "react";
import { Row, Col, Card, Typography, Select, Button } from "antd";
import axios from "axios";
import LayoutSelector from "./LayoutSelector";
import MetadataViewer from "./MetadataViewer";
import crmLogo from "../../crm-image-2.png";
import MappedPages from "./MappedPages";
import { PropagateLoader } from "react-spinners";
import { FileTextOutlined } from "@ant-design/icons";
import { LeftOutlined } from "@ant-design/icons"; // Import the left arrow icon

const { Title } = Typography;
const { Option } = Select;

const Crm = () => {
  const [selectedLayout, setSelectedLayout] = useState(null);
  const [selectedPage, setSelectedPage] = useState(null);
  const [pages, setPages] = useState([]);
  const [metadata, setMetadata] = useState([]);
  const [apiFields, setApiFields] = useState([]);
  const [currentView, setCurrentView] = useState("home"); // 'home', 'layout', 'metadata'
  const [loadingMetadata, setLoadingMetadata] = useState(false);
  const [loadingPages, setLoadingPages] = useState(false);
  const [addingNewMapping, setAddingNewMapping] = useState(false); // State to manage new mapping addition

  const fetchPages = async () => {
    console.log("Reloading pages...");
    setLoadingPages(true);
    try {
      const response = await axios.get("/server/page_builder_function/pages");
      const publishedPages = response.data.data.filter(
        (page) => page.Status === "Published" && page.formMapping == null
      );
      //console.log("Unmapped Pages = ", publishedPages);
      setPages(publishedPages);
    } catch (error) {
      console.error("Error fetching pages:", error);
    } finally {
      setLoadingPages(false);
    }
  };

  useEffect(() => {
  const element = document.querySelector('.ant-card-body');
  if (element) {
    element.style.padding = '0px';

  }
}, []);


  const fetchMetadata = async (pageId) => {
    try {
      const response = await axios.get(
        `/server/page_builder_function/metadata/${pageId}`
      );
      const fetchedMetadata = JSON.parse(
        response.data.data[0]?.stepformdata || "[]"
      );
      //  console.log("Fetched metadata", fetchedMetadata)
      setMetadata(fetchedMetadata);
    } catch (error) {
      console.error("Error fetching metadata:", error);
    }
  };

  const fetchApiFields = async (layoutId) => {
    try {
      const response = await axios.get(
        `/server/verification/crm/meta/fields?layoutId=${layoutId}`
      );
      setApiFields(response.data.fields || []);
    } catch (error) {
      console.error("Error fetching API fields:", error);
    }
  };

  const handleLayoutSelect = (layout) => {
    setSelectedLayout(layout);
    fetchPages();
  };

  const handlePageSelect = async (pageId) => {
    const selectedPageData = pages.find((page) => page.ROWID === pageId);
    setSelectedPage(selectedPageData);
    setLoadingMetadata(true);
    await fetchMetadata(pageId);
    await fetchApiFields(selectedLayout.id);
    setLoadingMetadata(false);
    setCurrentView("metadata");
  };

  const handleFieldMappingsSubmit = (mappings) => {
    //console.log('Field Mappings:', mappings);
    fetchPages(); // Refresh the pages list
    setCurrentView("home");
    setSelectedPage(null);
    setMetadata([]);
    setApiFields([]);
  };

  const handleMetadataViewerClose = () => {
    setCurrentView("home");
    setMetadata([]);
    setApiFields([]);
  };

  const handleAddNewMapping = () => {
    setAddingNewMapping(true); // Trigger Add New Mapping mode
    setSelectedLayout(null); // Reset layout so LayoutSelector shows again
    setCurrentView("home"); // Reset view to home
  };

  const handleBackToMappedPages = () => {
    setCurrentView("home"); // Set currentView back to 'home' to show Mapped Pages
    setAddingNewMapping(false); // Reset the Add New Mapping mode
  };

  return (
    <Row
      justify="center"
      align="middle"
      style={{
        minHeight: "100vh",
        backgroundColor: "#f9f9f9",
      }}
    >
      <Col span={24}>
        <Card
          style={{
            width: "100%",
            height: "100vh",
            textAlign: "center",
            overflow: "hidden",
            border:"none",
            padding:"10px"
          }}
        >
          {/* Back to Mapped Pages Button */}
          {currentView === "home" && addingNewMapping && (
            <Button
              type="default"
              onClick={handleBackToMappedPages}
              style={{
                position: "absolute",
                top: "20px",
                left: "20px",
                zIndex: 10,
              }}
            >
              <LeftOutlined style={{ marginRight: "8px" }} />{" "}
              {/* Left arrow icon */}
              Back
            </Button>
          )}

          {/* Add New Mapping Button */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginBottom: "-35px",
            }}
          >
            {!addingNewMapping && (
              <Button type="primary" onClick={handleAddNewMapping}>
                Add New Mapping
              </Button>
            )}
          </div>

          {/* MappedPages Component */}
          {currentView === "home" && !addingNewMapping && <MappedPages />}

          {/* Home View (Rendered when adding new mapping is triggered) */}
          {currentView === "home" && addingNewMapping && (
            <>
              <div style={{ marginBottom: "10px" }}>
                <img
                  src={crmLogo}
                  alt="CRM Logo"
                  style={{
                    maxHeight: "150px",
                    maxWidth: "100%",
                    objectFit: "contain",
                    marginBottom: "0px",
                    margin: "0 auto",
                    marginTop:"35px"
                  }}
                />
                <Title level={3}>Zoho CRM Mapping</Title>
              </div>
              <div style={{ marginBottom: "10px" }}>
                {!selectedLayout && (
                  <LayoutSelector onSelectLayout={handleLayoutSelect} />
                )}
                {selectedLayout && (
                  <div
                    style={{
                      marginTop: "0px",
                      fontSize: "16px",
                      color: "#555",
                    }}
                  >
                    Selected Layout: {selectedLayout.name}
                  </div>
                )}
              </div>
              {selectedLayout && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "20px",
                  }}
                >
                  <div style={{ width: "80%", maxWidth: "600px" }}>
                    {" "}
                    {/* Decrease table width */}
                    {loadingPages ? (
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "100px",
                        }}
                      >
                        <PropagateLoader color="#3169be" size={15} />
                      </div>
                    ) : (
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          marginTop: "0px",
                        }}
                      >
                        <div
                          style={{
                            width: "100%",
                            maxWidth: "900px", 
                            height: "450px",
                            backgroundColor: "#fff",
                            borderRadius: "12px", 
                            boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)", 
                            overflow: "hidden",
                            padding: "25px",
                            display: "flex",
                            flexDirection: "column",
               
                          }}
                        >
                          <Title
                            level={4}
                            style={{
                              textAlign: "center",
                              marginBottom: "15px",
                            }}
                          >
                            Select a Page to Map
                          </Title>

                          {loadingPages ? (
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "100px",
                              }}
                            >
                              <PropagateLoader color="#3169be" size={15} />
                            </div>
                          ) : (
                            <div
                              style={{
                                flexGrow: 1,
                                overflowY: "auto",
                                paddingRight: "15px",
                              }}
                            >
                              <ul
                                style={{
                                  listStyle: "none",
                                  padding: "0",
                                  margin: "0",
                                }}
                              >
                                {pages.map((page) => (
                                  <li
                                    key={page.ROWID}
                                    style={{
                                      display: "flex",
                                      justifyContent: "space-between",
                                      alignItems: "center",
                                      padding: "16px",
                                      marginBottom: "12px",
                                      borderRadius: "10px",
                                      backgroundColor: "#fff",
                                      boxShadow:
                                        "0px 5px 12px rgba(0, 0, 0, 0.15)", 
                                      transition:
                                        "transform 0.2s, box-shadow 0.2s",
                                    }}
                                  >
                                    <div
                                      style={{
                                        display: "flex",
                                        alignItems: "center",
                                      }}
                                    >
                                      <FileTextOutlined
                                        style={{
                                          fontSize: "20px",
                                          marginRight: "10px",
                                          color: "#3169BE", 
                                        }}
                                      />
                                      <span
                                        style={{
                                          fontSize: "18px",
                                          fontWeight: "600",
                                          color: "#333",
                                        }}
                                      >
                                        {page.PageName}
                                      </span>
                                    </div>
                                    <Button
                                      type="primary"
                                      onClick={() =>
                                        handlePageSelect(page.ROWID)
                                      }
                                      loading={
                                        loadingMetadata &&
                                        selectedPage?.ROWID === page.ROWID
                                      }
                                      style={{
                                        minWidth: "100px",
                                        backgroundColor: "#3169BE",
                                        border: "none",
                                        fontSize: "16px",
                                        boxShadow:
                                          "0px 4px 8px rgba(0, 0, 0, 0.2)", // ✅ Button also has a nice shadow
                                        transition:
                                          "transform 0.2s, box-shadow 0.2s", // ✅ Add transition effect
                                      }}
                                      onMouseEnter={(e) =>
                                        (e.currentTarget.style.transform =
                                          "scale(1.1)")
                                      }
                                      onMouseLeave={(e) =>
                                        (e.currentTarget.style.transform =
                                          "scale(1)")
                                      }
                                    >
                                      {loadingMetadata &&
                                      selectedPage?.ROWID === page.ROWID
                                        ? "Loading..."
                                        : "Map"}
                                    </Button>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </>
          )}

          {/* Metadata Viewer */}
          {currentView === "metadata" && (
            <div>
              <MetadataViewer
                visible
                metadata={metadata}
                apiFields={apiFields}
                layoutId={selectedLayout?.id}
                pageId={selectedPage?.ROWID}
                layoutName={selectedLayout?.name} // Passing the layout name
                onClose={handleMetadataViewerClose}
                onSubmit={handleFieldMappingsSubmit}
                fetchPages={fetchPages}
              />
            </div>
          )}
        </Card>
      </Col>
    </Row>
  );
};

export default Crm;
