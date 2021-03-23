// Import statements
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cog from "./../assets/cog.png";
import Munchify from "./../assets/512x512.png";
import Secret from "./../assets/Group1.png";
import Food from "./../assets/foodlogo.png";
import Video from "./video";
import styled, { css } from "styled-components";
import Hidden from './elements/hidden'
import Anchor from './elements/anchor'


// Change window function
function change(props) {
  const win = window.open(props, "_blank");
  win.focus();
}

// Main function
function home() {
  return (
    <div className="Glass-Outside">
      <Hidden><Link to="/Monad/1" style={{"text-decoration": "none", "position": "fixed"}}>　</Link></Hidden>
      <div className="Glass">
        <div className="Profile">
          <div>
            <Video />
            <img
              src="https://avatars0.githubusercontent.com/u/51743227?s=460&u=60cf882cb319128a05fa5fff10c006de9cdfc2af&v=4"
              className="Profile-Img"
              alt="Profile"
            />
            <h3>Shaun Darragh</h3>
            <h4>ダラー・ショーン</h4>
          </div>
          <div className="Links-List">
            <div className="Linky">
              <img
                src="https://image.flaticon.com/icons/png/512/25/25231.png"
                className="Link-Img"
                alt=" "
              />
              <a href="https://github.com/ottotsuma" target="_blank">
                GitHub
              </a>
            </div>
            <div className="Linky">
              <img
                src="https://www.pngfind.com/pngs/m/594-5947621_computer-icons-project-project-plan-black-text-project.png"
                className="Link-Img"
                alt=" "
              />
              <Link to="/projects">Projects</Link>
            </div>
            <div className="Linky">
              <img
                src="https://www.pinclipart.com/picdir/middle/75-750874_work-experience-svg-png-icon-free-download-356662.png"
                className="Link-Img"
                alt=" "
              />
              <Link to="/timeline">Experience</Link>
            </div>
            <div className="Linky">
              <img src={Cog} alt=" " className="Link-Img" />
              <Link to="/tech">Technical Skills</Link>
            </div>
          </div>
          <Anchor>
            <Link to="/Blackjack" style={{ color: "white" }}>
              Blackjack
            </Link>
          </Anchor>
        </div>
        <div className="Right-Wrapper">
          {/* About end */}
          <div
            className="Box"
            onClick={() =>
              change("https://github.com/Spring-CC/restaurant-native-app")
            }
          >
            <img src={Munchify} className="Home-Img" alt="Technical Skills" />
            <div className="Inner-Box">
              <h3>Munchify</h3>
              <p className="Home-p">
                Machine learning predicts your perfect resturant!
              </p>
            </div>
            <p className="Home-p">React-Native, NodeJS, MongoDB</p>
          </div>
          <div
            className="Box"
            onClick={() => change("https://github.com/ottotsuma/SoloMVP")}
          >
            <img src={Secret} className="Home-Img" alt="Technical Skills" />
            <div className="Inner-Box">
              <h3>The Secret Box</h3>
              <p className="Home-p">A safety box for your secrets!</p>
            </div>
            <p className="Home-p">React, NodeJS, MongoDB</p>
          </div>
          <div
            className="Box"
            onClick={() => change("https://github.com/ottotsuma/React-App2")}
          >
            <img src={Food} className="Home-Img" alt="Technical Skills" />
            <div className="Inner-Box">
              <h3>Otto's Recipes</h3>
              <p className="Home-p">Sort out your hunger!</p>
            </div>
            <p className="Home-p">React, PWA, Netlify</p>
          </div>
        </div>
        {/* Time end */}
      </div>
      {/* Glass end */}
      <div className="Circle1"></div>
      <div className="Circle2"></div>
      {/* <footer> </footer> */}
    </div>
    // App end
  );
}

export default home;
