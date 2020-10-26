import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Pdf from "./CV.pdf";
import Jap from "./Jap.pdf";
import Spin from "./spinn";
import logo from "./../assets/logo.png";

function projects() {
    return (
      <div className="App">
        <h1 className="Title">ダラー・ショーン - FRONT END WEB DEV</h1>
        <div className="ProjectsArea">
          <h4>Projects</h4>
          <Spin />
        </div>
      </div>
    );
  }

export default projects;