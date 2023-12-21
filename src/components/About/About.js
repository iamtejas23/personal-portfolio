// AboutMe.js
import React from 'react';
import './about.css'; // Import the CSS file
import htmlIcon from '../../assets/html-5.png';
import cssIcon from '../../assets/css-3.png';
import jsIcon from '../../assets/js.png';
import reactIcon from '../../assets/react.png';
import nextIcon from '../../assets/next.png';
import git from '../../assets/github2.png';
import repo from '../../assets/git-repo.png';




const About = () => {
  return (
    <><div className="about-me-container">
      <h2>About Me</h2>
      <p>
        Hello! I am a passionate frontend developer with a keen interest in creating beautiful and user-friendly web applications. I have experience in... HTML, CSS, JavaScript, React, and Next.js.
      </p>
      <div className="icon-container">
        <img className="icon" src={htmlIcon} alt="HTML" />
        <img className="icon" src={cssIcon} alt="CSS" />
        <img className="icon" src={jsIcon} alt="JavaScript" />
        <img className="icon" src={reactIcon} alt="React" />
        <img className="icon" src={nextIcon} alt="Next.js" />
      </div>
    </div>
    <section className="projects-git">
        <div className="container-git">
          <h2>GitHub Projects</h2>

          <div className="projectGrid">
            {/* Wrap the adjacent elements in a parent container */}
            {[
              {
                id: 1,
                name: 'Thunder Security',
                description: 'React Native app',
                repoLink: 'https://github.com/iamtejas23/thunder',
                
              },
              {
                id: 2,
                name: 'Git Generator',
                description: 'Git Profile Generator',
                repoLink: 'https://github.com/iamtejas23/git-portfolio-generator',
                
              },
              {
                id: 3,
                name: 'Thunder Wallet',
                description: 'React Native app',
                repoLink: 'https://github.com/iamtejas23/thunder-wallet',
              },
              {
                id: 4,
                name: 'ForkByte',
                description: 'Trading Platform',
                repoLink: 'https://github.com/iamtejas23/Forkbyte',
              },
            ].map((project) => (
              <div key={project.id} className="projectItem">
                <img src={git} alt='github'></img>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <a className="repo" href={project.repoLink} target="_blank" rel="noopener noreferrer">
                  <span>GitHub Repo</span>
                <img src={repo} alt='repo' />
                </a>
              </div>
            ))}
            {/* End of the parent container */}
          </div>
        </div>
      </section></>
  );
};



export default About;
