import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Pdf from './CV.pdf'
import Jap from './Jap.pdf'

function Nav() {
  return (
    <div className="Nav">
        <Link to="/">Home</Link>
        <a href = {Pdf} target = "_blank">English CV</a>
        <a href = {Jap} target = "_blank">日本語</a>
        <a href = 'https://github.com/ottotsuma' target = "_blank">GitHub</a>
                <Link to="/story">Story</Link>
    </div>
  );
}

export default Nav;
