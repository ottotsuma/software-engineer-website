import React from 'react'
import styled from 'styled-components';

const colors = {
    junk: "rgb(109, 109, 109)",
    normal: "blue",
    rare: "green",
    epic: "red",
    legendary: "orange",
    unique: "purple",
    growth: "#e2abac",
    quest: "gold",
};

function Title(props) {
    return (
        <Main rank={props.rank}>
            <Shine>*Ping*</Shine>{' '}
             <TitleStyle>New Title:</TitleStyle> {props.rank ? <Rank >{props.rank}:</Rank>: ''} {props.name} : {props.effect}
        </Main>
    )
}

export default Title

const TitleStyle = styled.div`
color: orange;
display: contents;
`;

const Rank = styled.div`
display: contents;
text-transform: capitalize;

`;

export const Shine = styled.div`
    animation: color-change 1s infinite;
    display: contents;
    @keyframes color-change {
        0% { color: red; }
        50% { color: blue; }
        100% { color: green; }
      }
`;

// .animated {
// 	animation: customRainbow 4s infinite;
// 	transition-timing-function: linear;
// }

// @keyframes customRainbow {
//     0%   { text-shadow: 0px 0px 5px red; }
//     14%  { text-shadow: 0px 0px 5px orange; }
//     28%  { text-shadow: 0px 0px 5px yellow; -webkit-transform: translatey(-25px)}
//     43%  { text-shadow: 0px 0px 5px green; }
//     57% { text-shadow: 0px 0px 5px blue; }
// 	71% { text-shadow: 0px 0px 5px indigo; }
// 	85% { text-shadow: 0px 0px 5px violet; }
// 	100% { text-shadow: 0px 0px 5px red; }
// }

const Main = styled.div`
color: ${props => colors[props.rank]};
`;