import React from 'react'
import styled from 'styled-components';
import { monadColors as colors, colors as fixmeplease } from './colors'

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
  // Should stats really be : {1:{magic: 1}, 2:{magic: 2}}
  "Training Health Potion": {
    name: 'Training Health Potion',
    description: 'Recovers 1HP every 5 seconds for the next 120 seconds.', // 24 HP
    image: '',
    effect: '', // Price since it was shown In a shop.
    note: '',
    type: 'potion',
    stats: {},
    rating: '',
  },
  "Soul bound wand": {
    name: 'Soul bound wand',
    description: 'Third Eye (active skill). Control minion: +1, sense: +1,',
    image: 'https://ottotsuma.github.io/images/items/wand1.png',
    effect: '¤3,200,000', // Price since it was shown In a shop.
    rating: "normal",
    stats: { sense: 1 },
    note: '',
    type: 'wand',
  },
  "Bone Lance": {
    name: 'Bone Lance',
    description: '',
    image: 'https://ottotsuma.github.io/images/people/2d7002b02e419fb5cca7be2ec8e9f755.jpg',
    effect: '', // Price since it was shown In a shop.
    rating: "",
    stats: {},
    note: '',
    type: 'spear',
  },
  "Trainee Bone Spear": {
    name: 'Trainee Bone Spear',
    description: 'Tiny increase in spear proficiency when equipped.',
    image: '',
    effect: '', // Price since it was shown In a shop.
    rating: "",
    stats: {},
    note: '',
    type: 'spear',
  },
  "Paladin Engeler's Body Armor (silver rank)": {
    name: "Paladin Engeler's Body Armor (silver rank)",
    description: "Reduces physical damage taken by 10%, except spears. Endurance +1, Endurance +10%.",
    rating: "epic",
    stats: { endurance: 1, enduranceMultiplier: 1.1 },
    note: '',
    type: 'armor',
  },
  "Paladin Engeler's Sallet (silver rank)": {
    name: "Paladin Engeler's Sallet (silver rank)",
    description: "Endurance +1.8.",
    rating: "epic",
    stats: { endurance: 1.8 },
    note: '',
    type: 'hat',
  },
  "Paladin Engeler's Gauntlets (silver rank)": {
    name: "Paladin Engeler's Gauntlets (silver rank)",
    description: "Endurance +1.",
    rating: "epic",
    stats: { endurance: 1 },
    note: '',
    type: 'gloves',
  },
  "Paladin Engeler's Sabaton (silver rank)": {
    name: "Paladin Engeler's Sabaton (silver rank)",
    description: "Endurance +1.2.",
    rating: "epic",
    stats: { endurance: 1.2 },
    note: '',
    type: 'boots',
  },
  "Paladin Engeler's Mace (silver rank)": {
    name: "Paladin Engeler's Mace (silver rank)",
    description: "Strength +3.",
    rating: "epic",
    stats: { strength: 3 },
    note: '',
    type: 'mace',
  },
  "Paladin Engeler's Shield (silver rank)": {
    name: "Paladin Engeler's Shield (silver rank)",
    description: "Threat increased 20%, Reduce received damage from Demons by 7%, Reduce received damage from Undead by 7%, chance to block 20%.",
    rating: "epic",
    stats: { endurance: 0 },
    note: '',
    type: 'shield',
  },
  "Paladin Engeler's Cape (silver rank)": {
    name: "Paladin Engeler's Cape (silver rank)",
    description: "Increase HP by 315, Increase MP by 225.",
    rating: "epic",
    stats: { HP: 315, MP: 225 },
    note: '',
    type: 'cape',
  },
  "Demon Hunter Necklace": {
    name: "Demon Hunter Necklace",
    description: "Reduces physical damage taken by 15, Reduces magical damage taken by 17, Reduce received damage from Demons by 3%",
    rating: "epic",
    stats: {},
    note: '',
    type: 'Necklace',
  },
  "Demon Hunter Bracelet": {
    name: "Demon Hunter Bracelet",
    description: "Reduces physical damage taken by 15, Reduces magical damage taken by 17, Reduce received damage from Demons by 3%",
    rating: "epic",
    note: '',
    type: 'bracelet',
  },
  "Demon Hunter Earring": {
    name: "Demon Hunter Earring",
    description: "Reduces physical damage taken by 15, Reduces magical damage taken by 17, Reduce received damage from Demons by 3%",
    rating: "epic",
    note: '',
    type: 'earring',
  },
  "Demon Hunter Ring": {
    name: "Demon Hunter Ring",
    description: "Reduces physical damage taken by 15, Reduces magical damage taken by 17, Reduce received damage from Demons by 3%",
    rating: "epic",
    note: '',
    type: 'ring',
  },
  "Paladin Engeler's Set (3/7)": {
    name: "Paladin Engeler's Set",
    description: "HP + 217.0, endurance + 0.9",
    rating: "epic",
    stats: { endurance: 0.9, HP: 217 },
    note: '',
    type: 'set effect',
  },
  "Paladin Engeler's Set (4/7)": {
    name: "Paladin Engeler's Set",
    description: "Crit Rate: +1, Critical Damage: +2.5%.",
    rating: "epic",
    // stats: {}
    note: '',
    type: 'set effect',
  },
  "Paladin Engeler's Set (7/7)": {
    name: "Paladin Engeler's Set",
    description: "Skill: One of the Twelve; Increases all stats by 12% for 7 seconds.",
    rating: "epic",
    stats: { endurance: 0 },
    note: '',
    type: 'set effect',
  },
  "Toads Skin Jacket": {
    name: 'Toads Skin Jacket',
    description: 'Has a small chance to poison on contact, dexterity +1.',
    image: 'https://ffxiv.gamerescape.com/w/images/7/70/Model-Toadskin_Jacket-Male-Hyur.png',
    rating: "normal",
    stats: { dexterity: 1 },
    effect: '', // Price since it was shown In a shop.
    note: 'https://ffxiv.gamerescape.com/wiki/Category:Rogue_Body/iLevel_30-39',
    type: 'armor',
  },
  "Crown of the Dammed": {
    name: 'Crown of the Dammed',
    description: 'Magic + 25, -5 Charisma, control undead +1.',
    image: '',
    rating: "rare",
    stats: { magic: 25, charisma: -5 },
    effect: '', // Price since it was shown In a shop.
    note: 'Ch5, kings crown',
    type: 'hat'
  },
  "Ring of initial undead control": {
    name: 'Ring of initial undead control',
    description: 'mag + 10, Control undead +1.',
    image: '',
    rating: "normal",
    stats: { magic: 10 },
    effect: '', // Price since it was shown In a shop.
    note: 'Ch5, kings ring',
    type: 'ring'
  },
  "Ring of Little Strength": {
    name: 'Ring of Little Strength',
    description: 'Strength +1.',
    image: '',
    rating: "junk",
    stats: { strength: 10 },
    effect: '', // Price since it was shown In a shop.
    note: 'Ch11, queens ring',
    type: 'ring'
  },
  "Pendent of Medium Magic": {
    name: 'Pendent of Medium Magic',
    description: 'magic +2, strength -1.',
    image: '',
    rating: "normal",
    stats: { strength: -1, magic: 2 },
    effect: '', // Price since it was shown In a shop.
    note: 'Ch11',
    type: 'pendent'
  },
  "Witches Hat": {
    name: 'Witches Hat',
    description: 'magic +30.',
    image: '',
    rating: "normal",
    stats: { magic: 30 },
    effect: '', // Price since it was shown In a shop.
    note: 'Ch11',
    type: 'hat'
  },
  "Queen's Pawn": {
    name: "Queen's Pawn",
    description: 'Skill: Animate stone.',
    image: '',
    rating: "rare",
    stats: {},
    effect: '', // Price since it was shown In a shop.
    note: 'Ch11, Tiara',
    type: 'hat'
  },
  "Skull of victim": {
    name: "Skull of victim",
    description: 'Control undead +2.',
    image: '',
    rating: "normal",
    stats: {},
    effect: '', // Price since it was shown In a shop.
    note: 'Ch11, Skull',
    type: 'misc'
  },
  "Enchanting Quill": {
    name: "Enchanting Quill",
    description: 'Enchanting chance of success + 5%.',
    image: '',
    rating: "normal",
    stats: {},
    effect: '', // Price since it was shown In a shop.
    note: 'Ch11, Quill',
    type: 'misc'
  },
  "Princesses Coin": {
    name: "Princesses Coin",
    description: '(???).',
    image: '',
    rating: "junk",
    stats: {},
    effect: '', // Price since it was shown In a shop.
    note: 'Ch11, Coin',
    type: 'misc'
  },
  "necklace made of teeth": {
    name: "necklace made of teeth",
    description: '(???).',
    image: '',
    rating: "junk",
    stats: {},
    effect: '', // Price since it was shown In a shop.
    note: 'Ch17',
    type: 'necklace'
  },
  "Black scarf": {
    name: "Black scarf",
    description: 'Hides users identity.',
    image: '',
    rating: "junk",
    stats: {},
    effect: '', // Price since it was shown In a shop.
    note: '',
    type: 'scarf'
  },
  "Whale Skin": {
    name: "Whale Skin",
    description: 'Coating boats to go faster.',
    image: '',
    rating: "normal",
    stats: {},
    effect: '', // Price since it was shown In a shop.
    note: '',
    type: 'misc'
  },
  "Linen Halfgloves": {
    name: "Linen Halfgloves",
    description: 'Dexterity +1.',
    image: 'https://ffxiv.gamerescape.com/w/images/9/9a/Model-Linen_Halfgloves-Male-Hyur.png',
    rating: "junk",
    stats: { dexterity: 1 },
    effect: '', // Price since it was shown In a shop.
    note: '',
    type: 'gloves'
  },
  "Battlemage's Gloves": {
    name: "Battlemage's Gloves",
    description: 'Magic +1, Willpower: +1, Spell Speed: +1%.',
    image: 'https://ffxiv.gamerescape.com/w/images/9/9a/Model-Linen_Halfgloves-Male-Hyur.png',
    rating: "normal",
    stats: { magic: 1, willpower: 1 },
    effect: '', // Price since it was shown In a shop.
    note: '',
    type: 'gloves'
  },
  "Battlemage's Hat": {
    name: "Battlemage's Hat",
    description: 'Magic +1, Willpower: +1, Spell Speed: +1%.',
    image: 'https://ffxiv.gamerescape.com/w/images/3/34/Model-Battlemage%27s_Hat-Male-Hyur.png',
    rating: "normal",
    stats: { magic: 1, willpower: 1 },
    effect: '', // Price since it was shown In a shop.
    note: '',
    type: 'hat'
  },
  "Battlemage's Robe": {
    name: "Battlemage's Robe",
    description: 'Magic +1, Willpower: +1, Spell Speed: +1%.',
    image: 'https://ffxiv.gamerescape.com/w/images/6/63/Model-Battlemage%27s_Robe-Male-Hyur.png',
    rating: "normal",
    stats: { magic: 1, willpower: 1 },
    effect: '', // Price since it was shown In a shop.
    note: '',
    type: 'armor'
  },
  "Battlemage's Crakows": {
    name: "Battlemage's Crakows",
    description: 'Magic +1, Willpower: +1, Spell Speed: +1%.',
    image: 'https://ffxiv.gamerescape.com/w/images/0/0c/Model-Battlemage%27s_Crakows-Male-Hyur.png',
    rating: "normal",
    stats: { magic: 1, willpower: 1 },
    effect: '', // Price since it was shown In a shop.
    note: '',
    type: 'boots'
  },
  "Battlemage's Breeches": {
    name: "Battlemage's Breeches",
    description: 'Magic +1, Willpower: +1, Spell Speed: +1%.',
    image: 'https://ffxiv.gamerescape.com/w/images/2/2e/Model-Battlemage%27s_Breeches-Male-Hyur.png',
    rating: "normal",
    stats: { magic: 1, willpower: 1 },
    effect: '', // Price since it was shown In a shop.
    note: '',
    type: 'trousers'
  },
  "Battlemage's Set (4/4)": {
    name: "Battlemage's Set (4/4)",
    description: "Magic +1, Willpower: +1, Spell Speed: +1%.",
    rating: "normal",
    stats: { magic: 1, willpower: 1 },
    note: '',
    type: 'set effect',
  },
  "Cotton Scarf": {
    name: "Cotton Scarf",
    description: '',
    image: 'https://ffxiv.gamerescape.com/w/images/a/a1/Model-Cotton_Scarf-Male-Hyur.png',
    rating: "junk",
    stats: {},
    effect: '', // Price since it was shown In a shop.
    note: '',
    type: 'scarf'
  },
  "Rayndr Jackboots": {
    name: "Rayndr Jackboots",
    description: 'Critical hit rate: +1, Endurance: +1.',
    image: 'https://ffxiv.gamerescape.com/w/images/2/23/Model-Qarn_Jackboots-Male-Hyur.png',
    rating: "normal",
    stats: { endurance: 1 },
    effect: '', // Price since it was shown In a shop.
    note: '',
    type: 'boots'
  },
  "Rogue's Ring": {
    name: "Rogue's Ring",
    description: { 1: 'Critical hit rate: +1, Dexterity: +1.', 3: 'Critical hit rate: +3, Dexterity: +3.', 9: 'Critical hit rate: +9, Dexterity: +9.' },
    image: 'https://ffxiv.gamerescape.com/w/images/thumb/0/05/Model-Rogue%27s_Ring.png/450px-Model-Rogue%27s_Ring.png',
    rating: "normal",
    stats: { 3: { dexterity: 3 }, 9: { dexterity: 9 }, },
    effect: '', // Price since it was shown In a shop.
    note: 'https://ffxiv.gamerescape.com/wiki/Category:Ring/iLevel_30-39',
    type: 'ring'
  },
  "Dark Elf's Scimitar": {
    name: "Dark Elf's Scimitar",
    description: 'Cutting deals 3% more damage, strength: +1.',
    image: 'https://i.pinimg.com/564x/e4/b7/5d/e4b75d01d093430bb055a82dc5967c38.jpg',
    rating: "normal",
    stats: { strength: 1 },
    effect: '', // Price since it was shown In a shop.
    note: '',
    type: 'sword'
  },
  "Meroyri Xiphos": {
    name: "Meroyri Xiphos",
    description: 'strength: +1.',
    image: 'https://i.pinimg.com/564x/36/0d/28/360d2889c232ccfc54439397d95198d2.jpg',
    rating: "junk",
    stats: { strength: 1 },
    effect: '', // Price since it was shown In a shop.
    note: '',
    type: 'sword'
  },
  "Rayndr Face Mask": {
    name: "Rayndr Face Mask",
    description: 'Disease resistance +3%.',
    image: '',
    rating: "junk",
    stats: { strength: 0 },
    effect: '', // Price since it was shown In a shop.
    note: '',
    type: 'hat'
  },
  "Shadow Pirate's Coat": {
    name: "Shadow Pirate's Coat",
    description: '',
    image: '',
    rating: "rare",
    stats: { strength: 0 },
    effect: '', // Price since it was shown In a shop.
    note: '',
    type: 'armor'
  },
  "Leather Pirate Boots": {
    name: "Leather Pirate Boots",
    description: '',
    image: '',
    rating: "junk",
    stats: { strength: 0 },
    effect: '', // Price since it was shown In a shop.
    note: '',
    type: 'boots'
  },
  "Black Band": {
    name: "Black Band",
    description: {1:'Dexterity: +1.', 9:'Dexterity: +1.'},
    image: '',
    rating: "normal",
    stats: {
      1: { dexterity: 1 },
      5: { dexterity: 5 },
      9: { dexterity: 9 },
      10: { dexterity: 10 }
    },
    effect: '', // Price since it was shown In a shop.
    note: '',
    type: 'ring'
  },
  "Tidus Earring": {
    name: "Tidus Earring",
    description: 'Dexterity +9, Swimming speed +5, Can breath underwater for 5 minutes.',
    image: 'https://image.vector-park.jp/images/item/original2/019/2017/08/24/019-201708240761_1.jpg?t=1572379770',
    rating: "epic",
    stats: {
      9: { dexterity: 9 },
    },
    effect: '', // Price since it was shown In a shop.
    note: '',
    type: 'earring'
  },
  "Featureless Deathwood Mask": {
    name: "Featureless Deathwood Mask",
    description: '',
    image: '',
    rating: "rare",
    stats: {
    },
    effect: '', // Price since it was shown In a shop.
    note: '',
    type: 'hat'
  },
  "Black Braid Bracelet": {
    name: "Black Braid Bracelet",
    description: '',
    image: '',
    rating: "junk",
    stats: {
    },
    effect: '', // Price since it was shown In a shop.
    note: '',
    type: 'bracelet'
  },
  "Frost Gloves": {
    name: "Frost Gloves",
    description: '',
    image: '',
    rating: "normal",
    stats: {
    },
    effect: '', // Price since it was shown In a shop.
    note: '',
    type: 'gloves'
  },
  "Flame Gloves": {
    name: "Flame Gloves",
    description: '',
    image: '',
    rating: "normal",
    stats: {
    },
    effect: '', // Price since it was shown In a shop.
    note: '',
    type: 'gloves'
  },
  "Heavenly White Stag Mask": {
    name: "Heavenly White Stag Mask",
    description: 'Magic: +2, Disease resistance + 20%, Mana regeneration + 20%, blessing of 建御雷 [Takemikazuchi].',
    image: '',
    rating: "unique",
    stats: { magic: 2 },
    effect: 'Blessing of 建御雷 [Takemikazuchi]: Resist lightning +20%, Lightning cost - 15%, Lightning power +20%.', // Price since it was shown In a shop.
    note: '',
    type: 'hat'
  },
  "Academy Robe (Black/Yellow)": {
    name: "Academy Robe (Black/Yellow)",
    description: 'Magic: +2, Lightning +2%, HP +10.',
    image: '',
    rating: "junk",
    stats: { magic: 2, HP: 10 },
    effect: '', // Price since it was shown In a shop.
    note: '',
    type: 'armor'
  },
}
// Body:<font color="blue"> Hui Lu's Battle Armor</font> ???
//   Hands:<font color="blue"> Hui Lu's Enchanting Gloves</font> ???
//   Feet:<font color="blue"> Hui Lu's Burning Boots</font> ???
// ##### Types: 
// ###### Hat/Crown:
// ###### Rings:
// ###### Amulets/Necklaces:
// Necklace is just a normal accessory but an amulet should be magical in nature.
// ###### Earings/Piercings:
// ###### Belt:
// ###### Glasses:
// ###### Bracelet/Anklet:
// ###### Collar/Choker:
// ###### Tattoo:
// ###### Manicure:
// ###### Tiara:
// ###### Hair Clip/ Hair Accs:
// ###### Scarves:
// ###### Capes:
// #### Materials
// #### Misc Items
// ###### Coins:

export function InlineItem({ itemName }) {
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
  if (!props.src) {
    console.log('no image')
    return (
      <Main>
        <CardNoImage bottom={props.effect ? '10px' : '0px'}>
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
          {props.effect ? <Name style={{ background: "#f8f8ff" }}>{props.effect}<br />{props.effect2 ? props.effect2 : ''}</Name> : <div></div>}
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