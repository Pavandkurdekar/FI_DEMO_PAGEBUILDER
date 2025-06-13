import React, { useCallback, useState, useEffect } from "react";
import {
  Layout,
  Avatar,
  Modal,
  Drawer,
  Button,
  Tooltip,
  Typography,
} from "antd";
import { TbMapPinCode } from "react-icons/tb";
//import { SiFormstack } from "react-icons/si";
import {
  DashboardOutlined,
  FileTextOutlined,
  FormOutlined,
  UserOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DownOutlined,
  UpOutlined,
} from "@ant-design/icons";
import { GoFileMedia } from "react-icons/go";
import { Outlet, useNavigate } from "react-router-dom";
import Profile from "../MainComponents/Profile";
import logo from "../../../src/dlogo.png";
import { PropagateLoader } from "react-spinners";
import "./LayoutComponent.css";
import { IoSettingsOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

const { Header, Content, Sider } = Layout;
const { Text } = Typography;

const LayoutComponent = ({ setIsAuthenticated }) => {
  const userDetails = useSelector((state) => state.user);

  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [isLogoutModalVisible, setIsLogoutModalVisible] = useState(false);
  const [isProfileDrawerVisible, setIsProfileDrawerVisible] = useState(false);
  const [activeKey, setActiveKey] = useState("1");
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const [isFormsOpen, setIsFormsOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [userRole, setUserRole] = useState("");
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  useEffect(() => {
    if (userDetails && userDetails.firstName && userDetails.lastName) {
      setUserName(`${userDetails.firstName} ${userDetails.lastName}`);
      setUserRole(userDetails.role);
    }
  }, [userDetails]);

  const showLogoutModal = useCallback(() => {
    setIsLogoutModalVisible(true);
  }, []);

  const handleLogout = useCallback(async () => {
    setIsLoggingOut(true);
    setIsLogoutModalVisible(false); // close modal immediately

    try {
      const redirectURL = "/__catalyst/auth/login";
      await window.catalyst.auth.signOut(redirectURL);

      setTimeout(() => {
        setIsAuthenticated(false);
        setIsLoggingOut(false);
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.error("Logout error:", error);
      setIsLoggingOut(false);
    }
  }, [navigate, setIsAuthenticated]);

  const handleCancel = useCallback(() => {
    setIsLogoutModalVisible(false);
  }, []);

  const showProfileDrawer = useCallback(() => {
    setIsProfileDrawerVisible(true);
  }, []);

  const closeProfileDrawer = useCallback(() => {
    setIsProfileDrawerVisible(false);
  }, []);

  const handleNavigation = (key) => {
    setActiveKey(key);
    switch (key) {
      case "1":
        navigate("/dashboard");
        break;
      case "2.1":
        navigate("/all-pages");
        break;
      case "2.2":
        navigate("/page-builder");
        break;
      case "3.1":
        navigate("/all-forms");
        break;
      case "3.2":
        navigate("/form-builder");
        break;
      case "3.3":
        navigate("/pin-codes");
        break;
      case "3.4":
        navigate("/all-leads");
        break;
      case "3.5":
        navigate("/settings");
        break;
      case "3.6":
        navigate("/media");
      default:
        break;
    }
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {isLoggingOut && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <PropagateLoader color="#3169be" size={15} />
          <p style={{ marginTop: "20px", fontSize: "16px", color: "#555" }}>
            Hold on, this might take a few more seconds... Fristine Team
          </p>
        </div>
      )}

      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(collapsed) => setCollapsed(collapsed)}
        trigger={null}
        className={`custom-sider ${collapsed ? "collapsed" : ""}`}
      >
        <div className="logo">
          <img src={logo} alt="Fristine Logo" />
          {!collapsed && <span></span>}
        </div>

        <div className="menu-items">
          <Tooltip title="Dashboard" placement="right">
            <div
              className={`menu-item ${activeKey === "1" ? "active" : ""}`}
              onClick={() => handleNavigation("1")}
            >
              <DashboardOutlined />
              {!collapsed && <span>Dashboard</span>}
            </div>
          </Tooltip>

          <Tooltip title="All Leads" placement="right">
            <div
              className={`menu-item ${activeKey === "3.4" ? "active" : ""}`}
              onClick={() => handleNavigation("3.4")}
            >
              <UserOutlined />
              {!collapsed && <span>All Leads</span>}
            </div>
          </Tooltip>

          <Tooltip title="Pin Codes" placement="right">
            <div
              style={{ marginLeft: "8px" }}
              className={`menu-item ${activeKey === "3.3" ? "active" : ""}`}
              onClick={() => handleNavigation("3.3")}
            >
              <TbMapPinCode />
              {!collapsed && <span>Pin Codes</span>}
            </div>
          </Tooltip>
          <Tooltip title="Media" placement="right">
            <div
              style={{marginLeft:"8px"}}
              className={`menu-item ${activeKey === "3.6" ? "active" : ""}`}
              onClick={() => handleNavigation("3.6")}
            >
              <GoFileMedia />
              {!collapsed && <span>Media</span>}
            </div>
          </Tooltip>

          {collapsed ? (
            <>
              <Tooltip title="All Pages" placement="right">
                <div
                  className={`menu-item ${activeKey === "2.1" ? "active" : ""}`}
                  onClick={() => handleNavigation("2.1")}
                >
                  <FileTextOutlined />
                </div>
              </Tooltip>
              <Tooltip title="Add Page" placement="right">
                <div
                  className={`menu-item ${activeKey === "2.2" ? "active" : ""}`}
                  onClick={() => handleNavigation("2.2")}
                >
                  <FileTextOutlined />
                </div>
              </Tooltip>
              {/* <Tooltip title="All Forms" placement="right">
                <div
                  className={`menu-item ${activeKey === "3.1" ? "active" : ""}`}
                  onClick={() => handleNavigation("3.1")}
                >
                  <FormOutlined />
                </div>
              </Tooltip>
              <Tooltip title="Add Form" placement="right">
                <div
                  className={`menu-item ${activeKey === "3.2" ? "active" : ""}`}
                  onClick={() => handleNavigation("3.2")}
                >
                  <FormOutlined />
                </div>
              </Tooltip> */}
            </>
          ) : (
            <>
              <Tooltip title="Pages" placement="right">
                <div
                  className="menu-item"
                  onClick={() => setIsPagesOpen(!isPagesOpen)}
                >
                  <FileTextOutlined />
                  <span>Pages</span>
                  {isPagesOpen ? (
                    <UpOutlined style={{ marginLeft: "auto" }} />
                  ) : (
                    <DownOutlined style={{ marginLeft: "auto" }} />
                  )}
                </div>
              </Tooltip>
              {isPagesOpen && (
                <div className="menu-sub">
                  <Tooltip title="All Pages" placement="right">
                    <div
                      className={`menu-item ${
                        activeKey === "2.1" ? "active" : ""
                      }`}
                      onClick={() => handleNavigation("2.1")}
                    >
                      <FileTextOutlined />
                      <span>All Pages</span>
                    </div>
                  </Tooltip>
                  <Tooltip title="Add Page" placement="right">
                    <div
                      style={{ marginLeft: "8px" }}
                      className={`menu-item ${
                        activeKey === "2.2" ? "active" : ""
                      }`}
                      onClick={() => handleNavigation("2.2")}
                    >
                      <FileTextOutlined style={{ marginLeft: "0px" }} />

                      <span>Add Page</span>
                    </div>
                  </Tooltip>
                </div>
              )}

              {/* <Tooltip title="Forms" placement="right">
                <div
                  className="menu-item"
                  onClick={() => setIsFormsOpen(!isFormsOpen)}
                >
                  <FormOutlined />
                  <span>Forms</span>
                  {isFormsOpen ? (
                    <UpOutlined style={{ marginLeft: "auto" }} />
                  ) : (
                    <DownOutlined style={{ marginLeft: "auto" }} />
                  )}
                </div>
              </Tooltip>
              {isFormsOpen && (
                <div className="menu-sub">
                  <Tooltip title="All Forms" placement="right">
                    <div
                      className={`menu-item ${
                        activeKey === "3.1" ? "active" : ""
                      }`}
                      onClick={() => handleNavigation("3.1")}
                    >
                      <FormOutlined />
                      <span>All Forms</span>
                    </div>
                  </Tooltip>
                  <Tooltip title="Add Form" placement="right">
                    <div  style={{marginLeft:"8px"}}
                      className={`menu-item ${
                        activeKey === "3.2" ? "active" : ""
                      }`}
                      onClick={() => handleNavigation("3.2")}
                    >
                      <SiFormstack />
                      <span>Add Form</span>
                    </div>
                  </Tooltip>
                </div>
              )} */}
            </>
          )}
        </div>

        <div className="menu-bottom">
          <Tooltip title="Profile" placement="right">
            <div className="menu-item" onClick={showProfileDrawer}>
              <UserOutlined />
              {!collapsed && <span>Profile</span>}
            </div>
          </Tooltip>
          <Tooltip title="Logout" placement="right">
            <div className="menu-item" onClick={showLogoutModal}>
              <LogoutOutlined />
              {!collapsed && <span>Logout</span>}
            </div>
          </Tooltip>
        </div>
      </Sider>

      <Layout className="main-content">
        <Header className="custom-header">
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            className="toggle-button"
            style={{
              marginLeft: collapsed ? "80px" : "200px",
            }}
          />
          <div className="header-icons">
            <Tooltip title="Settings" placement="left">
              <IoSettingsOutline
                size={24}
                style={{
                  color: "#fff",
                  cursor: "pointer",
                  marginRight: "12px",
                }}
                onClick={() => handleNavigation("3.5")}
              />
            </Tooltip>
            <Tooltip title="Profile" placement="left">
              <Avatar
                size="large"
                icon={<UserOutlined style={{ color: "#fff" }} />}
                style={{ backgroundColor: "#3169be", cursor: "pointer" }}
                onClick={showProfileDrawer}
              />
            </Tooltip>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                lineHeight: "1",
                marginLeft: "8px",
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                {userName}
              </Text>
              <Text style={{ color: "white", fontSize: "12px" }}>
                {userRole}
              </Text>
            </div>
          </div>
        </Header>

        <Content className="custom-content">
          <Outlet />
        </Content>
      </Layout>

      <Modal
        title="Confirm Logout"
        visible={isLogoutModalVisible}
        onOk={handleLogout}
        onCancel={handleCancel}
        okText="Yes, Logout"
        cancelText="Cancel"
      >
        <p>Are you sure you want to logout?</p>
      </Modal>

      <Drawer
        title="User Profile"
        placement="right"
        closable
        onClose={closeProfileDrawer}
        visible={isProfileDrawerVisible}
        width={400}
      >
        <Profile userDetails={userDetails} />
      </Drawer>
    </Layout>
  );
};

export default LayoutComponent;
