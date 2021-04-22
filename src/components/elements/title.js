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

function title(props) {
    return (
        <Main rank={props.rank}>
            <Shine>*Ping*</Shine>{' '}
             <Title>New Title:</Title> {props.rank ? <Rank >{props.rank}:</Rank>: ''} {props.name} : {props.effect}
        </Main>
    )
}

export default title

const Title = styled.div`
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

const Main = styled.div`
color: ${props => colors[props.rank]};
`;