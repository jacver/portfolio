import "bootswatch/dist/solar/bootstrap.min.css";
import "./App.css";
import * as React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/Content/Content";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <main>
        <About />
      </main>
    </div>
  );
};

export default App;
