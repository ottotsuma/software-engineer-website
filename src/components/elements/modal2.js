import styled from 'styled-components';

import React from 'react'

function modal2(props) {
    const reject = () => {
        console.log('starting')
        setTimeout(() => {
            props.reject();
        }, 150);
        console.log('ending')
    };
    console.log(props)
    return (
        <Wrapper>
            <Outside onClick={() => reject()}></Outside>
            <Modal>
                {props.insert}
                <button onClick={() => reject()}>{props.cancel || 'Cancel'}</button>
            </Modal>

        </Wrapper>
    )
}

export default modal2

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
background: blue;
width: 100%;
height: 100%;
opacity: 0.4;
`;


export const Modal = styled.div`
position: absolute;
z-index: 4;
background: red;
padding: 20px;
opacity: 1;
max-width: 80%;
max-height: 80%;
display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

