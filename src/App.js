import "bootswatch/dist/solar/bootstrap.min.css";
import "./App.css";
import * as React from "react";
import TopNavbar from "./components/Navbar/Navbar";
import Introduction from "./components/Introduction/Content/Content";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <TopNavbar />
      <main>
        <Introduction />
        <About />
        <Projects />
        <ContactMe />
      </main>
      <Footer />
    </div>
  );
};

export default App;
