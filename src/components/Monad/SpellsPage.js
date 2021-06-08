import React, { useState } from "react";
import { spellList } from "./../elements/spells";
import Spells from "./../elements/spells";
import styled from "styled-components";
import { Content } from "./styles";

export default function SpellsPage() {
  const array = Object.keys(spellList);
  const allSpellsArray = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    allSpellsArray.push({ name: element, level: 1 });
  }

  return (
    <Content>
      <Wrapper>
        <Spells spells={allSpellsArray} type={"mage"} />
      </Wrapper>
    </Content>
  );
}

const Wrapper = styled.div`
  color: black;
`;
