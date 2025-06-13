// PageTabs.js
import React from "react";

export default function PageTabs({ selectedTab, onSelectTab }) {
  const tabs = ["All Pages", "Published", "Drafted", "Deleted"];

  return (
    <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px", gap: "10px" }}>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onSelectTab(tab)}
          style={{
            padding: "8px 16px",
            backgroundColor: selectedTab === tab ? "#3169be" : "#f0f0f0",
            color: selectedTab === tab ? "#fff" : "#000",
            border: "1px solid #d9d9d9",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
