import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Pdf from "./CV.pdf";
import Jap from "./Jap.pdf";
import Spin from "./spinn";
import logo from "./../assets/logo.png";

function projects() {
    return (
      <div className="App">
        <div className="ProjectsArea">
          <h1>Projects</h1>
          <Spin />
        </div>
        <footer> </footer>
      </div>
    );
  }

export default projects;