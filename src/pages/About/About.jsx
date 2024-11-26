// About.js
import React from 'react';
import './About.css'; // Import your CSS file for styling
import { FaAws, FaDocker, FaJenkins, FaGithub, FaCloud } from 'react-icons/fa'; // Import icons
import { SiKubernetes } from "react-icons/si";

const About = () => {
  return (
    <div className="about-container">
      <div className="intro">
        <h2>About Me V2</h2>
        <p>
          I am a passionate DevOps Engineer with a deep interest in automation, cloud technologies, and container orchestration.
          My focus is on building scalable, reliable, and efficient systems using modern DevOps tools and practices.
        </p>
        <p>
          I thrive in environments that push the boundaries of technology, particularly in cloud platforms like AWS, automation with Ansible, and
          containerization using Docker and Kubernetes. My goal is to streamline the development lifecycle and enhance collaboration between
          development and operations.
        </p>
      </div>

      <h3>Core Technologies & Tools</h3>
      <div className="skills">
        <div className="skill-item"><FaAws /> AWS</div>
        <div className="skill-item"><FaDocker /> Docker</div>
        <div className="skill-item"><SiKubernetes /> Kubernetes</div>
        <div className="skill-item"><FaJenkins /> Jenkins</div>
        <div className="skill-item"><FaGithub /> GitHub</div>
        <div className="skill-item"><FaCloud /> Cloud Infrastructure</div>
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
        <p>Post Graduation Year: 2024</p>
      </div>
    </div>
  );
};

export default About;
