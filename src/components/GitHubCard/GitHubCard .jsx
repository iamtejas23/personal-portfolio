import React, { useEffect, useState } from 'react';
import './GitHubCard.css';
import logo from '../../assets/me.jpg';
import resume from '../../assets/TejasManeResume.pdf';
import { FaGithub, FaTimes, FaFileAlt } from 'react-icons/fa';

const ROLES = [
  'DevOps Engineer',
  'Cloud & Kubernetes',
  'CI/CD Automation',
  'Frontend Developer',
];

const GitHubCard = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (!openPopup) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpenPopup(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [openPopup]);

  return (
    <>
      <div className="profile-card">

        {/* Left — avatar + identity */}
        <div className="profile-card-left">
          <div
            className="avatar-wrap"
            onClick={() => setOpenPopup(true)}
            onKeyDown={e => e.key === 'Enter' && setOpenPopup(true)}
            role="button"
            tabIndex={0}
            aria-label="View Tejas Mane's resume"
          >
            <img
              src={logo}
              alt="Tejas Mane — DevOps Engineer and Frontend Developer from Kolhapur, India"
              className="avatar-img"
              width="84"
              height="84"
              fetchPriority="high"
            />
            <span className="avatar-overlay" aria-hidden="true">Resume</span>
          </div>

          <div className="profile-meta">
            <h1 className="profile-name">TEJAS MANE</h1>
            <p className="profile-role">
              <span className="role-static">DevOps Engineer &amp; Frontend Developer</span>
              <span key={roleIndex} className="role-rotator" aria-live="polite">{ROLES[roleIndex]}</span>
            </p>
            <div className="profile-badges">
              <span className="badge badge-green">
                <span className="badge-pulse" aria-hidden="true" />
                Available for opportunities
              </span>
              <span className="badge badge-neutral">📍 Kolhapur, India</span>
            </div>
          </div>
        </div>

        {/* Right — CTAs */}
        <div className="profile-card-actions">
          <a
            href="https://github.com/iamtejas23"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-github"
          >
            <FaGithub aria-hidden="true" />
            Follow on GitHub
          </a>
          <button
            className="btn-resume-cta"
            onClick={() => setOpenPopup(true)}
            aria-label="View Tejas Mane's resume"
          >
            <FaFileAlt aria-hidden="true" />
            View Resume
          </button>
        </div>

      </div>

      {/* Resume popup */}
      {openPopup && (
        <div
          className="resume-overlay"
          onClick={() => setOpenPopup(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Resume viewer"
        >
          <div className="resume-modal" onClick={e => e.stopPropagation()}>
            <div className="resume-modal-header">
              <span>Tejas Mane — Resume</span>
              <button
                className="btn-close-modal"
                onClick={() => setOpenPopup(false)}
                aria-label="Close resume"
              >
                <FaTimes aria-hidden="true" />
              </button>
            </div>
            <iframe
              src={resume}
              className="resume-iframe"
              title="Tejas Mane Resume"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default GitHubCard;
