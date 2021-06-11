import React, { useState } from "react";
import { spellList } from "./../elements/spells";
import Spells from "./../elements/spells";
import styled from "styled-components";
import { Content } from "./styles";

export default function SpellsPage() {
  const array = Object.keys(spellList);
  const allSpellsArray = [];
  const allLevel2 = []
  const allLevel3 = []
  const allLevel4 = []
  const allLevel5 = []
  const allLevel6 = []
  const allLevel7 = []
  const allLevel8 = []
  const allLevel9 = []
  const allLevel10 = []
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    allSpellsArray.push({ name: element, level: 1 });
    allLevel2.push({ name: element, level: 2 });
    allLevel3.push({ name: element, level: 3 });
    allLevel4.push({ name: element, level: 4 });
    allLevel5.push({ name: element, level: 5 });
    allLevel6.push({ name: element, level: 6 });
    allLevel7.push({ name: element, level: 7 });
    allLevel8.push({ name: element, level: 8 });
    allLevel9.push({ name: element, level: 9 });
    allLevel10.push({ name: element, level: 10 });
  }

  return (
    <Content>
      <Wrapper>
        <h1>Level 1 Spells:</h1>
        <Spells spells={allSpellsArray} type={"mage"} />
        <h1>Level 2 Spells:</h1>
        <Spells spells={allLevel2} type={"mage"} />
        <h1>Level 3 Spells:</h1>
        <Spells spells={allLevel3} type={"mage"} />
        <h1>Level 4 Spells:</h1>
        <Spells spells={allLevel4} type={"mage"} />
        <h1>Level 5 Spells:</h1>
        <Spells spells={allLevel5} type={"mage"} />
        <h1>Level 6 Spells:</h1>
        <Spells spells={allLevel6} type={"mage"} />
        <h1>Level 7 Spells:</h1>
        <Spells spells={allLevel7} type={"mage"} />
        <h1>Level 8 Spells:</h1>
        <Spells spells={allLevel8} type={"mage"} />
        <h1>Level 9 Spells:</h1>
        <Spells spells={allLevel9} type={"mage"} />
        <h1>Level 10 Spells:</h1>
        <Spells spells={allLevel10} type={"mage"} />
      </Wrapper>
    </Content>
  );
}

const Wrapper = styled.div`
  color: black;
`;
