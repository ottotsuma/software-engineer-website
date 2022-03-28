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
    image: 'https://ottotsuma.github.io/images/people/b5185cca016eecd75b62833fdf2cfc43.jpg',
    notes: 'Solve all your problems with magic. Mages are the basic class for magical classes.',
    tier: 'normal'
  },
  Fighter: {
    stats: {
      strength: 1,
    },
    team: 'Strength +1.',
    self: '',
    image: 'https://ottotsuma.github.io/images/people/f7327f5068dcdd7e858b87e1da393c62.jpg',
    notes: 'Fighters are the base class for physical classes.',
    tier: 'normal'
  },
  Rogue: {
    stats: {
      dexterity: 1,
    },
    team: 'Dexterity +1.',
    self: '',
    image: 'https://ottotsuma.github.io/images/people/0156c7576b1704ee70a55e4d1bd0db74.jpg',
    notes: `What doesn't kill you makes you stronger. Combine with beast souls to gain their power.`,
    tier: 'normal'
  },
  "Kʼawiil": {
    stats: {
    },
    team: '',
    self: 'All stats increase as the rain gets stronger. Max 10%.',
    image: '',
    notes: '',
    tier: 'legendary'
  },
  "Shield Warrior": {
    stats: {
      "Shield Skills": "+1",
    },
    self: 'Shield Skills: +1.',
    team: '',
    image: '',
    notes: '',
    tier: ''
  },
  "Warrior": {
    stats: {
    },
    self: '',
    team: 'Stamina +10%.',
    image: '',
    notes: '',
    tier: 'normal'
  },
  "Guardian Knight": {
    stats: {
    },
    self: 'Absorb 3% of damage done to a maximum of 7 allies within 10m.',
    team: '',
    image: '',
    notes: '',
    tier: ''
  },
  "Berserker": {
    stats: {
    },
    self: 'Strength increases as health decreases.',
    team: '',
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
    self: 'Summon Eidolon Spell +1 (MAX: 10).',
    image: '',
    notes: '',
    tier: 'normal'
  },
  Paladin: {
    team: 'Unholy protection, unholy attacks deal 3% less.',
    self: 'Can use holy objects, cannot use unholy objects.',
    image: '',
    notes: '',
    tier: 'normal',
    stats: {
    },
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
      sense: 2,
    },
    team: 'Sense +1.',
    self: 'Sense +1.',
    image: '',
    notes: '',
    tier: 'normal'
  },
  Thief: {
    stats: {
      dexterity: 1,
    },
    team: '',
    self: 'dexterity +1.',
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
    self: 'Summon Knight Skill +1.',
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
      HP: "*2",
      MP: "*1.5",
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
    self: 'All Stats + 10%, HP + 100%, MP + 50%, movement speed -10%.',
    image: 'https://ottotsuma.github.io/images/people/king.jpg',
    notes: 'Born to rule.',
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
  Phoenix: {
    stats: {
      magic: 2,
      willpower: 2,
      HPMultiplier: -0.1,
      MPMultiplier: 1.1
    },
    team: 'Fire Resistance +1%',
    self: '',
    image: 'https://images.squarespace-cdn.com/content/v1/57d34a6d725e254062172fe9/1579643445519-XXWBWFTZIZ23TNWBECJI/thumbnail_phoenix+rising.jpg',
    notes: 'phenix is a long-lived bird that is cyclically regenerated or reborn.',
    tier: 'epic'
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
  if(Data) {
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