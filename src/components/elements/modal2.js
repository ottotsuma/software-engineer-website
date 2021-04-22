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
        <Outside onClick={() => reject()}>
            <Modal>
                {props.insert}
                <button onClick={() => reject()}>{props.cancel || 'Cancel'}</button>
            </Modal>
        </Outside>
    )
}

export default modal2

export const Outside = styled.div`
position: absolute;
top: 0%;
left: 0%;
z-index: 3;
background: blue;
width: 100%;
height: 100%;

`;


export const Modal = styled.div`
position: absolute;
z-index: 4;
background: red;
padding: 20px;
`;

