import React from 'react'
import styled from 'styled-components';

// src: for image || question mark
// height: || 300px
// width: || 300px
// stats object {key:value} || No stats to show.
// name || No Name!
// effect || No Special Effect!

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

const prop = {
    src: 'http://assets.stickpng.com/thumbs/5a461418d099a2ad03f9c999.png',
}

function item(props) {
    const array = [];
    if (props.stats) {
        const keys = Object.keys(props.stats);
        for (let index = 0; index < keys.length; index++) {
            // make these into styled items with props => props.color so you can change the color of the stats!
            const element = <div style={{ marginRight: "5px" }}>{keys[index] + ": "}</div>
            const element2 = <div style={{color: perc2color(props.stats[keys[index]]*10)}}>{props.stats[keys[index]]}</div>;
            array.push(
                <SingleStat key={index + "stat"}>
                    {element} {element2}
                </SingleStat>
            );
        }
    } else {
        array.push(
            <SingleStat key={"SingleStat"}>
                No stats to show.
            </SingleStat>
        )
    }

    return (
        <Main>
            <Title>{props.name || 'No Name!'}</Title>
            <Card height={props.height} width={props.width} src={props.src}>
                <Span>{array}</Span>
                <Name>{props.effect || 'No Special Effect!'}</Name>
            </Card>
        </Main>
    )
}

export default item

const Title = styled.h1`
  display: flex;
  justify-content: center;
`;

const Main = styled.div`
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
`;

const Card = styled.div`
position:relative; /* important */
  width: ${props => props.width || '300px'};
  height: ${props => props.height || '300px'};
  background-image: url(${props => props.src || prop.src});
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