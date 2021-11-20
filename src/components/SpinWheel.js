import React, { useEffect, useState, config } from "react";
import styled from "styled-components";
import DownArrow from "./../assets/down-arrow-svgrepo-com.svg";
import { useSpring, animated } from "react-spring";

const Menu = styled.div`
  color: white;
  max-width: 180px;
  width: 100%;
  margin: auto;
  box-shadow: 0px -2px 2px rgba(34, 34, 34, 0.6);
  background-image: -webkit-linear-gradient(
    left,
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.9),
    rgba(0, 0, 0, 0.8)
  );
  z-index: 100;
  ${(props) => (props.menuStyle ? props.menuStyle : "")}
`;

const Item = styled.div`
  border-bottom-color: white;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  &:hover {
    background-image: -webkit-linear-gradient(
      left,
      rgba(248, 248, 255, 0.2),
      rgba(248, 248, 255, 0.3),
      rgba(248, 248, 255, 0.2)
    );
  }
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 101;
  ${(props) => (props.itemStyle ? props.itemStyle : "")}
`;

const Down = styled(animated.img)`
  width: 25px;
  ${(props) => (props.downstyle ? props.downstyle : "")}
`;

export default function SpinWheel(props) {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(5);
  const [displayMenu, setDisplayMenu] = useState(alphabet.slice(start, end));

  const updateMenu = (newMenu) => {
    setDisplayMenu(newMenu);
  };
  function makeNewMenu(event) {
    event.preventDefault();
    if (event.deltaY > 0) {
      if (end + 1 < alphabet.length + 1) {
        setStart(start + 1);
        setEnd(end + 1);
      }
    } else {
      if (start - 1 > -1) {
        setStart(start - 1);
        setEnd(end - 1);
      }
    }
    const newMenu = alphabet.slice(start, end);
    updateMenu(newMenu);
  }
  const el = document.querySelector("div");
  el.onwheel = makeNewMenu;

  const springArrow = useSpring({
    loop: true,
    from: { y: 0 },
    to: { y: 5 },
    config: { clamp: true, mass: 3, tension: 150, friction: 42 },
  });

  return (
    <div>
      <Menu menuStyle={props.menuStyle}>
        {displayMenu.map((item, index) => (
          <Item itemStyle={props.itemStyle} key={index}>
            {item}
          </Item>
        ))}
      </Menu>
      {end < alphabet.length && DownArrow && (
        <Down
          style={springArrow}
          downstyle={props.downStyle}
          alt={"Down"}
          src={DownArrow}
        />
      )}
    </div>
  );
}
