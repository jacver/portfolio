import React from "react";
import "./contactme.css";

function ContactMe() {
  return (
    <div className="contact-container">
      <h3 className="text-warning">Let's Chat!</h3>
      <button type="button" className="btn btn-outline-warning">
        <span>
          <i id="buttonID" className="far fa-envelope-open button-icon"></i>
        </span>
        <span className="btn-text">Contact</span>
      </button>
    </div>
  );
}

export default ContactMe;
