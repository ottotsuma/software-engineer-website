import React from "react";
import styled from "styled-components";
import Tree from "./tree";
import {MakeCard} from "./../Monad/SpellCards";
import { searchSpells, searchSpeciesSkills, searchSpecies, searchClass, searchClassSkills, searchItem} from "./util"

export default function Hover({word}) {
  let data = {}
  if(searchSpecies(word)) data = searchSpecies(word)
  if(searchSpells(word)) data = searchSpells(word)
  if(searchClass(word)) data = searchClass(word)
  if(searchItem(word)) data = searchItem(word)
    return (
        <div>
          <MainWord>
            <SingleSpell>
            {word}
            <Span>{MakeCard(data, true, true)}</Span>
            </SingleSpell>
          </MainWord>
        </div>
      );
}

const MainWord = styled.div`
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
  &:hover ${Span} {
    visibility: visible;
  }
`;