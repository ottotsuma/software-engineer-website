import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Chapter1 from "./Ch1-Intro";
import Chapter2 from "./Ch2-Travel";
import Chapter3 from "./Ch3-Banderedam";

const ChapterList = [Chapter1(), Chapter2(), Chapter3()];
const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
let number = parseInt(window.location.href.slice(-1))
function NextPage() {
    number++;
  }
  function PreviousPage() {
    number--;
  }

export default function Monad(params) {
  const [isPage, setPage] = useState("");
  useEffect(() => {
    setPage(ChapterList[window.location.href.slice(-1) - 1]);
  }, [number]);

  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  return (
    <div className="Chapter-Container">
      <h1>Testing</h1>
      <Link
        className="Footer-Button"
        onClick={() => PreviousPage()}
        to={"/Monad/" + (number-1)}
      >
        Previous
      </Link>
      <div className="dropdown">
        <button onClick={() => myFunction()} className="dropbtn">
          Dropdown
        </button>
        <div id="myDropdown" className="dropdown-content">
        <Link
        className="dropdown-content-a"
        onClick={() => number = 1}
        to={"/Monad/" + (1)}
      >
        Ch 1 - Intro
      </Link>
      <Link
        className="dropdown-content-a"
        onClick={() => number = 2}
        to={"/Monad/" + (2)}
      >
        Ch 2 - Travel
      </Link>
      <Link
        className="dropdown-content-a"
        onClick={() => number = 3}
        to={"/Monad/" + (3)}
      >
        Ch 3 - Banderedam
      </Link>
        </div>
      </div>
      <Link
        className="Footer-Button"
        to={"/Monad/" + (number+1) }
        onClick={() => NextPage()}
      >
        Next
      </Link>

      {isPage}
      <Link
        className="Footer-Button"
        to={"/Monad/" + number}
        onClick={() => PreviousPage()}
      >
        Previous
      </Link>

      <button className="Footer-Button" onClick={() => scrollTop()}>
        Top
      </button>
      <Link
        className="Footer-Button"
        to={"/Monad/" + number}
        onClick={() => NextPage()}
      >
        Next
      </Link>
    </div>
  );
}
//  export default Monad;
