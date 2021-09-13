import React from "react";
import { Content } from "./styles"
import SeaPeopleFunction from "./SeaPeople";// 7

function Intro(props) {
return (
<Content>
    <h4>Odd balls</h4>
    {/* Strange class */}
    {/* Nobles argue */}
    {/* Leikans leave */}
    {/* Off to fight in the war */}
    <p></p>
    <div className="BreakPoint"></div>
        <SeaPeopleFunction Chapter={7} />
</Content>
);
}
export default Intro;