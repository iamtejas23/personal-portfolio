import React from 'react';
import './About.css';
import {
  FaAws, FaDocker, FaGithub, FaCloud, FaReact,
} from 'react-icons/fa';
import {
  SiKubernetes, SiTerraform, SiPrometheus, SiGrafana, SiAzuredevops, SiJenkins,
} from 'react-icons/si';
import useSEO from '../../hooks/useSEO';

const TECH_ITEMS = [
  { icon: <FaAws />,         label: 'AWS',          cls: 'aws'        },
  { icon: <SiJenkins />,     label: 'Jenkins',      cls: 'jenkins'    },
  { icon: <FaDocker />,      label: 'Docker',       cls: 'docker'     },
  { icon: <SiKubernetes />,  label: 'Kubernetes',   cls: 'k8s'        },
  { icon: <SiTerraform />,   label: 'Terraform',    cls: 'terraform'  },
  { icon: <SiPrometheus />,  label: 'Prometheus',   cls: 'prometheus' },
  { icon: <SiGrafana />,     label: 'Grafana',      cls: 'grafana'    },
  { icon: <SiAzuredevops />, label: 'Azure DevOps', cls: 'azure'      },
  { icon: <FaReact />,       label: 'React',        cls: 'react'      },
  { icon: <FaGithub />,      label: 'GitHub',       cls: 'github-icon'},
  { icon: <FaCloud />,       label: 'Cloud',        cls: 'cloud'      },
];

const About = () => {
  useSEO({
    title: 'About Tejas Mane — DevOps Engineer, AWS & Kubernetes Expert',
    description: 'Learn about Tejas Mane, a DevOps Engineer from Kolhapur, India. Expert in AWS, Kubernetes, Docker, Terraform, Jenkins CI/CD, Ansible, ArgoCD, and React. MCA with 9.3 CGPA.',
    canonical: '/about',
    ogType: 'profile',
  });

  return (
    <div className="about-page">
      <div className="about-container">

        <div className="about-intro">
          <h1>About Tejas Mane — DevOps Engineer</h1>
          <p>
            I am a passionate <strong>DevOps Engineer</strong> specialising in automation, cloud technologies,
            and container orchestration. My expertise lies in leveraging modern toolchains to
            accelerate development cycles and build resilient, scalable infrastructure.
          </p>
          <p>
            With hands-on experience in <strong>Kubernetes</strong>, <strong>Docker</strong>, <strong>Terraform</strong>, and <strong>AWS</strong>, I have
            streamlined deployment pipelines and implemented infrastructure-as-code solutions
            that reduce setup time by up to 40%.
          </p>
        </div>

        <h2 className="about-sub">Core Technologies</h2>
        <div className="about-skills">
          {TECH_ITEMS.map(({ icon, label, cls }) => (
            <div key={label} className={`skill-chip ${cls}`}>
              {icon}
              <span>{label}</span>
            </div>
          ))}
        </div>

        <h2 className="about-sub">Notable Projects</h2>
        <div className="about-projects">
          <div className="about-project-item">
            <h3>Terraform Three-Tier Architecture on AWS</h3>
            <p>Automated a scalable three-tier architecture on AWS using Terraform and Jenkins — achieved a 40% reduction in setup time.</p>
          </div>
          <div className="about-project-item">
            <h3>ArgoCD GitOps with Kubernetes on AWS</h3>
            <p>Implemented GitOps principles for continuous application deployment using ArgoCD and kOps, improving cluster reliability.</p>
          </div>
          <div className="about-project-item">
            <h3>ELK Stack Deployment on AWS</h3>
            <p>Deployed ELK Stack on AWS for centralised monitoring with CloudWatch integration for enhanced observability and alerting.</p>
          </div>
        </div>

        <h2 className="about-sub">Education</h2>
        <div className="about-education">
          <div className="about-edu-item">
            <div className="edu-year">2024</div>
            <div className="edu-detail">
              <h3>Master of Computer Applications (MCA)</h3>
              <p>Bharati Vidyapeeth Institute of Management, Kolhapur &mdash; <strong>9.3 / 10 CGPA</strong></p>
            </div>
          </div>
          <div className="about-edu-item">
            <div className="edu-year">2022</div>
            <div className="edu-detail">
              <h3>Bachelor of Computer Applications (BCA)</h3>
              <p>Bharati Vidyapeeth Institute of Management, Kolhapur &mdash; <strong>9.03 / 10 CGPA</strong></p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
