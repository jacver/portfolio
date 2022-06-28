import "./App.css";
import * as React from "react";
// imports for custom theme
import { createTheme, ThemeProvider } from "@mui/material";

import Button from "@mui/material/Button";

const theme = createTheme({
  palette: {
    primary: {
      main: "#E46B3F",
    },
    secondary: {
      main: "#F8B75D",
    },
  },
  text: {
    primary: "#FFFFFF",
    secondary: "#E46B3F",
  },
  background: {
    paper: "#292A44",
    default: "#292A44",
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Button color="primary" variant="contained">
          Hello World
        </Button>
        <h1>EDIT HERE IN APP.JS</h1>
      </div>
    </ThemeProvider>
  );
};

export default App;
