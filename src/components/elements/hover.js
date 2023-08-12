import React from "react";
import styled from "styled-components";
import Tree from "./tree";
import {MakeCard} from "./../Monad/SpellCards";
import { searchPlaces, searchSpells, searchSpeciesSkills, searchSpecies, searchClass, searchClassSkills, searchItem} from "./util"
import { colors, monadColors } from "./colors";

export default function Hover({word}) {
  let data = {}
  if(searchSpecies(word)) data = searchSpecies(word)
  if(searchSpells(word)) data = searchSpells(word)
  if(searchClass(word)) data = searchClass(word)
  if(searchItem(word)) data = searchItem(word)
  if(searchPlaces(word)) data = searchPlaces(word)
  if(!data.name) data.name = word
    return (
        <Wrap>
          <MainWord>
            <SingleSpell color={monadColors[data.tier] || ''}>
            <Span>{MakeCard(data, true, true)}</Span>
            {word}
            </SingleSpell>
          </MainWord>
        </Wrap>
      );
}

const MainWord = styled.div`
  display: contents;
`;

const Wrap = styled.div`
  display: contents;
`;



const Span = styled.span`
  visibility: hidden;
  background-color: transparent;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  width: auto;
  position: absolute;
  z-index: 2;
  margin-top: 20px;
`;

const SingleSpell = styled.div`
  color: ${(props => props.color ? props.color : '')};
  display: contents;
  position: relative;
  &:hover ${Span} {
    visibility: visible;
  }
`;