import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const tasks = [
  { name: "Fix login bug", project: "Internship Portal", priority: "High", status: "In progress", due: "Jun 30", pc: "#dc2626", pb: "#fef2f2", sc: "#b45309", sb: "#fef9c3" },
  { name: "Design dashboard", project: "Analytics Tool", priority: "Medium", status: "Todo", due: "Jul 2", pc: "#d97706", pb: "#fffbeb", sc: "#2563eb", sb: "#eff6ff" },
  { name: "Write API docs", project: "Internship Portal", priority: "Low", status: "Done", due: "Jun 25", pc: "#16a34a", pb: "#f0fdf4", sc: "#16a34a", sb: "#f0fdf4" },
  { name: "Database migration", project: "HR System", priority: "High", status: "In progress", due: "Jul 5", pc: "#dc2626", pb: "#fef2f2", sc: "#b45309", sb: "#fef9c3" },
  { name: "UI testing", project: "Mobile App", priority: "Medium", status: "Todo", due: "Jul 10", pc: "#d97706", pb: "#fffbeb", sc: "#2563eb", sb: "#eff6ff" },
];

function Tasks() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main">
        <Navbar title="Tasks" />
        <div className="content">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
            <h1 style={{ fontSize: "20px", fontWeight: "700", color: "#1a1d2e" }}>All tasks</h1>
            <button style={{ padding: "10px 18px", background: "#6378ff", color: "#fff", border: "none", borderRadius: "10px", fontSize: "14px", fontWeight: "600", cursor: "pointer" }}>
              + New task
            </button>
          </div>

          <div style={{ background: "#fff", borderRadius: "12px", border: "1px solid #e5e7eb", overflow: "hidden" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
              <thead>
                <tr style={{ background: "#f9fafb" }}>
                  {["Task", "Project", "Priority", "Status", "Due date"].map((h) => (
                    <th key={h} style={{ textAlign: "left", padding: "12px 16px", color: "#6b7280", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.5px", borderBottom: "1px solid #e5e7eb" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tasks.map((t) => (
                  <tr key={t.name} style={{ borderBottom: "1px solid #f3f4f6" }}>
                    <td style={{ padding: "14px 16px", fontWeight: "600", color: "#1a1d2e" }}>{t.name}</td>
                    <td style={{ padding: "14px 16px", color: "#6b7280" }}>{t.project}</td>
                    <td style={{ padding: "14px 16px" }}>
                      <span style={{ fontSize: "11px", padding: "3px 10px", borderRadius: "99px", background: t.pb, color: t.pc, fontWeight: "600" }}>{t.priority}</span>
                    </td>
                    <td style={{ padding: "14px 16px" }}>
                      <span style={{ fontSize: "11px", padding: "3px 10px", borderRadius: "99px", background: t.sb, color: t.sc, fontWeight: "600" }}>{t.status}</span>
                    </td>
                    <td style={{ padding: "14px 16px", color: "#6b7280" }}>{t.due}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tasks;