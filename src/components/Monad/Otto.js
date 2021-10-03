import React, { useState } from "react";
import Item from "./../elements/item";
import Equipment from "./../elements/equipment";
import Stats from "./../elements/stats";
import Spells from "./../elements/spells";
// Trying cards again
import {spellList} from "./../elements/spells"
import styled from "styled-components";
import {imageError} from './../color'

const elementList = {
  "lightning" : {
    color: "yellow",
    image: 'https://i.pinimg.com/originals/22/86/5d/22865d4b8b7e517dce1b60a2988c8482.gif',
  },
  "fire" : {
    color: "orange",
    image: "https://i.pinimg.com/originals/4d/ca/d9/4dcad98ff2d9aba671b56957ab5d70a2.gif",
  },
  "blood" : {
    color: "red",
    image: "https://github.com/ottotsuma/ottotsuma.github.io/blob/master/images/spells%20effects/b323b0af13f20645569964f9c75b4909.gif?raw=true",
  }
}

function MakeCard (name, level, element) {
  element = spellList[name] ? spellList[name].element || element : element
  const elementalColor = elementList[element] ? elementList[element].color : 'black'
  const spellName = spellList[name] ? spellList[name].name : name || 'No Name'
  const spellDisc = spellList[name] && level ? spellList[name][level] : 'No Description'
  const elementImage = elementList[element] ? elementList[element].image : ''

  return (
    <CardContainer>
    <Card element={elementalColor}>
      <TitleWrap><CardTitle>{spellName}</CardTitle><TitleSpan>{spellName}</TitleSpan></TitleWrap>
      <CardElement onError={imageError} src={elementImage}></CardElement>
      <DiscWrap><CardDisc>{spellDisc}</CardDisc><DiscSpan>{spellDisc}</DiscSpan></DiscWrap>
      <CardSub>Level: {level ? level : '???'}</CardSub>
    </Card>
  </CardContainer>
  )
}

const DiscSpan = styled.span`
  visibility: hidden;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  width: auto;
  position: absolute;
  z-index: 2;
  margin-top: 50px;
`;

const TitleSpan = styled.span`
  visibility: hidden;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  width: auto;
  position: absolute;
  z-index: 2;
`;

const CardContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
resize: horizontal;
`;
const Card = styled.div`
border: solid;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background: white;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
border-radius: 0.5rem;
margin: 0.5rem;
border-width: thick;
border-color: ${props => props.element ? props.element : 'black'};
justify-content: space-around;
height: 300px;
width: 150px;
padding: 1%;
`;
const CardTitle = styled.h2`
width: 100%;
text-overflow: ellipsis;
overflow: hidden;
white-space: nowrap;
`;
const TitleWrap = styled.div`
width: 100%;
display: flex;
&:hover ${TitleSpan} {
  visibility: visible;
}
`;

const CardElement = styled.img`
width: 100%;
height: 150px;
object-fit: cover;
border-radius: 1rem;
@media screen and (max-width: 300px) {
  display: none;
}
margin-top: 2%;
`;
const CardDisc = styled.div`
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
`;
const DiscWrap = styled.div`
width: 100%;
justify-content: center;
display: flex;
&:hover ${DiscSpan} {
  visibility: visible;
}
`;
const CardSub = styled.div`
margin-top: 2%;
`;

const CardHand = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
`;

