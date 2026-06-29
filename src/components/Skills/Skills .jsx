import React from 'react';
import './Skills.css';
import {
  FaHtml5, FaJsSquare, FaCss3Alt, FaReact, FaNodeJs, FaAws,
  FaDocker, FaNpm, FaGithub, FaServer, FaJenkins, FaBitbucket, FaCloud,
} from 'react-icons/fa';
import { SiTerraform, SiAmazonec2, SiAmazonroute53, SiAnsible, SiMongodb,
  SiMysql, SiAmazoneks, SiPostman, SiNextdotjs, SiGrafana, SiRedux,
  SiPrometheus, SiAwsorganizations } from 'react-icons/si';
import { FaDatabase } from 'react-icons/fa6';
import { BiLogoKubernetes, BiLogoPostgresql } from 'react-icons/bi';
import { RiGatsbyFill } from 'react-icons/ri';
import { IoLogoVue } from 'react-icons/io5';
import { TbLoadBalancer } from 'react-icons/tb';

const SKILL_CARDS = [
  {
    title: 'Frontend',
    skills: [
      { icon: <FaHtml5 style={{ color: '#E34F26' }} />,     label: 'HTML5' },
      { icon: <FaJsSquare style={{ color: '#F7DF1E' }} />,  label: 'JavaScript' },
      { icon: <FaCss3Alt style={{ color: '#1572B6' }} />,   label: 'CSS3' },
      { icon: <FaReact style={{ color: '#61DBFB' }} />,     label: 'React' },
      { icon: <SiNextdotjs style={{ color: '#e2e2e2' }} />, label: 'Next.js 13' },
      { icon: <RiGatsbyFill style={{ color: '#663399' }} />,label: 'Gatsby' },
      { icon: <SiRedux style={{ color: '#764ABC' }} />,     label: 'Redux' },
      { icon: <FaNpm style={{ color: '#CB3837' }} />,       label: 'NPM' },
      { icon: <IoLogoVue style={{ color: '#4FC08D' }} />,   label: 'Vue.js' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { icon: <FaNodeJs style={{ color: '#68A063' }} />,    label: 'Node.js' },
      { icon: <FaNodeJs style={{ color: '#68A063' }} />,    label: 'Express.js' },
      { icon: <FaServer style={{ color: '#a0a0b8' }} />,    label: 'RESTful APIs' },
      { icon: <FaServer style={{ color: '#E535AB' }} />,    label: 'GraphQL' },
      { icon: <FaAws style={{ color: '#FF9900' }} />,       label: 'Serverless' },
      { icon: <SiPostman style={{ color: '#FF6C37' }} />,   label: 'Postman' },
      { icon: <SiMongodb style={{ color: '#47A248' }} />,   label: 'MongoDB' },
      { icon: <SiMysql style={{ color: '#4479A1' }} />,     label: 'MySQL' },
      { icon: <BiLogoPostgresql style={{ color: '#336791' }} />, label: 'PostgreSQL' },
    ],
  },
  {
    title: 'AWS',
    skills: [
      { icon: <SiAmazonec2 style={{ color: '#FF9900' }} />,        label: 'EC2' },
      { icon: <FaBitbucket style={{ color: '#2684FF' }} />,         label: 'S3 Bucket' },
      { icon: <FaDatabase style={{ color: '#FF9900' }} />,          label: 'RDS' },
      { icon: <FaCloud style={{ color: '#a0a0b8' }} />,             label: 'VPC' },
      { icon: <SiAmazonroute53 style={{ color: '#FF9900' }} />,     label: 'Route 53' },
      { icon: <FaAws style={{ color: '#FF9900' }} />,               label: 'CloudFormation' },
      { icon: <SiAmazoneks style={{ color: '#FF9900' }} />,         label: 'EKS' },
      { icon: <SiAwsorganizations style={{ color: '#FF9900' }} />,  label: 'Organizations' },
      { icon: <TbLoadBalancer style={{ color: '#28B4C8' }} />,      label: 'Load Balancer' },
    ],
  },
  {
    title: 'DevOps',
    skills: [
      { icon: <FaGithub style={{ color: '#e2e2e2' }} />,       label: 'Git / GitHub' },
      { icon: <FaDocker style={{ color: '#0DB7ED' }} />,        label: 'Docker' },
      { icon: <FaJenkins style={{ color: '#D24939' }} />,       label: 'Jenkins' },
      { icon: <SiTerraform style={{ color: '#623CE4' }} />,     label: 'Terraform' },
      { icon: <SiAnsible style={{ color: '#EE0000' }} />,       label: 'Ansible' },
      { icon: <SiGrafana style={{ color: '#F46800' }} />,       label: 'Grafana' },
      { icon: <SiPrometheus style={{ color: '#E6522C' }} />,    label: 'Prometheus' },
      { icon: <BiLogoKubernetes style={{ color: '#326CE5' }} />,label: 'Kubernetes' },
    ],
  },
];

const Skills = () => {
  return (
    <section className="skillbase">
      <h2 className="section-heading">Skills</h2>
      <div className="skills-container">
        {SKILL_CARDS.map(({ title, skills }) => (
          <div key={title} className="skills-card">
            <h3>{title}</h3>
            <ul>
              {skills.map(({ icon, label }) => (
                <li key={label}>
                  {icon}
                  {label}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
