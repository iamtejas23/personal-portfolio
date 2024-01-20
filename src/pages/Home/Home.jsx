import React from 'react';
import './home.css';
import GitHubCard from '../../components/GitHubCard/GitHubCard ';
import Projects from '../../components/Projects/Projects';
import Skills from '../../components/Skills/Skills ';
import BlogCard from '../../components/BlogCard/BlogCard';

const Home = () => {
  return (
    <div className="home">
      <div className="gitcard">
      <GitHubCard/>
      </div>

      <Projects/>
      <Skills/>
      <BlogCard/>
    </div>
  )
}

export default Home;