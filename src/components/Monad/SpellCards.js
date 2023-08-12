import React from "react";
import { spellList } from "./../elements/spells";
import styled from "styled-components";
import { imageError } from "./../color";
import { colors } from './../elements/colors'
import { getParameterCaseInsensitive, perc2color, possiblePlacesObject } from "./../elements/util"
import { racesList } from "../elements/species";
import { classList } from "../elements/classes"
import { ItemList } from "../elements/item"
import { cityAmenities } from "../elements/places"
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
    image:
      "https://i.pinimg.com/originals/ae/b8/53/aeb853e7b70e6c1b425d2d68c4cc1da8.gif",
  },
  // https://i.pinimg.com/originals/a9/73/81/a973812d8aa84593342bd26a1f696ee6.gif - green ball
  // https://i.pinimg.com/originals/0f/86/2d/0f862dd65afdf557ba7a9451892c41c4.gif - portal
};

// For modifying the length of stat bars. (1 = 1/100, 0.05 = 1/5, 0.1 = 1/10)
let modifier = 0.1
let multiplier = 1

export default function SpellCards(listOfCards = []) {
  const cardArray = [];
  for (let index = 0; index < listOfCards.length; index++) {
    const cardInstructions = listOfCards[index];
    cardArray.push(
      // MakeCard(cardInstructions[0], cardInstructions[1], cardInstructions[2])
      MakeCard(cardInstructions)
    );
  }
  return <CardHand>{cardArray}</CardHand>;
}

