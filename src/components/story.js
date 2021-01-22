import React from "react";
import HTMLFlipBook from "react-pageflip";
import Munchify from "./../assets/512x512.png";
import Joker from "./../assets/logo.png";
import Secret from "./../assets/Group1.png";
import Food from "./../assets/foodlogo.png";
import Monster from "./../assets/monster.jpg";
import Skill from "./skilltree.tsx";
import ReactGlobe from "react-globe";
import Duck from "./../assets/city.jpg";
import Blog from "./../assets/blog.png";
import Bug from "./../assets/bug.jpg";
import Dob from "./../assets/dob.png";
// import Todo from "./../assets/todo.jpg";
import Weather from "./../assets/weather.png";
import Card from "./card"

function story(props) {
  return (
    <div className="Playground">
      <h1 className="PlayTitles">Card</h1>
      <Card />
      <div>
        <h1 className="PlayTitles">Flip Book</h1>
      </div>
      <div className="book">
        <HTMLFlipBook width={400} height={300}>
          <div className="demoPage">
            <div className="book-no">Page 1</div>
            <img className="Screen-Shot" src={Munchify} alt="Screen-Shot" />
          </div>
          <div className="demoPage">
            <div className="book-no">Page 2</div>
            <img className="Screen-Shot" src={Joker} alt="Screen-Shot" />
          </div>
          <div className="demoPage">
            <div className="book-no">Page 3</div>
            <img className="Screen-Shot" src={Secret} alt="Screen-Shot" />
          </div>
          <div className="demoPage">
            <div className="book-no">Page 4</div>
            <img className="Screen-Shot" src={Food} alt="Screen-Shot" />
          </div>
          <div className="demoPage">
            <div className="book-no">Page 5</div>
            <img className="Screen-Shot" src={Monster} alt="Screen-Shot" />
          </div>
          <div className="demoPage">
            <div className="book-no">Page 6</div>
            <img className="Screen-Shot" src={Blog} alt="Screen-Shot" />
          </div>
          <div className="demoPage">
            <div className="book-no">Page 7</div>
            <img className="Screen-Shot" src={Bug} alt="Screen-Shot" />
          </div>
          <div className="demoPage">
            <div className="book-no">Page 8</div>
            <img className="Screen-Shot" src={Weather} alt="Screen-Shot" />
          </div>
          <div className="demoPage">
            <div className="book-no">Page 9</div>
            <img className="Screen-Shot" src={Dob} alt="Screen-Shot" />
          </div>
        </HTMLFlipBook>
      </div>
      <div>
        <h1 className="PlayTitles">Skill Tree</h1>
      </div>
      <div className="Tree">
        <Skill />
      </div>
      <div className="Footer">
        <ReactGlobe height="100vh" globeBackgroundTexture={Duck} />
      </div>
    </div>
  );
}
export default story;
