// src/components/About/AboutComponents/AboutPhoto.jsx
import React from "react";
import "../about.css";

function AboutPhoto() {
  return (
    <div className="portrait-container">
      <img
        className="portrait"
        src="images/about/portrait.jpeg"
        alt="portrait"
      />
    </div>
  );
}

export default AboutPhoto;
