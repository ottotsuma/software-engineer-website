import React from "react";
import { Content } from "./styles";
import SeaPeopleFunction from "./SeaPeople"; // 8

function Intro(props) {
  return (
    <Content>
      <h4>Juice Up</h4>
      <SeaPeopleFunction Chapter={8} />
      <div className="BreakPoint" />
      <h4>The Nobles</h4>
      {/* Nobles argue */}
      {/* Leikans leave */}
      {/* Off to fight in the war */}
      <p></p>
    </Content>
  );
}
export default Intro;
// Obsidian is the royals resource
