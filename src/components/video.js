import styled from "styled-components";
import React, { useState, useEffect } from "react";

const sheepImages = {
  sheep1: require("./../assets/sheep1.gif"),
  sheep2: require("./../assets/sheep2.gif"),
  sheep3: require("./../assets/sheep3.gif"),
  sheep4: require("./../assets/sheep4.gif"),
  sheep6: require("./../assets/sheep6.gif"),
  sheep7: require("./../assets/sheep7.gif"),
  sheep8: require("./../assets/sheep8.gif"),
  sheep9: require("./../assets/sheep9.gif"),
  sheep10: require("./../assets/sheep10.gif"),
  birthday: require("./../assets/sheep5.gif"),
};

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Video() {
  const [sheep, setSheep] = useState(null);

  useEffect(() => {
    let selectedSheep = sheepImages[`sheep${getRandomArbitrary(1, 10)}`];

    if (new Date().getMonth() === 5 && new Date().getDate() === 20) {
      selectedSheep = sheepImages.birthday;
    }

    setSheep(selectedSheep);
  }, []);

  if (!sheep) return null;

  return (
    <div className="Sheep">
      <SheepImg src={sheep} alt="Sheep" />
    </div>
  );
}

export default Video;

const SheepImg = styled.img`
  position: absolute;
  min-height: 100px; /* Reserve space */
  width: 100px;
  height: 100px;
  z-index: 1;
  left: 53%;
  top: 81%;

  @media screen and (max-width: 730px) {
    display: none;
  }
`;
