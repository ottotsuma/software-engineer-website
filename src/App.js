import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home'
import Story from './components/story'
import Nav from './components/nav'
import Timeline from './components/timeline'
import Monad from './components/Monad/Index'
import Blackjack from './components/blackjack'
import styled from "styled-components";
import {BackgroundColor} from './components/color'

function App() {
  return (
    <>
    <Main>
            <BrowserRouter>
                {/* <Nav /> */}
                <Route path="/" component={Home} exact />
                <Route path="/story" component={Story} />
                {/* <Route path="/tech" component={tech} /> */}
                {/* <Route path="/timeline" component={Timeline} /> */}
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
background: ${BackgroundColor};
color: whitesmoke;
min-height: 100vh;
display: flex;
flex-direction: column;
`;

