import React from "react";
import ProjectCard from "../Components/ProjectCard";

const Projects = ({ projects }) => {
  function renderProjects() {
    if (projects) {
      return projects.map((project, index) => {
        return (
          <ProjectCard
            key={index}
            repoLink={project.repoLink}
            title={project.title}
            technologies={project.technologies}
            image={project.image}
          />
        );
      });
    }
  }

  return (
    <section class="section-projects" id="projects">
      <div class="projects-header">
        <h2 class="projects-header-text">Projects</h2>
      </div>
      <div class="projects-container">{renderProjects()}</div>
    </section>
  );
};

export default Projects;
