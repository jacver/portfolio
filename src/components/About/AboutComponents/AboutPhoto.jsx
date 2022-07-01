// src/components/About/AboutComponents/AboutPhoto.jsx
import React from "react";
import "../about.css";
import portrait from "../../../images/about/portrait.jpeg";

function AboutPhoto() {
  return (
    <div className="portrait-container">
      <img className="portrait" src={portrait} alt="portrait" />
    </div>
  );
}

export default AboutPhoto;
