import React from 'react'
import styled from 'styled-components';

// src: for image
// height: 
// width:

const prop = {
    src: 'https://thechive.com/wp-content/uploads/2019/12/person-hilariously-photoshops-animals-onto-random-things-xx-photos-25.jpg?attachment_cache_bust=3136487&quality=85&strip=info&w=400',
}

function item(props) {
    return (
        <Main height={props.height} width={props.width} src={props.src}>
            <Span>test</Span>
            <Name>2</Name>
        </Main>
    )
}

export default item

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
`;

const Main = styled.div`
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