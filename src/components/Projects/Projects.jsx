import React from "react";
import ProjectCards from "./ProjectCards";
import "./projects.css";

function Projects() {
  return (
    <div className="project-cards-container" id="scrollspyProjects">
      <h3>
        <span className="text-warning">Projects</span>
      </h3>
      <ProjectCards />
    </div>
  );
}

export default Projects;
