import styled from 'styled-components';
import { colors } from "./../elements/colors";
import { Link } from "react-router-dom";

// Styles for Monad as a whole.
export const BreakPoint = styled.section`
border-bottom: thick dotted #32a1ce;
padding-bottom: 5px;
`;
export const Buttons = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  font-family: "Yusei Magic", sans-serif;
  color: ${(props) => (props.darkMode ? "white" : "black")};
  background-color: ${(props) => (props.darkMode ? "white" : "")};
  &:hover {
    color: ${colors.red.normal};
    background ${colors.blue.normal};
    zoom: 1.1;
  }
`;
export const ChapterContainer = styled.div`
  max-width: 100%;
  max-height: 100%;
  background: ${(props) =>
  props.darkMode ? colors.grey.oldNormal : colors.lightBackground};
  padding-bottom: 5px;
  padding-top: 5px;
`;
export const Sticky = styled.div`
  display: flex;
  max-height: 80vh;
  overflow-y: ${props => props.open ? 'scroll' : 'hidden'};
  position: fixed;
  bottom: 30px;

  > button {
    background-color: yellow;
    padding: ${props => props.open ? '10px' : '0px'};
    height: 20px;
    width: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;
export const StyledArticle = styled.article`
  color: ${(props) => props.color ? props.color : (props.darkMode ? colors.white.off : colors.black.off)};
  font-size: ${props => props.size ? props.size : '18px'};
  margin-bottom: 35px;
`;
export const ButtonStyled = styled.button`
padding: 0 1.5rem;
border-radius: 2rem;
background: linear-gradient(
  217deg,
  rgb(218, 182, 111),
  rgb(244, 229, 203) 70.71%
);
border-color: ${colors.brown.Murasakitobi};
border-style: solid;
border-width: 2px;
font-size: large;
color: ${colors.black.normal};
cursor: pointer;

font-family: "Yusei Magic", sans-serif;
&:hover {
  color: ${colors.red.normal};
  background ${colors.blue.normal};
}
`;
export const LinkStyled = styled(Link)`
padding: 0 1.5rem;
border-radius: 2rem;
background: linear-gradient(
  217deg,
  rgb(218, 182, 111),
  rgb(244, 229, 203) 70.71%
);
border-color: ${colors.brown.Murasakitobi};
border-style: solid;
border-width: 2px;
font-size: large;
color: ${colors.black.normal};
cursor: pointer;

font-family: "Yusei Magic", sans-serif;
&:hover {
  color: ${colors.red.normal};
  background ${colors.blue.normal};
}
`;
export const ButtonsA = styled.a`
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  font-family: "Yusei Magic", sans-serif;
  color: ${colors.black.normal};
  background-color: ${colors.white.off};
  &:hover {
    color: ${colors.red.normal};
    background ${colors.blue.normal};
    zoom: 1.1;
  }
`;
export const Content = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

margin-left: 4%;
margin-right: 4%;
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