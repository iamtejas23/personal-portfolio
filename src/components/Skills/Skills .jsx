// Skills.js
import React from 'react';
import './Skills.css'; // Import your CSS file
import { FaHtml5, FaJsSquare, FaCss3Alt, FaReact, FaNodeJs, FaAws, FaDocker, FaNpm, FaGithub, FaServer, FaJenkins, FaBitbucket, FaCloud  } from 'react-icons/fa'; // Importing Font Awesome icons
import { SiTerraform } from "react-icons/si";
import { SiAmazonec2, SiAmazonroute53, SiAnsible,SiMongodb, SiMysql, SiAmazoneks, SiPostman, SiNextdotjs, SiGrafana, SiRedux, SiPrometheus, SiAwsorganizations  } from "react-icons/si";
import { FaDatabase } from "react-icons/fa6";
import { BiLogoKubernetes, BiLogoPostgresql  } from "react-icons/bi";
import { RiGatsbyFill } from "react-icons/ri";
import { IoLogoVue } from "react-icons/io5";
import { TbLoadBalancer } from "react-icons/tb";

const Skills = () => {
  return (
    <div className="skillbase">
      <h2>What I Know</h2>
      <div className="skills-container">
        
        {/* Frontend Technologies Card */}
        <div className="skills-card">
          <h3>Frontend Technologies</h3>
          <ul>
            <li><FaHtml5 /> HTML5</li>
            <li><FaJsSquare /> JavaScript (ES6+)</li>
            <li><FaCss3Alt /> CSS3 (Sass/LESS)</li>
            <li><FaReact /> React</li>
            <li><SiNextdotjs  /> Next.js 13</li>
            <li><RiGatsbyFill /> Gatsby</li>
            <li><SiRedux /> Redux</li>
            <li>< FaNpm /> NPM </li>
            <li><IoLogoVue /> Vue.js</li>
          </ul>
        </div>

        {/* Backend Technologies Card */}
        <div className="skills-card">
          <h3>Backend Technologies</h3>
          <ul>
            <li><FaNodeJs /> Node.js</li>
            <li><FaNodeJs /> Express.js</li>
            <li><FaServer /> RESTful APIs</li>
            <li><FaServer /> GraphQL</li>
            <li><FaAws /> Serverless Architecture</li>
            <li><SiPostman /> Postman</li>
            <li><SiMongodb /> MongoDB</li>
            <li><SiMysql /> MySQL</li>
            <li><BiLogoPostgresql /> PostgreSQL</li>
          </ul>
        </div>

        {/* AWS Card */}
        <div className="skills-card">
          <h3>AWS</h3>
          <ul>
            <li><SiAmazonec2 /> EC2</li>
            <li><FaBitbucket /> S3 Bucket </li>
            <li><FaDatabase /> RDS</li>
            <li><FaCloud /> VPC</li>
            <li><SiAmazonroute53 /> Route 53</li>
            <li><FaAws /> Cloud Formation</li>
            <li><SiAmazoneks /> EKS</li>
            <li><SiAwsorganizations /> Organizations</li>
            <li><TbLoadBalancer /> Load Balancer</li>
          </ul>
        </div>

        {/* DevOps Card */}
        <div className="skills-card">
          <h3>DevOps</h3>
          <ul>
            <li><FaGithub /> Git/GitHub</li>
            <li><FaDocker /> Docker</li>
            <li><FaServer /> (CI/CD)</li>
            <li><FaJenkins /> Jenkins</li>
            <li><SiTerraform /> Terraform</li>
            <li><SiAnsible /> Ansible</li>
            <li><SiGrafana /> Grafana</li>
            <li><SiPrometheus /> Prometheus</li>
            <li><BiLogoKubernetes /> Kubernetes</li>

          </ul>
        </div>

      </div>
    </div>
  );
};

export default Skills;
