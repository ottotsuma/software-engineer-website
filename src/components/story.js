import React from 'react';
import HTMLFlipBook from "react-pageflip";
import Munchify from "./../assets/512x512.png";
import Joker from "./../assets/logo.png";
import Secret from "./../assets/Group1.png";
import Food from "./../assets/foodlogo.png";
import Monster from "./../assets/monster.jpg";
import Skill from "./skilltree.tsx"

function story(props) {
  return (
    <div className="App">
    <div>
      <h4>Flip Book</h4>
      <p></p>
    </div>
    <div className="book">
    <HTMLFlipBook width={400} height={300}>
      <div className="demoPage"><div className="book-no">Page 1</div><img className="Screen-Shot" src={Munchify} alt="Screen-Shot" /></div>
      <div className="demoPage"><div className="book-no">Page 2</div><img className="Screen-Shot" src={Joker} alt="Screen-Shot" /></div>
      <div className="demoPage"><div className="book-no">Page 3</div><img className="Screen-Shot" src={Secret} alt="Screen-Shot" /></div>
      <div className="demoPage"><div className="book-no">Page 4</div><img className="Screen-Shot" src={Food} alt="Screen-Shot" /></div>
      <div className="demoPage"><div className="book-no">Page 5</div><img className="Screen-Shot" src={Monster} alt="Screen-Shot" /></div>
    </HTMLFlipBook>
    </div>
    <div>
      <h4>Skill Tree</h4>
      <p>Each skill can be leveled up 9 times before awakening. (10 after.)</p>
      <p>The total skill points you can achieve as a normal class is 100.</p>
    </div>
    <div className="Tree">
    <Skill />
    </div>
    <div className="Footer">
    </div>
    </div>
  );
}
export default story;