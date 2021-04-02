import styled from "styled-components";
import React from "react";

// Kʼawiil - Lightning, seeds, abundance, powerful one, fertility, serpent

const statList = {
    "Example": {
        name: "Example",
        description: "Example",
        numeric: "Example",
        vague: "Example",
        major: "Example",
        minor: "Example"
    },
    "name": {
        name: "Vitality",
        description: "Increases your health points",
        numeric: "Increases HP by 14.5 per point.",
        vague: "Increases your durability.",
        major: "Increased health points.",
        minor: "Increased resistance to hot, cold & natural poisons. Increased health & stamina regeneration also total stamina."
    },
    "level": {
        name: "Vitality",
        description: "Increases your health points",
        numeric: "Increases HP by 14.5 per point.",
        vague: "Increases your durability.",
        major: "Increased health points.",
        minor: "Increased resistance to hot, cold & natural poisons. Increased health & stamina regeneration also total stamina."
    },
    "class": {
        name: "Vitality",
        description: "Increases your health points",
        numeric: "Increases HP by 14.5 per point.",
        vague: "Increases your durability.",
        major: "Increased health points.",
        minor: "Increased resistance to hot, cold & natural poisons. Increased health & stamina regeneration also total stamina."
    },
    "skills": {
        name: "Vitality",
        description: "Increases your health points",
        numeric: "Increases HP by 14.5 per point.",
        vague: "Increases your durability.",
        major: "Increased health points.",
        minor: "Increased resistance to hot, cold & natural poisons. Increased health & stamina regeneration also total stamina."
    },
    "titles": {
        name: "Vitality",
        description: "Increases your health points",
        numeric: "Increases HP by 14.5 per point.",
        vague: "Increases your durability.",
        major: "Increased health points.",
        minor: "Increased resistance to hot, cold & natural poisons. Increased health & stamina regeneration also total stamina."
    },
    "skill points": {
        name: "Vitality",
        description: "Increases your health points",
        numeric: "Increases HP by 14.5 per point.",
        vague: "Increases your durability.",
        major: "Increased health points.",
        minor: "Increased resistance to hot, cold & natural poisons. Increased health & stamina regeneration also total stamina."
    },
    "stat points": {
        name: "Vitality",
        description: "Increases your health points",
        numeric: "Increases HP by 14.5 per point.",
        vague: "Increases your durability.",
        major: "Increased health points.",
        minor: "Increased resistance to hot, cold & natural poisons. Increased health & stamina regeneration also total stamina."
    },
    "vitality": {
        name: "Vitality",
        description: "Increases your health points",
        numeric: "Increases HP by 14.5 per point.",
        vague: "Increases your durability.",
        major: "Increased health points.",
        minor: "Increased resistance to hot, cold & natural poisons. Increased health & stamina regeneration also total stamina."
    },
    "strength": {
        name: "Vitality",
        description: "Increases your health points",
        numeric: "Increases HP by 14.5 per point.",
        vague: "Increases your durability.",
        major: "Increased health points.",
        minor: "Increased resistance to hot, cold & natural poisons. Increased health & stamina regeneration also total stamina."
    },
    "endurance": {
        name: "Vitality",
        description: "Increases your health points",
        numeric: "Increases HP by 14.5 per point.",
        vague: "Increases your durability.",
        major: "Increased health points.",
        minor: "Increased resistance to hot, cold & natural poisons. Increased health & stamina regeneration also total stamina."
    },
    "magic": {
        name: "Vitality",
        description: "Increases your health points",
        numeric: "Increases HP by 14.5 per point.",
        vague: "Increases your durability.",
        major: "Increased health points.",
        minor: "Increased resistance to hot, cold & natural poisons. Increased health & stamina regeneration also total stamina."
    },
    "willpower": {
        name: "Vitality",
        description: "Increases your health points",
        numeric: "Increases HP by 14.5 per point.",
        vague: "Increases your durability.",
        major: "Increased health points.",
        minor: "Increased resistance to hot, cold & natural poisons. Increased health & stamina regeneration also total stamina."
    },
    "dexterity": {
        name: "Vitality",
        description: "Increases your health points",
        numeric: "Increases HP by 14.5 per point.",
        vague: "Increases your durability.",
        major: "Increased health points.",
        minor: "Increased resistance to hot, cold & natural poisons. Increased health & stamina regeneration also total stamina."
    },
    "sense": {
        name: "Vitality",
        description: "Increases your health points",
        numeric: "Increases HP by 14.5 per point.",
        vague: "Increases your durability.",
        major: "Increased health points.",
        minor: "Increased resistance to hot, cold & natural poisons. Increased health & stamina regeneration also total stamina."
    },
    "charisma": {
        name: "Vitality",
        description: "Increases your health points",
        numeric: "Increases HP by 14.5 per point.",
        vague: "Increases your durability.",
        major: "Increased health points.",
        minor: "Increased resistance to hot, cold & natural poisons. Increased health & stamina regeneration also total stamina."
    },
}

function stats({ stats, type }) {
    const array = []
    const keys = Object.keys(stats)
    for (let index = 0; index < keys.length; index++) {
        const element = keys[index] + ": " + stats[keys[index]]
        const spam = statList[keys[index]]
        array.push(<SingleStat key={index + "stat"}>{element}<Span>{spam[type]}</Span></SingleStat>)
    }
    return (
        <>
        <Title>Stats:</Title>
        <StatsStyle>
            {array}
        </StatsStyle>
        </>
    );
}
export default stats;

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
width: 10%;
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