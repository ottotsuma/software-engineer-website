import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import home from './components/home'
import story from './components/story'
import projects from './components/projects'
import Nav from './components/nav'

function App() {
  return (
    <>
    <div className="App">
            <BrowserRouter>
                <Nav />
                <Route path="/" component={home} exact />
                <Route path="/projects" component={projects} />
                <Route path="/story" component={story} />
                {/* <Route path="/shop" component={Shop} /> */}
            </BrowserRouter>
    </div>
    </>
  );
}

export default App;
