import styled from 'styled-components';
import React from 'react'

function modal2(props) {

    const reject = () => {
        // https://stackoverflow.com/questions/56494524/how-to-call-css-class-as-function-in-html-elements
        var elements = document.getElementsByClassName("dynamicWidth");
        Array.from(elements).forEach((element) => {
        element.style.transition = 'opacity 1s ease-in-out'; // doesn't quite work
        element.style.opacity = element.getAttribute("data-width");
        });
        setTimeout(() => {
            props.reject();
        }, 150);
    };
    console.log(props)
    return (
        <Wrapper>
            <Outside onClick={() => reject()}></Outside>
            <Modal className='dynamicWidth' data-width='0'>
                {props.insert}
                <Button onClick={() => reject()}>{props.cancel || 'Cancel'}</Button>
            </Modal>
        </Wrapper>
    )
}

export default modal2

// #0d89eb Dekki Blue
// #638ad4 Old blue

const Button = styled.div`
  color: white;
  background: #0d89eb;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 50px;
  margin: 10px;
  cursor: pointer;
  &:hover {
      background: #2CA8FF;
  }
`;


 const Outside = styled.div`
position: absolute;
top: 0%;
left: 0%;
z-index: 3;
// background: blue;
width: 100%;
height: 100%;
opacity: 0.4;
`;

 const Modal = styled.div`
position: absolute;
z-index: 4;
background: #161b21;
padding: 20px;
opacity: 1;
max-width: 40%;
max-height: 80%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
opacity: 0;

-webkit-transition: opacity 1s ease-in-out;
-moz-transition: opacity 1s ease-in-out;
-ms-transition: opacity 1s ease-in-out;
-o-transition: opacity 1s ease-in-out;
`;


const Wrapper = styled.div`
position: absolute;
top: 0%;
left: 0%;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
&:hover ${Modal}{
    opacity: 1;
    -webkit-transition: opacity 1s ease-in-out;
    -moz-transition: opacity 1s ease-in-out;
    -ms-transition: opacity 1s ease-in-out;
    -o-transition: opacity 1s ease-in-out;
}
`;