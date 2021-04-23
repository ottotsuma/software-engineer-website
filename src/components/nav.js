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
        <LinkStyled className="Nav-LinkStyled" to="/">Home</LinkStyled>
        <LinkStyled className="Home-Button" to="/">Home</LinkStyled>
        {/* <LinkStyled className="Nav-LinkStyled" to="/projects">Projects</LinkStyled> */}
        {/* <LinkStyled className="Nav-LinkStyled" to="/timeline">Experience</LinkStyled> */}
        {/* <LinkStyled className="Nav-LinkStyled" to="/tech">Technical Skills</LinkStyled> */}
        <AStyled className="Nav-LinkStyled" href = 'https://github.com/ottotsuma' target = "_blank">GitHub</AStyled>
        {/* <LinkStyled className="Nav-LinkStyled" to="/Blackjack">Blackjack</LinkStyled> */}
      <LinkStyled className="Home-Button" to="/Monad/1">Monad</LinkStyled>
      <LinkStyled className="Nav-LinkStyled" to="/Monad/1">Monad</LinkStyled>
    </NavigationBar>
  );
}

export default Nav;

const AStyled = styled.a`
color: white;
&:hover {
    color: orange;
}
`;

const LinkStyled = styled(Link)`
color: white;
&:hover {
    color: orange;
}
`;

const NavigationBar = styled.div`
min-height: 4vh;
max-height: 4vh;
display: flex;
align-items: center;
justify-content: space-evenly;
padding: 1vh;
background: #0d89eb;
z-index: 1;
`