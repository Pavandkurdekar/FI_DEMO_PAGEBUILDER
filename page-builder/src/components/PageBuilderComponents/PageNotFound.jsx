import React from "react";

const PageNotFound = () => {
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
      <h1 style={{ fontSize: "2.5rem", color: "#d9534f" }}>404 - Page Not Found</h1>
      <p style={{ fontSize: "1.2rem", margin: "20px 0" }}>
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>
      {/* <button
        onClick={() => window.history.back()}
        style={{
          padding: "10px 20px",
          fontSize: "1rem",
          backgroundColor: "#ae275f",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Go Back
      </button> */}
    </div>
  );
};

export default PageNotFound;
