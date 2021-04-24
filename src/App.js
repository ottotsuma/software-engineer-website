import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home'
import Story from './components/story'
import Projects from './components/projects'
import Nav from './components/nav'
// import tech from './components/tech'
import Timeline from './components/timeline'
import Monad from './components/Monad/Index'
import Blackjack from './components/blackjack'
// import Video from './components/video'
import styled from "styled-components";

import Spin from "./components/spinn";


function App() {
  return (
    <>
    <Main>
            <BrowserRouter>
                <Nav />
                <Route path="/" component={Home} exact />
                <Route path="/projects" component={Projects} />
                <Route path="/story" component={Story} />
                {/* <Route path="/tech" component={tech} /> */}
                <Route path="/timeline" component={Timeline} />
                <Route path="/monad/:chapter" component={Monad} />
                <Route path="/blackjack" component={Blackjack} />
                {/* <Route path="/video" component={Video} /> */}
            </BrowserRouter>
    </Main>
    </>
  );
}

export default App;

const Main =  styled.div`
text-align: center;
background: linear-gradient(
  0deg,
  rgba(34, 89, 195, 0.7) 9%,
  rgba(45, 253, 209, 0.3) 100%
);
/* background-color: #202040; */
color: whitesmoke;
min-height: 100vh;
display: flex;
flex-direction: column;
`;

