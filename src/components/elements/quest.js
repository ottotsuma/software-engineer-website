import React, { useState } from 'react'
import styled from 'styled-components';

const colors = {
  junk: "rgb(109, 109, 109)",
  normal: "blue",
  rare: "green",
  epic: "red",
  legendary: "orange",
  unique: "purple",
  growth: "#e2abac",
  quest: "gold",
};

export default function Quest(props) {
  const [spanCSS, SetSpanCSS] = useState(false);
  return (
    <Main>
      <CardNoImage>
        <Title color={colors[props.rating]}>New Quest!</Title>
        {!spanCSS && <Name>{props.name}</Name>}
        {!spanCSS && <Rewards>Rewards: {props.rewards}</Rewards>}
        {spanCSS && <Span>{props.details}</Span>}
        <ButtonWrapper>
          <ButtonDetails onClick={() => SetSpanCSS(!spanCSS)}>Details</ButtonDetails>
          <Button>Okay</Button>
        </ButtonWrapper>
      </CardNoImage>
    </Main>
  )
}

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ButtonDetails = styled.div`
  color: white;
  background: #f92b00;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  margin: 10px;
  cursor: pointer;
  white-space: nowrap;
  &:hover {
      background: #ff5745;
  }
`;

const Button = styled.div`
  color: white;
  background: #0d89eb;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 50px;
  margin: 10px;
  cursor: pointer;
  white-space: nowrap;
  &:hover {
      background: #2CA8FF;
  }
`;

const Name = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Rewards = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: black 3px solid;
`;

const Title = styled.p`
  display: flex;
  justify-content: center;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
  color: ${props => props.color || 'white'}
`;

const SingleStat = styled.li`
  text-transform: capitalize;
  border-radius: 6px;
  padding: 1px;
  width: auto;
  display: flex;
  justify-content: space-between;
`;

const BottomText = styled.div`
  width: ${props => props.width || '300px'};
  border-radius: 3px;
  overflow: hidden;
  position:absolute; /* important */
  bottom:0; /* important */
  max-height:0; /* important */
  overflow:hidden; /* important */
  transition:max-height 300ms ease-in; /* important */
  font-weight: bold
`;

const Span = styled.div`
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  width: auto;
  z-index: 2;
  top: 0;
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
  &:hover ${BottomText} {
    max-height:50%; /* important */
  }
`;

const CardNoImage = styled.div`
position:relative; /* important */
  width: 300px;
  height: auto;
  border-radius: 3px;
  margin-bottom: ${props => props.bottom || "10px"};
  &:hover ${BottomText} {
    max-height:50%; /* important */
  }
`;