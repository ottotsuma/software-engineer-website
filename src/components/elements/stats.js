import styled from "styled-components";
import React from "react";

// Kʼawiil - Lightning, seeds, abundance, powerful one, fertility, serpent

const statList = {
    "Example": {
        name: "Example",
        description: "Example",
        numeric: "Example",
        vague: "Example",
    },
    "Vitality": {
        name: "Vitality",
        description: "Health points, Resistances to hot/cold / poison",
        numeric: "Example",
        vague: "Example",
        major: "Increased health points.",
        minor: "Increased resistance to hot. Increased resistance to cold. Increased resistance to natural poisons. Increased health regeneration. Increased stamina regeneration. Increased stamina total."
    },
}
// Add spell (level/rank). Changes description.
function stats({ stats, type }) {
    const array = []
    for (let index = 0; index < stats.length; index++) {
        const element = statList[stats[index]]
        console.log(element[type])
        array.push(<SingleSpell key={index + "SingleSpell"}>{element.name}<Span>{element[type]}</Span></SingleSpell>)
    }
    return (
        <>
        <Title>Stats:</Title>
        <SpellsStyle>
            {array}
        </SpellsStyle>
        </>
    );
}
export default stats;

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