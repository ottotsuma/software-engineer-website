import React from 'react'
import styled from 'styled-components';

export default function Quest(props) {
    return (
        <Main>
            <CardNoImage>
                <Title>New Quest!</Title>
                {props.name}
            {props.rewards}
            {props.rating}
            </CardNoImage>
        </Main>
    )
}

const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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
  &:hover ${Span} {
    visibility: visible;
  }
  &:hover ${BottomText} {
    max-height:50%; /* important */
  }
`;