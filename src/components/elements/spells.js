import styled from "styled-components";
import React from "react";

const spellList = {
    "Mana Ball" : {

    },
    
}

function spells({ spells }) {
    const array = []
    for (let index = 0; index < spells.length; index++) {
        const element = spells[index];
        array.push(<SingleSpell>{element}<Span>{element}</Span></SingleSpell>)
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