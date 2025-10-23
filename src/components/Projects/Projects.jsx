import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import './projects.css';

const Projects = ()=> {
  const projectList = [
    {
      title: "Webflow Clone",
      description: "Cloned a Webflow enterprise/security webpage using React.",
      tech: "React, CSS, HTML",
      live: "",
      code: "https://github.com/Ollah55/webflow-clone"
    },
    {
      title: "Candy Crush Game",
      description: "A simple Candy Crush game built from scratch.",
      tech: "JavaScript, HTML, CSS",
      live: "",
      code: "https://github.com/Ollah55/Candy-Crush-Game.git"
    },
    {
      title: "Sunnyside Landing Page",
      description: "A landing page solution from Frontend Mentor challenge.",
      tech: "React, CSS",
      live: "",
      code: "https://github.com/Ollah55/sunnyside-landing"
    },
    {
      title: "Modie's Food Clone",
      description: "2-page website clone for a food service company.",
      tech: "React, CSS, HTML",
      live: "",
      code: "https://github.com/Ollah55/modies-food"
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projectList.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </section>

  );
};

export default Projects;
