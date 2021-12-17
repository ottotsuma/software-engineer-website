import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFont } from "@fortawesome/free-solid-svg-icons";
import Chapter1 from "./Ch1-Intro";
import Chapter2 from "./Ch2-Travel";
import Chapter3 from "./Ch3-Banderedam";
import Chapter4 from "./Ch4-Academy";
import Chapter5 from "./Ch5-Lessons";
import Chapter6 from "./Ch6-Combat";
import Chapter7 from "./Ch7-Fourth";
import Chapter8 from "./Ch8-Fifth";
import Chapter9 from "./Ch9-Results";
import Chapter10 from "./Ch10-Rest";
import Chapter11 from "./Ch11-Note";
import Chapter12 from "./Ch12-Missions";
import Chapter13 from "./Ch13-Savigal";
import Chapter14 from "./Ch14-Dinner";
import Chapter15 from "./Ch15-Date";
import Chapter16 from "./Ch16-Cranium";
import Chapter17 from "./Ch17-Training";
import Chapter18 from "./Ch18-Jungle";
import Chapter19 from "./Ch19-God";
import Chapter20 from "./Ch20-Date2";
import Chapter21 from "./Ch21-Tomb";
import Chapter22 from "./Ch22-Tomb2";
import Chapter23 from "./Ch23-Tisiel";
import Chapter24 from "./Ch24-Nymandus";
import Chapter25 from "./Ch25-Otto";
import Chapter26 from "./Ch26-Home";
import Chapter27 from "./Ch27-Shrine";
import Chapter28 from "./Ch28-Morning";
import Chapter29 from "./Ch29-Farming";
import Chapter30 from "./Ch30-Arrilian";
import Chapter31 from "./Ch31-Flowers";
import Chapter32 from "./Ch32-Survival";
import Chapter33 from "./Ch33-BackToSchool";
import Chapter34 from "./Ch34-Duel";
import Chapter35 from "./Ch35-Fight";
import Chapter36 from "./Ch36-Farm";
import Chapter37 from "./Ch37-Strange";
import Chapter38 from "./Ch38-Nobles";
import Chapter39 from "./Ch39-Leaving";
import Chapter40 from "./Ch40-War";
import Chapter41 from "./Ch41-Graduate";
import { colors } from "./../color";
import SpellsPage from "./SpellsPage";
import Otto from "./Otto";
import SeaPeopleFunction from "./SeaPeople";
import Vampire from "./Vampire";
import styled from "styled-components";

const Buttons = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  font-family: "Yusei Magic", sans-serif;
  color: ${(props) => (props.darkMode ? "white" : "black")};
  background-color: ${(props) => (props.darkMode ? "white" : "")};
  &:hover {
    color: ${colors.red};
    background ${colors.blue};
    zoom: 1.1;
  }
`;

const ChapterContainer = styled.div`
  max-width: 100%;
  max-height: 100%;
  background: ${(props) =>
    props.darkMode ? colors.grey : colors.lightBackground};
`;
export const Sticky = styled.div`
// position: -webkit-sticky;
// position: sticky;
position: absolute;
top: 40px;
display: flex;
    flex-direction: row;
    align-items: baseline;
    overflow: hidden;
    width: ${props => props.open ? '100%' : '3%'};
    height: ${props => props.open ? '100%' : '100%'};

`;
const StyledArticle = styled.article`
  color: ${(props) => (props.darkMode ? colors.offWhite : colors.offBlack)};
  font-size: ${props => props.size ? props.size : '18px'};
