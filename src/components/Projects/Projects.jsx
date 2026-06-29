import React from 'react';
import { FaReact, FaDocker, FaAws, FaJenkins, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';
import { SiTerraform, SiAnsible, SiApachetomcat, SiApachemaven, SiArgo, SiNextdotjs } from 'react-icons/si';
import { BiLogoKubernetes } from 'react-icons/bi';

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
    name: 'Netflix CI/CD Pipeline',
    description: 'End-to-end CI/CD pipeline automating build, test, and deploy for a Netflix-style app.',
    image: dev1,
    link: 'https://www.linkedin.com/posts/iamtejas23_netflixtech-devops-cicd-activity-7214626995161210880-VJFQ?utm_source=share&utm_medium=member_desktop',
    category: 'DevOps',
    techIcons: [
      <FaAws key="aws" style={{ color: '#FF9900' }} />,
      <FaJenkins key="jen" style={{ color: '#D24939' }} />,
      <SiAnsible key="ans" style={{ color: '#EE0000' }} />,
      <FaGithub key="gh" style={{ color: '#e2e2e2' }} />,
      <SiApachetomcat key="tom" style={{ color: '#F8DC75' }} />,
      <SiApachemaven key="mvn" style={{ color: '#C71A36' }} />,
    ],
  },
  {
    id: 6,
    name: 'Docker CI/CD Pipeline',
    description: 'Automated CI/CD pipeline for Dockerized applications with Jenkins and AWS.',
    image: dev2,
    link: 'https://www.linkedin.com/posts/iamtejas23_devops-cicd-docker-activity-7217474136330162176-RbDP?utm_source=share&utm_medium=member_desktop',
    category: 'DevOps',
    techIcons: [
      <FaAws key="aws" style={{ color: '#FF9900' }} />,
      <FaJenkins key="jen" style={{ color: '#D24939' }} />,
      <FaGithub key="gh" style={{ color: '#e2e2e2' }} />,
      <FaDocker key="dock" style={{ color: '#0db7ed' }} />,
    ],
  },
  {
    id: 7,
    name: 'ArgoCD GitOps on AWS',
    description: 'GitOps-driven continuous deployment with ArgoCD and kOps on AWS Kubernetes.',
    image: dev3,
    link: 'https://www.linkedin.com/posts/iamtejas23_gitops-argocd-kops-activity-7222513866822344705-8SO-?utm_source=share&utm_medium=member_desktop',
    category: 'DevOps',
    techIcons: [
      <FaAws key="aws" style={{ color: '#FF9900' }} />,
      <FaGithub key="gh" style={{ color: '#e2e2e2' }} />,
      <SiArgo key="argo" style={{ color: '#d16026' }} />,
      <BiLogoKubernetes key="k8s" style={{ color: '#326ce5' }} />,
    ],
  },
  {
    id: 8,
    name: 'Terraform Three-Tier Infra',
    description: 'Three-tier architecture on AWS using Terraform IaC and Jenkins automation.',
    image: dev4,
    link: 'https://www.linkedin.com/posts/iamtejas23_devops-terraform-infrastructureascode-activity-7228700736308600832-z8TB?utm_source=share&utm_medium=member_desktop',
    category: 'DevOps',
    techIcons: [
      <FaAws key="aws" style={{ color: '#FF9900' }} />,
      <FaGithub key="gh" style={{ color: '#e2e2e2' }} />,
      <FaJenkins key="jen" style={{ color: '#D24939' }} />,
      <SiTerraform key="tf" style={{ color: '#5C4EE5' }} />,
    ],
  },
  {
    id: 1,
    name: 'Airbnb Clone',
    description: 'Full-featured Airbnb clone built with Next.js — search, listings, and booking UI.',
    image: pro1,
    link: 'https://github.com/iamtejas23/air-bnb-clone',
    category: 'Frontend',
    techIcons: [
      <SiNextdotjs key="next" style={{ color: '#e2e2e2' }} />,
      <FaGithub key="gh" style={{ color: '#e2e2e2' }} />,
    ],
  },
  {
    id: 2,
    name: 'Thunder Security App',
    description: 'React Native mobile security application with real-time monitoring.',
    image: pro2,
    link: 'https://github.com/iamtejas23/thunder',
    category: 'Mobile',
    techIcons: [
      <FaReact key="rn" style={{ color: '#61DAFB' }} />,
      <FaGithub key="gh" style={{ color: '#e2e2e2' }} />,
    ],
  },
  {
    id: 3,
    name: 'Zomato Clone',
    description: 'Pixel-perfect Zomato food delivery clone built with React.js.',
    image: pro3,
    link: 'https://github.com/iamtejas23/react-zomato-clone',
    category: 'Frontend',
    techIcons: [
      <FaReact key="r" style={{ color: '#61DAFB' }} />,
      <FaGithub key="gh" style={{ color: '#e2e2e2' }} />,
    ],
  },
  {
    id: 4,
    name: 'RapidQuest Dashboard',
    description: 'Analytics dashboard UI built with React.js — charts, KPIs, and data tables.',
    image: pro4,
    link: 'https://github.com/iamtejas23/rapidquest',
    category: 'Frontend',
    techIcons: [
      <FaReact key="r" style={{ color: '#61DAFB' }} />,
      <FaGithub key="gh" style={{ color: '#e2e2e2' }} />,
    ],
  },
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="section-heading">Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <article key={project.id} className="project-card-wrap">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
              aria-label={`View ${project.name} project`}
            >
              <div className="project-img-wrap">
                <img
                  src={project.image}
                  alt={`${project.name} — ${project.description}`}
                  loading="lazy"
                  width="400"
                  height="225"
                />
                <div className="project-img-overlay" aria-hidden="true">
                  <FaExternalLinkAlt />
                </div>
              </div>

              <div className="project-info">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.name}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="tech-icons" aria-label="Technologies used">
                  {project.techIcons.map((icon, i) => (
                    <span key={i} className="tech-icon">{icon}</span>
                  ))}
                </div>
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
