import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Career Path",
      description: "Guidance for the students for their career.",
      image: "careerpath.png",
      demoLink: "https://vjscareerpath.vercel.app/",
      sourceLink: "https://github.com/PREETHI-ASHRITHA/Career-Path.git"
    },
    {
      id: 2,
      name: "Mad Eats",
      description: "A basic restaurant website to order food.",
      image: "MadEats.png",
      demoLink: "https://drive.google.com/file/d/1UxNXuQMsoMApS_1Iz1ZoWPVCPkbGb-v5/view?usp=sharing",
      sourceLink: "https://github.com/PREETHI-ASHRITHA/Mad-Eats.git"
    },
    {
      id: 3,
      name: "My Portfolio",
      description: "Contains all my projects and certificates.",
      image: "portfolioimg.png",
      demoLink: "https://portfolio-five-dun-88.vercel.app/",
      sourceLink: "https://github.com/PREETHI-ASHRITHA/Portfolio.git"
    }
  ];

  return (
    <div className="projects-container">
      <h2 className="projects-title">My Projects</h2>
      
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="image-cont">
              <img src={project.image} alt={project.name} className="project-image" />
              <div className="image-overlay"></div>
            </div>
            <h3 className="project-name">{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-links">
              <a href={project.demoLink} className="project-link">View Demo</a>
              <a href={project.sourceLink} className="project-link">Source Code</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;