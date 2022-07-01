// src/components/Footer/footer.jsx

import "./footer.css";

import React from "react";

function Footer() {
  return (
    <div>
      <div className="d-flex flex-column">
        {/* footer with bootstrap settings */}
        <footer
          id="sticky-footer"
          className="flex-shrink-0 py-2 bg-dark text-white-50"
        >
          {/* footer contents */}
          <div className="content-container d-flex flex-column  justify-content-center align-items-center">
            <a
              className="nav-link footer-link footer-text"
              href="#scrollspyTop"
            >
              Back to top
            </a>
            <a
              href="https://github.com/jacver/portfolio"
              target="_blank"
              rel="noreferrer"
            >
              <i
                className=" footer-text fab fa-github"
                style={{ fontSize: "1.75rem" }}
              ></i>
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
