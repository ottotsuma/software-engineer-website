import styled from "styled-components";
import React from "react";
import {spellList} from './spells'
import {racesList} from './races'
import {classList} from './classes'
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
  HP: {
    name: "HP",
    description: "Total Max Health",
    numeric: "Example",
    vague: "Example",
    major: "Example",
    minor: "Example",
  },
  MP: {
    name: "MP",
    description: "Total Max Mana",
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
    name: "Name",
    description: "This is your name!",
    numeric: "Increases HP by 14.5 per point.",
    vague: "Increases your durability.",
    major: "Increased health points.",
    minor:
      "Increased resistance to hot, cold & natural poisons. Increased health & stamina regeneration also total stamina.",
  },
  level: {
    name: "Level",
    description: "As your level increases you will become stronger!",
    numeric: "Increases HP by 14.5 per point.",
    vague: "Increases your durability.",
    major: "Increased health points.",
    minor:
      "Increased resistance to hot, cold & natural poisons. Increased health & stamina regeneration also total stamina.",
  },
  class: {
    name: "Class",
    description: "This is your class.",
    numeric: "Increases HP by 14.5 per point.",
    vague: "Increases your durability.",
    major: "Increased health points.",
    minor:
      "Increased resistance to hot, cold & natural poisons. Increased health & stamina regeneration also total stamina.",
  },
  race: {
    name: "Race",
    description: "This is your race.",
    numeric: "Increases HP by 14.5 per point.",
    vague: "Increases your durability.",
    major: "Increased health points.",
    minor:
      "Increased resistance to hot, cold & natural poisons. Increased health & stamina regeneration also total stamina.",
  },
  skills: {
    name: "Skills.",
    description: "Total learnt skills.",
    numeric: "Increases HP by 14.5 per point.",
    vague: "Increases your durability.",
    major: "Increased health points.",
    minor:
      "Increased resistance to hot, cold & natural poisons. Increased health & stamina regeneration also total stamina.",
  },
  spells: {
    name: "Spells.",
    description: "Total learnt spells.",
    numeric: "Increases HP by 14.5 per point.",
    vague: "Increases your durability.",
    major: "Increased health points.",
    minor:
      "Increased resistance to hot, cold & natural poisons. Increased health & stamina regeneration also total stamina.",
  },
  titles: {
    name: "Vitality",
    description: "Total obtained titles.",
    numeric: "Increases HP by 14.5 per point.",
    vague: "Increases your durability.",
    major: "Increased health points.",
    minor:
      "Increased resistance to hot, cold & natural poisons. Increased health & stamina regeneration also total stamina.",
  },
  title: {
    name: "Vitality",
    description: "Currently equipped title.",
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
  if(perc < 0) perc = 0
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

function Stats({ stats, type, skills, showSkills, titles, equippedTitle, showTitles, items, showItems }) {
  const array = [];
  // Need base stats to * everything by.
  if(stats.race) {
    const raceStats = Object.keys(racesList[stats.race].stats);
    if(raceStats) {
      raceStats.map((raceStat) => {
        if(typeof (racesList[stats.race].stats[raceStat]) === 'number') {
          stats[raceStat] = stats[raceStat] + racesList[stats.race].stats[raceStat]
        } else if (typeof (racesList[stats.race].stats[raceStat]) === 'string') {
          if((racesList[stats.race].stats[raceStat]).includes('*')){
            const multiplierValue = parseFloat(racesList[stats.race].stats[raceStat].substring(1))
            stats[raceStat] = stats[raceStat] * multiplierValue
          }
        }
      })
    }
  }
  if(stats.class) {
    const classStats = _try(() => classList[stats.class].stats)
    if(classStats) {
      Object.keys(classStats).map((classStat) => {
        if(typeof (classList[stats.class].stats[classStat]) === 'number') {
          stats[classStat] = stats[classStat] + classList[stats.class].stats[classStat]
        } else if (typeof (classList[stats.class].stats[classStat]) === 'string') {
          if((classList[stats.class].stats[classStat]).includes('*')){
            const multiplierValue = parseFloat(classList[stats.class].stats[classStat].substring(1))
            stats[classStat] = stats[classStat] * multiplierValue
          }
        }
      })
    }
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
              if(typeof (spellStats[Object.keys(spellStats)[index]]) === 'number') {
                stats[Object.keys(spellStats)[index]] = stats[Object.keys(spellStats)[index]] + spellStats[Object.keys(spellStats)[index]]
              } else if (typeof (spellStats[Object.keys(spellStats)[index]]) === 'string'){
                const multiplierValue = parseFloat(spellStats[Object.keys(spellStats)[index]].substring(1))
                stats[Object.keys(spellStats)[index]] = stats[Object.keys(spellStats)[index]] * multiplierValue
              }
            }
          }
        }
      })
      spellsArray.push(<Spells key={j + 'Spells'} spells={skillListByType} type={skillsByTypes[j]} />)
    }
  }
  const itemsArray = []
  if(items) {
    itemsArray.push ( <Equipment items={items} key={'Items'} />)
    Object.keys(items).map((itemArea) => {
      const itemStats = _try( () => items[itemArea].stats)
      if(itemStats) {
        Object.keys(itemStats).map((titleStat) => {
          if(typeof (itemStats[titleStat]) === 'number') {
            stats[titleStat] = stats[titleStat] + itemStats[titleStat]
          } else if (typeof (itemStats[titleStat]) === 'string') {
            if((itemStats[titleStat]).includes('*')){
              const multiplierValue = parseFloat(itemStats[titleStat].substring(1))
              stats[titleStat] = stats[titleStat] * multiplierValue
            }
          }
        })
      }
    })
  }
  if(equippedTitle) {
    stats['title'] = equippedTitle
    const titleStats = _try(() => titlesList[equippedTitle].stats) // find title from list of titles, returns array of stats and values
    if(titleStats) {
      if(titlesList[equippedTitle].description) {
        stats['title'] = equippedTitle + ', ' + titlesList[equippedTitle].description
      }
      Object.keys(titleStats).map((titleStat) => {
        if(typeof (titleStats[titleStat]) === 'number') {
          stats[titleStat] = stats[titleStat] + titleStats[titleStat] // applies the stats
        } else if (typeof (titleStats[titleStat]) === 'string') {
          if((titleStats[titleStat]).includes('*')){
            const multiplierValue = parseFloat(titleStats[titleStat].substring(1))
            stats[titleStat] = stats[titleStat] * multiplierValue
          }
        }
      })
    }
  }

  // Add HP and MP Values
  //  level *5 magic * 8 = mp // level * 10 vit * 14.5 +100 = hp 
  stats['HP'] = _try(() => (stats['level'] * 10) + (stats['vitality']) * 14.5 + 100)
  stats['MP'] = _try(() => (stats['level'] * 5) + (stats['magic']) * 8)
  keys.push('HP', 'MP')

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
      <Title>Attributes:</Title>
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
