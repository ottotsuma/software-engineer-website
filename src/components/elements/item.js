import React from 'react'
import styled from 'styled-components';
import {monadColors as colors, colors as fixmeplease} from './colors'

// src: for image || question mark
// height: || 300px
// width: || 300px
// stats object {key:value} || No stats to show.
// name || ''
// effect || ''
// long // for long writing below the item. Don't use with image!

function perc2color(perc) {
    if (perc > 100) return "rgb(36, 255, 0)"
    var r, g, b = 0;
    if (perc < 50) {
        r = 255;
        g = Math.round(5.1 * perc);
    }
    else {
        g = 255;
        r = Math.round(510 - 5.10 * perc);
    }
    var h = r * 0x10000 + g * 0x100 + b * 0x1;
    return '#' + ('000000' + h.toString(16)).slice(-6);
}

export const ItemList = {
  "Training Health Potion" : {
    name: 'Training Health Potion',
    description: 'Recovers 1HP every 5 seconds for the next 120 seconds.', // 24 HP
    image: '',
    effect: '', // Price since it was shown In a shop.
  },
  "Soul bound wand" : {
    name: 'Soul bound wand',
    description: 'Third Eye (active skill). Control minion: +1, sense: +1,',
    image: 'https://ottotsuma.github.io/images/items/wand1.png',
    effect: '¤3,200,000', // Price since it was shown In a shop.
    rating: "normal",
    stats: {sense: 1}
  },
  "Bone Lance" : {
    name: 'Bone Lance',
    description: '',
    image: 'https://ottotsuma.github.io/images/people/2d7002b02e419fb5cca7be2ec8e9f755.jpg',
    effect: '', // Price since it was shown In a shop.
  },
  "Trainee Bone Spear" : {
    name: 'Trainee Bone Spear',
    description: 'Tiny increase in spear proficiency when equipped.',
    image: '',
    effect: '', // Price since it was shown In a shop.
  },
  "Paladin Engeler's Body Armor (silver rank)": {
    name: "Paladin Engeler's Body Armor (silver rank)",
    description: "Reduces physical damage taken by 10%, except spears. Endurance +1, Endurance +10%.",
    rating: "epic",
    stats: {endurance: 1, enduranceMultiplier: 1.1}
  },
  "Paladin Engeler's Sallet (silver rank)": {
    name: "Paladin Engeler's Sallet (silver rank)",
    description: "Endurance +1.8.",
    rating: "epic",
    stats: {endurance: 1.8}
  },
  "Paladin Engeler's Gauntlets (silver rank)": {
    name: "Paladin Engeler's Gauntlets (silver rank)",
    description: "Endurance +1.",
    rating: "epic",
    stats: {endurance: 1}
  },
  "Paladin Engeler's Sabaton (silver rank)": {
    name: "Paladin Engeler's Sabaton (silver rank)",
    description: "Endurance +1.2.",
    rating: "epic",
    stats: {endurance: 1.2}
  },
  "Paladin Engeler's Mace (silver rank)": {
    name: "Paladin Engeler's Mace (silver rank)",
    description: "Strength +3.",
    rating: "epic",
    stats: {strength: 3}
  },
  "Paladin Engeler's Shield (silver rank)": {
    name: "Paladin Engeler's Shield (silver rank)",
    description: "Threat increased 20%, Reduce received damage from Demons by 7%, Reduce received damage from Undead by 7%, chance to block 20%.",
    rating: "epic",
    stats: {endurance: 0}
  },
  "Paladin Engeler's Cape (silver rank)": {
    name: "Paladin Engeler's Cape (silver rank)",
    description: "Increase HP by 315, Increase MP by 225.",
    rating: "epic",
    stats: {HP: 315, MP: 225}
  },
  "Demon Hunter Necklace": {
    name: "Demon Hunter Necklace",
    description: "Reduces physical damage taken by 15, Reduces magical damage taken by 17, Reduce received damage from Demons by 3%",
    rating: "epic",
  },
  "Demon Hunter Bracelet": {
    name: "Demon Hunter Bracelet",
    description: "Reduces physical damage taken by 15, Reduces magical damage taken by 17, Reduce received damage from Demons by 3%",
    rating: "epic",
  },
  "Demon Hunter Earring": {
    name: "Demon Hunter Earring",
    description: "Reduces physical damage taken by 15, Reduces magical damage taken by 17, Reduce received damage from Demons by 3%",
    rating: "epic",
  },
  "Demon Hunter Ring": {
    name: "Demon Hunter Ring",
    description: "Reduces physical damage taken by 15, Reduces magical damage taken by 17, Reduce received damage from Demons by 3%",
    rating: "epic",
  },
  "Paladin Engeler's Set (3/7)" : {
    name: "Paladin Engeler's Set",
    description: "HP + 217.0, endurance + 0.9",
    rating: "epic",
    stats: {endurance: 0.9, HP: 217}
  },
  "Paladin Engeler's Set (4/7)" : {
    name: "Paladin Engeler's Set",
    description: "Crit Rate: +1, Critical Damage: +2.5%.",
    rating: "epic",
    // stats: {}
  },
  "Paladin Engeler's Set (7/7)" : {
    name: "Paladin Engeler's Set",
    description: "Skill: One of the Twelve; Increases all stats by 12% for 7 seconds.",
    rating: "epic",
    stats: {endurance: 0}
  },
  "Toads Skin Jacket" : {
    name: 'Toads Skin Jacket',
    description: 'Has a small chance to poison on contact, dexterity +1.', // 24 HP
    image: 'https://ffxiv.gamerescape.com/w/images/7/70/Model-Toadskin_Jacket-Male-Hyur.png',
    rating: "normal",
    stats: {endurance: 0},
    effect: '', // Price since it was shown In a shop.
  },
}

