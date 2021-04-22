import styled from 'styled-components';
import React from 'react'

function modal2(props) {

    const reject = () => {
        setTimeout(() => {
            props.reject();
        }, 150);
    };
    console.log(props)
    return (
        <Wrapper>
            <Outside onClick={() => reject()}></Outside>
            <Modal>
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

export const Wrapper = styled.div`
position: absolute;
top: 0%;
left: 0%;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`;

export const Outside = styled.div`
position: absolute;
top: 0%;
left: 0%;
z-index: 3;
// background: blue;
width: 100%;
height: 100%;
opacity: 0.4;
`;

export const Modal = styled.div`
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
`;

