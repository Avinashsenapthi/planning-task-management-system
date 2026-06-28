import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    // Simple validation
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    // Temporary hardcoded login (replace with real API later)
    if (email === "admin@gmail.com" && password === "admin123") {
      navigate("/dashboard");
    } else {
      setError("Invalid email or password. Try admin@gmail.com / admin123");
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #1e2235 0%, #2d3561 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Arial, sans-serif"
    }}>
      <div style={{
        background: "#ffffff",
        borderRadius: "16px",
        padding: "48px 40px",
        width: "100%",
        maxWidth: "420px",
        boxShadow: "0 20px 60px rgba(0,0,0,0.3)"
      }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <div style={{
            width: "56px", height: "56px", borderRadius: "14px",
            background: "#6378ff", display: "flex", alignItems: "center",
            justifyContent: "center", margin: "0 auto 16px", fontSize: "24px"
          }}>📋</div>
          <h1 style={{ fontSize: "22px", fontWeight: "700", color: "#1a1d2e", margin: "0 0 4px" }}>
            Welcome back
          </h1>
          <p style={{ color: "#6b7280", fontSize: "14px", margin: 0 }}>
            Planning & Task Management System
          </p>
        </div>

        {/* Error message */}
        {error && (
          <div style={{
            background: "#fef2f2", border: "1px solid #fecaca",
            borderRadius: "8px", padding: "12px 16px",
            color: "#dc2626", fontSize: "13px", marginBottom: "20px"
          }}>
            ⚠️ {error}
          </div>
        )}

        {/* Form */}
        <div>
          <div style={{ marginBottom: "16px" }}>
            <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: "#374151", marginBottom: "6px" }}>
              Email address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "100%", padding: "11px 14px", fontSize: "14px",
                border: "1.5px solid #e5e7eb", borderRadius: "8px",
                outline: "none", boxSizing: "border-box",
                transition: "border 0.2s"
              }}
              onFocus={e => e.target.style.borderColor = "#6378ff"}
              onBlur={e => e.target.style.borderColor = "#e5e7eb"}
            />
          </div>

          <div style={{ marginBottom: "24px" }}>
            <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: "#374151", marginBottom: "6px" }}>
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%", padding: "11px 14px", fontSize: "14px",
                border: "1.5px solid #e5e7eb", borderRadius: "8px",
                outline: "none", boxSizing: "border-box",
                transition: "border 0.2s"
              }}
              onFocus={e => e.target.style.borderColor = "#6378ff"}
              onBlur={e => e.target.style.borderColor = "#e5e7eb"}
            />
          </div>

          <button
            onClick={handleLogin}
            style={{
              width: "100%", padding: "12px", fontSize: "15px",
              fontWeight: "600", color: "#ffffff", background: "#6378ff",
              border: "none", borderRadius: "8px", cursor: "pointer",
              transition: "background 0.2s"
            }}
            onMouseOver={e => e.target.style.background = "#4f63e0"}
            onMouseOut={e => e.target.style.background = "#6378ff"}
          >
            Sign in
          </button>
        </div>

        {/* Footer */}
        <p style={{ textAlign: "center", marginTop: "24px", fontSize: "13px", color: "#6b7280" }}>
          Don't have an account?{" "}
          <Link to="/signup" style={{ color: "#6378ff", fontWeight: "600", textDecoration: "none" }}>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;