// Toadskin Jacket - https://ffxiv.gamerescape.com/wiki/Category:Rogue_Body/iLevel_30-39

// ##### Types: 
// ###### Hat/Crown:
// - Crown (king) - (green) Crown of the Dammed. Magic + 25, -5 Charisma, control undead +1.
// ###### Rings:
// - Kings Rings, Ch5, Ring of initial undead control. mag + 10, Control undead +1 (normal)
// - Ring of Little Strength, Ch11, Strength +1
// - Ring (queen) - (junk) Ring of Little Strength. Strength +5
// ###### Amulets/Necklaces:
// Necklace is just a normal accessory but an amulet should be magical in nature.
// - Pendent of Medium Magic, Ch11, Magic +2 , Strength -1.
// - necklace made of teeth, Ch17
// ###### Earings/Piercings:
// ###### Belt:
// ###### Glasses:
// ###### Bracelet/Anklet:
// ###### Collar/Choker:
// ###### Tattoo:
// ###### Manicure:
// ###### Tiara:
// - Queens tiara, Ch5, Queen's Pawn. Skill: Animate stone. (rare)
// ###### Hair Clip/ Hair Accs:
// ###### Scarves:
// - Black scarf - Hides users identity
// ###### Capes:

// #### Materials
// - Whale skin for coating boats to go faster

// #### Misc Items
// - Quill - (blue) Enchanting chance of success + 5%
// - Skull - (blue) Skull of victim. Control undead +2 - T
// ###### Coins:
// - Princesses Coin, Ch5

export function InlineItem ({itemName}) {
  // console.log(spellList[Object.keys(spellList).find(key => key.toLowerCase() === spellName.toLowerCase())]);
  return <Inline>{itemName}<ItemSpan>{ItemList[itemName] ? ItemList[itemName].description : ''}</ItemSpan></Inline>
}

