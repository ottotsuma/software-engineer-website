import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import styled from 'styled-components'

function Nav() {
  return (
    <NavigationBar>
        <Link className="Nav-Link" to="/">Home</Link>
        <Link className="Home-Button" to="/">Home</Link>
        <Link className="Nav-Link" to="/projects">Projects</Link>
        <Link className="Nav-Link" to="/timeline">Experience</Link>
        <Link className="Nav-Link" to="/tech">Technical Skills</Link>
        <a className="Nav-Link" href = 'https://github.com/ottotsuma' target = "_blank">GitHub</a>
        <Link className="Nav-Link" to="/Blackjack">Blackjack</Link>
      {/* <Link className="Nav-Link" to="/Monad">Monad</Link> */}
    </NavigationBar>
  );
}

export default Nav;

const NavigationBar = styled.div`
min-height: 4vh;
max-height: 4vh;
display: flex;
align-items: center;
justify-content: space-evenly;
padding: 1vh;
background: #638ad4;
z-index: 1;
`