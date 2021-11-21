import React from "react";
import HTMLFlipBook from "react-pageflip";
import Munchify from "./../assets/512x512.png";
import Joker from "./../assets/logo.png";
import Secret from "./../assets/Group1.png";
import Food from "./../assets/foodlogo.png";
import Monster from "./../assets/monster.jpg";
import Skill from "./skilltree.tsx";
import Blog from "./../assets/blog.png";
import Bug from "./../assets/bug.jpg";
import Dob from "./../assets/dob.png";
import Witch from "./../assets/witch7.jpg";
import Weather from "./../assets/weather.png";
import Blackjack from "./blackjack";
import styled from 'styled-components'
import SpinWheel from './SpinWheel'

const alphabet =  [
    "A",
    "B",
    ['A', 'B', 'C'],
    {
      Name: "Otto",
      Wife: "Tsuma",
      Age: "29",
      Games: {
        1: "Skyrim",
      },
      Food: {
        Breakfast: "Orange",
      },
      Pet: "None",
    },
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const names = Object.keys(alphabet)

function Story(props) {
  return (
    <div className="Playground">
      <SpinWheel nameList={names} array={alphabet} />
      <Blackjack />
      <Titles>Book</Titles>
      <a href="Monad/1">Go to story</a>
      <div className="ProfileCard-Outer">
        <div className="ProfileCard">
          <div className="Card-Middle"></div>
          <div className="Card-Content">
            <div className="Card-Left">
              <h3 className="Card-Font" id="CardTitle">
                The Witch of Alden
              </h3>
              <p className="Card-Font">Level 50</p>
              <h4 className="Card-Font">Class: Witch.</h4>
              <p className="Card-Font">Magic +2, Dexterity +1</p>
              <p className="Card-Font">Potions are 10% more effective</p>
              <h4 className="Card-Font">Familia: Pyewacket.</h4>
              <p className="Card-Font">Shared: Mana-link, Cats eyes.</p>
              <p className="Card-Font">
                Not Shared: Cute, Shadow steps, Meow music
              </p>
              <h4 className="Card-Font">Race: Human.</h4>
              <p className="Card-Font">Sense +1 Charisma +2</p>
              <p className="Card-Font">(Can use all tools and weapons)</p>
            </div>
            <div
              className="Card-Right"
              onClick={() => {
                console.log("Clicked");
              }}
            >
              <img src={Witch} id="Witch" alt="Witch" />
              <h4 className="Card-Font">Items</h4>
              <p className="Card-Font">
                Witches Hat, Mantel, Gloves, Boots, Bracelet, Wand.
              </p>
              <p className="Card-Font">Diwrnach's cauldron, Witches Broom.</p>
              <h4 className="Card-Font">Stats</h4>
              <p className="Card-Font">
                Vitality +10, Magic +50, MDef +20, Charisma +20
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Titles>Flip Book</Titles>
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
        <Titles>Skill Tree</Titles>
      </div>
      <div className="Tree">
        <Skill />
      </div>
      <div className="Footer">

      </div>
    </div>
  );
}
export default Story;

const Titles = styled.h1`
-webkit-text-fill-color: white; /* Will override color (regardless of order) */
-webkit-text-stroke-width: 0.5px;
-webkit-text-stroke-color: black;
font-size: 4vh;
`