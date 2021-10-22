import styled from "styled-components";
import React from "react";
import {spellList} from './spells'
import {racesList} from './races'
import Spells from './spells'
import {titlesList} from './titles'
import Equipment from './equipment'

// Kʼawiil - Lightning, seeds, abundance, powerful one, fertility, serpent

const statList = {
  Example: {
    name: "Example",
    description: "Example",
    numeric: "Example",
    vague: "Example",
    major: "Example",
    minor: "Example",
  },
  faith: {
    name: "Faith",
    description: "Amount of God given spells that can be cast per day.",
    numeric: "Example",
    vague: "Example",
    major: "Example",
    minor: "Example",
  },
  name: {
    name: "Vitality",
    description: "This is your name!",
    numeric: "Increases HP by 14.5 per point.",
    vague: "Increases your durability.",
    major: "Increased health points.",
    minor:
      "Increased resistance to hot, cold & natural poisons. Increased health & stamina regeneration also total stamina.",
  },
  level: {
    name: "Vitality",
    description: "As your level increases you will become stronger!",
    numeric: "Increases HP by 14.5 per point.",
    vague: "Increases your durability.",
    major: "Increased health points.",
    minor:
      "Increased resistance to hot, cold & natural poisons. Increased health & stamina regeneration also total stamina.",
  },
  class: {
    name: "Vitality",
    description: "This is your class.",
    numeric: "Increases HP by 14.5 per point.",
    vague: "Increases your durability.",
    major: "Increased health points.",
    minor:
      "Increased resistance to hot, cold & natural poisons. Increased health & stamina regeneration also total stamina.",
  },
  race: {
    name: "Vitality",
    description: "This is your race.",
    numeric: "Increases HP by 14.5 per point.",
    vague: "Increases your durability.",
    major: "Increased health points.",
    minor:
      "Increased resistance to hot, cold & natural poisons. Increased health & stamina regeneration also total stamina.",
  },
  skills: {
    name: "This is the total amount of your unique skills.",
    description: "Increases your health points",
    numeric: "Increases HP by 14.5 per point.",
    vague: "Increases your durability.",
    major: "Increased health points.",
    minor:
      "Increased resistance to hot, cold & natural poisons. Increased health & stamina regeneration also total stamina.",
  },
  spells: {
    name: "This is the total amount of your unique spells.",
    description: "Increases your health points",
    numeric: "Increases HP by 14.5 per point.",
    vague: "Increases your durability.",
    major: "Increased health points.",
    minor:
      "Increased resistance to hot, cold & natural poisons. Increased health & stamina regeneration also total stamina.",
  },
  titles: {
    name: "Vitality",
    description: "This is the amount of titles you hold.",
    numeric: "Increases HP by 14.5 per point.",
    vague: "Increases your durability.",
    major: "Increased health points.",
    minor:
      "Increased resistance to hot, cold & natural poisons. Increased health & stamina regeneration also total stamina.",
  },
  "skill points": {
    name: "Vitality",
    description: "This is the amount of unspent skill points you have.",
    numeric: "Increases HP by 14.5 per point.",
    vague: "Increases your durability.",
    major: "Increased health points.",
    minor:
      "Increased resistance to hot, cold & natural poisons. Increased health & stamina regeneration also total stamina.",
  },
  "spell points": {
    name: "Vitality",
    description: "This is the amount of unspent spell points you have.",
    numeric: "Increases HP by 14.5 per point.",
    vague: "Increases your durability.",
    major: "Increased health points.",
    minor:
      "Increased resistance to hot, cold & natural poisons. Increased health & stamina regeneration also total stamina.",
  },
  "stat points": {
    name: "Vitality",
    description: "This is the amount of unspent stat points you have.",
    numeric: "Increases HP by 14.5 per point.",
    vague: "Increases your durability.",
    major: "Increased health points.",
    minor:
      "Increased resistance to hot, cold & natural poisons. Increased health & stamina regeneration also total stamina.",
  },
  vitality: {
    name: "Vitality",
    description: "Increases your health points",
    numeric: "Increases HP by 14.5 per point.",
    vague: "Increases your durability.",
    major: "Increased health points.",
    minor:
      "Increased resistance to hot, cold & natural poisons. Increased health & stamina regeneration also total stamina.",
  },
  strength: {
    name: "Vitality",
    description: "Increases your physical damage.",
    numeric: "Increases HP by 14.5 per point.",
    vague: "Increases your durability.",
    major: "Increased health points.",
    minor:
      "Increased resistance to hot, cold & natural poisons. Increased health & stamina regeneration also total stamina.",
  },
  endurance: {
    name: "Vitality",
    description: "Increases resistance to physical damage.",
    numeric: "Increases HP by 14.5 per point.",
    vague: "Increases your durability.",
    major: "Increased health points.",
    minor:
      "Increased resistance to hot, cold & natural poisons. Increased health & stamina regeneration also total stamina.",
  },
  magic: {
    name: "Vitality",
    description: "Increases Magic damage.",
    numeric: "Increases HP by 14.5 per point.",
    vague: "Increases your durability.",
    major: "Increased health points.",
    minor:
      "Increased resistance to hot, cold & natural poisons. Increased health & stamina regeneration also total stamina.",
  },
  willpower: {
    name: "Vitality",
    description: "Increases resistance to magic.",
    numeric: "Increases HP by 14.5 per point.",
    vague: "Increases your durability.",
    major: "Increased health points.",
    minor:
      "Increased resistance to hot, cold & natural poisons. Increased health & stamina regeneration also total stamina.",
  },
  dexterity: {
    name: "Vitality",
    description: "Reduces time between using skills.",
    numeric: "Increases HP by 14.5 per point.",
    vague: "Increases your durability.",
    major: "Increased health points.",
    minor:
      "Increased resistance to hot, cold & natural poisons. Increased health & stamina regeneration also total stamina.",
  },
  sense: {
    name: "Vitality",
    description: "Increases your range.",
    numeric: "Increases HP by 14.5 per point.",
    vague: "Increases your durability.",
    major: "Increased health points.",
    minor:
      "Increased resistance to hot, cold & natural poisons. Increased health & stamina regeneration also total stamina.",
  },
  charisma: {
    name: "Vitality",
    description: "Peoples first impressions of you are better.",
    numeric: "Increases HP by 14.5 per point.",
    vague: "Increases your durability.",
    major: "Increased health points.",
    minor:
      "Increased resistance to hot, cold & natural poisons. Increased health & stamina regeneration also total stamina.",
  },
  passives: {
    name: "Element",
    description: "Passive skills do not need to be activated.",
    numeric: "Passive skills do not need to be activated.",
    vague: "Passive skills do not need to be activated.",
    major: "Passive skills do not need to be activated.",
    minor:
      "Passive skills do not need to be activated.",
  },
  element: {
    name: "Element",
    description: "This is the element you can apply to your magic.",
    numeric: "Increases HP by 14.5 per point.",
    vague: "Increases your durability.",
    major: "Increased health points.",
    minor:
      "Increased resistance to hot, cold & natural poisons. Increased health & stamina regeneration also total stamina.",
  },
};

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

