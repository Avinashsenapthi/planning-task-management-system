import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <div className="sidebar">

      {/* Logo Header */}
      <div style={{
        padding: "20px 18px",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        display: "flex",
        alignItems: "center",
        gap: "12px"
      }}>
        <div style={{
          width: "38px", height: "38px",
          borderRadius: "10px",
          background: "linear-gradient(135deg, #6378ff, #8b5cf6)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "18px", flexShrink: 0
        }}>📋</div>
        <div>
          <div style={{ color: "#ffffff", fontWeight: "700", fontSize: "13px", lineHeight: "1.2" }}>
            Planning & Task
          </div>
          <div style={{ color: "#7880a0", fontSize: "11px", marginTop: "2px" }}>
            Management System
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="sidebar-nav">
        <div style={{ padding: "16px 18px 6px", fontSize: "10px", textTransform: "uppercase", letterSpacing: "1px", color: "#4a5070", fontWeight: "600" }}>
          Main Menu
        </div>
        <Link to="/dashboard" className={isActive("/dashboard") ? "active" : ""}>
          🏠 Dashboard
        </Link>
        <Link to="/projects" className={isActive("/projects") ? "active" : ""}>
          📁 Projects
        </Link>
        <Link to="/tasks" className={isActive("/tasks") ? "active" : ""}>
          ✅ Tasks
        </Link>

        <div style={{ padding: "16px 18px 6px", fontSize: "10px", textTransform: "uppercase", letterSpacing: "1px", color: "#4a5070", fontWeight: "600", marginTop: "8px" }}>
          Account
        </div>
        <Link to="/profile" className={isActive("/profile") ? "active" : ""}>
          👤 Profile
        </Link>
        <Link to="/settings" className={isActive("/settings") ? "active" : ""}>
          ⚙️ Settings
        </Link>
      </div>

      {/* Bottom */}
      <div className="sidebar-bottom">
        <Link to="/" style={{ color: "#e57373 !important" }}>
          🚪 Logout
        </Link>
        <div style={{
          margin: "10px 14px 4px",
          padding: "10px 12px",
          background: "rgba(99,120,255,0.12)",
          borderRadius: "10px",
          border: "1px solid rgba(99,120,255,0.2)"
        }}>
          <div style={{ fontSize: "11px", color: "#8890b0" }}>Logged in as</div>
          <div style={{ fontSize: "13px", color: "#ffffff", fontWeight: "600", marginTop: "2px" }}>John Doe</div>
          <div style={{ fontSize: "11px", color: "#6378ff", marginTop: "1px" }}>admin@gmail.com</div>
        </div>
      </div>

    </div>
  );
}

export default Sidebar;