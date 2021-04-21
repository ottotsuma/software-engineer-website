import React from 'react'
import styled from 'styled-components';

function title(props) {
    return (
        <Main>
            <Shine>*Ping*</Shine>
             New Title: {props.name} : {props.effect}
        </Main>
    )
}

export default title

const Shine = styled.div`
    animation: color-change 1s infinite;
  
    @keyframes color-change {
        0% { color: red; }
        50% { color: blue; }
        100% { color: green; }
      }
`;

const Main = styled.div`

`;