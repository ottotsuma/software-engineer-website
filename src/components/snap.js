import React from "react";
import { imageError } from "./color";
import styled from "styled-components";
import { _try } from './elements/util'
import Stats from "./elements/stats";
import {racesList} from './elements/species'

export default function Snap(props) {
    return (
        <SnapContainer>
            <Page>
                <BeastPage beast={racesList['Red Panda']} />
            </Page>
            <Page>
                <img styles={{maxHeight: '100%'}} onError={imageError} src={'https://ottotsuma.github.io/images/monsters/Golem_01.webp'} alt="Screen-Shot" />
            </Page>
            <Page>
                <img styles={{maxHeight: '100%'}} onError={imageError} src={'https://ottotsuma.github.io/images/monsters/Griffin_01.webp'} alt="Screen-Shot" />
            </Page>
            <Page>
                <img styles={{maxHeight: '100%'}} onError={imageError} src={'https://ottotsuma.github.io/images/monsters/Hydra_01.webp'} alt="Screen-Shot" />
            </Page>
            <Page>
                <img styles={{maxHeight: '100%'}} onError={imageError} src={'https://ottotsuma.github.io/images/monsters/Mite_01.webp'} alt="Screen-Shot" />
            </Page>
        </SnapContainer>
    )
}
const SnapContainer = styled.div`
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
  background-image: url("https://ottotsuma.github.io/images/places/AldenAcademy.jpg");
`;
const Page = styled.div`
 height: 100vh;
 scroll-snap-align: start;

 flex: 1;
 display: flex;
 justify-content: center;
//  align-items: center;
 font-family: "Yusei Magic", sans-serif;
`;

// To be removed.

function BeastPage({ beast }) {
    return (
        <BeastContainer width={window.innerWidth} height={window.innerHeight}>
            <Top>
                <Title>{_try(() => beast.name)}</Title>
                <Text>{_try(() => beast.disc)}</Text>
            </Top>
            <Mid>
                <StatsContainer>
                    <Stats
                        type={"description"}
                        removeHPMP={true}
                        stats={{
                            // name: "",
                            // level: 1,
                            species: "Red Panda",
                            vitality: 0,
                            strength: 0,
                            endurance: 0,
                            magic: 0,
                            willpower: 0,
                            dexterity: 0,
                            sense: 0,
                            charisma: 0,
                        }}
                    />
                </StatsContainer>
                <BeastImage1 onError={imageError} src={_try(() => beast.images[0])} alt="Screen-Shot" />
            </Mid>
            <Bot>
                <BeastImage2 onError={imageError} src={_try(() => beast.images[1])} alt="Screen-Shot" />
            </Bot>
        </BeastContainer>
    )
}
const Title = styled.div`
color: black;
max-height: 30%;
font-size: 42px;
`;
const Text = styled.div`
color: black;
margin: 0px 20px;
max-height: 70%;
overflow: auto;
white-space: break-spaces;
`;
const StatsContainer = styled.div`
color: black;
overflow: auto;
`;
const BeastImage1 = styled.img`
width: 300px;
height: 90%;
`;
const BeastImage2 = styled.img`
width: 100%;
height: 100%;
`;
const Mid = styled.div`
//  height: 337px;
 display: flex;
 justify-content: space-around;
 max-height: 42%;
 height: -webkit-fill-available;
`;
const Top = styled.div`
height: 300px;
max-height: 30%;
`;
const Bot = styled.div`
height: 280px;
display: flex;
align-items: flex-end;
max-height: 28%;
`;
const BeastContainer = styled.div`
    background-image: url("https://img.freepik.com/free-photo/crumpled-paper-background_1373-412.jpg?size=626&ext=jpg&ga=GA1.2.1745401800.1611187200");
    width: 600px;
    height: 917px;
    max-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    zoom: ${props => props.height / props.width}
`;