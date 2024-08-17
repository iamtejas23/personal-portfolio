// src/Projects.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

// Import your project images
import pro1 from '../../assets/1.png';
import pro2 from '../../assets/2.png';
import pro3 from '../../assets/3.png';
import pro4 from '../../assets/4.png';
import dev1 from '../../assets/netflix.gif';
import dev2 from '../../assets/docker.gif';
import dev3 from '../../assets/argo.gif';
import dev4 from '../../assets/Terraform.gif';

const projectsData = [
  {
    id: 5,
    name: 'Netflix Project CI/CD',
    description: 'Automating the CI/CD pipeline for my applications.',
    image: dev1,
    link: 'https://www.linkedin.com/posts/iamtejas23_netflixtech-devops-cicd-activity-7214626995161210880-VJFQ?utm_source=share&utm_medium=member_desktop',
  },
  {
    id: 6,
    name: 'Docker Project CI/CD',
    description: 'An automated CI/CD pipeline for Dockerized applications!',
    image: dev2,
    link: 'https://www.linkedin.com/posts/iamtejas23_devops-cicd-docker-activity-7217474136330162176-RbDP?utm_source=share&utm_medium=member_desktop',
  },
  {
    id: 7,
    name: 'Argo CD Project',
    description: 'DevOps project leveraging ArgoCD and kOps on AWS!',
    image: dev3,
    link: 'https://www.linkedin.com/posts/iamtejas23_gitops-argocd-kops-activity-7222513866822344705-8SO-?utm_source=share&utm_medium=member_desktop',
  },
  {
    id: 8,
    name: 'Terraform Project',
    description: 'Three-tier architecture on AWS, Infrastructure as Code (IaC)',
    image: dev4,
    link: 'https://www.linkedin.com/posts/iamtejas23_devops-terraform-infrastructureascode-activity-7228700736308600832-z8TB?utm_source=share&utm_medium=member_desktop',},
  
  // Add more projects as needed
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
