import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import Pdf from './CV.pdf'
// import Jap from './Jap.pdf'

function Nav() {
  return (
    <div className="Nav" >
        <Link className="Nav-Link" to="/">Home</Link>
        <Link className="Home-Button" to="/">Home</Link>
        <Link className="Nav-Link" to="/projects">Projects</Link>
        <Link className="Nav-Link" to="/timeline">Experience</Link>
        <Link className="Nav-Link" to="/tech">Technical Skills</Link>
        {/* <a className="Nav-Link" href = {Pdf} target = "_blank">English CV</a>
        <a className="Nav-Link" href = {Jap} target = "_blank">日本語</a> */}
        <a className="Nav-Link" href = 'https://github.com/ottotsuma' target = "_blank">GitHub</a>
        <Link className="Nav-Link" to="/story">Playground</Link>
      {/* <Link className="Nav-Link" to="/Monad">Monad</Link> */}
    </div>
  );
}

export default Nav;
