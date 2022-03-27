import React, { useState } from "react";
import Item from "./../elements/item";
import styled from "styled-components";
import { Content } from "./styles";
import Spin from "./../elements/spin";
import Quest from "./../elements/quest";
import LevelUp from "./../elements/levelup";
import Otto from "./People";
import Equipment from "./../elements/equipment";
import Stats from "./../elements/stats";
import Spells from "./../elements/spells";
import { Hitori } from "./CharacterFonts";
import {
  Noah as NoahStats,
  Sarah as SarahStats,
  Josh as JoshStats,
} from "./People";

export const Shine = styled.p`
  font-size: xxx-large;
  font-weight: 900;
  animation: color-change 1s infinite;
  display: contents;
  @keyframes color-change {
    0% {
      color: yellow;
    }
    50% {
      color: orange;
    }
    100% {
      color: pink;
    }
  }
`;

export default function HitoriStoryFunction(props) {
  return typeof props === "number"
    ? HitoriStory[props]
    : HitoriStory[props.Chapter];
}

export function WritingWheel() {
  return (
    <div>
      <p>1: They are in a zone of comfort</p>
      <p>2: But they want something</p>
      <p>3: They enter an unfamiliar situation</p>
      <p>4: Adapt to it</p>
      <p>5: Get what they wanted</p>
      <p>6: Pay a heavy price</p>
      <p>7: Then return to the familia situation</p>
      <p>8: Having changed</p>
    </div>
  );
}

export const HitoriStory = {
  0: (
    <Content style={{ overflowWrap: "anywhere" }}>
      <h1>Hitori</h1>
      <Hitori>
        On a long road, our large and exquisite black wagon thundered along in
        the heat alone. Inside, a group of people accompanying me were doing
        different things, completely ignoring the picturesque view just outside
        the window.
      </Hitori>
      <Hitori>
        Endless grass spread out to the horizon. Petite flowers of various
        colours broke up the endless green. Inside the wagon some teenagers were
        playing slaps, the noise they were making while laughing and having fun,
        pushed out any chance for me to catch up on lost sleep. I enjoyed the
        night shifts solitude, but this was the payment I had to make.
      </Hitori>
      <Hitori>
        At the back side of the wagon, some older men and women were sitting
        without making a noise. They all sat back, their eyes closed with
        passive faces. Sometimes it was possible to see a few of them sighing.
        The difference between the group who had experienced this before and the
        group of teenagers who were going there for the first time.
      </Hitori>
      <Hitori>
        But even with the teenagers being very noisy, the adults did not voice
        their complaints. They, like me, knew that on the way back, after
        everything they would go through in the dungeon, these excited teenagers
        would no longer differ from them.
      </Hitori>
    </Content>
  ),
};
