import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Chapter1 from "./Ch1-Intro";
import Chapter2 from "./Ch2-Travel";
import Chapter3 from "./Ch3-Banderedam";
import Chapter4 from "./Ch4-Academy";

const ChapterList = [Chapter1(), Chapter2(), Chapter3(), Chapter4()];
const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
let number = parseInt(window.location.href.slice(-1));
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
        <h1>Testing</h1>
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
          to={"/Monad/" + number}
          onClick={() => NextPage()}
        >
          Next
        </Link>
      </div>
    );
  } else if (number === ChapterList.length) {
    return (
      <div className="Chapter-Container">
        <h1>Testing</h1>
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
          to={"/Monad/" + number}
          onClick={() => PreviousPage()}
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
        <h1>Testing</h1>
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
}
//  export default Monad;
