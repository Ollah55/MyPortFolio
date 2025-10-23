import React from 'react';
import './projectCard.css';

const ProjectCard = ({ title, description, tech, live, code }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>Tech:</strong> {tech}</p>
      <div className="project-links">
        {live && <a href={live} target="_blank" rel="noopener noreferrer">Live Demo</a>}
        {code && <a href={code} target="_blank" rel="noopener noreferrer">GitHub</a>}
      </div>
    </div>
  );
};

export default ProjectCard;
