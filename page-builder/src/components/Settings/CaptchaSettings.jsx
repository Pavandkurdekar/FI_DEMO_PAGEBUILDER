import React, { useState, useEffect } from "react";
import { Input, Button, notification, Spin, Typography, Card } from "antd";
import { EyeOutlined, EyeInvisibleOutlined, LoadingOutlined } from "@ant-design/icons";
import axios from "axios";

const { Title, Text } = Typography;

const CaptchaSettings = () => {
  // Input states for new keys
  const [siteKeyInput, setSiteKeyInput] = useState("");
  const [secretKeyInput, setSecretKeyInput] = useState("");

  // Stored keys fetched from API
  const [storedSiteKey, setStoredSiteKey] = useState("");
  const [storedSecretKey, setStoredSecretKey] = useState("");

  // Visibility toggles for input fields
  const [isSiteInputVisible, setIsSiteInputVisible] = useState(false);
  const [isSecretInputVisible, setIsSecretInputVisible] = useState(false);

  // Visibility toggles for stored keys
  const [isStoredSiteKeyVisible, setIsStoredSiteKeyVisible] = useState(false);
  const [isStoredSecretKeyVisible, setIsStoredSecretKeyVisible] = useState(false);

  // Loading states
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(false);

  // Fetch both keys on component mount
  useEffect(() => {
    const fetchKeys = async () => {
      setFetching(true);
      try {
        const response = await axios.get("/server/verification/manageCaptchaKey");
        if (response.data && response.data.success) {
          setStoredSiteKey(response.data.siteKey || "");
          setStoredSecretKey(response.data.secretKey || "");
          if (!response.data.siteKey && !response.data.secretKey) {
            notification.info({
              message: "Information",
              description: "No captcha keys have been added yet.",
            });
          }
        } else {
          notification.info({
            message: "Information",
            description: "No captcha keys have been added yet.",
          });
        }
      } catch (error) {
        notification.error({
          message: "Error",
          description: "Failed to fetch captcha keys.",
        });
      } finally {
        setFetching(false);
      }
    };

    fetchKeys();
  }, []);

  // Handle saving/updating both keys
  const handleSaveKeys = async () => {
    if (!siteKeyInput.trim() || !secretKeyInput.trim()) {
      notification.warning({
        message: "Validation Error",
        description: "Both Site Key and Secret Key are required.",
      });
      return;
    }

    setLoading(true);
    try {
      let response;
      // If either key exists, update via PUT; otherwise, create via POST
      if (storedSiteKey || storedSecretKey) {
        response = await axios.put("/server/verification/manageCaptchaKey", {
          siteKey: siteKeyInput.trim(),
          secretKey: secretKeyInput.trim(),
        });
      } else {
        response = await axios.post("/server/verification/manageCaptchaKey", {
          siteKey: siteKeyInput.trim(),
          secretKey: secretKeyInput.trim(),
        });
      }

      if (response.data.success) {
        setStoredSiteKey(siteKeyInput.trim());
        setStoredSecretKey(secretKeyInput.trim());
        notification.success({
          message: storedSiteKey || storedSecretKey ? "Updated" : "Success",
          description:
            storedSiteKey || storedSecretKey
              ? "Captcha keys updated successfully."
              : "Captcha keys saved successfully.",
        });
        setSiteKeyInput("");
        setSecretKeyInput("");
      } else {
        throw new Error(response.data.message || "Operation failed.");
      }
    } catch (error) {
      notification.error({
        message: "Error",
        description: error.message || "Something went wrong.",
      });
    } finally {
      setLoading(false);
    }
  };

  // Mask the stored keys with "x"
  const maskedSiteKey = storedSiteKey.replace(/./g, "x");
  const maskedSecretKey = storedSecretKey.replace(/./g, "x");

  return (
    <div style={{ width: "100%", padding: "30px", boxSizing: "border-box" }}>
      <Card bordered style={{ width: "100%", borderRadius: "8px", border:"none"}}>
        <Title level={3} style={{ textAlign: "center", marginBottom: "20px" }}>
          Configure Google Captcha Keys
        </Title>
        <Text type="secondary" style={{ display: "block", textAlign: "center", marginBottom: "30px" }}>
          Enter your Google Captcha Site Key and Secret Key below to enable captcha verification on your site.
        </Text>
        
        {/* Site Key Section */}
        <div style={{ marginBottom: "20px" }}>
          <Text strong style={{ display: "block", marginBottom: "5px" }}>
            Google Captcha Site Key:
          </Text>
          <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
            {/* Input Field: 50% width */}
            <div style={{ flex: "1 1 50%", position: "relative" }}>
              <Input
                type={isSiteInputVisible ? "text" : "password"}
                placeholder="Enter Google Captcha Site Key"
                value={siteKeyInput}
                onChange={(e) => setSiteKeyInput(e.target.value)}
                style={{
                  width: "100%",
                  paddingRight: "40px",
                  borderRadius: "6px",
                  fontSize: "16px",
                  border: "1px solid #3169BE",
                  color: "#333",
                }}
              />
              <span
                onClick={() => setIsSiteInputVisible(!isSiteInputVisible)}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  fontSize: "18px",
                  color: "#3169BE",
                }}
              >
                {isSiteInputVisible ? <EyeInvisibleOutlined /> : <EyeOutlined />}
              </span>
            </div>
            {/* Current Key Display: 50% width */}
            <div style={{ flex: "1 1 50%", marginLeft: "10px" }}>
              {storedSiteKey ? (
                <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
                  <Input
                    value={isStoredSiteKeyVisible ? storedSiteKey : maskedSiteKey}
                    readOnly
                    style={{
                      width: "100%",
                      textAlign: "center",
                      fontFamily: "monospace",
                      letterSpacing: "1px",
                    }}
                  />
                  <Button
                    type="text"
                    onClick={() => setIsStoredSiteKeyVisible(!isStoredSiteKeyVisible)}
                    style={{ fontSize: "18px", color: "#3169BE" }}
                  >
                    {isStoredSiteKeyVisible ? <EyeInvisibleOutlined /> : <EyeOutlined />}
                  </Button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
        
        {/* Secret Key Section */}
        <div style={{ marginBottom: "20px" }}>
          <Text strong style={{ display: "block", marginBottom: "5px" }}>
            Google Captcha Secret Key:
          </Text>
          <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
            {/* Input Field: 50% width */}
            <div style={{ flex: "1 1 50%", position: "relative" }}>
              <Input
                type={isSecretInputVisible ? "text" : "password"}
                placeholder="Enter Google Captcha Secret Key"
                value={secretKeyInput}
                onChange={(e) => setSecretKeyInput(e.target.value)}
                style={{
                  width: "100%",
                  paddingRight: "40px",
                  borderRadius: "6px",
                  fontSize: "16px",
                  border: "1px solid #3169BE",
                  color: "#333",
                }}
              />
              <span
                onClick={() => setIsSecretInputVisible(!isSecretInputVisible)}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  fontSize: "18px",
                  color: "#3169BE",
                }}
              >
                {isSecretInputVisible ? <EyeInvisibleOutlined /> : <EyeOutlined />}
              </span>
            </div>
            {/* Current Key Display: 50% width */}
            <div style={{ flex: "1 1 50%", marginLeft: "10px" }}>
              {storedSecretKey ? (
                <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
                  <Input
                    value={isStoredSecretKeyVisible ? storedSecretKey : maskedSecretKey}
                    readOnly
                    style={{
                      width: "100%",
                      textAlign: "center",
                      fontFamily: "monospace",
                      letterSpacing: "1px",
                    }}
                  />
                  <Button
                    type="text"
                    onClick={() => setIsStoredSecretKeyVisible(!isStoredSecretKeyVisible)}
                    style={{ fontSize: "18px", color: "#3169BE" }}
                  >
                    {isStoredSecretKeyVisible ? <EyeInvisibleOutlined /> : <EyeOutlined />}
                  </Button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
        
        <div style={{ textAlign: "center" }}>
          <Button
            type="primary"
            onClick={handleSaveKeys}
            disabled={loading}
            style={{
              width: "200px",
              backgroundColor: "#3169BE",
              border: "none",
              fontSize: "16px",
              borderRadius: "6px",
              padding: "10px",
              fontWeight: "bold",
              transition: "background 0.3s ease-in-out",
            }}
            onMouseEnter={(e) => !loading && (e.target.style.backgroundColor = "#275191")}
            onMouseLeave={(e) => !loading && (e.target.style.backgroundColor = "#3169BE")}
          >
            {loading ? (
              <>
                <Spin indicator={<LoadingOutlined style={{ fontSize: 18, color: "#fff" }} />} />
                Saving...
              </>
            ) : (
              storedSiteKey || storedSecretKey ? "Update" : "Save"
            )}
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default CaptchaSettings;