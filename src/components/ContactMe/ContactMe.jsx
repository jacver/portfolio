import React from "react";
import "./contactme.css";

function ContactMe() {
  return (
    <div className="contact-container">
      <h3 className="text-warning">Let's Chat!</h3>
      <p>Please don't hesitate to reach out for anything!</p>
      <a href="mailto:jacobvernau@gmail.com">
        <button type="button" className="btn btn-outline-warning">
          <span>
            <i id="buttonID" className="far fa-envelope-open button-icon"></i>
          </span>
          <span className="btn-text">Contact</span>
        </button>
      </a>
    </div>
  );
}

export default ContactMe;