export function MakeCard(cardInstructions, showStats = false, large = false) {

  let name = cardInstructions.name
  let level = cardInstructions.level || 1
  if (!getParameterCaseInsensitive(spellList, name)) {
    // not a spell
    if (!!getParameterCaseInsensitive(racesList, name)) {
      // Is a species
      let element = cardInstructions.element
      element = spellList[name] ? spellList[name].element || element : element;
      const elementalColor = elementList[element]
        ? elementList[element].color
        : "black";
      if (!cardInstructions.stats) cardInstructions.stats = {}
      const statKeys = Object.keys(cardInstructions.stats)
      const statValues = Object.values(cardInstructions.stats)
      const statCard = []

      // Do you want the bars to always reach the end?
      // modifier = Math.max(...statValues)
      // multiplier = 100

      for (let index = 0; index < statKeys.length; index++) {
        // statCard.push(<div><div>{statKeys[index]}: </div><div>{statValues[index]}</div></div>)
        //   statKeys[index].base_stat
        const positiveStatValue = (parseInt(statValues[index]) < 0) ? -parseInt(statValues[index]) : parseInt(statValues[index])
        const InnerArray = [];
        InnerArray.push(
          // Key
          <div style={{ flex: 1, display: "flex" }} key={statKeys[index] + 'InInfo'}>
            {statKeys[index]}
          </div>
        );
        InnerArray.push(
          // Bar
          <Bar key={index + 'BarInInfo'} negative={parseInt(statValues[index]) < 0}>
            <InnerBar key={index + "InnerBarInInfo"}
              style={{
                width: `${multiplier * positiveStatValue / modifier}%`,
                "background-color": `${perc2color(
                  parseInt(multiplier * (statValues[index]) / modifier)
                )}`,
              }}
            />
          </Bar>
        );
        InnerArray.push(
          // Value
          <div key={statValues[index] + "InInfo"}
            style={{ flex: 0.5, display: "flex", "justify-content": "flex-end" }}
          >
            {statValues[index]}
          </div>
        );
        statCard.push(<SingleStat key={index + 'SingleStatInInfo'}>{InnerArray}</SingleStat>);
      }

      return (
        <CardContainer key={name + "key" + Math.random()}>
          <Card
            large={large}
            // isPassive={isPassive}
            // isNegative={isNegative}
            element={elementalColor}
          >
            <TitleWrap>
              <CardTitle large={large}>{name}</CardTitle>
              <TitleSpan>{cardInstructions.description}</TitleSpan>
            </TitleWrap>
            {cardInstructions.images && cardInstructions.images[0] ? <CardElement onError={imageError} src={cardInstructions.images[0]}></CardElement> : <></>}
            <DiscWrap>
              <CardDisc large={large} >{cardInstructions.self}</CardDisc>
              <DiscSpan>{cardInstructions.self}{statCard}</DiscSpan>
            </DiscWrap>
          </Card>
          {showStats && statCard.length > 0 && <CardSubStats>Stats{statCard}</CardSubStats>}
        </CardContainer>
      )
    } else if (!!getParameterCaseInsensitive(classList, name)) {
      // Class
      let element = cardInstructions.element
      element = spellList[name] ? spellList[name].element || element : element;
      const elementalColor = elementList[element]
        ? elementList[element].color
        : "black";
      if (!cardInstructions.stats) cardInstructions.stats = {}
      const statKeys = Object.keys(cardInstructions.stats)
      const statValues = Object.values(cardInstructions.stats)
      const statCard = []

      // Do you want the bars to always reach the end?
      // modifier = Math.max(...statValues)
      // multiplier = 100

      for (let index = 0; index < statKeys.length; index++) {
        // statCard.push(<div><div>{statKeys[index]}: </div><div>{statValues[index]}</div></div>)
        const positiveStatValue = (parseInt(statValues[index]) < 0) ? -parseInt(statValues[index]) : parseInt(statValues[index])
        //   statKeys[index].base_stat
        const InnerArray = [];
        InnerArray.push(
          // Key
          <div style={{ flex: 1, display: "flex" }} key={statKeys[index] + 'InInfo'}>
            {statKeys[index]}
          </div>
        );
        InnerArray.push(
          // Bar
          <Bar key={index + 'BarInInfo'} negative={parseInt(statValues[index]) < 0}>
            <InnerBar key={index + "InnerBarInInfo"}
              style={{
                width: `${multiplier * positiveStatValue / modifier}%`,
                "background-color": `${perc2color(
                  parseInt(multiplier * (statValues[index]) / modifier)
                )}`,
              }}
            />
          </Bar>
        );
        InnerArray.push(
          // Value
          <div key={statValues[index] + "InInfo"}
            style={{ flex: 0.5, display: "flex", "justify-content": "flex-end" }}
          >
            {statValues[index]}
          </div>
        );
        statCard.push(<SingleStat key={index + 'SingleStatInInfo'}>{InnerArray}</SingleStat>);
      }
      return (
        <CardContainer key={name + "key" + Math.random()}>
          <Card
            large={large}
            // isPassive={isPassive}
            // isNegative={isNegative}
            element={elementalColor}
          >
            <TitleWrap>
              <CardTitle large={large}>{name}</CardTitle>
              <TitleSpan>{cardInstructions.description}</TitleSpan>
            </TitleWrap>
            {cardInstructions.images && cardInstructions.images[0] ? <CardElement onError={imageError} src={cardInstructions.images[0]}></CardElement> : <></>}
            <DiscWrap>
              <CardDisc large={large} >{cardInstructions.team}</CardDisc>
              <DiscSpan>{cardInstructions.team}{statCard}</DiscSpan>
            </DiscWrap>
          </Card>
          {showStats && statCard.length > 0 && <CardSubStats>Stats{statCard}</CardSubStats>}
        </CardContainer>
      )
    } else if (!!getParameterCaseInsensitive(ItemList, name)) {
      // Item
      let element = cardInstructions.element
      element = spellList[name] ? spellList[name].element || element : element;
      const elementalColor = elementList[element]
        ? elementList[element].color
        : "black";
      if (!cardInstructions.stats) cardInstructions.stats = {}
      const statKeys = Object.keys(cardInstructions.stats)
      const statValues = Object.values(cardInstructions.stats)
      const statCard = []

      // Do you want the bars to always reach the end?
      // modifier = Math.max(...statValues)
      // multiplier = 100

      for (let index = 0; index < statKeys.length; index++) {
        // statCard.push(<div><div>{statKeys[index]}: </div><div>{statValues[index]}</div></div>)
        const positiveStatValue = (parseInt(statValues[index]) < 0) ? -parseInt(statValues[index]) : parseInt(statValues[index])
        //   statKeys[index].base_stat
        const InnerArray = [];
        InnerArray.push(
          // Key
          <div style={{ flex: 1, display: "flex" }} key={statKeys[index] + 'InInfo'}>
            {statKeys[index]}
          </div>
        );
        InnerArray.push(
          // Bar
          <Bar key={index + 'BarInInfo'} negative={parseInt(statValues[index]) < 0}>
            <InnerBar key={index + "InnerBarInInfo"}
              style={{
                width: `${multiplier * positiveStatValue / modifier}%`,
                "background-color": `${perc2color(
                  parseInt(multiplier * (statValues[index]) / modifier)
                )}`,
              }}
            />
          </Bar>
        );
        InnerArray.push(
          // Value
          <div key={statValues[index] + "InInfo"}
            style={{ flex: 0.5, display: "flex", "justify-content": "flex-end" }}
          >
            {statValues[index]}
          </div>
        );
        statCard.push(<SingleStat key={index + 'SingleStatInInfo'}>{InnerArray}</SingleStat>);
      }
      return (
        <CardContainer key={name + "key" + Math.random()}>
          <Card
            large={large}
            // isPassive={isPassive}
            // isNegative={isNegative}
            element={elementalColor}
          >
            <TitleWrap>
              <CardTitle large={large}>{name}</CardTitle>
              <TitleSpan>{name}</TitleSpan>
            </TitleWrap>
            {cardInstructions.images && cardInstructions.images[0] ? <CardElement onError={imageError} src={cardInstructions.images[0]}></CardElement> : <></>}
            <DiscWrap>
              <CardDisc large={large} >{cardInstructions.description}</CardDisc>
              {/* <DiscSpan>{cardInstructions.description}{statCard}</DiscSpan> */}
            </DiscWrap>
          </Card>
          {showStats && statCard.length > 0 && <CardSubStats>Stats{statCard}</CardSubStats>}
        </CardContainer>
      )

    } else if (!!getParameterCaseInsensitive(possiblePlacesObject(), name)) {
      // countries / cities
      const statCard = []
      if (cardInstructions.countries) {
        const countriesKeys = Object.keys(cardInstructions.countries)
        for (let index = 0; index < countriesKeys.length; index++) {
          statCard.push(<SingleStat key={index + 'countriesKeys'}>{countriesKeys[index]}</SingleStat>);
        }
      }
      if (cardInstructions.cities) {
        const citiesKeys = Object.keys(cardInstructions.cities)
        for (let index = 0; index < citiesKeys.length; index++) {
          statCard.push(<SingleStat key={index + 'citiesKeys'}>{citiesKeys[index]}</SingleStat>);
        }
      }
      if(!cardInstructions.cities && !cardInstructions.countries) {
        const cityAmenitiesList = Object.keys(cityAmenities)
        for (let index = 0; index < cityAmenitiesList.length; index++) {
          if(cardInstructions[cityAmenitiesList[index]]) {
            statCard.push(<SingleStat key={index + 'citiesKeys'}>{cityAmenities[cityAmenitiesList[index]]}</SingleStat>);
          }
        }
      }

      return (
        <CardContainer key={name + "key" + Math.random()}>
          <Card
            large={large}
          // isPassive={isPassive}
          // isNegative={isNegative}
          >
            <TitleWrap>
              <CardTitle large={large}>{name}</CardTitle>
              <TitleSpan>{name}</TitleSpan>
            </TitleWrap>
            {cardInstructions.images && cardInstructions.images[0] ? <CardElement onError={imageError} src={cardInstructions.images[0]}></CardElement> : <></>}
            <DiscWrap>
              <CardDisc large={large} >{cardInstructions.description}</CardDisc>
            </DiscWrap>
          </Card>
          {showStats && statCard.length > 0 && cardInstructions.countries && <CardSubStats>Countries:{statCard}</CardSubStats>}

          {showStats && statCard.length > 0 && cardInstructions.cities && <CardSubStats>Cities:{statCard}</CardSubStats>}

          {showStats && statCard.length > 0 && <CardSubStats>{statCard}</CardSubStats>}
        </CardContainer>
      )
    } else {
      // is bullshit
    }
  } else {
    // is a spell
    let element = cardInstructions.element
    element = spellList[name] ? spellList[name].element || element : element;
    const elementalColor = elementList[element]
      ? elementList[element].color
      : "black";
    const spellName = spellList[name] ? spellList[name].name : name || "No Name";
    let spellDisc =
      spellList[name] && level ? spellList[name][level] : cardInstructions[level];
    if (!spellDisc || spellDisc.length < 1) spellDisc = cardInstructions.description;
    if (!spellDisc || spellDisc.length < 1) spellDisc = "No Description";
    let elementImage = spellList[name]
      ? spellList[name].image || undefined
      : undefined;
    if (!elementImage && cardInstructions.image) elementImage = cardInstructions.image
    if (!elementImage && cardInstructions.images && cardInstructions.images.length > 0) elementImage = cardInstructions.images[0]
    if (!elementImage)
      elementImage = elementList[element] ? elementList[element].image : "";
    const isPassive = spellList[name] ? spellList[name].passive || false : false;
    if (isPassive)
      elementImage =
        "https://static.wikia.nocookie.net/imaginaughts/images/4/4b/Stock-footage-a-looping-background-with-energy-ball.jpg";
    const isNegative = spellList[name]
      ? spellList[name].negative || false
      : false;
    if (isNegative)
      elementImage =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShrZBpFyDDZ5v1smJc5VLRPIvo8YwM6wJBKg&usqp=CAU";
    return (
      <CardContainer key={name + "key" + Math.random()}>
        <Card
          large={large}
          isPassive={isPassive}
          isNegative={isNegative}
          element={elementalColor}
        >
          <TitleWrap>
            <CardTitle large={large}>{spellName}</CardTitle>
            <TitleSpan>{spellName}</TitleSpan>
          </TitleWrap>
          {elementImage ? <CardElement onError={imageError} src={elementImage}></CardElement> : <></>}
          <DiscWrap>
            <CardDisc large={large} >{spellDisc}</CardDisc>
            <DiscSpan>{spellDisc}</DiscSpan>
          </DiscWrap>
          <CardSub>Level: {level ? level : "???"}</CardSub>
        </Card>
      </CardContainer>
    );
  }
}

