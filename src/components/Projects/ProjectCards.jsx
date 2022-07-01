// src/components/Projects/ProjectCard.jsx

import React from "react";
import "./projects.css";

function ProjectCards() {
  const projects = [
    // To add a project, simply create a new object with required information. Projects are flexed in reverse so add new projects to the bottom to display as the first card
    // // imageName refers to the filename in public/images/projects
    {
      githubURL: "https://github.com/jacver/01-wedding-website",
      hostedURL: "https://jacver.github.io/01-wedding-website/",
      imageName: "weddingsite.JPG",
      title: "Wedding Site",
      description:
        "First project ever! Built for my wedding guests using vanilla Javascript, HTML, & CSS",
      projectTeam: "Solo",
      tags: ["Javascript", "HTML/CSS"],
    },
    {
      githubURL: "https://github.com/jacver/connect-four",
      hostedURL: "https://jacver.github.io/connect-four/",
      imageName: "connect4.JPG",
      projectTeam: "Solo",
      title: "Connect 4",
      description:
        "A browser clone for the classic game Connect 4 using vanilla Javascript and DOM-Manipulation",
      tags: ["Javascript", "HTML/CSS"],
    },
    {
      githubURL: "https://github.com/jacver/slope-notes",
      hostedURL: "https://slope-notes.herokuapp.com/resorts",
      imageName: "slopenotes.JPG",
      projectTeam: "Solo",
      title: "SlopeNotes",
      description:
        "An app to track skiing/snowboarding days at various resorts",
      tags: ["Javascript", "HTML/CSS", "Express/Node", "Bootstrap"],
    },
    {
      githubURL: "https://github.com/CoreyLongDev/trailblazer-frontend",
      hostedURL: "https://funny-cat-673521.netlify.app/parks",
      imageName: "trailblazers.jpg",
      projectTeam: "Group",
      title: "Trail Blazers",
      description:
        "Find and learn about national parks & historic sites. Hot Springs and trails not yet implemented",
      tags: ["React", "Express/Node", "API", "Netlify"],
    },
  ];

  return (
    // creation of the project card
    <div className="cards-container">
      {projects.map((project, i) => {
        return (
          //   SETTINGS FOR BACKGROUND IMAGE/GRADIENT
          //   IF BACKGROUND IMAGE NOT RENDERING CROSS-REFERENCE project.imageName with image file name in public directory
          <div
            key={i}
            className="card border-warning mb-3"
            style={{
              maxWidth: "20rem",
              backgroundImage: `linear-gradient(rgba(0,0,0,.6) 0,rgba(0,0,0,.6)), url(images/projects/${project.imageName})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* PROJECT HEADER */}
            <div className="card-header card-header-container" key={i}>
              <p>{project.title}</p>
              <p>{project.projectTeam}</p>
            </div>

            {/* PROJECT LINKS */}
            <div className="card-body">
              <div className="card-links-container">
                <a href={project.githubURL} target="_blank" rel="noreferrer">
                  <i className="fab fa-github"></i>
                </a>

                <a href={project.hostedURL} target="_blank" rel="noreferrer">
                  <i className="fas fa-external-link-square-alt"></i>
                </a>
              </div>

              {/* PROJECT DESCRIPTION & TECH TAGS */}
              <p>{project.description}</p>
              <div className="tags-container">
                {projects[i].tags.map((tag, j) => {
                  return (
                    <span key={j} className="badge bg-warning card-tags">
                      {tag}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectCards;
