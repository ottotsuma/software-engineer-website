import React from "react";
import Skill from "./skilltree.tsx";
import Witch from "./../assets/witch7.jpg";
import styled from 'styled-components'
import SpinWheel from './SpinWheel'
import {droppy} from './Monad/Index'

const linkStyle = {
width: "100%",
color: "white",
}
const alphabet = droppy(linkStyle)
alphabet.unshift([<div>Hello</div>, <div>This</div>, <div>That</div>])
function Story(props) {
  return (
    <div className="Playground">
      <SpinWheel array={alphabet} />
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
              <h4 className="Card-Font">Species: Human.</h4>
              <p className="Card-Font">Sense +1 Charisma +2</p>
              <p className="Card-Font">(Emotional)</p>
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