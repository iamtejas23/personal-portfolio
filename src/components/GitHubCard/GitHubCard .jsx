import React from 'react';
import './GitHubCard.css';
import logo from '../../assets/me.jpg';
import { FaGithub } from 'react-icons/fa';

const GitHubCard = () => {
  return (
    <div className="github-card">
      <div className="logo-al">
      <img src={logo} alt="Your Logo" className="github-logo" /> <span>Tejas Mane <br/>
       <p> Frontend Devloper / Devops Engineer</p> </span>
      </div>
      <a
        href="https://github.com/your-username"
        target="_blank"
        rel="noopener noreferrer"
        className="github-follow-button"
      >
       <FaGithub size={24} /> <span>Follow on GitHub</span>
      </a>
    </div>
  );
};

export default GitHubCard;
