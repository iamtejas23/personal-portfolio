// About.js
import React from 'react';
import './About.css'; // Import your CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <div className="abt">
      <h2>About Me</h2>
      <p>
        I am a passionate web and app developer with a strong foundation in
        front-end and back-end technologies. My goal is to create efficient,
        scalable, and innovative solutions that meet the needs of users.
      </p>
      <p>
        As a developer, I enjoy working with technologies such as React for
        building user interfaces, Node.js for server-side development, and
        mobile frameworks like React Native for cross-platform app development.
      </p>
      <p>
        In addition to coding, I love staying updated with the latest
        technologies and trends in the tech industry. I believe in continuous
        learning and strive to improve my skills to deliver high-quality
        software.
      </p>
      </div>

      

      <h3>Education</h3>
      <div className="education-item">
        <h4>Bharati Vidyapeeth Institute of Management Kolhapur</h4>
        <p>Bachelor of Computer Applications</p>
        <p>Graduation Year: 2022</p>
      </div>

      <div className="education-item">
        <h4>Bharati Vidyapeeth Institute of Management Kolhapur</h4>
        <p>Master's of Computer Applications</p>
        <p> Post Graduation Year: 2024</p>
      </div>

      {/* Add more education items as needed */}
    </div>
  );
};

export default About;
