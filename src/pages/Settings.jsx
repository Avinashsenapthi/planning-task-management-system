import React, { useState } from 'react';
import './Settings.css';

const Settings = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="settings-container">
      <h1>Settings</h1>
      <div className="settings-card">
        <h3>Preferences</h3>
        <div className="settings-item">
          <div>
            <p className="settings-label">Notifications</p>
            <p className="settings-desc">Receive task and project updates</p>
          </div>
          <label className="toggle">
            <input
              type="checkbox"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
            />
            <span className="slider"></span>
          </label>
        </div>
        <div className="settings-item">
          <div>
            <p className="settings-label">Dark Mode</p>
            <p className="settings-desc">Switch to dark theme</p>
          </div>
          <label className="toggle">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            <span className="slider"></span>
          </label>
        </div>
      </div>
      <div className="settings-card">
        <h3>Account</h3>
        <div className="settings-item">
          <div>
            <p className="settings-label">Username</p>
            <p className="settings-desc">Avinash Senapthi</p>
          </div>
        </div>
        <div className="settings-item">
          <div>
            <p className="settings-label">Internship</p>
            <p className="settings-desc">SWECHA AI Internship 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;