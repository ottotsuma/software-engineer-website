import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'; // ❌ No BrowserRouter here!
import Home from './components/home';
import Story from './components/story';
import Monad from './components/Monad/Index';
import Blackjack from './components/blackjack';
import Snap from './components/snap';
import styled from "styled-components";
import { BackgroundColor } from './components/color';

function App() {
  return (
    <Main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<Story />} />
        <Route path="/monad/:chapter" element={<Monad />} />
        <Route path="/blackjack" element={<Blackjack />} />
        <Route path="/snap" element={<Snap />} />
      </Routes>
    </Main>
  );
}

export default App;

const Main = styled.div`
  text-align: center;
  background: ${BackgroundColor};
  color: whitesmoke;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
