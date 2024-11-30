import React from 'react';
import './home.css';
import GitHubCard from '../../components/GitHubCard/GitHubCard ';
import Projects from '../../components/Projects/Projects';
import Skills from '../../components/Skills/Skills ';

const Home = () => {
  return (
    <div className="home">
      <div className="gitcard">
      <GitHubCard/>
      </div>
      <Projects/>
      <Skills/>
    </div>
  )
}

export default Home;