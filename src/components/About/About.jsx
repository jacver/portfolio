import React from "react";
import "./about.css";
import AboutBio from "./AboutComponents/AboutBio";
import AboutPhoto from "./AboutComponents/AboutPhoto";
import AboutTech from "./AboutComponents/AboutTech";

// this component calls the content of the About section -- broken down into components below

function About() {
  return (
    <>
      <div className="about-container" id="scrollspyAboutMe">
        <AboutBio />
        <AboutPhoto />
      </div>
      <AboutTech />
    </>
  );
}

export default About;
