import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Pdf from "./CV.pdf";
import Jap from "./Jap.pdf";
import Spin from "./spinn";
import logo from "./../assets/logo.png";
import Timeline from "./timeline.tsx";
import Tech from "./tech.js";
import Skills from "./../assets/skills.png";
import Exp from "./../assets/expereince.png";
import Pro from "./../assets/projects.png";


function home() {
  return (
    <div className="Glass-Outside">
      <div className="Glass">
        <div className="Profile">
          <div>
            <h3>Shaun Darragh</h3>
            <h4>ダラー・ショーン</h4>
          </div>
          <img src="https://avatars0.githubusercontent.com/u/51743227?s=460&u=60cf882cb319128a05fa5fff10c006de9cdfc2af&v=4" class="Profile-Img" alt="Technical Skills" />
          <a href="https://github.com/ottotsuma" target="_blank">
            GitHub
          </a>
          <Link to="/story">Playground</Link>
          <a href={Pdf} target="_blank">
            English CV
          </a>
          <a href={Jap} target="_blank">
            日本語
          </a>
        </div>
        <div className="Right-Wrapper">
          <div className="Box">
            <h3>
              <Link to="/tech">Technical Skills</Link>
            </h3>
            <img src={Skills} class="Home-Img" alt="Technical Skills" />
          </div>
          {/* About end */}
          <div className="Box">
            <h3>
              <Link to="/timeline">Expereince</Link>
            </h3>
            <img src={Exp} class="Home-Img" alt="Technical Skills" />
          </div>
          <div className="Box">
            <h3>
              <Link to="/projects">Projects</Link>
            </h3>
            <img src={Pro} class="Home-Img" alt="Technical Skills" />
          </div>
          {/* <div className="Box">
            <h3>
              <a href={Pdf} target="_blank">
                English CV
              </a>
            </h3>
            <img src={Skills} class="Home-Img" alt="Technical Skills" />
          </div> */}
        </div>
        {/* Time end */}
      </div>
      {/* Glass end */}
      <footer> </footer>
    </div>
    // App end
  );
}

export default home;
