import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DownArrow from "./../assets/down-arrow-svgrepo-com.svg";
import { useSpring, animated } from "react-spring";

const Wrap = styled.div`
  ${(props) => (props.id === "0" ? "display: block;" : "display: none;")}
  ${(props) => (props.Wrap ? props.Wrap : "")}
`;

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
  cursor: pointer;
  ${(props) => (props.itemStyle ? props.itemStyle : "")}
`;

const Down = styled(animated.img)`
  width: 25px;
  ${(props) => (props.downstyle ? props.downstyle : "")}
`;

const ObjectItem = styled.div`
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
  ${(props) => (props.ObjectItem ? props.ObjectItem : "")}
`;

export default function SpinWheel(props) {
  const alphabet = props.array
    ? props.array
    : [
        "A",
        "B",
        {
          Person: "Otto",
          Wife: "Tsuma",
          Age: "29",
          Games: {
            1: "Skyrim",
          },
          Food: {
            Breakfast: "Orange",
          },
          Pet: "None",
        },
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
  function dealWithObject(obj, i) {
    let name = undefined;
    let objectList;
    let objectKeys;
    if (Array.isArray(obj)) {
      objectList = obj;
    } else {
      objectList = Object.values(obj);
      objectKeys = Object.keys(obj);
      name = Object.keys(obj)[0]
    }
    let newName;
    if (props.oldObject) {
      Object.values(props.oldObject).map((subItem, index) => {
        if (typeof subItem === "object") {
          newName = Object.keys(props.oldObject)[index];
        }
      });
    }
    if(props.newName){
      name = props.newName
    }
    let newWheel = (
      <SpinWheel
        newName={newName}
        oldObject={obj}
        key={`SpinWheel${i}`}
        id={`SpinWheel${i}`}
        menuStyle={`
        position: absolute;
        margin-left: 0px;
    `}
        array={objectList}
      />
    );
    return (
      <ObjectItem
        onMouseLeave={() =>
          (document.getElementById(`SpinWheel${i}`).style.display = "none")
        }
        onMouseEnter={() =>
          (document.getElementById(`SpinWheel${i}`).style.display = "block")
        }
        ObjectItem={props.ObjectItem}
        key={i}
      >
        {name ? name : "More"}
        {newWheel}
      </ObjectItem>
    );
  }
  if (typeof alphabet === "object" && !Array.isArray(alphabet)) {
    dealWithObject(alphabet);
  }
  alphabet.map((item, index) => {
    if (typeof item === "object") {
      dealWithObject(item, index);
    }
  });
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(5);
  const [displayMenu, setDisplayMenu] = useState(alphabet.slice(start, end));
  const [inn, setInn] = useState(false);

  const updateMenu = (newMenu) => {
    setDisplayMenu(newMenu);
  };
  function makeNewMenu(event) {
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

  function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault) {
      e.preventDefault();
    }
    e.returnValue = false;
  }

  useEffect(() => {
    if (inn) {
      document.addEventListener("wheel", preventDefault, {
        passive: false,
      });
    }
    return () => document.removeEventListener("wheel", preventDefault, false);
  }, [inn]);

  const springArrow = useSpring({
    loop: true,
    from: { y: 0 },
    to: { y: 5 },
    config: { clamp: true, mass: 3, tension: 150, friction: 42 },
  });

  return (
    <Wrap key={props.id || "0"} id={props.id || "0"}>
      <Menu
        onWheel={makeNewMenu}
        onMouseEnter={() => setInn(true)}
        onMouseLeave={() => setInn(false)}
        menuStyle={props.menuStyle}
      >
        {displayMenu.map((item, index) =>
          typeof item !== "object" ? (
            <Item itemStyle={props.itemStyle} key={index}>
              {item}
            </Item>
          ) : (
            dealWithObject(item, index)
          )
        )}
      </Menu>
      {end < alphabet.length && DownArrow && (
        <Down
          style={springArrow}
          downstyle={props.downStyle}
          alt={"Down"}
          src={DownArrow}
        />
      )}
    </Wrap>
  );
}
