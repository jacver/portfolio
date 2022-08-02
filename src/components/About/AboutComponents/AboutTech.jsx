// src/components/About/AboutComponents/AboutTech.jsx

// This component is called under the AboutBio component

import React from "react";
import "../about.css";

function AboutTech() {
  const tech = {
    languages: ["Javascript", "HTML", "CSS", "Python", "JSX"],
    databases: ["SQL", "NoSql", "MongoDB", "JSON"],
    frameworks: ["React", "Bootstrap", "Django", "Express.js", "Node.js"],
    cloud: ["Netlify", "Heroku", "Github Pages"],
    other: ["RESTful Routing", "APIs", "Git"],
  };

  return (
    <div className="tech-container" id="scrollspyAboutMeTech">
      <h3 className="text-warning tech-header">Tech</h3>
      <div className="tech-row-container">
        <ul>
          {" "}
          <span className="text-light"> Languages</span>
          {tech.languages.map((item, i) => {
            return <li key={i}>{item}</li>;
          })}
        </ul>
        <ul>
          {" "}
          <span className="text-light"> Databases</span>
          {tech.databases.map((item, i) => {
            return <li key={i}>{item}</li>;
          })}
        </ul>{" "}
        <ul>
          {" "}
          <span className="text-light"> Frameworks/Libraries</span>
          {tech.frameworks.map((item, i) => {
            return <li key={i}>{item}</li>;
          })}
        </ul>
        <ul>
          {" "}
          <span className="text-light"> Cloud</span>
          {tech.cloud.map((item, i) => {
            return <li key={i}>{item}</li>;
          })}
        </ul>{" "}
        <ul>
          {" "}
          <span className="text-light">Other Skills</span>
          {tech.other.map((item, i) => {
            return <li key={i}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default AboutTech;
