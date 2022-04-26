import styled from "styled-components";
import React, { useState, useEffect } from "react";

export default function Spin({ Array }) {
  const [current, SetCurrent] = useState(<div>Nothing</div>);
  const [counter, SetCounter] = useState(0);

  useEffect(() => {
    console.log(Array);
    SetCurrent(Array[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function Change(index) {
    if (index > counter) {
      console.log(Array[index]);
      if (Array[counter + 1]) {
        SetCurrent(Array[counter + 1]);
        SetCounter(index);
      }
    } else if (index < counter) {
      if (Array[counter - 1]) {
        SetCurrent(Array[counter - 1]);
        SetCounter(index);
      }
    }
  }

  return (
    <Main>
      {current}
      <ButtonWrapper>
      {counter > 0 && <Past onClick={() => Change(counter - 1)}>Past</Past>}
      {counter < Array.length-1 && <Next onClick={() => Change(counter + 1)}>Next</Next>}
      </ButtonWrapper>
    </Main>
  );
}


const ButtonWrapper = styled.div`
display: flex;
align-items: center;
width: 100%;
`;

const Next = styled.div`
border-style: solid;
border-width: 1.5px;
border-color: black;

margin-top: 10px;
color: white;
background: #0d89eb;
display: flex;
justify-content: center;
align-items: center;
width: 40%;
cursor: pointer;
white-space: nowrap;
&:hover {
    background: #2CA8FF;
}
margin-left: auto;
`;

const Past = styled.div`
border-style: solid;
border-width: 1.5px;
border-color: black;

margin-top: 10px;
color: white;
background: #f92b00;
display: flex;
justify-content: center;
align-items: center;
width: 40%;
cursor: pointer;
white-space: nowrap;
&:hover {
    background: #ff5745;
}
margin-right: auto;
`;

const Main = styled.div`
display: flex;
align-items: center;
column-gap: 5px;
flex-direction: column;
`;
