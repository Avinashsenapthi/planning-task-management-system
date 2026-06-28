import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", password: "", confirm: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    if (!form.firstName || !form.email || !form.password) {
      setError("Please fill in all fields."); return;
    }
    if (form.password !== form.confirm) {
      setError("Passwords do not match."); return;
    }
    navigate("/dashboard");
  };

  const inp = { width: "100%", padding: "10px 14px", fontSize: "14px", border: "1.5px solid #e5e7eb", borderRadius: "8px", outline: "none", boxSizing: "border-box" };
  const lbl = { display: "block", fontSize: "13px", fontWeight: "600", color: "#374151", marginBottom: "6px" };

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg,#1e2235,#2d3561)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Arial, sans-serif" }}>
      <div style={{ background: "#fff", borderRadius: "16px", padding: "40px 36px", width: "100%", maxWidth: "440px", boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}>
        <div style={{ textAlign: "center", marginBottom: "28px" }}>
          <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: "#6378ff", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px", fontSize: "22px" }}>📋</div>
          <h1 style={{ fontSize: "22px", fontWeight: "700", color: "#1a1d2e", margin: "0 0 4px" }}>Create account</h1>
          <p style={{ color: "#6b7280", fontSize: "13px", margin: 0 }}>Planning & Task Management System</p>
        </div>

        {error && <div style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: "8px", padding: "10px 14px", color: "#dc2626", fontSize: "13px", marginBottom: "16px" }}>⚠️ {error}</div>}

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "14px" }}>
          <div><label style={lbl}>First name</label><input style={inp} placeholder="John" value={form.firstName} onChange={e => setForm({ ...form, firstName: e.target.value })} /></div>
          <div><label style={lbl}>Last name</label><input style={inp} placeholder="Doe" value={form.lastName} onChange={e => setForm({ ...form, lastName: e.target.value })} /></div>
        </div>

        {[
          { label: "Email address", key: "email", type: "email", ph: "you@example.com" },
          { label: "Password", key: "password", type: "password", ph: "Min. 8 characters" },
          { label: "Confirm password", key: "confirm", type: "password", ph: "Repeat password" },
        ].map(f => (
          <div key={f.key} style={{ marginBottom: "14px" }}>
            <label style={lbl}>{f.label}</label>
            <input style={inp} type={f.type} placeholder={f.ph} value={form[f.key]} onChange={e => setForm({ ...form, [f.key]: e.target.value })} />
          </div>
        ))}

        <button onClick={handleSignup} style={{ width: "100%", padding: "12px", fontSize: "15px", fontWeight: "700", color: "#fff", background: "#6378ff", border: "none", borderRadius: "8px", cursor: "pointer", marginTop: "4px" }}>
          Create account
        </button>

        <p style={{ textAlign: "center", marginTop: "20px", fontSize: "13px", color: "#6b7280" }}>
          Already have an account?{" "}
          <Link to="/" style={{ color: "#6378ff", fontWeight: "700", textDecoration: "none" }}>Sign in</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;