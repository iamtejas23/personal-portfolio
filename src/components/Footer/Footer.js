// src/components/Footer.js
import React from 'react';
import './footer.css'

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <p>&copy; 2023 Tejas Mane</p>
      </footer>
      <div className="social">
        <a href="https://www.instagram.com/iamtejas23/" className="social-icon">
          Instagram
        </a>
        <a href="https://www.linkedin.com/in/tejas-mane-9621221b4/" className="social-icon">
          Linkedin
        </a>
        <a href="https://github.com/iamtejas23" className="social-icon">
          GitHub
        </a>
      </div>
    </>
  );
};

export default Footer;
