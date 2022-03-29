import styled from 'styled-components';

export const Content = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

// color: black;
margin-left: 4%;
margin-right: 4%;
// font-size: large;
overflow-x: none;
font-family: Verdana, Geneva, Tahoma, sans-serif;

p {
    padding: 1%;
}

h3 {
    padding-top: 1rem;
    font-size: xx-large;
}

`;

export const Shine = styled.p`
  font-size: xxx-large;
  font-weight: 900;
  animation: color-change 1s infinite;
  display: contents;
  @keyframes color-change {
    0% {
      color: yellow;
    }
    50% {
      color: orange;
    }
    100% {
      color: pink;
    }
  }
`;