// src/components//Navbar/Navbar.jsx

import React from "react";
// This component relies on the react-bootstrap library prebuilt components See Imports Below
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "./navbar.css";

function TopNavbar() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">JacVer</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            {/* Do not remove this empty nav list - will realign links from right to left */}
            <Nav className="me-auto"></Nav>
            {/* Do not remove this empty nav list - will realign links from right to left */}
            <Nav>
              <li className="nav-item">
                <a className="nav-link" href="#scrollspyAboutMe">
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#scrollspyAboutMeTech">
                  Tech
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#scrollspyProjects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#scrollspyContact">
                  Contact
                </a>
              </li>

              <a
                href="/resume/Jacob Vernau Resume.pdf"
                download="Jacob Vernau Resume.pdf"
              >
                <button type="button" className="btn btn-outline-warning">
                  <span>
                    <i className="fas fa-download"></i>
                  </span>
                  <span className="btn-text">Resume</span>
                </button>
              </a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default TopNavbar;
