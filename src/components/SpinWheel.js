import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DownArrow from "./../assets/down-arrow-svgrepo-com.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
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

const Right = styled(animated.img)`
  width: 25px;
  background: white;
  ${(props) => (props.downstyle ? props.downstyle : "")}
`;

const ObjectItem = styled.div`
  width: 100%;
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

// Perhaps if you pass-down the required functions but has them called in the same way.

export default function SpinWheel(props) {
  const springArrow = useSpring({
    loop: true,
    from: { y: 0 },
    to: { y: 5 },
    config: { clamp: true, mass: 3, tension: 150, friction: 42 },
  });
  const [alphabet, setAlphabet] = useState([]);
  useEffect(() => {
    if (props.array) {
      if (!Array.isArray(props.array)) {
        setAlphabet([]);
      }
      const arrayReplace = [];
      props.array.map((item, index) => {
        if (Array.isArray(item)) {
          const newWheel = (
            <SpinWheel
              key={`SpinWheel${index}`}
              id={`SpinWheel${index}`}
              menuStyle={`
              position: absolute;
              margin-left: 0px;
          `}
              array={item}
            />
          );
          arrayReplace.push(
            <ObjectItem
              onMouseLeave={() =>
                (document.getElementById(`SpinWheel${index}`).style.display =
                  "none")
              }
              onMouseEnter={() =>
                (document.getElementById(`SpinWheel${index}`).style.display =
                  "block")
              }
              ObjectItem={props.ObjectItem}
              key={index}
            >
              {props.name ? props.name : `More ${index}`}
              {
                <FontAwesomeIcon
                  style={{ position: "absolute", marginLeft: `70px` }}
                  icon={faChevronRight}
                />
              }
              {newWheel}
            </ObjectItem>
          );
        } else {
          arrayReplace.push(item);
        }
      });
      const checkedArray = arrayReplace.filter((item, index) => {
        if (!React.isValidElement(item)) {
          return false;
        } else {
          return true;
        }
      });
      setAlphabet(checkedArray);
      updateMenu(checkedArray.slice(start, end));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(5);
  const [displayMenu, setDisplayMenu] = useState([]);
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

  const updateInn = (value) => {
    setInn(value);
  };

  return (
    <Wrap id={props.id || "0"}>
      <Menu
        onWheel={makeNewMenu}
        onMouseEnter={() => {
          updateInn(true);
        }}
        onMouseLeave={() => {
          updateInn(false);
        }}
        menuStyle={props.menuStyle}
      >
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
    </Wrap>
  );
}
