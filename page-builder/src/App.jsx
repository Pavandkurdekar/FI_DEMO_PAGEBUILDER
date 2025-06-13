import React, { useState, useEffect } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import PageBuilder from "./components/PageBuilderComponents/GrapesJSPageBuilder";
import LayoutComponent from "./components/SidebarAndHeader/Layout";
import Dashboard from "./components/Dashboard/Dashboard";
import AllPages from "./components/Tables/Allpages";
import PageEditor from "./components/PageBuilderComponents/PageEditor";
import PageViewer from "./components/PageBuilderComponents/PageViewer";
import Login from "./components/MainComponents/LoginPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { PropagateLoader } from "react-spinners";
import AllLeads from "./components/Tables/AllLeads";
import Pincodes from "./components/Tables/Pincodes";
import SetupPage from "./components/MainComponents/SetupPage";
import AddMedia from "./components/PageBuilderComponents/Media/AddMedia";
import { useDispatch } from "react-redux";
import { UserDataActions } from "./store/UserSlice";

function App() {
  const dispatch = useDispatch()
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [userDetails, setUserDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check authentication status only once when the app loads.
    const checkAuth = async () => {
      try {
        const result = await window.catalyst.auth.isUserAuthenticated();
        if (result && result.content) {
          const userDetails = {
            firstName: result.content.first_name,
            lastName: result.content.last_name,
            mailid: result.content.email_id,
            timeZone: result.content.time_zone,
            createdTime: result.content.created_time,
            role: result.content.role_details.role_name,
            user_type: result.content.user_type,
            org_id: result.content.org_id,
          };
  
          // Dispatch user details to Redux store
          dispatch(UserDataActions.setUserData(userDetails));
  
          setIsAuthenticated(true);
        } else {
          console.log("User not authenticated");
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error("Authentication error:", error);
        setIsAuthenticated(false);
      } finally {
        setIsCheckingAuth(false);
      }
    };
  
    checkAuth();
  }, []);
  

  if (isCheckingAuth) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#f5f7fa",
        }}
      >
        <PropagateLoader color="#3169be" size={15} />
      </div>
    );
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <Routes>
        <Route
          path="/"
          element={
            <Navigate to={isAuthenticated ? "/dashboard" : "/login"} replace />
          }
        />

        <Route path="/login" element={<Login />} />

        {isAuthenticated && (
          <Route
            element={
              <LayoutComponent
                userDetails={userDetails}
                setIsAuthenticated={setIsAuthenticated}
              />
            }
          >
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/page-builder" element={<PageBuilder />} />
            <Route path="/all-pages" element={<AllPages />} />
            <Route path="/page-editor" element={<PageEditor />} />
            <Route path="/all-leads" element={<AllLeads/>}/>
            <Route path="/pin-codes" element={<Pincodes/>} />
            <Route path="/settings" element={<SetupPage/>} />
             <Route path="/media" element={<AddMedia/>}/> 
          </Route>
        )}
        <Route path="/:pageId" element={<PageViewer />} />
        <Route
          path="*"
          element={
            <Navigate to={isAuthenticated ? "/dashboard" : "/login"} replace />
          }
        />
      </Routes>
    </DndProvider>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
