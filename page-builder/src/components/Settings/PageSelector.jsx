import React, { useState, useEffect } from "react";
import { List, Card, Typography, Spin } from "antd";
import axios from "axios";

const { Title, Text } = Typography;

const PageSelector = ({ onSelectPage }) => {
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPages = async () => {
      setLoading(true);
      try {
        const response = await axios.get("/server/page_builder_function/pages");
        // Filter out pages where formMapping is null
        const filteredPages = response.data.data.filter(
          (page) => page.formMapping == null
        );
        //console.log("Filtered Pages ", filteredPages)
        setPages(filteredPages);
      } catch (error) {
        console.error("Error fetching pages:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPages();
  }, []);

  return (
    <div style={{ marginTop: "20px", padding: 0 }}>
      {loading ? (
        <div style={{ textAlign: "center", padding: "50px 0" }}>
          <Spin size="large" />
          <Text>Loading pages...</Text>
        </div>
      ) : (
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 3,
            lg: 4, // 4 cards per row for large screens
          }}
          dataSource={pages}
          renderItem={(page) => (
            <List.Item style={{ padding: "8px" }}>
              {" "}
              {/* Consistent padding */}
              <Card
                hoverable
                onClick={() => onSelectPage(page)}
                style={{
                  width: "180px", // Slightly larger card for better visibility
                  height: "180px",
                  borderRadius: "12px",
                  textAlign: "center",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  overflow: "hidden",
                }}
                bodyStyle={{
                  padding: "10px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                  height: "100%",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 8px rgba(0, 0, 0, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 2px 4px rgba(0, 0, 0, 0.1)";
                }}
                cover={
                  <div
                    style={{
                      height: "100px", // Increased height for better logo display
                      backgroundColor: "#f0f2f5",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "24px",
                      color: "#999",
                      borderRadius: "12px 12px 0 0",
                    }}
                  >
                    {page.logo ? (
                      <img
                        src={page.logo}
                        alt={`${page.PageName} Logo`}
                        style={{
                          maxWidth: "100%",
                          maxHeight: "100%",
                          objectFit: "contain",
                        }}
                      />
                    ) : (
                      "📄" // Default placeholder icon
                    )}
                  </div>
                }
              >
                <Title
                  level={5}
                  style={{
                    margin: 0,
                    fontSize: "14px",
                    textAlign: "center",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {page.PageName}
                </Title>
                <Text
                  type="secondary"
                  style={{
                    fontSize: "12px",
                    textAlign: "center",
                  }}
                >
                  {page.CreatedBy}
                </Text>
              </Card>
            </List.Item>
          )}
        />
      )}
    </div>
  );
};

export default PageSelector;
