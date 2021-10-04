import React from "react";
import { spellList } from "./../elements/spells";
import styled from "styled-components";
import { imageError } from "./../color";
// https://tropedia.fandom.com/wiki/Color-Coded_Elements
const elementList = {
  lightning: {
    color: "#FFF049",
    image:
      "https://i.pinimg.com/originals/22/86/5d/22865d4b8b7e517dce1b60a2988c8482.gif",
  },
  fire: {
    color: "#FE8F06",
    image:
      "https://i.pinimg.com/originals/4d/ca/d9/4dcad98ff2d9aba671b56957ab5d70a2.gif",
  },
  blood: {
    color: "#bb0a1e",
    image:
      "https://github.com/ottotsuma/ottotsuma.github.io/blob/master/images/spells%20effects/b323b0af13f20645569964f9c75b4909.gif?raw=true",
  },
  wood: {
    color: "#11630A",
    image:
      "https://github.com/ottotsuma/ottotsuma.github.io/blob/master/images/spells%20effects/13f2a99f60457a624fae45d7be0bad65.gif?raw=true",
  },
  water: {
    color: "#4FA9FF",
    image:
      "https://github.com/ottotsuma/ottotsuma.github.io/blob/master/images/spells%20effects/53393042b7d6b478cb8f450127cded85.gif?raw=true",
  },
  ice: {
    color: "#B2FCFF",
    image:
      "https://i.pinimg.com/originals/cf/a7/18/cfa718ab7b172dad6c8d3a13a73df0bc.gif",
  },
  wind: {
    color: "#A4C9AA",
    image:
      "https://github.com/ottotsuma/ottotsuma.github.io/blob/master/images/spells%20effects/e5a4c2e0ce407b50e52b9a7dd13ded12.gif?raw=true   ",
  },
  earth: {
    color: "#FBAD16",
    image:
      "https://github.com/ottotsuma/ottotsuma.github.io/blob/master/images/spells%20effects/b199a7695f5c44443faeb497ccd954e2.gif?raw=true",
  },
  mana: {
    color: "purple",
    image: "https://i.pinimg.com/originals/ae/b8/53/aeb853e7b70e6c1b425d2d68c4cc1da8.gif",
  }
  // https://i.pinimg.com/originals/a9/73/81/a973812d8aa84593342bd26a1f696ee6.gif - green ball
  // https://i.pinimg.com/originals/0f/86/2d/0f862dd65afdf557ba7a9451892c41c4.gif - portal
};
export default function SpellCards(listOfCards) {
  const cardArray = [];
  for (let index = 0; index < listOfCards.length; index++) {
    const cardInstructions = listOfCards[index];
    cardArray.push(
      MakeCard(cardInstructions[0], cardInstructions[1], cardInstructions[2])
    );
  }
  return <CardHand>{cardArray}</CardHand>;
}

function MakeCard(name, level, element) {
  element = spellList[name] ? spellList[name].element || element : element;
  const elementalColor = elementList[element]
    ? elementList[element].color
    : "black";
  const spellName = spellList[name] ? spellList[name].name : name || "No Name";
  const spellDisc =
    spellList[name] && level ? spellList[name][level] : "No Description";
  let elementImage = spellList[name] ? spellList[name].image || undefined : undefined
  if(!elementImage) elementImage = elementList[element] ? elementList[element].image : "";
  const isPassive = spellList[name] ? spellList[name].passive || false : false
  if(isPassive) elementImage = 'https://static.wikia.nocookie.net/imaginaughts/images/4/4b/Stock-footage-a-looping-background-with-energy-ball.jpg'

  return (
    <CardContainer key={name + 'key' + Math.random()}>
      <Card isPassive={isPassive} element={elementalColor}>
        <TitleWrap>
          <CardTitle>{spellName}</CardTitle>
          <TitleSpan>{spellName}</TitleSpan>
        </TitleWrap>
        <CardElement onError={imageError} src={elementImage}></CardElement>
        <DiscWrap>
          <CardDisc>{spellDisc}</CardDisc>
          <DiscSpan>{spellDisc}</DiscSpan>
        </DiscWrap>
        <CardSub>Level: {level ? level : "???"}</CardSub>
      </Card>
    </CardContainer>
  );
}

const DiscSpan = styled.span`
  visibility: hidden;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  width: auto;
  position: absolute;
  z-index: 2;
  margin-top: 50px;
  max-width: 90%;
`;

const TitleSpan = styled.span`
  visibility: hidden;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  width: auto;
  position: absolute;
  z-index: 2;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  resize: horizontal;
`;
const Card = styled.div`
  border: solid;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${props => props.isPassive ? 'background: #54CC4F' : 'background: white'};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 0.5rem;
  margin: 0.5rem;
  border-width: thick;
  border-color: ${(props) => (props.element ? props.element : "black")};
  justify-content: space-around;
  height: 300px;
  width: 150px;
  padding: 1%;
`;
const CardTitle = styled.h2`
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
const TitleWrap = styled.div`
  width: 100%;
  display: flex;
  &:hover ${TitleSpan} {
    visibility: visible;
  }
`;

const CardElement = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 1rem;
  @media screen and (max-width: 300px) {
    display: none;
  }
  margin-top: 2%;
`;
const CardDisc = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
const DiscWrap = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  &:hover ${DiscSpan} {
    visibility: visible;
  }
`;
const CardSub = styled.div`
  margin-top: 2%;
`;

const CardHand = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
