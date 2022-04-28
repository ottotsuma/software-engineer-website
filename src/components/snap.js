import React from "react";
import { imageError } from "./color";
import styled from "styled-components";
import {_try} from './elements/util'

export default function Snap(props) {
    return (
        <SnapContainer>
            <Page0>
                <BeastPage beast={{name: 'Red Panda'}} />
            </Page0>
            <Page1>
                <img onError={imageError} src={'https://ottotsuma.github.io/images/monsters/Golem_01.webp'} alt="Screen-Shot" />
            </Page1>
            <Page2>
                <img onError={imageError} src={'https://ottotsuma.github.io/images/monsters/Griffin_01.webp'} alt="Screen-Shot" />
            </Page2>
            <Page3>
                <img onError={imageError} src={'https://ottotsuma.github.io/images/monsters/Hydra_01.webp'} alt="Screen-Shot" />
            </Page3>
            <Page4>
                <img onError={imageError} src={'https://ottotsuma.github.io/images/monsters/Mite_01.webp'} alt="Screen-Shot" />
            </Page4>
        </SnapContainer>
    )
}
const SnapContainer = styled.div`
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
  background-image: url("https://ottotsuma.github.io/images/places/AldenAcademy.jpg");
`;
const Page0 = styled.div`
 height: 100vh;
 scroll-snap-align: start;

 flex: 1;
 display: flex;
 justify-content: center;
 align-items: center;
 font-family: "Yusei Magic", sans-serif;
`;
const Page1 = styled.div`
 height: 100vh;
 scroll-snap-align: start;

 flex: 1;
 display: flex;
 justify-content: center;
 align-items: center;
 font-family: "Yusei Magic", sans-serif;
`;
const Page2 = styled.div`
 height: 100vh;
 scroll-snap-align: start;

 flex: 1;
 display: flex;
 justify-content: center;
 align-items: center;
 font-family: "Yusei Magic", sans-serif;
`;
const Page3 = styled.div`
 height: 100vh;
 scroll-snap-align: start;

 flex: 1;
 display: flex;
 justify-content: center;
 align-items: center;
 font-family: "Yusei Magic", sans-serif;
`;
const Page4 = styled.div`
 height: 100vh;
 scroll-snap-align: start;

 flex: 1;
 display: flex;
 justify-content: center;
 align-items: center;
 font-family: "Yusei Magic", sans-serif;
`;

// To be removed.

function BeastPage ({beast}) {

    return (
        <BeastContainer>
            <Top>
                <Title>{_try(() => beast.name)}</Title>
                <Text>{_try(() => beast.disc)}</Text>
            </Top>
            <Mid>
                <Stats></Stats>
                <BeastImage1 onError={imageError} src={'https://ottotsuma.github.io/images/monsters/afa542f5244091d1ec8e995d4cab92af.jpg'} alt="Screen-Shot" />
            </Mid>
            <Bot>
                <BeastImage2 onError={imageError} src={'https://ottotsuma.github.io/images/monsters/bae7137a73f7e8020ba59aaaa5a3120e.jpg'} alt="Screen-Shot" />
            </Bot>
        </BeastContainer>
    )
}
const Title = styled.div`
color: black;
`;
const Text = styled.div`
`;
const Stats = styled.div`
`;
const BeastImage1 = styled.img`
width: 300px;
height: 400px;
`;
const BeastImage2 = styled.img`
width: 550px;
height: 250px;
`;
const Mid = styled.div`
`;
const Top = styled.div`
`;
const Bot = styled.div`
`;
const BeastContainer = styled.div`
  background-image: url("https://img.freepik.com/free-photo/crumpled-paper-background_1373-412.jpg?size=626&ext=jpg&ga=GA1.2.1745401800.1611187200");
  width: 600px;
  height: 917px;
`;