export default function Otto() {
  return (
    <div style={{ color: "black" }}>
      <CardHand>
      {MakeCard('Sparks', 1, 'lightning')}
      {MakeCard('Fireball', 1, 'fire')}
      {MakeCard('Blood Hammer Drill', 1, 'blood')}
      {MakeCard()}
      {MakeCard('Dave', 1, 'poop')}
      </CardHand>
      <Stats
        type={"description"}
        stats={{
          name: "Otto",
          level: 10,
          class: "Kʼawiil.",
          spells: 8,
          passives: 32,
          titles: 5,
          "spell points": 0, // from class
          "stat points": 0, // from race
          vitality: 1,
          strength: 1, // 1 from title
          endurance: 0,
          magic: 14, // 1 from title, 10 from leveling, 1 from robe, unlikely to be wearing the mask
          willpower: 3, // 1 from title
          dexterity: 4, // 2 from the level 1 & 10
          sense: 2, // 1 from human
          charisma: 15, // 2 from human, 1 from title, 10 from leveling
          // rest from passives
        }}
        notes={"4 spell per level, 1 stats per level,"}
      />
      {/* This equipment is level 5? So maybe needs stat changes */}
      <Equipment
        items={{
          Head: {
            name: "Heavenly White Stag Mask",
            effect:
              "Magic: +2, Disease resistance + 20%, Mana regeneration + 20%, blessing of 建御雷 [Takemikazuchi].",
            rating: "unique",
            long: "Blessing of 建御雷 [Takemikazuchi]: Resist lightning +20%, Lightning cost - 15%, Lightning power +20%. ",
          },
          Body: {
            name: "Academy Robe (Black/Yellow).",
            effect: "Magic: +2, Lightning +2%, Health +10.",
            rating: "junk",
          },
        }}
      />
      {/* <li>
      Body:<font color="blue"> Hui Lu's Battle Armor</font> ???
    </li>
    <li>
      Hands:<font color="blue"> Hui Lu's Enchanting Gloves</font> ???
    </li>
    <li>
      Feet:<font color="blue"> Hui Lu's Burning Boots</font> ???
    </li>
    <li>
      Weapon:<font color="blue"> </font>
    </li> */}
      {/* gloves, adds fire to a weapon. boots, change the surface to fire. chest, reflect damage as fire when hit in melee*/}
      <h1>Other Items</h1>
      <Spells
        spells={[
          { name: "Lightning germination", level: 2 },
          { name: "Lightning growth", level: 2 },
          { name: "Lightning harvest", level: 2 },
          { name: "Seeds to Soldiers", level: 2 },
          { name: "Lightning seeds", level: 2 }, // 5 points spent on old spells
          // New Spells Below
          { name: "Scarecrow", level: 2 },
          { name: "Kʼawiil Burst", level: 2 },
          { name: "Kʼawiil Bolt", level: 2 },
          { name: "Serpent Skin", level: 2 },
          { name: "Serpent Pattern", level: 2 }, // 10 points spent on new spells
          { name: "Reap What You Sow", level: 2 },
          { name: "Bountiful Harvest", level: 2 },
        ]}
        type={"mage"}
      />
      <div className="BreakPoint"></div>
      {/* Human skills, but also could have God based skills and passives. The snake ones looked good. */}
      <Spells
        spells={[
          { name: "Human Ingenuity", level: 2 },
          { name: "Persuasive", level: 2 },
          { name: "Quick", level: 2 },
          { name: "Perception", level: 2 },
          { name: "Athletic", level: 2 },
          { name: "Healthy", level: 2 },
          { name: "Adaptable", level: 2 },
          { name: "Brave", level: 2 },
          // { name: "Pure of mind", level: 2 },
          // { name: "Magic Enthusiast", level: 2 }, // 20
        ]}
        type={"human"}
      />
      <Spells
        spells={[
          // Negatives
          { name: "Otitis Externa", level: 1 },
        ]}
        type={"negatives"}
      />
    </div>
  );
}

// Academy, border guard, monster hunters, fugitive, leikan prince, farmer, war lord? Flees the sea people invasion turns south, find the bird people, fight eleven pirates, sail to the old world. Or use the under ground road...

// The invasion of earth starts

// Kʼawiil Notes:
// This court is the body of an immortal the maya gods killed and lived in after.
// Xibalba is described in the Popol Vuh as a court below the surface of the Earth associated with death and with twelve gods or powerful rulers known as the Lords of Xibalba.

// Chaac *L*
// The god of storms and rain, enemy of Camazotz and wields a lightning axe.

// Camazotz *PV*
// A bat and death god.

// God K. God L is often combined with god K, the lightning deity who, as an owner of the seeds, was considered a bringer of abundance.[5] More specifically, god L can extend the head of god K, or carry an infant god K in a sling on his back.[6] God K also happens to be the victim of god L as a Venus patron (Dresden Codex).


