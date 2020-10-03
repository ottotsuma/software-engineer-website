import React from 'react';
import HTMLFlipBook from "react-pageflip";
import Munchify from "./../assets/512x512.png";
import Joker from "./../assets/logo.png";
import Secret from "./../assets/Group1.png";
import Food from "./../assets/foodlogo.png";
import Monster from "./../assets/monster.jpg";


function story(props) {
  return (
    <div className="App">
    <div className="book">
    <HTMLFlipBook width={400} height={300}>
      <div className="demoPage"><div className="book-no">Page 1</div><img className="Screen-Shot" src={Munchify} alt="Screen-Shot" /></div>
      <div className="demoPage"><div className="book-no">Page 2</div><img className="Screen-Shot" src={Joker} alt="Screen-Shot" /></div>
      <div className="demoPage"><div className="book-no">Page 3</div><img className="Screen-Shot" src={Secret} alt="Screen-Shot" /></div>
      <div className="demoPage"><div className="book-no">Page 4</div><img className="Screen-Shot" src={Food} alt="Screen-Shot" /></div>
      <div className="demoPage"><div className="book-no">Page 5</div><img className="Screen-Shot" src={Monster} alt="Screen-Shot" /></div>
    </HTMLFlipBook>
    </div>
    </div>
  );
}
export default story;