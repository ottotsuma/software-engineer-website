import React from 'react';
import {
  NavLink
} from "react-router-dom";
import styled from 'styled-components'
import { myFunction, droppy } from './Monad/Index'
// import SpinWheel from './SpinWheel'

function Nav() {
  return (
    <NavigationBar>
      <LinkStyled to="/">Home</LinkStyled>
      {/* <LinkStyled  to="/timeline">Experience</LinkStyled> */}
      {/* <LinkStyled  to="/tech">Technical Skills</LinkStyled> */}
      <AStyled href='https://github.com/ottotsuma' target="_blank">GitHub</AStyled>
      {/* <LinkStyled  to="/Blackjack">Blackjack</LinkStyled> */}
      {/* <LinkStyled  to="/Monad/1">Monad</LinkStyled> */}
      <div className="dropdown">
        <ButtonStyled onClick={() => myFunction()} className="">
          Monad
        </ButtonStyled>
        <div id="myDropdown" className="dropdown-content">
          {droppy()}
        </div>
      </div>
    </NavigationBar>
  );
}

export default Nav;

const ButtonStyled = styled.button`
background: none!important;
border: none;
padding: 0!important;
/*input has OS specific font-family*/
text-decoration: underline;
cursor: pointer;
font-size: 16px;

color: white;
&:hover {
    color: orange;
}
`;

const AStyled = styled.a`
color: white;
&:hover {
    color: orange;
}
`;

const LinkStyled = styled(NavLink).attrs(() => ({
  activeClassName: 'active',
}))`
color: white;
&:hover {
    color: orange;
}
`;

const NavigationBar = styled.div`
position: relative;
z-index: 10000;
min-height: 4vh;
max-height: 4vh;
display: flex;
align-items: center;
justify-content: space-evenly;
padding: 1vh;
background: #0d89eb;
font-family: "Yusei Magic", sans-serif;
`