import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <h1>Profile</h1>
      <div className="profile-card">
        <div className="profile-avatar">A</div>
        <div className="profile-info">
          <h2>Avinash Senapthi</h2>
          <p>Role: Intern</p>
          <p>Email: avinash@example.com</p>
          <p>Team: PTMS Team</p>
          <p>Internship: SWECHA AI Internship 2026</p>
        </div>
      </div>
      <div className="profile-details">
        <h3>Team Members</h3>
        <ul>
          <li>Avinash</li>
          <li>Nandhan</li>
          <li>Vennela</li>
          <li>Archana</li>
          <li>Vardhan</li>
          <li>Phani</li>
          <li>Sasidhar</li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;