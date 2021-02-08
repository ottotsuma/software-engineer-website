import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import home from './components/home'
import story from './components/story'
import projects from './components/projects'
import Nav from './components/nav'
import tech from './components/tech'
import timeline from './components/timeline'
import Monad from './components/Monad/Index'
import Blackjack from './components/blackjack'

function App() {
  return (
    <>
    <div className="Main">
            <BrowserRouter>
                <Nav />
                <Route path="/" component={home} exact />
                <Route path="/projects" component={projects} />
                <Route path="/story" component={story} />
                <Route path="/tech" component={tech} />
                <Route path="/timeline" component={timeline} />
                <Route path="/monad/:chapter" component={Monad} />
                <Route path="/blackjack" component={Blackjack} />
            </BrowserRouter>
    </div>
    </>
  );
}

export default App;
