// src/components/Projects/ProjectCard.jsx

import "./projects.css";
import Tooltip from "react-bootstrap/esm/Tooltip";

// TO DO - Resolve problem mapping projects array below to dynamically generate these cards. Initially had it working, but the image pathing from public/ did not deploy. Look into ways to move link the images from the src/assets/images directory so cards can be rendered dynamically rather than needing to be hardcoded to allow for image hosting in backgroundImage

function ProjectCards() {
  const projects = [
    // To add a project, simply create a new object with required information. Projects are flexed in reverse so add new projects to the bottom to display as the first card
    // // imageName refers to the filename in public/images/projects
    {
      githubURL: "https://github.com/jacver/01-wedding-website",
      hostedURL: "https://jacver.github.io/01-wedding-website/",
      imageName: "weddingsite",
      title: "Wedding Site",
      imageURL: "https://i.imgur.com/7Tizinw.jpg",
      description:
        "First project ever! Built for my wedding guests using vanilla Javascript, HTML, & CSS",
      projectTeam: "Solo Project",
      tags: ["Javascript", "HTML/CSS"],
    },
    {
      githubURL: "https://github.com/jacver/connect-four",
      hostedURL: "https://jacver.github.io/connect-four/",
      imageName: "connect4",
      imageURL: "https://i.imgur.com/IUL9xsG.jpg",
      projectTeam: "Solo Project",
      title: "Connect 4",
      description:
        "A browser clone for the classic game Connect 4 using vanilla Javascript and DOM-Manipulation",
      tags: ["Javascript", "HTML/CSS"],
    },
    {
      githubURL: "https://github.com/jacver/slope-notes",
      hostedURL: "https://slope-notes.herokuapp.com/resorts",
      imageName: "slopenotes",
      imageURL: "https://i.imgur.com/b4prWbe.jpg",
      projectTeam: "Solo Project",
      title: "SlopeNotes",
      description:
        "An app to track skiing/snowboarding days at various resorts",
      tags: ["Javascript", "HTML/CSS", "Express/Node", "Bootstrap"],
    },
    {
      githubURL: "https://github.com/CoreyLongDev/trailblazer-frontend",
      hostedURL: "https://funny-cat-673521.netlify.app/parks",
      imageName: "trailblazers",
      imageURL: "https://i.imgur.com/NoSW8oJ.jpg",
      projectTeam: "Group Project",
      title: "Trail Blazers",
      description:
        "Find and learn about national parks & historic sites. Hot Springs and trails not yet implemented",
      tags: ["React", "Express/Node", "API", "Netlify"],
    },
  ];

  return (
    <div className="cards-container">
      {projects.map((project, idx) => {
        return (
          <div key={idx}>
            <div
              className="card border-warning mb-3"
              style={{
                maxWidth: "20rem",
                backgroundImage: `linear-gradient(rgba(0,0,0,.6) 0,rgba(0,0,0,.6)), url(${project.imageURL})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              key={idx}
            >
              {/* PROJECT HEADER */}

              <div className="card-header card-header-container">
                <p>{project.title}</p>
                <i className="fas fa-user-alt"></i>
              </div>
              {/*  start card body */}

              {/* card links */}
              <div className="card-body" style={{ height: "14rem" }}>
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
                  {project.tags.map((tag, j) => {
                    return (
                      <span key={j} className="badge bg-warning card-tags">
                        {tag}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectCards;
