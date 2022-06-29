// src/components/Hero/AnimatedGreeting/AnimatedGreeting.jsx

import React from "react";
import TypeWriterEffect from "react-typewriter-effect";

// This component uses the react-type-writer node package. For docs reference - https://www.npmjs.com/package/react-typewriter-effect

function AnimatedGreeting() {
  return (
    <div style={{ paddingTop: "3rem", margin: "auto 0" }}>
      <h1
        style={{ paddingTop: "5rem", margin: "auto 0", fontWeight: "normal" }}
      >
        Hello
      </h1>
      <TypeWriterEffect
        textStyle={{
          fontFamily: "Red Hat Display",
          color: "red",
          fontWeight: 500,
          fontSize: "1.5em",
        }}
        startDelay={2000}
        hideCursorAfterText
        cursorColor="red"
        multiText={["Howdy,", "Guten Tag,", "Hola,", "Привіт,", "Welcome!"]}
        multiTextDelay={1000}
        typeSpeed={100}
      />
    </div>
  );
}

export default AnimatedGreeting;
