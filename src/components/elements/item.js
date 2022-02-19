import React from 'react'
import styled from 'styled-components';
import {monadColors as colors, colors as fixmeplease} from './colors'

// src: for image || question mark
// height: || 300px
// width: || 300px
// stats object {key:value} || No stats to show.
// name || ''
// effect || ''
// long // for long writing below the item. Don't use with image!

function perc2color(perc) {
    if (perc > 100) return "rgb(36, 255, 0)"
    var r, g, b = 0;
    if (perc < 50) {
        r = 255;
        g = Math.round(5.1 * perc);
    }
    else {
        g = 255;
        r = Math.round(510 - 5.10 * perc);
    }
    var h = r * 0x10000 + g * 0x100 + b * 0x1;
    return '#' + ('000000' + h.toString(16)).slice(-6);
}

export const ItemList = {
  "Training Health Potion" : {
    name: 'Training Health Potion',
    description: 'Recovers 1HP every 5 seconds for the next 120 seconds.', // 24 HP
    image: '',
    effect: '', // Price since it was shown In a shop.
  },
  "Soul bound wand" : {
    name: 'Soul bound wand',
    description: 'Third Eye (active skill). Control minion: +1, sense: +1,',
    image: 'https://ottotsuma.github.io/images/items/wand1.png',
    effect: '¤3,200,000', // Price since it was shown In a shop.
  },
  "Bone Lance" : {
    name: 'Bone Lance',
    description: '',
    image: 'https://ottotsuma.github.io/images/people/2d7002b02e419fb5cca7be2ec8e9f755.jpg',
    effect: '', // Price since it was shown In a shop.
  },
  "Trainee Bone Spear" : {
    name: 'Trainee Bone Spear',
    description: '',
    image: '',
    effect: '', // Price since it was shown In a shop.
  }
}

export function InlineItem ({itemName}) {
  // console.log(spellList[Object.keys(spellList).find(key => key.toLowerCase() === spellName.toLowerCase())]);
  return <Inline>{itemName}<ItemSpan>{ItemList[itemName] ? ItemList[itemName].description : ''}</ItemSpan></Inline>
}

const ItemSpan = styled.span`
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

const Inline = styled.div`
display: contents;
font-family: 'monospace';
&:hover ${ItemSpan} {
  visibility: visible;
}
`;

function Item(props) {
    const array = [];
    if (props.stats) {
        const keys = Object.keys(props.stats);
        for (let index = 0; index < keys.length; index++) {
            // make these into styled items with props => props.color so you can change the color of the stats!
            const element = <div style={{ marginRight: "5px" }}>{keys[index] + ": "}</div>
            const element2 = <div style={{ color: perc2color(props.stats[keys[index]] * 10) }}>{props.stats[keys[index]]}</div>;
            array.push(
                <SingleStat key={index + "stat"}>
                    {element} {element2}
                </SingleStat>
            );
        }
    } else {
      // no stats to show
    }
    if(!props.src) {
        console.log('no image')
        return (
            <Main>
                <CardNoImage bottom={props.effect ? '10px':'0px'}>
                    <TitleItem2 color={colors[props.rating]}>{props.name || ''}</TitleItem2>
                    {array.length > 0 && <Span>{array}</Span>}
                    {props.effect ? <Name>{props.effect}</Name> : <div></div>}
                </CardNoImage>
                {props.long ? <div>{props.long}</div> : <div></div>}
            </Main>
        ) 
    } else {
        return (
            <Main>
                <Card height={props.height} width={props.width} src={props.src}>
                    {props.rating ? <TitleItem color={colors[props.rating]}>{props.name || ''}</TitleItem> : <Title color={colors[props.rating]}>{props.name || ''}</Title>}
                    {array.length > 0 && <Span>{array}</Span>}
                    {props.effect ? <Name style={{background:"#f8f8ff"}}>{props.effect}</Name> : <div></div>}
                </Card>
            </Main>
        )
    }
}

export default Item

const Title = styled.h1`
  display: flex;
  justify-content: center;
`;

const TitleItem = styled.p`
  display: flex;
  justify-content: center;
  font-size: 1.5em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
    color: ${props => props.color || 'white'}
`;

const TitleItem2 = styled.p`
  display: flex;
  justify-content: center;
  // font-size: 1.5em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
    color: ${props => props.color || 'white'}
`;

const Main = styled.div`
display: flex;
    flex-direction: column;
    align-items: center;
`;

const SingleStat = styled.li`
  text-transform: capitalize;
  border-radius: 6px;
  padding: 1px;
  width: auto;
  display: flex;
  justify-content: space-between;
`;

const Name = styled.div`
  width: ${props => props.width || '300px'};
  border-radius: 3px;
  overflow: hidden;
  position:absolute; /* important */
  bottom:0; /* important */
  max-height:0; /* important */
  overflow:hidden; /* important */
  transition:max-height 300ms ease-in; /* important */
  font-weight: bold;
  color: ${fixmeplease.black.off};
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
  margin-left: 50%;
  white-space: nowrap;
  top: 0;
  @media screen and (max-width: 650px) {
    margin-left: 0%;
    left: 0;
  }
`;

const Card = styled.div`
position:relative; /* important */
  width: ${props => props.width || '300px'};
  height: ${props => props.height || '300px'};
  background-image: url(${props => props.src || 'http://assets.stickpng.com/thumbs/5a461418d099a2ad03f9c999.png'});
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  border-radius: 3px;
  margin-bottom: 10px;
  &:hover ${Span} {
    visibility: visible;
  }
  &:hover ${Name} {
    max-height:50%; /* important */
  }
`;

const CardNoImage = styled.div`
position:relative; /* important */
  width: 300px;
  height: 50px;
  border-radius: 3px;
  margin-bottom: ${props => props.bottom || "10px"};
  &:hover ${Span} {
    visibility: visible;
  }
  &:hover ${Name} {
    max-height:50%; /* important */
  }
`;