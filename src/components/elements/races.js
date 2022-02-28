import React, { useState } from "react";
import styled from "styled-components";
import {colors, monadColors} from './colors'

export const racesList = {
  human: {
    stats: { charisma: 2, sense: 1 },
    team: '',
    self: 'Can use all basic tools.',
    images: '',
    notes: '',
    tier: 'normal'
  },
  "mana creature": {
    stats: { magic: 5 },
    team: '',
    self: 'Made of Mana, Magic +5.',
    images: '',
    notes: 'All HP is converted to MP. When MP reaches zero, you will die.',
    tier: 'legendary'
  },
  Orc: {
    stats: { strength: 2, vitality: 1 },
    team: '',
    self: 'Small health regen when in combat.',
    images: '',
    notes: '',
    tier: 'normal'
  },
  Gnoll: {
    stats: { sense: -2, dexterity: 1 },
    team: '',
    self: 'Can gain access to spells/abilities early from their Demon Lord.',
    images: '',
    notes: '',
    tier: 'normal'
  },
  "Kemonomimi": {
    stats: { Sense: 2, Dexterity: 1 },
    team: '',
    self: 'Their claws given them a built in weapon.',
    images: '',
    notes: 'Kemonomimi, humans with animal ears, not to be confused with Ailuranthropy.',
    tier: 'normal'
  },
  Dwarf: {
    stats: { Vitality: 2, Strength: 1 },
    team: '',
    self: 'Small resistance to spell effects, but lower success with spells.',
    images: '',
    notes: '',
    tier: 'normal'
  },
  Elf: {
    stats: { charisma: 2, Magic: 1 },
    team: '',
    self: 'Charming is easier.',
    images: '',
    notes: '[Woodland / Sun elves, Sylvan ]🧝‍♂️, Plant element.',
    tier: 'normal'
  },
  "Snow Elf": {
    stats: {},
    team: '',
    self: 'Cold resist +5%.',
    images: '',
    notes: 'Ice element.',
    tier: 'normal'
  },
  "Dark Elf": {
    stats: { willpower: 2 },
    team: '',
    self: 'Resist heat +5%.',
    images: '',
    notes: 'Desert Elf, Umbral, Grey Elf, Ash Elf, NOT Drow. They make no sense. Fire element.',
    tier: 'normal',
    link: 'https://www.5esrd.com/races/elf/subrace-options/umbral-elf/, https://www.reddit.com/r/UnearthedArcana/comments/bha9uj/elven_subrace_ash_elf_a_tough_race_of_greyskinned/, https://www.artstation.com/artwork/zrZXd'
  },
  "Water Elf": {
    stats: {},
    team: '',
    self: 'Can breath underwater.',
    images: '',
    notes: 'Sea Elf, Water Element.',
    tier: 'normal'
  },
};
// Bakeneko (monster) (one tail) cat demon,  & nekomata (race) (two tails), raises the dead with dances.

// <!-- Rare -->
// <li> Vampire - Strength - +1 Vitality - +1 Magic - +1 Dexterity - +1 Sense - +1. (Blood magic is always unlocked)🧛‍♂️
// <li> Dark Elf  - ??? [Desert elves]
// <li> Snow Elves - [Cave elves]
// <li> Sea Elves - [Mythical]
// <li> Automitia - ???
// <li> Undead (generic) - ???
// <li> Krogan - ???
// <li> Turian - ???
// <li>🧜‍♀️
// <li>🧚‍♀️
// <li>🧟‍♂️

// <!-- Epic -->
// <li> Kitsune - ???
// <li> Goblin - ???
// <li> Thri-kreen - ???
// <li> Kenku - ???
// <li> Troglodytes - ???

function _try(func, fallbackValue) {
  try {
    var value = func();
    return (value === null || value === undefined) ? fallbackValue : value;
  } catch (e) {
    return fallbackValue;
  }
}

export default function RaceDisplay(Race) {
  const Data = _try(() => racesList[Race])
  if(Data) {
    return (
      <BackgroundWrap>
      <Wrap Tier={monadColors[Data.tier] || ''}>
        <Name>{Race}</Name>
        {Data.image ? <Display src={Data.image} alt={Race} /> : <></>}
        <Info>{Data.notes ? Data.notes : ''}</Info>
        <Self>{Data.self ? 'Self: ' + Data.self : ''}</Self>
        <Team>{Data.team ? 'Team Bonus: ' +Data.team : ''}</Team>
      </Wrap>
      </BackgroundWrap>
    )
  } else {
    return <div></div>
  }
}
const BackgroundWrap = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;
const Wrap = styled.div`
border-radius: 6px;
padding: 5px;
max-width: 200px;
color: ${colors.black.off};
background: ${colors.white.off};
margin: 1%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
border-width: thick;
border-style: solid;
border-color: ${props => props.Tier};
`;
const Name = styled.div`
font-size: xx-large;
`;
const Display = styled.img`
border-radius: 50%;
width: 100%;
height: 100%;
`;
const Info = styled.div`
margin-bottom: 5px;
`;
const Team = styled.div`
`;
const Self = styled.div`
margin-bottom: 5px;
`;