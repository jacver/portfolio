import "bootswatch/dist/solar/bootstrap.min.css";
import "./App.css";
import * as React from "react";
import Navbar from "./components/Navbar/Navbar";
import Introduction from "./components/Introduction/Content/Content";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Introduction />
      </main>
    </div>
  );
};

export default App;
