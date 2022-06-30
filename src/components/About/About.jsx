import React from "react";
import "./about.css";
import AboutBio from "./AboutComponents/AboutBio";
import AboutPhoto from "./AboutComponents/AboutPhoto";
import AboutTech from "./AboutComponents/AboutTech";

// this component houses the content of the About section

function About() {
  return (
    <>
      <div className="about-container">
        <AboutBio />
        <AboutPhoto />
      </div>
      <AboutTech />
    </>
  );
}

export default About;
