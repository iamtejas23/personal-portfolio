import React, { useState } from 'react';
import './GitHubCard.css';
import logo from '../../assets/me.jpg';
import resume from '../../assets/TejasManeResume.pdf';
import { FaGithub } from 'react-icons/fa';

const GitHubCard = () => {
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <>
      <div className="github-card">

        {/* LEFT SECTION EXACT LIKE YOUR FIRST DESIGN */}
        <div className="left-container">

          <div className="profile-column">
            <img
              src={logo}
              alt="Profile"
              className="github-logo"
              onClick={() => setOpenPopup(true)}
            />
            <small className="click-here">Click profile to view resume</small>
          </div>

          <div className="name-column">
            <h2 className="name-title">TEJAS MANE</h2>
            <p className="role-title">DEVOPS ENGINEER / FRONTEND DEVELOPER</p>
          </div>

        </div>

        {/* RIGHT SIDE BUTTON */}
        <a
          href="https://github.com/iamtejas23"
          target="_blank"
          rel="noopener noreferrer"
          className="github-follow-button"
        >
          <FaGithub size={24} /> Follow on GitHub
        </a>

      </div>

      {/* POPUP */}
      {openPopup && (
        <div className="resume-popup-overlay" onClick={() => setOpenPopup(false)}>
          <div className="resume-popup" onClick={(e) => e.stopPropagation()}>
            <div className="popup-top">
              <button className="close-btn" onClick={() => setOpenPopup(false)}>Close</button>
            </div>
            <iframe src={resume} className="resume-frame" title="resume"></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default GitHubCard;
