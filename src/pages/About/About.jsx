import React from 'react';
import './About.css'; 
import { 
  FaAws, FaDocker, FaGithub, FaCloud, FaReact 
} from 'react-icons/fa';
import { SiKubernetes, SiTerraform, SiPrometheus, SiGrafana, SiAzuredevops, SiJenkins } from 'react-icons/si';

const About = () => {
  return (
    <div className="about-container">
      <div className="intro">
        <h2>About Me V2</h2>
        <p>
          I am a passionate DevOps Engineer specializing in automation, cloud technologies, and container orchestration.
          My expertise lies in leveraging modern tools to enhance development cycles and improve system efficiency.
        </p>
        <p>
          With hands-on experience in technologies like Kubernetes, Docker, Terraform, and AWS, I have successfully 
          streamlined deployment processes and implemented scalable infrastructure solutions. 
        </p>
      </div>

      <h3>Core Technologies & Tools</h3>
      <div className="skills">
        <div className="skill-item aws"><FaAws /> AWS</div>
        <div className="skill-item jenkins"><SiJenkins /> Jenkins</div>
        <div className="skill-item docker"><FaDocker /> Docker</div>
        <div className="skill-item k8s"><SiKubernetes /> Kubernetes</div>
        <div className="skill-item terraform"><SiTerraform /> Terraform</div>
        <div className="skill-item prometheus"><SiPrometheus /> Prometheus</div>
        <div className="skill-item grafana"><SiGrafana /> Grafana</div>
        <div className="skill-item azure"><SiAzuredevops /> Azure DevOps</div>
        <div className="skill-item react"><FaReact /> React</div>
        <div className="skill-item github"><FaGithub /> GitHub</div>
        <div className="skill-item cloud"><FaCloud /> Cloud Computing</div>
      </div>

      <h3>Notable Projects</h3>
      <div className="project-item">
        <h4>Terraform Three-Tier Architecture</h4>
        <p>Automated a scalable three-tier architecture on AWS using Terraform and Jenkins. Achieved a 40% reduction in setup time.</p>
      </div>
      <div className="project-item">
        <h4>ArgoCD with Kubernetes on AWS</h4>
        <p>Implemented GitOps principles for continuous application deployment using ArgoCD and kOps, improving cluster performance.</p>
      </div>
      <div className="project-item">
        <h4>ELK Stack Deployment</h4>
        <p>Deployed ELK Stack on AWS for centralized monitoring, enhancing visibility and alerting through CloudWatch integration.</p>
      </div>

      <h3>Education</h3>
      <div className="education-item">
        <h4>Bharati Vidyapeeth Institute of Management, Kolhapur</h4>
        <p>Master of Computer Applications (9.3/10 CGPA)</p>
        <p>Graduation Year: 2024</p>
      </div>
      <div className="education-item">
        <h4>Bharati Vidyapeeth Institute of Management, Kolhapur</h4>
        <p>Bachelor of Computer Applications (9.03/10 CGPA)</p>
        <p>Graduation Year: 2022</p>
      </div>
    </div>
  );
};

export default About;
