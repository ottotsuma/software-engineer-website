// Import statements
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cog from "./../assets/cog.png";
import Munchify from "./../assets/512x512.png";
import Secret from "./../assets/Group1.png";
import Food from "./../assets/foodlogo.png";
import Video from "./video";
import styled, { css } from "styled-components";
import Hidden from "./elements/hidden";
import Anchor from "./elements/anchor";

// Change window function
function change(props) {
  const win = window.open(props, "_blank");
  win.focus();
}

// Main function
function home() {
  return (
    <GlassWrapper>
      <Hidden>
        <Link
          to="/Monad/1"
          style={{ "text-decoration": "none", position: "fixed" }}
        >
        </Link>
      </Hidden>
      <Glass>
        <Profile>
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
          <List>
            <Linkey>
              <img
                src="https://image.flaticon.com/icons/png/512/25/25231.png"
                className="Link-Img"
                alt=" "
              />
              <a href="https://github.com/ottotsuma" target="_blank">
                GitHub
              </a>
            </Linkey>
            <Linkey>
              <img
                src="https://www.pngfind.com/pngs/m/594-5947621_computer-icons-project-project-plan-black-text-project.png"
                className="Link-Img"
                alt=" "
              />
              <Link to="/projects">Projects</Link>
            </Linkey>
            <Linkey>
              <img
                src="https://www.pinclipart.com/picdir/middle/75-750874_work-experience-svg-png-icon-free-download-356662.png"
                className="Link-Img"
                alt=" "
              />
              <Link to="/timeline">Experience</Link>
            </Linkey>
            <Linkey>
              <img src={Cog} alt=" " className="Link-Img" />
              <Link to="/tech">Technical Skills</Link>
            </Linkey>
          </List>
          <Anchor>
            <Link to="/Blackjack" style={{ color: "white" }}>
              Blackjack
            </Link>
          </Anchor>
        </Profile>
        <Right>
          <Box
            onClick={() =>
              change("https://github.com/Spring-CC/restaurant-native-app")
            }
          >
            <img src={Munchify} className="Home-Img" alt="Technical Skills" />
            <InnerBox>
              <h3>Munchify</h3>
              <Para>Machine learning predicts your perfect restaurant!</Para>
            </InnerBox>
            <Para>React-Native, NodeJS, MongoDB</Para>
          </Box>
          <Box onClick={() => change("https://github.com/ottotsuma/SoloMVP")}>
            <img src={Secret} className="Home-Img" alt="Technical Skills" />
            <InnerBox>
              <h3>The Secret Box</h3>
              <Para>A safety box for your secrets!</Para>
            </InnerBox>
            <Para>React, NodeJS, MongoDB</Para>
          </Box>
          <Box
            onClick={() => change("https://github.com/ottotsuma/React-App2")}
          >
            <img src={Food} className="Home-Img" alt="Technical Skills" />
            <InnerBox>
              <h3>Otto's Recipes</h3>
              <Para>Sort out your hunger!</Para>
            </InnerBox>
            <Para>React, PWA, Netlify</Para>
          </Box>
        </Right>
      </Glass>
      <Circle1 />
      <Circle2 />
    </GlassWrapper>
  );
}

const Para = styled.p`
  padding: 1px;
  @media screen and (max-width: 880px) {
    display: none;
  }
`;

const InnerBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Box = styled.div`
  /* border-style: solid; */
  cursor: pointer;
  color: black;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.9),
    rgba(255, 255, 255, 0.6)
  );
  width: 85%;
  height: 25%;
  border-radius: 1rem;
  box-shadow: 6px 3px 3px rgb(58, 58, 58, 0.1);
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  &:active {
    box-shadow: 3px 1px 1px rgb(58, 58, 58, 0.1);
  }
`;

const Linkey = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  width: 100%;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  min-height: 40%;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex: 2;
`;

const Profile = styled.div`
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.9),
    rgba(255, 255, 255, 0.5)
  );
  border-radius: 1rem;
  flex: 1;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
`;

const GlassWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Glass = styled.div`
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.6),
    rgba(255, 255, 255, 0.3)
  );
  min-height: 80vh;
  width: 60%;
  display: flex;
  border-radius: 2rem;
  z-index: 3;
  backdrop-filter: blur(2rem);
`;

const Circle1 = styled.div`
  background: linear-gradient(
    0deg,
    rgba(255, 0, 221, 0.7),
    rgba(255, 255, 255, 0.3)
  );
  position: absolute;
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  z-index: 2;
  // pos
  top: 10%;
  right: 15%;
`;

const Circle2 = styled.div`
  background: linear-gradient(
    0deg,
    rgba(255, 0, 221, 0.7),
    rgba(255, 255, 255, 0.3)
  );
  position: absolute;
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  z-index: 2;
  // pos
  bottom: 5%;
  left: 15%;
`;

export default home;
