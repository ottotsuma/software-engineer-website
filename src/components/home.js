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
import Munchify from "./../assets/512x512.png";
import Joker from "./../assets/logo.png";
import Secret from "./../assets/Group1.png";
import Food from "./../assets/foodlogo.png";
import Monster from "./../assets/monster.jpg";
import Blog from "./../assets/blog.png";
import Bug from "./../assets/bug.jpg";
import Dob from "./../assets/dob.png";
import Todo from "./../assets/todo.jpg";
import Weather from "./../assets/weather.png";

function change(props) {}

// Icons next to links, photo on top,
// Left side - 3 parts, photo, links , button (space around)
// links space around themselves (up to 4 )
// Right side - tittle,
// boxes , photo to the left side not under,
// tittles, techs used, lists of projects not what there is right now,
// Playground / CVs find another place later .

function home() {
  return (
    <div className="Glass-Outside">
      <div className="Glass">
        <div className="Profile">
          <div>
            <img
              src="https://avatars0.githubusercontent.com/u/51743227?s=460&u=60cf882cb319128a05fa5fff10c006de9cdfc2af&v=4"
              class="Profile-Img"
              alt="Profile"
            />

            <h3>Shaun Darragh</h3>
            <h4>ダラー・ショーン</h4>
          </div>
          <div className="Links-List">
            <div className="Linky">
            <img src="https://image.flaticon.com/icons/png/512/25/25231.png" class="Link-Img" alt="Github Skills" />
              <a href="https://github.com/ottotsuma" target="_blank">
                GitHub
              </a>
            </div>
            <div className="Linky">
            <img src="https://www.pngfind.com/pngs/m/594-5947621_computer-icons-project-project-plan-black-text-project.png" class="Link-Img" alt="Github Skills" />
              <Link to="/projects">Projects</Link>
            </div>
            <div className="Linky">
            <img src="https://www.pinclipart.com/picdir/middle/75-750874_work-experience-svg-png-icon-free-download-356662.png" class="Link-Img" alt="Github Skills" />
              <Link to="/timeline">Expereince</Link>
            </div>
            <div className="Linky">
            <img src="https://lh3.googleusercontent.com/proxy/_4tG84QogqKgtK_ncYjfBG7fZoG-6NxCfqJOI2Lu2xGKAvEosXWTJ3FeTuwyQUgpyNCnjTCVnYC8xmTQybJdwAijwXkVYlVG1esJA7y_laflBB5S8MPW" class="Link-Img" alt="Github Skills" />
              <Link to="/tech">Technical Skills</Link>
            </div>
          </div>
          <div>
            <Link to="/story">Playground</Link>
          </div>
          {/* 
          <a href={Pdf} target="_blank">
            English CV
          </a>
          <a href={Jap} target="_blank">
            日本語
          </a> */}
        </div>
        <div className="Right-Wrapper">
          {/* About end */}
          <div className="Box">
            <img src={Munchify} class="Home-Img" alt="Technical Skills" />
            <div className="Inner-Box">
              <h3>Munchify</h3>
              <p>Machine learning predicts your perfect resturant!</p>
            </div>
            <p>React-Native, NodeJS, MongoDB</p>
          </div>
          <div className="Box">
            <img src={Secret} class="Home-Img" alt="Technical Skills" />
            <div className="Inner-Box">
              <h3>The Secret Box</h3>
              <p>A safety box for your secrets!</p>
            </div>
            <p>React, NodeJS, MongoDB</p>
          </div>
          <div className="Box">
            <img src={Food} class="Home-Img" alt="Technical Skills" />
            <div className="Inner-Box">
              <h3>Otto's Recipes</h3>
              <p>Sort out your hunger!</p>
            </div>
            <p>React, PWA, MongoDB</p>
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
