import React, { Component } from "react";
import "./App.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import NavBar from "./navbar/NavBar.js";
import Search from "./search/Search.js";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <NavBar />
        <div style={{ padding: "10px" }}>
          <Search />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
