import React, { useState, useEffect } from "react";
import { Row, Col, Typography } from "antd";
// import AllLeads from './AllLeads';
import SummaryCards from "./SummaryCards";
import AnalyticsCharts from "./AnalyticsCharts";
import TexturedBackground from "./TexturedBackground";
import AllLeads from "../Tables/AllLeads";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const user = useSelector((state) => state.user);
  const userName = `${user?.firstName || ""} ${user?.lastName || ""}`.trim();

  return (
    <div
      style={{
        padding: "10px",
        backgroundColor: "#f5f7fa",
        minHeight: "100vh",
      }}
    >
      <TexturedBackground
        title={`Welcome ${userName}`}
        description="Page Builder Overview"
      />

      <SummaryCards />

      <AnalyticsCharts />

      <Row style={{ marginTop: 24 }}>
        <Col xs={24}>
          {/* <AllLeads searchText={searchText} handleSearch={handleSearch} filteredData={filteredData} /> */}
          <AllLeads />
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
