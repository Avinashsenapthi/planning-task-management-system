import "./App.css";
import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Tasks from "./pages/Tasks";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}

export default App;