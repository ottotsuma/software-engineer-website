import React from "react";
import Spin from "./spinn";

function projects() {
    return (
      <div className="App">
        <div className="ProjectsArea">
          <h1>Projects</h1>
          <Spin />
        </div>
        {/* <footer> </footer> */}
      </div>
    );
  }

export default projects;