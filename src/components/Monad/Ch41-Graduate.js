import React from "react";
import { Content } from "./styles"
import SeaPeopleFunction from "./SeaPeople"; // 9 
function Intro(props) {
return (
<Content>
<SeaPeopleFunction Chapter={9} />
<SeaPeopleFunction Chapter={10} />
<div className="BreakPoint" />
    <h4>Elite 4</h4>
</Content>
);
}
export default Intro;