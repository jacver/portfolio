// src/components/Introduction/Content/Content.jsx

import React from "react";
import "./content.css";
import AnimatedGreeting from "../AnimatedGreeting/AnimatedGreeting";

function Content() {
  return (
    <div className="content-body">
      {/* import typewriter component */}
      <AnimatedGreeting />
      <h1>I'm Jacob Vernau</h1>

      {/* biography section */}

      <p>
        A <span className="text-warning">full-stack software engineer</span> and
        alpine skier. Prior to working with software development, I obtained a
        Master's Degree in Counseling from Clemson University. Whether I'm
        working with humans or computers, I've always been passionate about{" "}
        <span className="text-warning">solving problems</span> and{" "}
        <span className="text-warning">learning</span> as much as possible.
      </p>

      {/* social media link container */}

      <div className="btn-container">
        <a
          href="https://www.linkedin.com/in/jacobvernau"
          target="_blank"
          className="icon linkedin"
          rel="noreferrer"
        >
          <button type="button" className="btn btn-outline-warning">
            <span>
              <i className="fab fa-linkedin"></i>
            </span>
            <span className="btn-text">LinkedIn</span>
          </button>
        </a>
        <a
          href="https://github.com/jacver"
          target="_blank"
          className="icon github"
          rel="noreferrer"
        >
          <button type="button" className="btn btn-outline-warning">
            <span>
              <i className="fab fa-github"></i>
            </span>
            <span className="btn-text">Github</span>
          </button>
        </a>
      </div>
    </div>
  );
}

export default Content;
