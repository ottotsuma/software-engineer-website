import React, { useState } from "react";
import styled from "styled-components";
import {colors, monadColors} from './colors'
// Team Vs Self Increases, they should all have team so the self ones should go somewhere also :/
export const classList = {
  Mage: {
    stats: {
      magic: 1,
    },
    team: 'Magic +1.',
    self: '',
    image: 'https://ottotsuma.github.io/images/people/Test.gif',
    notes: 'Solve all your problems with magic. Mages are the basic class for magical classes.',
    tier: 'normal'
  },
  Fighter: {
    stats: {
      strength: 1,
    },
    team: 'Strength +1.'
  },
  Rouge: {
    stats: {
      dexterity: 1,
    },
    team: 'Dexterity +1.'
  },
  "Kʼawiil": {
    stats: {
      magic: 0,
    },
    self: 'All stats increase as the rain gets stronger. Max 10%.'
  },
  "Shield Warrior": {
    stats: {
      "Shield Skills": "+1",
    },
    team: 'Shield Skills: +1.'
  },
  "Warrior": {
    stats: {
    },
    team: 'Stamina +10%.'
  },
  "Guardian Knight": {
    stats: {
    },
    self: 'Absorb 3% of damage done to a maximum of 7 allies within 10m.'
  },
  "Berserker": {
    stats: {
    },
    self: 'Strength increases as health decreases.'
  },
  Cursemancers: {
    stats: {
    },
    team: 'Aggro skills are slightly more effective.',
    self: 'Curses cast time is reduced 25%.',
    image: '',
    notes: 'Can curse up a storm of colorful language.',
    tier: ''
  },
};

function _try(func, fallbackValue) {
  try {
    var value = func();
    return (value === null || value === undefined) ? fallbackValue : value;
  } catch (e) {
    return fallbackValue;
  }
}

export default function ClassDisplay(Class) {
  const Data = _try(() => classList[Class])
  console.log(Data)
  return (
    <BackgroundWrap>
    <Wrap Tier={monadColors[Data.tier] || ''}>
      <Name>{Class}</Name>
      {Data.image ? <Display src={Data.image} alt={Class} /> : <></>}
      <Info>{Data.notes ? Data.notes : ''}</Info>
      <Self>{Data.self ? 'Self: ' + Data.self : ''}</Self>
      <Team>{Data.team ? 'Team Bonus: ' +Data.team : ''}</Team>
    </Wrap>
    </BackgroundWrap>
  )
}
const BackgroundWrap = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;
const Wrap = styled.div`
border-radius: 6px;
padding: 5px;
width: 150px;
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
`;
const Team = styled.div`
`;
const Self = styled.div`
`;