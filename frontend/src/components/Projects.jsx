import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects-container">
      <h2 className="projects-title">My Projects</h2>
      
      <div className="projects-grid">
        <div className="project-card">
          <img src="src\assets\careerpath.png" alt="Project 1" className="project-image" />
          <h3 className="project-name">Career Path</h3>
          <p className="project-description">
            Guidance for the students for their career.
          </p>
          <div className="project-links">
            <a href="https://vjscareerpath.vercel.app/" className="project-link">View Demo</a>
            <a href="https://github.com/PREETHI-ASHRITHA/Career-Path.git" className="project-link">Source Code</a>
          </div>
        </div>

        <div className="project-card">
          <img src="src\assets\MadEats.png" alt="Project 2" className="project-image" />
          <h3 className="project-name">Mad Eats</h3>
          <p className="project-description">
            A basic restuarant website to order food.
          </p>
          <div className="project-links">
            <a href="https://drive.google.com/file/d/1UxNXuQMsoMApS_1Iz1ZoWPVCPkbGb-v5/view?usp=sharing" className="project-link">View Demo</a>
            <a href="https://github.com/PREETHI-ASHRITHA/Mad-Eats.git" className="project-link">Source Code</a>
          </div>
        </div>

        <div className="project-card">
          <img src="src\assets\portfolioimg.png" alt="Project 3" className="project-image" />
          <h3 className="project-name">My Portfolio</h3>
          <p className="project-description">
          Contains all my projects and certificates. 
          </p>
          <div className="project-links">
            <a href="#" className="project-link">View Demo</a>
            <a href="#" className="project-link">Source Code</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;