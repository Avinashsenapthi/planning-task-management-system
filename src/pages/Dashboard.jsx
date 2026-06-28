import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Dashboard() {
  const stats = [
    { label: "Projects", value: 12, icon: "📁", bg: "#eff6ff" },
    { label: "Tasks", value: 34, icon: "✅", bg: "#fef9c3" },
    { label: "Completed", value: 89, icon: "🏆", bg: "#f0fdf4" },
    { label: "Pending", value: 5, icon: "⏳", bg: "#fef2f2" },
  ];

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main">
        <Navbar title="Dashboard" />
        <div className="content">
          <h1 style={{ fontSize: "20px", fontWeight: "700", color: "#1a1d2e", marginBottom: "20px" }}>
            Good morning, John 👋
          </h1>

          {/* Stat Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "14px", marginBottom: "20px" }}>
            {stats.map((s) => (
              <div key={s.label} style={{ background: "#fff", borderRadius: "12px", padding: "18px", border: "1px solid #e5e7eb" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: s.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", marginBottom: "10px" }}>
                  {s.icon}
                </div>
                <div style={{ fontSize: "26px", fontWeight: "700", color: "#1a1d2e" }}>{s.value}</div>
                <div style={{ fontSize: "13px", color: "#6b7280", marginTop: "2px" }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Bottom Row */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
            {/* Recent Tasks */}
            <div style={{ background: "#fff", borderRadius: "12px", padding: "18px", border: "1px solid #e5e7eb" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                <span style={{ fontWeight: "700", color: "#1a1d2e", fontSize: "14px" }}>Recent tasks</span>
                <span style={{ fontSize: "12px", color: "#6378ff", cursor: "pointer" }}>View all</span>
              </div>
              {[
                { name: "Fix login bug", priority: "High", color: "#dc2626", bg: "#fef2f2" },
                { name: "Design dashboard UI", priority: "Medium", color: "#d97706", bg: "#fffbeb" },
                { name: "Write API docs", priority: "Low", color: "#16a34a", bg: "#f0fdf4" },
                { name: "Database migration", priority: "High", color: "#dc2626", bg: "#fef2f2" },
              ].map((t) => (
                <div key={t.name} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 0", borderBottom: "1px solid #f3f4f6" }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: t.color, flexShrink: 0 }} />
                  <span style={{ flex: 1, fontSize: "13px", color: "#374151" }}>{t.name}</span>
                  <span style={{ fontSize: "11px", padding: "2px 10px", borderRadius: "99px", background: t.bg, color: t.color, fontWeight: "600" }}>{t.priority}</span>
                </div>
              ))}
            </div>

            {/* Projects */}
            <div style={{ background: "#fff", borderRadius: "12px", padding: "18px", border: "1px solid #e5e7eb" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                <span style={{ fontWeight: "700", color: "#1a1d2e", fontSize: "14px" }}>Projects</span>
                <span style={{ fontSize: "12px", color: "#6378ff", cursor: "pointer" }}>View all</span>
              </div>
              {[
                { name: "Internship Portal", pct: 72, color: "#6378ff" },
                { name: "Analytics Tool", pct: 45, color: "#16a34a" },
                { name: "HR System", pct: 88, color: "#d97706" },
              ].map((p) => (
                <div key={p.name} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 0", borderBottom: "1px solid #f3f4f6" }}>
                  <div style={{ width: "28px", height: "28px", borderRadius: "7px", background: p.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", flexShrink: 0 }}>📋</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: "12px", fontWeight: "600", color: "#1a1d2e", marginBottom: "4px" }}>{p.name}</div>
                    <div style={{ height: "4px", background: "#f3f4f6", borderRadius: "99px", overflow: "hidden" }}>
                      <div style={{ width: `${p.pct}%`, height: "100%", background: p.color, borderRadius: "99px" }} />
                    </div>
                  </div>
                  <span style={{ fontSize: "11px", color: "#6b7280" }}>{p.pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;