import React, { useState, useEffect } from "react";
import { Row, Col, Card, Typography, Select, message } from "antd";
import ReactApexChart from "react-apexcharts";
import axios from "axios";

const { Title } = Typography;
const { Option } = Select;

// Configuration for the vertical bar chart with lighter shades
const verticalBarChartConfig = (monthlyData) => ({
  series: [
    {
      name: "Leads Count",
      data: monthlyData,
    },
  ],
  options: {
    chart: {
      type: "bar",
      height: 300,
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: false,
        columnWidth: "60%",
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    colors: ["#3169be"],
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        gradientToColors: ["#3169be"],
        stops: [0, 100],
      },
    },
    yaxis: {
      title: {
        text: "Number of Leads",
      },
    },
  },
});

const AnalyticsCharts = () => {
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear.toString());
  const [monthlyData, setMonthlyData] = useState(new Array(12).fill(0)); // Array for monthly lead counts

  // Generate a list of years dynamically (e.g., current year and 2 previous years)
  const years = Array.from({ length: 3 }, (_, i) => (currentYear - i).toString())
  .filter((year) => year !== "2023"); // Exclude the year 2023
  const handleYearChange = (year) => {
    setSelectedYear(year);
  };

  // Function to fetch leads data
  const fetchLeadsData = async (year) => {
    try {
      const response = await axios.get("/server/page_builder_function/leads");
      const leads = response.data;

      // Process leads data to count the number of leads for each month
      const monthlyCounts = new Array(12).fill(0);
      leads.data.forEach((lead) => {
        const createdTime = lead.CREATEDTIME;
        const leadYear = createdTime.split(" ")[0].split("-")[0]; // Extract year from CREATEDTIME
        const leadMonth =
          parseInt(createdTime.split(" ")[0].split("-")[1], 10) - 1; // Extract month (0-indexed)
        if (leadYear === year) {
          monthlyCounts[leadMonth] += 1; // Increment the count for the corresponding month
        }
      });

      setMonthlyData(monthlyCounts);
    } catch (error) {
      message.error("No Leads Found");
    }
  };

  // Fetch data when the component mounts or when the selected year changes
  useEffect(() => {
    fetchLeadsData(selectedYear);
  }, [selectedYear]);

  return (
    <div>
      <Row style={{ marginBottom: "16px" }}>
        <Col xs={24} md={12}>
          <Select
            value={selectedYear} // Use dynamic default value
            style={{ width: 200 }}
            onChange={handleYearChange}
          >
            {years.map((year) => (
              <Option key={year} value={year}>
                {year}
              </Option>
            ))}
          </Select>
        </Col>
      </Row>
      <Row gutter={[24, 24]} style={{ marginBottom: "24px" }}>
        <Col xs={24}>
          <Card
            bordered={false}
            className="hover-card"
            style={{ height: 400, width: "100%" }}
          >
            <Title level={4} style={{ color: "#3169be", marginBottom: "16px" }}>
              Monthly Leads Data for {selectedYear}
            </Title>
            <ReactApexChart
              options={verticalBarChartConfig(monthlyData).options}
              series={verticalBarChartConfig(monthlyData).series}
              type="bar"
              height={300}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default AnalyticsCharts;
