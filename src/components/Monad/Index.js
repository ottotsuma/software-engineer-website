import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
import Chapter33 from "./ch33-BackToSchool";


const ChapterList = [
  Chapter1(),
  Chapter2(),
  Chapter3(),
  Chapter4(),
  Chapter5(),
  Chapter6(),
  Chapter7(),
  Chapter8(),
  Chapter9(),
  Chapter10(),
  Chapter11(),
  Chapter12(),
  Chapter13(),
  Chapter14(),
  Chapter15(),
  Chapter16(),
  Chapter17(),
  Chapter18(),
  Chapter19(),
  Chapter20(),
  Chapter21(),
  Chapter22(),
  Chapter23(),
  Chapter24(),
  Chapter25(),
  Chapter26(),
  Chapter27(),
  Chapter28(),
  Chapter29(),
  Chapter30(),
  Chapter31(),
  Chapter32(),
  Chapter33()
];

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

export default function Monad(params) {
  const [isPage, setPage] = useState("");
  useEffect(() => {
    console.log(number);
    setPage(ChapterList[window.location.href.match(/\d+$/)[0]-1]);
  }, [number]);

  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  function callBack(index) {
    number = index + 1;
  }

  function droppy() {
    let rows = new Array(ChapterList.length).fill(0).map((zero, index) => (
      <Link
        key={index}
        id={index}
        className="dropdown-content-a"
        onClick={() => callBack(index)}
        to={"/Monad/" + (index + 1)}
      >
        Ch {index + 1}
      </Link>
    ));
    return rows;
  }

  if (number === ChapterList.length) {
    return (
      <div className="Chapter-Container">
        <Link
          className="Footer-Button"
          id="Previous"
          onClick={() => PreviousPage()}
          to={"/Monad/" + (number - 1)}
        >
          Previous
        </Link>
        <div className="dropdown">
          <button onClick={() => myFunction()} className="dropbtn">
            Dropdown
          </button>
          <div id="myDropdown" className="dropdown-content">
            {droppy()}
          </div>
        </div>
        {isPage}
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
      </div>
    );
  } else if (number > 1) {
    return (
      <div className="Chapter-Container">
        <Link
          className="Footer-Button"
          id="Previous"
          onClick={() => PreviousPage()}
          to={"/Monad/" + (number - 1)}
        >
          Previous
        </Link>
        <div className="dropdown">
          <button onClick={() => myFunction()} className="dropbtn">
            Dropdown
          </button>
          <div id="myDropdown" className="dropdown-content">
            {droppy()}
          </div>
        </div>
        <Link
          className="Footer-Button"
          to={"/Monad/" + (number + 1)}
          onClick={() => NextPage()}
        >
          Next
        </Link>
        {isPage}
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
      </div>
    );
  } else {
    return (
      <div className="Chapter-Container">
        <div className="dropdown">
          <button onClick={() => myFunction()} className="dropbtn">
            Dropdown
          </button>
          <div id="myDropdown" className="dropdown-content">
            {droppy()}
          </div>
        </div>
        <Link
          className="Footer-Button"
          to={"/Monad/" + (number + 1)}
          onClick={() => NextPage()}
        >
          Next
        </Link>
        {isPage}
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
      </div>
    );
  }
}
//  export default Monad;
