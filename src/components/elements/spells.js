import styled from "styled-components";
import React from "react";

const spellList = {
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

function spells({ spells, type }) {
    const array = []
    for (let index = 0; index < spells.length; index++) {
        const element = spellList[spells[index]]
        console.log(element[type])
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
width: 10%;
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
  margin: 3%;
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