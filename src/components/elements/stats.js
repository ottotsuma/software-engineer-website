import styled from "styled-components";
import React from "react";

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
    description: "???",
    numeric: "Increases HP by 14.5 per point.",
    vague: "Increases your durability.",
    major: "Increased health points.",
    minor:
      "Increased resistance to hot, cold & natural poisons. Increased health & stamina regeneration also total stamina.",
  },
  charisma: {
    name: "Vitality",
    description: "?!?",
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

function Stats({ stats, type }) {
  const array = [];
  const keys = Object.keys(stats);
  for (let index = 0; index < keys.length; index++) {
    const element = <Wrap><Inline>{keys[index]}: </Inline><Inline style={{color: perc2color(stats[keys[index]])}}>{stats[keys[index]]}</Inline></Wrap>;
    const spam = statList[keys[index]];
    array.push(
      <SingleStat key={index + "stat"}>
        {element}
        <Span>{spam[type]}</Span>
      </SingleStat>
    );
  }
  return (
    <>
      <Title>Stats:</Title>
      <StatsStyle>{array}</StatsStyle>
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
