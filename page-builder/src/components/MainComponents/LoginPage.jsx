// components/Login.js
import { useEffect } from "react";
import { PropagateLoader } from "react-spinners";

function Login() {
  useEffect(() => {
    // Redirects the user to the Catalyst login page for authentication.
    window.location.href = window.origin + "/__catalyst/auth/login";
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f2f5",
      }}
    >
      <PropagateLoader color="#3169be" size={15} />
      {/* <p style={{ marginLeft: "10px", fontSize: "16px", color: "#555" }}>
        Redirecting to login...
      </p> */}
    </div>
  );
}

export default Login;
