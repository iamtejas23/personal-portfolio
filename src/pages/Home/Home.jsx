import React from 'react';
import './home.css';
import GitHubCard from '../../components/GitHubCard/GitHubCard ';
import Projects from '../../components/Projects/Projects';
import Skills from '../../components/Skills/Skills ';
import useSEO from '../../hooks/useSEO';

const Home = () => {
  useSEO({
    title: 'Tejas Mane | DevOps Engineer & Cloud Infrastructure Expert — Kolhapur, India',
    description: 'Tejas Mane is a DevOps Engineer from Kolhapur, India, specialising in AWS, Kubernetes, Docker, Terraform, Jenkins CI/CD, Ansible, and React development. MCA graduate with 9.3 CGPA.',
    canonical: '/',
    ogType: 'profile',
  });

  return (
    <div className="home">
      <div className="home-profile">
        <GitHubCard />
      </div>

      <section className="home-intro" aria-label="Introduction">
        <p>
          I build <strong>cloud infrastructure</strong> and <strong>CI/CD pipelines</strong> that
          ship software faster and break less. My stack spans <strong>AWS</strong>, <strong>Kubernetes</strong>,{' '}
          <strong>Terraform</strong>, <strong>Docker</strong>, and <strong>Jenkins</strong> on the DevOps side,
          with <strong>React</strong> and <strong>Next.js</strong> for the frontend.
          Currently based in Kolhapur, India — open to remote opportunities worldwide.
        </p>
        <div className="home-intro-tags" aria-hidden="true">
          {['AWS', 'Kubernetes', 'Docker', 'Terraform', 'Jenkins', 'ArgoCD', 'Ansible', 'React', 'CI/CD'].map(t => (
            <span key={t} className="intro-tag">{t}</span>
          ))}
        </div>
      </section>

      <Projects />
      <Skills />
    </div>
  );
};

export default Home;