const InnerBar = styled.div`
  backgroundColor: orange;
  height: 20px;
  border-radius: 10px;
  max-width: 100%;
`;

const Bar = styled.div`
  backgroundColor: lightgrey;
  border-radius: 13px;
  width: 100%;
  padding: 3px;
  flex: 5;
  display:flex;
  justify-content: ${props => props.negative ? 'end' : 'start'}
`;


const SingleStat = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-top: 2px white solid;
`;

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
  text-transform: capitalize;
  min-width: 200px;
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
  
  text-transform: capitalize;
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
  ${(props) => (props.isPassive ? "background: #54CC4F" : "background: white")};
  ${(props) => (props.isNegative ? "background: #F92B00" : "")};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 0.5rem;
  margin: 0.5rem;
  border-width: thick;
  border-color: ${(props) => (props.element ? props.element : "black")};
  justify-content: space-around;
  min-height: 300px;
  ${(props) => (props.large ? "" : "height: 300px;")};
  min-width: 150px;
  width: 150px;
  padding: 1%;
`;

const CardTitle = styled.h2`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  ${(props) => (props.large ? "" : "overflow: hidden")};
  ${(props) => (props.large ? "" : "white-space: nowrap")};
  text-transform: capitalize;
  color: ${colors.black.off}
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
  ${(props) => (props.large ? "" : "overflow: hidden")};
  text-overflow: ellipsis;
  display: -webkit-box;
  ${(props) => (props.large ? "" : "-webkit-line-clamp: 2;")};
  -webkit-box-orient: vertical;
  min-height: 46.67px;
  text-transform: capitalize;
  color: ${colors.black.off}
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
  color: ${colors.black.off}
`;

const CardSubStats = styled.div`
  margin-top: 2%;
  text-transform: capitalize;
  background: black;
  padding: 0 2%;
  width: 100%;
`;

const CardHand = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
