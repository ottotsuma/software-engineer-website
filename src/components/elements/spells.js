import styled from "styled-components";
import React from "react";

const spellList = {
    "Mana Ball" : {
        name: "Mana Ball",
        description: "test",
        numeric: "",
        vague: "",
    },
    "Tether" : {
        name: "Tether",
        description: "test",
        numeric: "",
        vague: "",
    },
    "Magic Resistance" : {
        name: "Magic Resistance",
        description: "test",
        numeric: "",
        vague: "",
    },
    "Magic Up" : {
        name: "Magic Up",
        description: "test",
        numeric: "",
        vague: "",
    },
    "Strike" : {
        name: "Strike",
        description: "test",
        numeric: "",
        vague: "",
    },
    "Magic Regen": {
        name: "Magic Regen",
        description: "test",
        numeric: "",
        vague: "",
    }
}

function spells({ spells }) {
    const array = []
    for (let index = 0; index < spells.length; index++) {
        const element = spellList[spells[index]]
        array.push(<SingleSpell key={index + "SingleSpell"}>{element.name}<Span>{element.description}</Span></SingleSpell>)
    }
    return (
        <SpellsStyle>
            {array}
        </SpellsStyle>
    );
}
export default spells;

const SpellsStyle = styled.div`
  background: #638ad4; // weird blue
  display: flex;
  justify-content: center;
  align-items: stretch;
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
`;

const SingleSpell = styled.div`
    border-radius: 6px;
    padding: 5px;
    width: auto;
  background: pink;
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