const ItemSpan = styled.span`
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

const Inline = styled.div`
display: contents;
font-family: 'monospace';
&:hover ${ItemSpan} {
  visibility: visible;
}
`;

function Item(props) {
    const array = [];
    if (props.stats) {
        const keys = Object.keys(props.stats);
        for (let index = 0; index < keys.length; index++) {
            // make these into styled items with props => props.color so you can change the color of the stats!
            const element = <div style={{ textTransform: 'capitalize', marginRight: "5px" }}>{keys[index] + ": "}</div>
            const element2 = <div style={{ color: perc2color(props.stats[keys[index]] * 10) }}>{props.stats[keys[index]]}</div>;
            array.push(
                <SingleStat key={index + "stat"}>
                    {element} {element2}
                </SingleStat>
            );
        }
    } else {
      // no stats to show
    }
    if(!props.src) {
        console.log('no image')
        return (
            <Main>
                <CardNoImage bottom={props.effect ? '10px':'0px'}>
                    <TitleItem2 color={colors[props.rating]}>{props.name || ''}</TitleItem2>
                    {array.length > 0 && <Span>{array}</Span>}
                    {props.effect ? <Name>{props.effect}</Name> : <div></div>}
                </CardNoImage>
                {props.long ? <div>{props.long}</div> : <div></div>}
            </Main>
        ) 
    } else {
        return (
            <Main>
                <Card height={props.height} width={props.width} src={props.src}>
                    {props.rating ? <TitleItem color={colors[props.rating]}>{props.name || ''}</TitleItem> : <Title color={colors[props.rating]}>{props.name || ''}</Title>}
                    {array.length > 0 && <Span>{array}</Span>}
                    {props.effect ? <Name style={{background:"#f8f8ff"}}>{props.effect}<br />{props.effect2 ? props.effect2 : ''}</Name> : <div></div>}
                </Card>
            </Main>
        )
    }
}

export default Item

const Title = styled.h1`
  display: flex;
  justify-content: center;
`;

const TitleItem = styled.p`
  display: flex;
  justify-content: center;
  font-size: 1.5em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
    color: ${props => props.color || 'white'}
`;

const TitleItem2 = styled.p`
  display: flex;
  justify-content: center;
  // font-size: 1.5em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
    color: ${props => props.color || 'white'}
`;

const Main = styled.div`
display: flex;
    flex-direction: column;
    align-items: center;
`;

const SingleStat = styled.li`
  border-radius: 6px;
  padding: 1px;
  width: auto;
  display: flex;
  justify-content: space-between;
`;

const Name = styled.div`
  width: ${props => props.width || '300px'};
  border-radius: 3px;
  overflow: hidden;
  position:absolute; /* important */
  bottom:0; /* important */
  max-height:0; /* important */
  overflow:hidden; /* important */
  transition:max-height 300ms ease-in; /* important */
  font-weight: bold;
  color: ${fixmeplease.black.off};
`;

const Span = styled.span`
  visibility: hidden;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  width: auto;
  position: absolute;
  z-index: 2;
  margin-left: 50%;
  white-space: nowrap;
  top: 0;
  @media screen and (max-width: 650px) {
    margin-left: 0%;
    left: 0;
  }
`;

const Card = styled.div`
position:relative; /* important */
  width: ${props => props.width || '300px'};
  height: ${props => props.height || '300px'};
  background-image: url(${props => props.src || 'http://assets.stickpng.com/thumbs/5a461418d099a2ad03f9c999.png'});
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  border-radius: 3px;
  margin-bottom: 10px;
  &:hover ${Span} {
    visibility: visible;
  }
  &:hover ${Name} {
    max-height:100%; /* important */
  }
`;

const CardNoImage = styled.div`
position:relative; /* important */
  width: 300px;
  height: 50px;
  border-radius: 3px;
  margin-bottom: ${props => props.bottom || "10px"};
  &:hover ${Span} {
    visibility: visible;
  }
  &:hover ${Name} {
    max-height:50%; /* important */
  }
`;