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
    team: 'Strength +1.',
    image: '',
    notes: '',
    tier: 'normal'
  },
  Rouge: {
    stats: {
      dexterity: 1,
    },
    team: 'Dexterity +1.',
    image: '',
    notes: '',
    tier: 'normal'
  },
  "Kʼawiil": {
    stats: {
      magic: 0,
    },
    self: 'All stats increase as the rain gets stronger. Max 10%.',
    image: '',
    notes: '',
    tier: 'legendary'
  },
  "Shield Warrior": {
    stats: {
      "Shield Skills": "+1",
    },
    team: 'Shield Skills: +1.',
    image: '',
    notes: '',
    tier: ''
  },
  "Warrior": {
    stats: {
    },
    team: 'Stamina +10%.',
    image: '',
    notes: '',
    tier: 'normal'
  },
  "Guardian Knight": {
    stats: {
    },
    self: 'Absorb 3% of damage done to a maximum of 7 allies within 10m.',
    image: '',
    notes: '',
    tier: ''
  },
  "Berserker": {
    stats: {
    },
    self: 'Strength increases as health decreases.',
    image: '',
    notes: '',
    tier: ''
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
  Witch: {
    stats: {
    },
    team: 'Spells cast 3% faster.',
    self: 'The more witches in your team, the stronger Coven spells become.',
    image: 'https://ottotsuma.github.io/images/people/witch6.jpg',
    notes: '',
    tier: ''
  },
  Summoner: {
    stats: {
    },
    team: 'Summon maintain cost is reduced.',
    self: '',
    image: '',
    notes: '',
    tier: 'normal'
  },
  Paladin: {
    stats: {
    },
    team: '',
    self: 'Can use holy objects, cannot use unholy objects.',
    image: '',
    notes: '',
    tier: 'normal'
  },
  Pyromancer: {
    stats: {
    },
    team: 'Fire spells cost 5% less.',
    self: '',
    image: '',
    notes: '',
    tier: 'normal'
  },
  Battlemage: {
    stats: {
      strength: 1,
      magic: 1,
    },
    team: '',
    self: '',
    image: '',
    notes: '',
    tier: 'normal'
  },
  Scout: {
    stats: {
      sense: 5,
    },
    team: '',
    self: '',
    image: '',
    notes: '',
    tier: 'normal'
  },
  Thief: {
    stats: {
      dexterity: 2,
    },
    team: '',
    self: '',
    image: '',
    notes: '',
    tier: 'normal'
  },
  Assassin: {
    stats: {
    },
    team: 'Damage from sneak attacks is increased.',
    self: '',
    image: '',
    notes: '',
    tier: 'rare'
  },
  "Knight Commander": {
    stats: {
    },
    team: 'Commanded units HP is increased.',
    self: '',
    image: '',
    notes: '',
    tier: 'rare'
  },
  Pirate: {
    stats: {
    },
    team: '🏴‍☠️ Swimming +5% movement speed.',
    self: '',
    image: '',
    notes: '',
    tier: 'rare'
  },
  Witchdoctor: {
    stats: {
    },
    team: '',
    self: '',
    image: '',
    notes: '',
    tier: 'rare'
  },
  Priest: {
    stats: {
    },
    team: '',
    self: 'Can use holy objects, cannot use unholy objects',
    image: '',
    notes: '',
    tier: 'rare'
  },
  Inquisitor: {
    stats: {
    },
    team: '',
    self: 'Can use holy objects, cannot use unholy objects',
    image: '',
    notes: '',
    tier: 'rare'
  },
  Darkknight: {
    stats: {
    },
    team: '',
    self: 'Cannot use holy objects, can use unholy objects',
    image: '',
    notes: '',
    tier: 'rare'
  },
  Viking: {
    stats: {
    },
    team: '',
    self: 'Swimming +5% movement speed.',
    image: '',
    notes: '',
    tier: 'epic'
  },
  "Blood Warrior": {
    stats: {
    },
    team: '',
    self: 'Access to blood skills.',
    image: '',
    notes: '',
    tier: 'epic'
  },
  Deathknight: {
    stats: {
    },
    team: '',
    self: '',
    image: '',
    notes: '',
    tier: 'epic'
  },
  King: {
    stats: {
      HP: "*1.05",
      MP: "*1.03",
      Vitality: "*1.10",
      Endurance: "*1.10",
      Willpower: "*1.10",
      Magic: "*1.10",
      Strength: "*1.10",
      Dexterity: "*1.10",
      Sense: "*1.10",
      Charisma: "*1.10",
    },
    team: '',
    self: 'All Stats + 10%, hp + 5%, mana + 3%, movement speed -10%',
    image: '',
    notes: '',
    tier: 'legendary'
  },
  DEMIURGE: {
    stats: {
    },
    team: '+1 to the main stat of crafted items',
    self: '',
    image: '',
    notes: '',
    tier: 'legendary'
  },
  Pope: {
    stats: {
    },
    team: '',
    self: '',
    image: '',
    notes: '',
    tier: 'unique'
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