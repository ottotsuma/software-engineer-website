import styled from "styled-components";
import React from "react";

// Kʼawiil - Lightning, seeds, abundance, powerful one, fertility, serpent

const spellList = {
    "Example": {
        name: "Example",
        description: "Example",
        numeric: "Example",
        vague: "Example",
    },
    "Serpent Strike": {
        name: "Serpent Strike",
        description: "Your next physical attack will be faster.",
        numeric: "Your next physical attack will be faster.",
        vague: "Your next physical attack will be faster.",
    },
    "Serpent Pattern": {
        name: "Serpent Pattern",
        description: "Your skin will adapt to the environment slightly, increased stealth.",
        numeric: "Your skin will adapt to the environment slightly, increased stealth.",
        vague: "Your skin will adapt to the environment slightly, increased stealth.",
    },
    "Forked Tongue": {
        name: "Forked Tongue",
        description: "Your tongue will become forked, Increased sense of smell.",
        numeric: "Your tongue will become forked, Increased sense of smell.",
        vague: "Your tongue will become forked, Increased sense of smell.",
    },
    "Serpent-Skin": {
        name: "Serpent-Skin",
        description: "Your skin slowly becomes like a serpents. Able to turn on and off scaled armor over your skin.",
        numeric: "Your skin slowly becomes like a serpents. Able to turn on and off scaled armor over your skin.",
        vague: "Your skin slowly becomes like a serpents. Able to turn on and off scaled armor over your skin.",
    },
    "Haietlik": {
        name: "Haietlik",
        description: "Throw a snake shaped lighting bolt to hook onto a target, dealing damage in the process.",
        numeric: "Throw a snake shaped lighting bolt to hook onto a target, dealing damage in the process.",
        vague: "Throw a snake shaped lighting bolt to hook onto a target, dealing damage in the process.",
    },
    "Kʼawiil Bolt": {
        name: "Kʼawiil Bolt",
        description: "Releases a burst of Kʼawiil-lightning from range.",
        numeric: "Releases a burst of Kʼawiil-lightning from range.",
        vague: "Releases a burst of Kʼawiil-lightning from range.",
    },
    "Kʼawiil Burst": {
        name: "Kʼawiil Burst",
        description: "Releases a burst of Kʼawiil-lightning on contact.",
        numeric: "Releases a burst of Kʼawiil-lightning on contact.",
        vague: "Releases a burst of Kʼawiil-lightning on contact.",
    },
    "Lightning Plant": {
        name: "Lightning Plant",
        description: "Turn lightning seeds into lightning plants!",
        numeric: "Turn lightning seeds into lightning plants!",
        vague: "Turn lightning seeds into lightning plants!",
    },
    "Inspect Plants": {
        name: "Inspect Plants",
        description: "Your inspection of plants will be a level up on your normal inspection ability.",
        numeric: "Your inspection of plants will be a level up on your normal inspection ability.",
        vague: "Your inspection of plants will be a level up on your normal inspection ability.",
    },
    "Bountiful Harvest": {
        name: "Bountiful Harvest",
        description: "All of your harvests are increased by [x]%. [x is 10x the level of this spell.]",
        numeric: "All of your harvests are increased by [x]%. [x is 10x the level of this spell.]",
        vague: "All of your harvests are increased by [x]%. [x is 10x the level of this spell.]",
    },
    "Reap what you Sow": {
        name: "Reap what you Sow",
        description: "Reap the benefits or punishments from the seeds you sow.",
        numeric: "Reap the benefits or punishments from the seeds you sow.",
        vague: "Reap the benefits or punishments from the seeds you sow.",
    },
    "Scarecrow": {
        name: "Scarecrow",
        description: "Uses plant material to summon a sentient scarecrow.",
        numeric: "Uses plant material to summon a sentient scarecrow.",
        vague: "Uses plant material to summon a sentient scarecrow.",
    },
    "Lightning harvest": {
        name: "Lightning harvest",
        description: "Harvest the target. [If the target is below 20% HP this attack does 200% more damage. If this target is a 'plant' type this attack does 500% more damage. If this attack kills the target you have a chance to harvest something.]",
        numeric: "Harvest the target. [If the target is below 20% HP this attack does 200% more damage. If this target is a 'plant' type this attack does 500% more damage. If this attack kills the target you have a chance to harvest something.]",
        vague: "Harvest the target. [If the target is below 20% HP this attack does 200% more damage. If this target is a 'plant' type this attack does 500% more damage. If this attack kills the target you have a chance to harvest something.]",
    },
    "Lightning growth": {
        name: "Lightning growth",
        description: "Force the target to grow.",
        numeric: "Force the target to grow.",
        vague: "Force the target to grow.",
    },
    "Lightning germination": {
        name: "Lightning germination",
        description: "Stimulate a target into germinating",
        numeric: "Stimulate a target into germinating",
        vague: "Stimulate a target into germinating",
    },
    "Seeds to Soldiers": {
        name: "Seeds to Soldiers",
        description: "Take [x] seed(s), use energy to give life to [x] soldier(s). [x is equal to spell level.]",
        numeric: "Take [x] seed(s), use energy to give life to [x] soldier(s). [x is equal to spell level.]",
        vague: "Take [x] seed(s), use energy to give life to [x] soldier(s). [x is equal to spell level.]",
    },
    "Lightning seeds": {
        name: "Lightning seeds",
        description: "Shoots a group of [x] seed(s) in a spread from the user. The seeds attach to opponent(s) and cause lightning damage over time. A part of the damage is used to restore your as mana. [x is equal to spell level.]",
        numeric: "Shoots a group of [x] seed(s) in a spread from the user. The seeds attach to opponent(s) and cause lightning damage over time. A part of the damage is used to restore your as mana. [x is equal to spell level.]",
        vague: "Shoots a group of [x] seed(s) in a spread from the user. The seeds attach to opponent(s) and cause lightning damage over time. A part of the damage is used to restore your as mana. [x is equal to spell level.]",
    },
    "Mana Ball": {
        name: "Mana Ball",
        description: "Gathers mana into a ball. Gives off a small amount of light.",
        numeric: "testy",
        vague: "Produces a mana ball.",
    },
    "Tether": {
        name: "Tether",
        description: "Gathers mana into a string shape.",
        numeric: "",
        vague: "Produces mana rope.",
    },
    "Magic Resistance": {
        name: "Magic Resistance",
        description: "Passive: Resists mana foreign to the body, on surface level.",
        numeric: "",
        vague: "Resists magic attacks.",
    },
    "Magic Up": {
        name: "Magic Up",
        description: "Increases the intensity of mana in the body.",
        numeric: "",
        vague: "Mana intensity is increased.",
    },
    "Strike": {
        name: "Strike",
        description: "Calls mana in the environment to gather and strike down from above.",
        numeric: "",
        vague: "Brings mana down on a target.",
    },
    "Magic Regen": {
        name: "Magic Regen",
        description: "Increases mana recovery speed.",
        numeric: "",
        vague: "Speeds up mana recovery.",
    }
}
// Add spell (level/rank). Changes description.
function spells({ spells, type }) {
    const array = []
    for (let index = 0; index < spells.length; index++) {
        const element = spellList[spells[index]]
        array.push(<SingleSpell key={index + "SingleSpell"}>{element.name}<Span>{element[type]}</Span></SingleSpell>)
    }
    return (
        <>
        <Title>Spells:</Title>
        <SpellsStyle>
            {array}
        </SpellsStyle>
        </>
    );
}
export default spells;

const Title = styled.h1`
  display: flex;
  justify-content: center;
`;

const SpellsStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;
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

const SingleSpell = styled.div`
    border-radius: 6px;
    padding: 5px;
    width: auto;
background: linear-gradient(
    217deg,
    rgb(218, 182, 111),
    rgb(244, 229, 203) 70.71%
  );
  margin: 1%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #f1f1f1;
  }
  &:hover ${Span} {
    visibility: visible;
  }
`;