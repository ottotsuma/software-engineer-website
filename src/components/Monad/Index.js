import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
import { textColors } from "./../elements/colors";
// import SpellsPage from "./SpellsPage";
// import Otto, {Tsuma, Hitori} from "./People"; // check this still works
import SeaPeopleFunction from "./SeaPeople";
import HitoriStoryFunction from "./Hitori"; // 9 
import Vampire from "./Vampire";
import { ButtonStyled, LinkStyled, Buttons, Sticky, ChapterContainer, StyledArticle } from './styles'

const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
let pageNumber = 1;
if (window.location.href.match(/\d+$/)) {
  pageNumber = parseInt(window.location.href.match(/\d+$/)[0]);
}

function NextPage() {
  pageNumber++;
}
function PreviousPage() {
  pageNumber--;
}

function callBack(index) {
  document.getElementById("myDropdown").classList.toggle("show");
  pageNumber = index + 1;
}

const ChapterList = [
  <Vampire />,
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
  <SeaPeopleFunction Chapter={1} />,
  <SeaPeopleFunction Chapter={2} />,
  <SeaPeopleFunction Chapter={3} />,
  <SeaPeopleFunction Chapter={4} />,
  <SeaPeopleFunction Chapter={5} />,
  <SeaPeopleFunction Chapter={6} />,
  <SeaPeopleFunction Chapter={7} />,
  <SeaPeopleFunction Chapter={8} />,
  <SeaPeopleFunction Chapter={9} />,
  <HitoriStoryFunction Chapter={0} />,
  <HitoriStoryFunction Chapter={1} />,
  <HitoriStoryFunction Chapter={2} />,
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
  const [sizeState, setSizeState] = useState('24px');
  const [colorState, SetColorState] = useState('');
  function updateState(StateFunction, NewState) {
    StateFunction(NewState)
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
    const possibleSizes = ['14px', '16px', '18px', '20px', '24px', '26px', 'xxx-large'];
    const possibleColors = Object.keys(textColors);
    const buttonArray = []
    buttonArray.push(
      <ButtonStyled
      darkMode={darkMode}
      onClick={() => updateState(setDarkMode, !darkMode)}
      id="darkMode"

    >
      {darkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'}
    </ButtonStyled>
    )
    for (let index = 0; index < possibleSizes.length; index++) {
      const size = possibleSizes[index];
      buttonArray.push(<Buttons style={{ padding: '5px', border: '2px solid black', backgroundColor: 'white' }} key={size} onClick={() => updateState(setSizeState, size)}>{size}</Buttons>)
    }
    for (let index = 0; index < possibleColors.length - 1; index++) {
      const NewColor = possibleColors[index];
      buttonArray.push(<Buttons style={{ padding: '5px', border: '2px solid black', backgroundColor: 'white', color: NewColor }} key={NewColor} onClick={() => updateState(SetColorState, textColors[NewColor])}>{NewColor}</Buttons>)
    }
    setSizeArray(buttonArray)
  }, [darkMode]);

  useEffect(() => {
    console.log("Page: ", pageNumber);
    const Location = window.location.href.match(/\d+$/)
    if (Location) {
      updateState(setPage, (ChapterList[Location[0] - 1]));
    } else {
      updateState(setPage, (ChapterList[[
        "1"
      ][0] - 1]));
    }
    scrollTop() // this should be replaced by a cookie save position 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber]);

  const [scrollTopState, setScrollTop] = useState(true);
  useEffect(() => {
    window.onscroll = function () {
      if (window.pageYOffset === 0) {
        setScrollTop(true)
      } else {
        setScrollTop(false)
      }
    };
  }, [])

  return (
    <div>
      {
        <ChapterContainer darkMode={darkMode}>
          <LinkStyled to="/">Exit</LinkStyled>
          {/* <ButtonStyled
            darkMode={darkMode}
            onClick={() => updateState(setDarkMode, !darkMode)}
            id="darkMode"

          >
            {darkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'}
          </ButtonStyled> */}
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
          {pageNumber > 1 && <LinkStyled
            id="Previous"
            onClick={() => PreviousPage()}
            to={"/Monad/" + (pageNumber - 1)}
          >
            Previous
          </LinkStyled>}
          <div className="dropdown">
            <ButtonStyled onClick={() => myFunction()} className="">
              Chapter
            </ButtonStyled>
            <div id="myDropdown" className="dropdown-content">
              {droppy()}
            </div>
          </div>
          {pageNumber !== ChapterList.length && <LinkStyled
            to={"/Monad/" + (pageNumber + 1)}
            onClick={() => NextPage()}
          >
            Next
          </LinkStyled>}
          <StyledArticle size={sizeState} color={colorState} darkMode={darkMode}>{isPage}</StyledArticle>
          {!scrollTopState && <button className="Footer-Button" onClick={() => scrollTop()}>
            Top
          </button>}
          <LinkStyled
            to={"/Monad/" + (pageNumber + 1)}
            onClick={() => NextPage()}
          >
            Next
          </LinkStyled>
          <Sticky open={sizeOpen}>
          <div style={{ display: sizeOpen ? 'flex' : 'none', flexDirection: 'column' }}>{sizeArray}</div>
          <button onClick={() => setSizeOpen(!sizeOpen)}><FontAwesomeIcon
            icon={faFont}
          /></button>
          </Sticky>
        </ChapterContainer>
      }
    </div>
  )
}
//  export default Monad;

