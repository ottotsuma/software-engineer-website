import React from "react";
import styled from "styled-components";

export default function Hover({word}) {
    return (
        <div>
          <MainWord>
            <SingleSpell>
            {word}
            <Span>Poo</Span>
            </SingleSpell>
          </MainWord>
        </div>
      );
}

const MainWord = styled.div`
`;

const Span = styled.span`
  visibility: hidden;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  width: auto;
  position: absolute;
  z-index: 2;
  margin-top: 7%;
`;

const SingleSpell = styled.div`
  &:hover ${Span} {
    visibility: visible;
  }
`;