function _try(func, fallbackValue) {
  try {
      var value = func();
      return (value === null || value === undefined) ? fallbackValue : value;
  } catch (e) {
      return fallbackValue;
  }
}

function Stats({ stats, type, skills, showSkills, titles, showTitles, items, showItems }) {
  const array = [];
  if(stats.race) {
    const raceStats = Object.keys(racesList[stats.race]);
    if(raceStats) {
      raceStats.map((raceStat) => {
        stats[raceStat] = stats[raceStat] + racesList[stats.race][raceStat]
      })
    }
  }
  const itemsArray = []
  if(items) {
    itemsArray.push ( <Equipment items={items} key={'Items'} />)
    Object.keys(items).map((itemArea) => {
      const itemStats = _try( () => items[itemArea].stats)
      if(itemStats) {
        Object.keys(itemStats).map((titleStat) => {
          stats[titleStat] = stats[titleStat] + itemStats[Object.keys(itemStats)]
        })
      }
    })
  }
  if(titles) {
    if(titles.length > 0) {
      stats.titles = titles.length
    }
    titles.map((title) => {
      const titleStats = _try(() => titlesList[title].stats)
      if(titleStats) {
        Object.keys(titleStats).map((titleStat) => {
          stats[titleStat] = stats[titleStat] + titleStats[Object.keys(titleStats)]
        })
      }
    })
  }
  const keys = Object.keys(stats);
  const spellsArray = []
  if(skills) {
    const skillsByTypes = Object.keys(skills)
    for (let j = 0; j < skillsByTypes.length; j++) {
      const skillListByType = skills[skillsByTypes[j]];
      skillListByType.map((skill) => {
        const spellStats = _try(() => spellList[skill.name].stats[skill.level-1])
        if(spellStats) {
          for (let index = 0; index < Object.keys(spellStats).length; index++) {
            if(keys.includes(Object.keys(spellStats)[index])) {
              stats[Object.keys(spellStats)[index]] = stats[Object.keys(spellStats)[index]] + spellStats[Object.keys(spellStats)[index]]
            }
          }
        }
      })
      spellsArray.push(<Spells key={j + 'Spells'} spells={skillListByType} type={skillsByTypes[j]} />)
    }
  }

  for (let index = 0; index < keys.length; index++) {
    const element = <Wrap><Inline>{keys[index]}: </Inline><Inline style={{color: perc2color(stats[keys[index]])}}>{stats[keys[index]]}</Inline></Wrap>;
    const spam = statList[keys[index]];
    array.push(
      <SingleStat key={index + "stat"}>
        {element}
        {!!type && <Span>{spam['description']}</Span>}
      </SingleStat>
    );
  }
  return (
    <>
      <Title>Stats:</Title>
      <StatsStyle>{array}</StatsStyle>
      {showSkills && spellsArray}
      {showItems && itemsArray}
    </>
  );
}
export default Stats;

const Wrap = styled.div`
`;

const Inline = styled.div`
display: contents;
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
`;

const StatsStyle = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
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
  margin-top: 7%;
`;

const SingleStat = styled.li`
  text-transform: capitalize;

  border-radius: 6px;
  padding: 1px;
  width: auto;
  display: flex;
  justify-content: center;
  &:hover {
    background-color: #f1f1f1;
  }
  &:hover ${Span} {
    visibility: visible;
  }
`;
