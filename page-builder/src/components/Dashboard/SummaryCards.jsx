import React, { useState, useEffect } from "react";
import { Row, Col, Card, Typography, Statistic } from "antd";
import {
  UserOutlined,
  FormOutlined,
  LayoutOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { PropagateLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

const cardStyle = {
  borderRadius: "12px",
  background: "linear-gradient(135deg, #ffffff, #f0f2f5)",
  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
  padding: "12px",
  position: "relative",
  transition: "transform 0.4s ease, box-shadow 0.4s ease",
  minHeight: "120px",
};

const iconStyle = {
  position: "absolute",
  top: "12px",
  right: "12px",
  fontSize: "40px",
  color: "#3169be", // Updated icon color
};

const SummaryCards = () => {
  const navigate = useNavigate();

  const [pagesData, setPagesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0);
  const [draftFiles, setDraftFiles] = useState(0);
  const [totalLeads, setTotalLeads] = useState(0);
  const [totalforms, setTotalforms] = useState(0);

  const navigateToLeads = () => {
    navigate("/all-leads");
  };

  const navigateToPages = () => {
    navigate("/all-pages");
  };

  const navigateToForms = () => {
    navigate("/all-forms");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
  
        // Fetch pages data
        const pagesResponse = await fetch("/server/page_builder_function/pages");
        const pagesData = await pagesResponse.json();
        const pages = pagesData.data || [];
        setPagesData(pages);
        setTotalPages(pages.length);
        const draftCount = pages.filter((page) => page.Status === "Draft").length;
        setDraftFiles(draftCount);
  
        // Fetch leads data
        const leadsResponse = await fetch("/server/page_builder_function/leads");
        const leadsData = await leadsResponse.json();
        const leads = leadsData.data || [];
        setTotalLeads(leads.length);
  
        // Fetch forms data
        const formsResponse = await fetch("/server/page_builder_function/forms");
        const formsData = await formsResponse.json();
        const forms = formsData.data || [];
        setTotalforms(forms.length); // Calculate and set the total forms length
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchData();
  }, []);
  
  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <PropagateLoader color="#3169be" size={15} />
      </div>
    );
  }

  return (
    <Row gutter={[24, 24]} style={{ marginBottom: "24px" }}>
      <Col xs={24} sm={12} md={6}>
        <Card
          onClick={navigateToLeads}
          bordered={false}
          style={{ ...cardStyle, borderLeft: "5px solid #3169be" }} // Updated border color
          hoverable
          className="hover-card"
        >
          <UserOutlined style={iconStyle} />
          <Title level={4} style={{ marginBottom: "8px", color: "#3169be" }}>
            {" "}
            {/* Updated title color */}
            Total Leads
          </Title>
          <Statistic value={totalLeads} />
        </Card>
      </Col>
      <Col xs={24} sm={12} md={6}>
        <Card

          onClick={navigateToForms}
          bordered={false}
          style={{ ...cardStyle, borderLeft: "5px solid #3169be" }} // Updated border color
          hoverable
          className="hover-card"
        >
          <TeamOutlined style={iconStyle} />
          <Title level={4} style={{ marginBottom: "8px", color: "#3169be" }}>
            {" "}
            {/* Updated title color */}
            Total Forms
          </Title>
          <Statistic value={totalforms} />
        </Card>
      </Col>
      <Col xs={24} sm={12} md={6}>
        <Card
          onClick={navigateToPages}
          bordered={false}
          style={{ ...cardStyle, borderLeft: "5px solid #3169be" }} // Updated border color
          hoverable
          className="hover-card"
        >
          <FormOutlined style={iconStyle} />
          <Title level={4} style={{ marginBottom: "8px", color: "#3169be" }}>
            {" "}
            {/* Updated title color */}
            Total Pages
          </Title>
          <Statistic value={totalPages} />
        </Card>
      </Col>
      <Col xs={24} sm={12} md={6}>
        <Card
          bordered={false}
          style={{ ...cardStyle, borderLeft: "5px solid #3169be" }} // Updated border color
          hoverable
          className="hover-card"
        >
          <LayoutOutlined style={iconStyle} />
          <Title level={4} style={{ marginBottom: "8px", color: "#3169be" }}>
            {" "}
            {/* Updated title color */}
            Draft Files
          </Title>
          <Statistic value={draftFiles} />
        </Card>
      </Col>
    </Row>
  );
};

export default SummaryCards;
