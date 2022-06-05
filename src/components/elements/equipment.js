import styled from "styled-components";
import React from "react";
import {monadColors as colors} from './colors'
import { _try } from "./util";

// the effects are based on stats not level so it would be something maybe combined into stats?
function Stats({ items, level }) {
  if(level){
    // Grabs the item's information for the correct level if the level is provided and added to the item.
    for (let index = 0; index < Object.keys(items).length; index++) {
      if(_try(() => items[Object.keys(items)[index]][level].stats)) {
        items[Object.keys(items)[index]] = {...items[Object.keys(items)[index]], ...items[Object.keys(items)[index]][level]}
      }
    }
  }
  const array = [];
  const keys = Object.keys(items);
  for (let index = 0; index < keys.length; index++) {
    const BodyPart = keys[index] + ": ";
    const ItemName = (
      <div style={{ color: colors[items[keys[index]].rating] }}>
        {items[keys[index]].name}:
      </div>
    );
    const effect = items[keys[index]].description || items[keys[index]].effect;
    const long = items[keys[index]].long;
    const space = <div style={{ background: "inherit", width: "3px" }}> </div>;
    array.push(
      <SingleStat key={index + "equipment"}>
        {BodyPart}
        {space}
        {ItemName}
        {space}
        {effect}
        <Span>{!!long ? long : effect}</Span>
      </SingleStat>
    );
  }
  return (
    <>
      <Title>Equipment:</Title>
      <StatsStyle>{array}</StatsStyle>
    </>
  );
}
export default Stats;

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
  width: auto;
  position: absolute;
  z-index: 2;
  margin-top: 7%;
`;

const SingleStat = styled.li`
  flex-wrap: wrap;
  text-transform: capitalize;
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
  border-bottom: solid;
  border-color: #f9f9f9;
`;
