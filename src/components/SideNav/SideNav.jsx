import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaEnvelope, FaTwitter, FaBars, FaTimes, FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa';
import './SideNav.css';

const SideNav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className={`toggle-btn ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <div className={`sidenav ${isMenuOpen ? 'open' : ''}`}>
        <nav>
          <div className="sidebar-item">
            <FaHome size={24}  />
            <span><Link to="/">Home</Link></span>
          </div>
          <div className="sidebar-item">
            <FaInfoCircle size={24}  />
            <span><Link to="/about">About</Link></span>
          </div>
          <div className="sidebar-item">
            <FaEnvelope size={24}  />
            <span><Link to="/contact">Contact</Link></span>
          </div>
          <div className="sidebar-item">
            <FaFileAlt size={24}  />
            <span><Link target="_blank" rel="noopener noreferrer" to="https://drive.google.com/file/d/1VlRHnxyNPguibvLkLQ6kd8_TM0nmz6XO/view?usp=sharing">Resume</Link></span>
          </div>
        </nav>

        <div className="social-icons">
          <h2>Socials</h2>
          <a href="https://github.com/iamtejas23" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} color="#ffffff" className='ic' /> Github
          </a>
          <a href="https://twitter.com/IamTejas23" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={24} color="#1DA1F2" className='ic' /> Twitter
          </a>
          <a href="https://www.linkedin.com/in/iamtejas23/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} color="#0077B5" className='ic' /> LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
