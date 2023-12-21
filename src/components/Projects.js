// src/components/Projects.js
import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  return (
    <div className="projects">
      <h2>My Projects</h2>
      {/* Display your GitHub repositories with icons */}
      <div className="project">
        <p>Project Name 1</p>
        <FaGithub />
      </div>
      <div className="project">
        <p>Project Name 2</p>
        <FaGithub />
      </div>
      {/* Add more projects as needed */}
    </div>
  );
};

export default Projects;
