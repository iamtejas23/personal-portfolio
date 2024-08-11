import React from 'react';
import './Skills.css'; // Import your CSS file



const Skills = () => {
  return (
    <div className="skillbase">
        <h2>What I Know</h2>
        <div className="skills-container">
        
        {/* Frontend Technologies Card */}
        <div className="skills-card">
          <h3>Frontend Technologies</h3>
          <ul>
            <li>HTML5</li>
            <li>JavaScript (ES6+)</li>
            <li>CSS3 (Sass/LESS)</li>
            <li>React</li>
            <li>Next Js 13</li>
            <li>Responsive Design</li>
          </ul>
        </div>
  
        {/* Backend Technologies Card */}
        <div className="skills-card">
          <h3>Backend Technologies</h3>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>RESTful APIs</li>
            <li>GraphQL</li>
            <li>Serverless Architecture</li>
          </ul>
        </div>
  
        {/* Databases Card */}
        <div className="skills-card">
          <h3>Databases</h3>
          <ul>
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>PostgreSQL</li>
            <li>Firebase</li>
            <li>SQLite</li>
          </ul>
        </div>
  
        {/* DevOps Card */}
        <div className="skills-card">
          <h3>DevOps</h3>
          <ul>
            <li>Git/GitHub</li>
            <li>Docker</li>
            <li>Continuous Integration (CI/CD)</li>
            <li>AWS</li>
            <li>Jenkins</li>
          </ul>
        </div>

        {/* Databases Card */}
        

      </div>
    </div>
  );
};

export default Skills;
