import React from "react";

const PageUnderMaintenance = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f9f9f9",
        color: "#333",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", color: "#ae275f" }}>Page Under Maintenance</h1>
      <p style={{ fontSize: "1.2rem", margin: "20px 0" }}>
        We’re currently working on this page to improve your experience. Please check back later.
      </p>
    </div>
  );
};

export default PageUnderMaintenance;
