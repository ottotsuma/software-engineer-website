import React, { useState } from "react";
import styled from "styled-components";
import {colors, monadColors} from './colors'
function _try(func, fallbackValue) {
    try {
      var value = func();
      return (value === null || value === undefined) ? fallbackValue : value;
    } catch (e) {
      return fallbackValue;
    }
  }

export const nationList = {
  Alden: {
    language: 'german 🎄',
    name: 'Alden',
    map: '',
    color: '',
    Military: 'Strong land military, with regionally high level population. Medium sized navy. Few flying assets; Witches.',
    Diplomacy: "Overall, poor. At war with the republic, negative relations with all countries apart from Niyosho, were the relation is neutral at best.",
    Religion: '',
    Culture: 'Warrior based, military focused. Strong sense of what should be.',
    Ambition: 'Expansion for living space.',
    Stability: 'Stable.',
    Secrets: '',
    Food: 'Very fertile land.',
    Economy: '',
    "Places of Interest": 'Kustet (Salt mining town)',
    "Unique Unit": 'Witches',
    Bonuses: '',
  },
};

export default function NationDisplay(Nation) {
  const Data = _try(() => nationList[Nation])
  if(Data) {
    return (
      <BackgroundWrap>
      <Wrap CountryColor={monadColors[Data.color] || ''}>
        <Name>{Nation}</Name>
        {Data.map ? <Display src={Data.map} alt={Nation} /> : <></>}
        <Info>{Data["Unique Unit"] ? Data["Unique Unit"] : ''}</Info>
      </Wrap>
      </BackgroundWrap>
    )
  } else {
    return <div></div>
  }
}
const BackgroundWrap = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;
const Wrap = styled.div`
border-radius: 6px;
padding: 5px;
max-width: 200px;
color: ${colors.black.off};
background: ${colors.white.off};
margin: 1%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
border-width: thick;
border-style: solid;
border-color: ${props => props.CountryColor};
`;
const Name = styled.div`
font-size: xx-large;
`;
const Display = styled.img`
border-radius: 50%;
width: 100%;
height: 100%;
`;
const Info = styled.div`
margin-bottom: 5px;
`;