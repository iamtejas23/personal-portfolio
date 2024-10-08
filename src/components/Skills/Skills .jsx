// Skills.js
import React from 'react';
import './Skills.css'; // Import your CSS file
import { FaHtml5, FaJsSquare, FaCss3Alt, FaReact, FaNodeJs, FaAws, FaDocker, FaNpm, FaGithub, FaServer, FaJenkins, FaBitbucket, FaCloud  } from 'react-icons/fa'; // Importing Font Awesome icons
import { SiTerraform } from "react-icons/si";
import { SiAmazonec2, SiAmazonroute53, SiAnsible, SiMongodb, SiMysql, SiAmazoneks, SiPostman, SiNextdotjs, SiGrafana, SiRedux, SiPrometheus, SiAwsorganizations  } from "react-icons/si";
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
            <li><FaHtml5 style={{ color: '#E34F26' }} /> HTML5</li>
            <li><FaJsSquare style={{ color: '#F7DF1E' }} /> JavaScript</li>
            <li><FaCss3Alt style={{ color: '#1572B6' }} /> CSS3</li>
            <li><FaReact style={{ color: '#61DBFB' }} /> React</li>
            <li><SiNextdotjs style={{ color: 'white' }} /> Next.js 13</li>
            <li><RiGatsbyFill style={{ color: '#663399' }} /> Gatsby</li>
            <li><SiRedux style={{ color: '#764ABC' }} /> Redux</li>
            <li><FaNpm style={{ color: '#CB3837' }} /> NPM</li>
            <li><IoLogoVue style={{ color: '#4FC08D' }} /> Vue.js</li>
          </ul>
        </div>

        {/* Backend Technologies Card */}
        <div className="skills-card">
          <h3>Backend Technologies</h3>
          <ul>
            <li><FaNodeJs style={{ color: '#68A063' }} /> Node.js</li>
            <li><FaNodeJs style={{ color: '#68A063' }} /> Express.js</li>
            <li><FaServer style={{ color: '#4A4A4A' }} /> RESTful APIs</li>
            <li><FaServer style={{ color: '#E535AB' }} /> GraphQL</li>
            <li><FaAws style={{ color: '#FF9900' }} /> Serverless Architecture</li>
            <li><SiPostman style={{ color: '#FF6C37' }} /> Postman</li>
            <li><SiMongodb style={{ color: '#47A248' }} /> MongoDB</li>
            <li><SiMysql style={{ color: '#4479A1' }} /> MySQL</li>
            <li><BiLogoPostgresql style={{ color: '#336791' }} /> PostgreSQL</li>
          </ul>
        </div>

        {/* AWS Card */}
        <div className="skills-card">
          <h3>AWS</h3>
          <ul>
            <li><SiAmazonec2 style={{ color: '#FF9900' }} /> EC2</li>
            <li><FaBitbucket style={{ color: '#205081' }} /> S3 Bucket</li>
            <li><FaDatabase style={{ color: '#FF9900' }} /> RDS</li>
            <li><FaCloud style={{ color: '#232F3E' }} /> VPC</li>
            <li><SiAmazonroute53 style={{ color: '#FF9900' }} /> Route 53</li>
            <li><FaAws style={{ color: '#FF9900' }} /> Cloud Formation</li>
            <li><SiAmazoneks style={{ color: '#FF9900' }} /> EKS</li>
            <li><SiAwsorganizations style={{ color: '#FF9900' }} /> Organizations</li>
            <li><TbLoadBalancer style={{ color: '#28B4C8' }} /> Load Balancer</li>
          </ul>
        </div>

        {/* DevOps Card */}
        <div className="skills-card">
          <h3>DevOps</h3>
          <ul>
            <li><FaGithub style={{ color: '#fff' }} /> Git/GitHub</li>
            <li><FaDocker style={{ color: '#0DB7ED' }} /> Docker</li>
            <li><FaServer style={{ color: '#4A4A4A' }} /> (CI/CD)</li>
            <li><FaJenkins style={{ color: '#D24939' }} /> Jenkins</li>
            <li><SiTerraform style={{ color: '#623CE4' }} /> Terraform</li>
            <li><SiAnsible style={{ color: '#EE0000' }} /> Ansible</li>
            <li><SiGrafana style={{ color: '#F46800' }} /> Grafana</li>
            <li><SiPrometheus style={{ color: '#E6522C' }} /> Prometheus</li>
            <li><BiLogoKubernetes style={{ color: '#326CE5' }} /> Kubernetes</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Skills;