`;

const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

let number = 1;
if (window.location.href.match(/\d+$/)) {
  number = parseInt(window.location.href.match(/\d+$/)[0]);
}

function NextPage() {
  number++;
}
function PreviousPage() {
  number--;
}

function callBack(index) {
  document.getElementById("myDropdown").classList.toggle("show");
  number = index + 1;
}

const ChapterList = [
  <Chapter1 Chapter={"Intro"} />,
  <Chapter2 Chapter={"Travel"} />,
  <Chapter3 Chapter={"Banderedam"} />,
  <Chapter4 Chapter={"Academy"} />,
  <Chapter5 Chapter={"Lessons"} />,
  <Chapter6 Chapter={"Combat"} />,
  <Chapter7 Chapter={"Fourth"} />,
  <Chapter8 Chapter={"Fifth"} />,
  <Chapter9 Chapter={"Results"} />,
  <Chapter10 Chapter={"Rest"} />,
  <Chapter11 Chapter={"Note"} />,
  <Chapter12 Chapter={"Missions"} />,
  <Chapter13 Chapter={"Savigal"} />,
  <Chapter14 Chapter={"Dinner"} />,
  <Chapter15 Chapter={"Date"} />,
  <Chapter16 Chapter={"Cranium"} />,
  <Chapter17 Chapter={"Training"} />,
  <Chapter18 Chapter={"Jungle"} />,
  <Chapter19 Chapter={"God"} />,
  <Chapter20 Chapter={"Date2"} />,
  <Chapter21 Chapter={"Tomb2"} />,
  <Chapter22 Chapter={"Tomb2"} />,
  <Chapter23 Chapter={"Tisiel"} />,
  <Chapter24 Chapter={"Nymandus"} />,
  <Chapter25 Chapter={"Otto"} />,
  <Chapter26 Chapter={"Home"} />,
  <Chapter27 Chapter={"Shrine"} />,
  <Chapter28 Chapter={"Morning"} />,
  <Chapter29 Chapter={"Farming"} />,
  <Chapter30 Chapter={"Arrilian"} />,
  <Chapter31 Chapter={"Flowers"} />,
  <Chapter32 Chapter={"Survival"} />,
  <Chapter33 Chapter={"BackToSchool"} />,
  <Chapter34 Chapter={"Duel"} />,
  <Chapter35 Chapter={"Fight!"} />,
  <Chapter36 Chapter={"Farm!?"} />,
  <Chapter37 Chapter={"Strange"} />,
  <Chapter38 Chapter={"Nobel's"} />,
  <Chapter39 Chapter={"Leaving"} />,
  <Chapter40 Chapter={"War"} />,
  <Chapter41 Chapter={"Graduate"} />,
  <Otto />,
  // <SeaPeopleFunction Chapter={0} />,
  // <SeaPeopleFunction Chapter={1} />,
  // <SeaPeopleFunction Chapter={2} />,
  // <SeaPeopleFunction Chapter={3} />,
  // <SeaPeopleFunction Chapter={4} />,
  // <SeaPeopleFunction Chapter={5} />,
  // <SeaPeopleFunction Chapter={6} />,
  // <SeaPeopleFunction Chapter={7} />,
  // <SeaPeopleFunction Chapter={8} />,
  // <SeaPeopleFunction Chapter={9} />,
  <Vampire />,
  <SpellsPage />,
];

export function droppy(props) {
  let rows = new Array(ChapterList.length).fill(0).map((zero, index) => (
    <Link
      key={index}
      id={index}
      className="dropdown-content-a"
      onClick={() => callBack(index)}
      to={"/Monad/" + (index + 1)}
      style={props ? props : null}
    >
      Ch {index + 1}
      {ChapterList[index].props.Chapter
        ? " " + ChapterList[index].props.Chapter
        : " " + ChapterList[index].type.name}
    </Link>
  ));
  return rows;
}

export function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

export default function Monad(params) {
  const [darkMode, setDarkMode] = useState(true);
  const [sizeState, setSizeState] = useState('18px');
  function updateSizeState(size) {
    console.log(size)
    setSizeState(size);
  }
  function updateDarkMode() {
    setDarkMode(!darkMode);
  }
  const [isPage, setPage] = useState("");
  const synth = window.speechSynthesis;
  let flag = false;

  const playEle = document.querySelector("#play");
  const pauseEle = document.querySelector("#pause");
  const stopEle = document.querySelector("#stop");

  function onClickPlay() {
    if (!flag) {
      flag = true;
      const utterance = new SpeechSynthesisUtterance(
        document.querySelector("article").textContent
      );
      SpeechSynthesisUtterance.lang = "en-GR";
      SpeechSynthesisUtterance.rate = 0.7;
      console.log(synth.getVoices());
      utterance.voice =
        synth.getVoices()[
          synth
            .getVoices()
            .map(function (e) {
              return e.lang;
            })
            .indexOf("en-GB")
        ];

      utterance.onend = function () {
        flag = false;
        playEle.className = pauseEle.className = "";
        stopEle.className = "stopped";
      };
      playEle.className = "played";
      stopEle.className = "";
      synth.speak(utterance);
    }
    if (synth.paused) {
      /* unpause/resume narration */
      playEle.className = "played";
      pauseEle.className = "";
      synth.resume();
    }
  }

  function onClickPause() {
    if (synth.speaking && !synth.paused) {
      /* pause narration */
      pauseEle.className = "paused";
      playEle.className = "";
      synth.pause();
    }
  }

  function onClickStop() {
    if (synth.speaking) {
      /* stop narration */
      /* for safari */
      stopEle.className = "stopped";
      playEle.className = pauseEle.className = "";
      flag = false;
      synth.cancel();
    }
  }

  const [sizeArray, setSizeArray] = useState([]);
  const [sizeOpen, setSizeOpen] = useState(false);

  useEffect(() => {
    const possibleSizes = ['14px', '16px', '18px', '20px', '24px', '26px']
    const buttonArray = []
    for (let index = 0; index < possibleSizes.length; index++) {
      const size = possibleSizes[index];
      buttonArray.push(<Buttons style={{padding: '5px', border: '2px solid black'}} key={size} onClick={() => updateSizeState(size)}>{size}</Buttons>)
    }
    setSizeArray(buttonArray)
  }, []);

  useEffect(() => {
    console.log("Page: ", number);
    setPage(ChapterList[window.location.href.match(/\d+$/)[0] - 1]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [number]);

  if (number === ChapterList.length) {
    return (
      <ChapterContainer darkMode={darkMode}>
        <Buttons
          darkMode={darkMode}
          onClick={() => updateDarkMode()}
          id="darkMode"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            outline: "none",
            height: "48px",
            padding: 0,
          }}
        >
          Toggle Dark Mode
        </Buttons>
        {"speechSynthesis" in window && (
          <div className="buttons">
            <Buttons
              onClick={() => onClickPlay()}
              id="play"
              darkMode={darkMode}
              style={{
                border: "none",
                cursor: "pointer",
                outline: "none",
                height: "48px",
                width: "48px",
                padding: 0,
                backgroundImage:
                  "url(https://rpsthecoder.github.io/js-speech-synthesis/play.svg)",
              }}
            ></Buttons>{" "}
            &nbsp;
            <Buttons
              onClick={() => onClickPause()}
              id="pause"
              darkMode={darkMode}
              style={{
                border: "none",
                cursor: "pointer",
                outline: "none",
                height: "48px",
                width: "48px",
                padding: 0,
                backgroundImage:
                  "url(https://rpsthecoder.github.io/js-speech-synthesis/pause.svg)",
              }}
            ></Buttons>{" "}
            &nbsp;
            <Buttons
              onClick={() => onClickStop()}
              id="stop"
              darkMode={darkMode}
              style={{
                border: "none",
                cursor: "pointer",
                outline: "none",
                height: "48px",
                width: "48px",
                padding: 0,
                backgroundImage:
                  "url(https://rpsthecoder.github.io/js-speech-synthesis/stop.svg)",
              }}
            ></Buttons>
          </div>
        )}
        <Link
          className="Footer-Button"
          id="Previous"
          onClick={() => PreviousPage()}
          to={"/Monad/" + (number - 1)}
        >
          Previous
        </Link>
        {/* <div className="dropdown">
          <button onClick={() => myFunction()} className="dropbtn">
            Dropdown
          </button>
          <div id="myDropdown" className="dropdown-content">
            {droppy()}
          </div>
        </div> */}
        <StyledArticle size={sizeState} darkMode={darkMode}>{isPage}</StyledArticle>
        <Link
          className="Footer-Button"
          id="Previous"
          onClick={() => PreviousPage()}
          to={"/Monad/" + (number - 1)}
        >
          Previous
        </Link>
        <button className="Footer-Button" onClick={() => scrollTop()}>
          Top
        </button>
      </ChapterContainer>
    );
  } else if (number > 1) {
    return (
      <ChapterContainer darkMode={darkMode}>
        <Sticky open={sizeOpen}><div style={{display: sizeOpen ? 'flex' : 'none', flexDirection: 'column'}}>{sizeArray}</div><button onClick={()=>setSizeOpen(!sizeOpen)}><FontAwesomeIcon
                  icon={faFont}
                /></button></Sticky>
        <Buttons
          darkMode={darkMode}
          onClick={() => updateDarkMode()}
          id="darkMode"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            outline: "none",
            height: "48px",
            padding: 0,
          }}
        >
          Toggle Dark Mode
        </Buttons>
        {"speechSynthesis" in window && (
          <div className="buttons">
            <Buttons
              darkMode={darkMode}
              onClick={() => onClickPlay()}
              id="play"
              style={{
                border: "none",
                cursor: "pointer",
                outline: "none",
                height: "48px",
                width: "48px",
                padding: 0,
                backgroundImage:
                  "url(https://rpsthecoder.github.io/js-speech-synthesis/play.svg)",
              }}
            ></Buttons>{" "}
            &nbsp;
            <Buttons
              onClick={() => onClickPause()}
              id="pause"
              darkMode={darkMode}
              style={{
                border: "none",
                cursor: "pointer",
                outline: "none",
                height: "48px",
                width: "48px",
                padding: 0,
                backgroundImage:
                  "url(https://rpsthecoder.github.io/js-speech-synthesis/pause.svg)",
              }}
            ></Buttons>{" "}
            &nbsp;
            <Buttons
              onClick={() => onClickStop()}
              id="stop"
              darkMode={darkMode}
              style={{
                border: "none",
                cursor: "pointer",
                outline: "none",
                height: "48px",
                width: "48px",
                padding: 0,
                backgroundImage:
                  "url(https://rpsthecoder.github.io/js-speech-synthesis/stop.svg)",
              }}
            ></Buttons>
          </div>
        )}
        <Link
          className="Footer-Button"
          id="Previous"
          onClick={() => PreviousPage()}
          to={"/Monad/" + (number - 1)}
        >
          Previous
        </Link>
        {/* <div className="dropdown">
          <button onClick={() => myFunction()} className="dropbtn">
            Dropdown
          </button>
          <div id="myDropdown" className="dropdown-content">
            {droppy()}
          </div>
        </div> */}
        <Link
          className="Footer-Button"
          to={"/Monad/" + (number + 1)}
          onClick={() => NextPage()}
        >
          Next
        </Link>
        <StyledArticle size={sizeState} darkMode={darkMode}>{isPage}</StyledArticle>
        <Link
          className="Footer-Button"
          id="Previous"
          onClick={() => PreviousPage()}
          to={"/Monad/" + (number - 1)}
        >
          Previous
        </Link>

        <button className="Footer-Button" onClick={() => scrollTop()}>
          Top
        </button>
        <Link
          className="Footer-Button"
          to={"/Monad/" + (number + 1)}
          onClick={() => NextPage()}
        >
          Next
        </Link>
      </ChapterContainer>
    );
  } else {
    return (
      <ChapterContainer darkMode={darkMode}>
        <Buttons
          darkMode={darkMode}
          onClick={() => updateDarkMode()}
          id="darkMode"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            outline: "none",
            height: "48px",
            padding: 0,
          }}
        >
          Toggle Dark Mode
        </Buttons>
        {"speechSynthesis" in window && (
          <div className="buttons">
            <Buttons
              onClick={() => onClickPlay()}
              id="play"
              darkMode={darkMode}
              style={{
                border: "none",
                cursor: "pointer",
                outline: "none",
                height: "48px",
                width: "48px",
                padding: 0,
                backgroundImage:
                  "url(https://rpsthecoder.github.io/js-speech-synthesis/play.svg)",
              }}
            ></Buttons>{" "}
            &nbsp;
            <Buttons
              onClick={() => onClickPause()}
              id="pause"
              darkMode={darkMode}
              style={{
                border: "none",
                cursor: "pointer",
                outline: "none",
                height: "48px",
                width: "48px",
                padding: 0,
                backgroundImage:
                  "url(https://rpsthecoder.github.io/js-speech-synthesis/pause.svg)",
              }}
            ></Buttons>{" "}
            &nbsp;
            <Buttons
              onClick={() => onClickStop()}
              id="stop"
              darkMode={darkMode}
              style={{
                border: "none",
                cursor: "pointer",
                outline: "none",
                height: "48px",
                width: "48px",
                padding: 0,
                backgroundImage:
                  "url(https://rpsthecoder.github.io/js-speech-synthesis/stop.svg)",
              }}
            ></Buttons>
          </div>
        )}
        {/* <div className="dropdown">
          <button onClick={() => myFunction()} className="dropbtn">
            Dropdown
          </button>
          <div id="myDropdown" className="dropdown-content">
            {droppy()}
          </div>
        </div> */}
        <Link
          className="Footer-Button"
          to={"/Monad/" + (number + 1)}
          onClick={() => NextPage()}
        >
          Next
        </Link>
        <StyledArticle size={sizeState} darkMode={darkMode}>{isPage}</StyledArticle>
        <button className="Footer-Button" onClick={() => scrollTop()}>
          Top
        </button>
        <Link
          className="Footer-Button"
          to={"/Monad/" + (number + 1)}
          onClick={() => NextPage()}
        >
          Next
        </Link>
      </ChapterContainer>
    );
  }
}
//  export default Monad;
