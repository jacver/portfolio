import React from "react";
import "./projects.css";

function ProjectCards() {
  const projects = [
    {
      githubURL: "https://github.com/jacver/01-wedding-website",
      hostedURL: "https://jacver.github.io/01-wedding-website/",
      image: "../../../public/images/projects/wedding.JPG",
      title: "Wedding Site",
      description: "First project ever! Built for my wedding guests",
      tags: ["Javascript", "HTML/CSS"],
    },
    {
      githubURL: "https://github.com/jacver/connect-four",
      hostedURL: "https://jacver.github.io/connect-four/",
      image: "../../../public/images/projects/connect4.JPG",
      title: "Connect 4",
      description: "A browser clone for the classic game Connect 4",
      tags: ["Javascript", "HTML/CSS"],
    },
    {
      githubURL: "https://github.com/jacver/slope-notes",
      hostedURL: "https://slope-notes.herokuapp.com/resorts",
      image: "../../../public/images/projects/slopenotes.JPG",
      title: "SlopeNotes",
      description:
        "An app to track skiing/snowboarding days at various resorts",
      tags: ["Javascript", "HTML/CSS", "Express/Node", "Bootstrap"],
    },
    {
      githubURL: "https://github.com/CoreyLongDev/trailblazer-frontend",
      hostedURL: "https://funny-cat-673521.netlify.app/parks",
      image: "../../../public/images/projects/trailblazers.jpg",
      title: "Trail Blazers",
      description: "Find and learn about natural points of interests",
      tags: ["React", "Express/Node", "API", "Netlify"],
    },
  ];

  return (
    <div className="cards-container">
      {projects.map((project, i) => {
        return (
          <div
            key={i}
            className="card border-warning mb-3"
            style={{ maxWidth: "20rem" }}
          >
            <div className="card-header" key={i}>
              {project.title}
            </div>
            <div
              className="card-body"
              style={{ backgroundImage: `${project.image}` }}
            >
              <div className="card-links-container">
                <a href={project.githubURL} target="_blank" rel="noreferrer">
                  <i className="fab fa-github"></i>
                </a>

                <a href={project.hostedURL} target="_blank" rel="noreferrer">
                  <i className="fas fa-external-link-square-alt"></i>
                </a>
              </div>
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
