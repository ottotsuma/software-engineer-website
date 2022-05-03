import React from "react";
import { imageError } from "./color";
import styled from "styled-components";
import { racesList } from "./elements/species";
import {BeastPage} from './Monad/Vampire'

export default function Snap(props) {
  return (
    <SnapContainer>
      <Page>
        <BeastPage name={"Red Panda"} />
      </Page>
      <Page>
        <BeastPage name={"Wendigo"} />
      </Page>
      <Page>
        <img
          styles={{ maxHeight: "100%" }}
          onError={imageError}
          src={"https://ottotsuma.github.io/images/monsters/Golem_01.webp"}
          alt="Screen-Shot"
        />
      </Page>
      <Page>
        <img
          styles={{ maxHeight: "100%" }}
          onError={imageError}
          src={"https://ottotsuma.github.io/images/monsters/Griffin_01.webp"}
          alt="Screen-Shot"
        />
      </Page>
      <Page>
        <img
          styles={{ maxHeight: "100%" }}
          onError={imageError}
          src={"https://ottotsuma.github.io/images/monsters/Hydra_01.webp"}
          alt="Screen-Shot"
        />
      </Page>
      <Page>
        <img
          styles={{ maxHeight: "100%" }}
          onError={imageError}
          src={"https://ottotsuma.github.io/images/monsters/Mite_01.webp"}
          alt="Screen-Shot"
        />
      </Page>
    </SnapContainer>
  );
}
const SnapContainer = styled.div`
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
  background-image: url("https://ottotsuma.github.io/images/places/AldenAcademy.jpg");
  background-repeat: no-repeat;
  background-size: cover;
`;
const Page = styled.div`
  height: 100vh;
  scroll-snap-align: start;

  flex: 1;
  display: flex;
  justify-content: center;
  font-family: "Yusei Magic", sans-serif;
`;
