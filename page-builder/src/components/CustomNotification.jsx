import React, { useEffect, useState } from "react";
import { Button } from "antd";

// Notification Component
const Notification = ({ message, type, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Show notification on mount
  useEffect(() => {
    setIsVisible(true); // Trigger the slide-in effect
    const timer = setTimeout(() => {
      onClose();
    }, 5000); // Automatically close the notification after 5 seconds

    return () => clearTimeout(timer); // Clean up timer on component unmount
  }, [onClose]);

  const notificationStyles = {
    padding: "15px 30px", // Increase padding for a wider notification
    position: "fixed",
    top: "75px",
    right: "20px",
    backgroundColor: type === "success" ? "rgba(76, 175, 80, 0.85)" : "rgba(244, 67, 54, 0.85)", // Semi-transparent background
    color: "white",
    borderRadius: "10px", // Rounded corners
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    zIndex: 1000,
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateX(0)" : "translateX(100%)", // Slide-in from right
    transition: "transform 0.5s ease-out, opacity 0.5s ease-out", // Smooth animation
    width: "320px", // Increased width for a wider notification
  };

  return (
    <div style={notificationStyles}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span>{message}</span>
        <Button
          type="link"
          onClick={onClose}
          style={{
            color: "white",
            fontSize: "18px",
            marginLeft: "10px",
            padding: 0,
          }}
        >
          ×
        </Button>
      </div>
    </div>
  );
};

export default Notification;
