import "bootswatch/dist/solar/bootstrap.min.css";
import "./App.css";
import * as React from "react";
import Navbar from "./components/Navbar/Navbar";
import Introduction from "./components/Introduction/Content/Content";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Introduction />
        <About />
        <Projects />
      </main>
    </div>
  );
};

export default App;
