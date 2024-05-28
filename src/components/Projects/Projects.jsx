// src/Projects.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

// Import your project images
import pro1 from '../../assets/1.png';
import pro2 from '../../assets/2.png';
import pro3 from '../../assets/3.png';
import pro4 from '../../assets/4.png';

const projectsData = [
  {
    id: 1,
    name: 'Airbnb Clone',
    description: 'Crafting an Airbnb clone in Next.js',
    image: pro1,
    link: 'https://github.com/iamtejas23/air-bnb-clone', // Specify the route for the project
  },
  {
    id: 2,
    name: 'Thunder Security',
    description: 'React Native Security App.',
    image: pro2,
    link: 'https://github.com/iamtejas23/thunder',
  },
  {
    id: 3,
    name: 'Zomato Clone',
    description: 'Zomato clone in React.js',
    image: pro3,
    link: 'https://github.com/iamtejas23/react-zomato-clone', // External link
  },
  {
    id: 4,
    name: 'RapidQuest (Dashboard)',
    description: 'React.js WebApp dashboard UI.',
    image: pro4,
    link: 'https://github.com/iamtejas23/rapidquest',
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div className="proj">
      <h2>Projects</h2>
      <div className="projects-container">
        {projectsData.map((project) => (
          <React.Fragment key={project.id}>
            {project.link.startsWith('http') ? (
              // External link (open in new tab)
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-card">
                <img src={project.image} alt={project.name} />
                <div className="prodisk">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </div>
              </a>
            ) : (
              // Internal link
              <Link to={project.link} key={project.id} className="project-card">
                <img src={project.image} alt={project.name} />
                <div className="prodisk">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </div>
              </Link>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Projects;
