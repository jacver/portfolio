// src/components/About/AnimatedGreeting/AnimatedGreeting.jsx

import React from "react";
import TypeWriterEffect from "react-typewriter-effect";

// This component uses the react-type-writer node package. For docs reference - https://www.npmjs.com/package/react-typewriter-effect

function AnimatedGreeting() {
  return (
    <div style={{ paddingTop: "3rem", margin: "auto 0" }}>
      <TypeWriterEffect
        textStyle={{
          fontFamily: "Red Hat Display",
          color: "#CB4B16",
          fontWeight: 500,
          fontSize: "2em",
        }}
        startDelay={0}
        hideCursorAfterText
        cursorColor="#CB4B16"
        multiText={["Howdy,", "Guten Tag,", "Hola,", "Привіт,", "Welcome!"]}
        multiTextDelay={1000}
        typeSpeed={250}
      />
    </div>
  );
}

export default AnimatedGreeting;
