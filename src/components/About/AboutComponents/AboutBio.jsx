// src/components/About/AboutComponents/AboutBio.jsx
import React from "react";
import "../about.css";

function AboutBio() {
  return (
    <div className="about-bio-text">
      <h3 className="text-warning">About Me</h3>
      <p>
        Welcome to my portfolio! My name is Jacob - I'm a software engineer in
        Denver, Colorado. After graduating with my Master's and Educational
        Specialist degrees from Clemson University I moved to Denver to work in
        K-12 schools as a counselor. I chose counseling so I could solve a wide
        variety of problems as they related to social-emotional health,
        academics, and post-secondary readiness. I loved the unique challenges
        that came with working in alternative, low-income, and international
        settings. My experiences in schools have given me a wealth of knowledge
        in
        <span className="text-warning"> leading teams, communication, </span>
        and
        <span className="text-warning"> account management</span>.
      </p>
      <p>
        My passion for <span className="text-warning">web development</span>{" "}
        began in the Summer of 2021. I proposed to my then-girlfriend and
        started to explore template-based services to build our wedding website.
        As I mocked things up, built them, scrapped them, and did it all again I
        found myself wondering how everything worked behind the scenes. With
        recommendations from friends in software engineering, I began a course
        on Udemy in <span className="text-warning">Javacsript, HTML, </span>
        and <span className="text-warning">CSS</span>. I instantly fell in love
        and spent virtually all of my freetime doing the coursework. After a
        month of that I decided to built my first project from scratch - my
        wedding. I had a blast building the site and refactoring it as I
        learned. In the Winter of 2021, I was still craving more so I enrolled
        in General Assembly's six month{" "}
        <span className="text-warning">software engineering immersive</span>{" "}
        course.
      </p>
    </div>
  );
}

export default AboutBio;
