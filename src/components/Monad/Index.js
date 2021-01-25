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


const ChapterList = [Chapter1(), Chapter2(), Chapter3(), Chapter4(), Chapter5(), Chapter6(), Chapter7(), Chapter8(), Chapter9(), Chapter10(), Chapter11(), Chapter12(), Chapter13(), Chapter14(), Chapter15()];
const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
let number = parseInt(window.location.href.match(/\d+$/)[0]-1);
function NextPage() {
  number++;
}
function PreviousPage() {
  number--;
}

export default function Monad(params) {
  const [isPage, setPage] = useState("");
  useEffect(() => {
    setPage(ChapterList[window.location.href.match(/\d+$/)[0]-1]);
  }, [number]);

  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  function callBack (index) {
    number = index + 1
  }

  function droppy() {
    let rows = new Array(ChapterList.length).fill(0).map( ( zero, index ) =>
    <Link
    key={index}
    id={index}
    className="dropdown-content-a"
    onClick={() => callBack(index)}
    to={"/Monad/" + (index + 1)}
  >
    Ch {index + 1}
  </Link>
  )
  return rows
  }

  if (number === 1) {
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
  } else if (number === ChapterList.length) {
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
  } else {
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
  }
}
//  export default Monad;
