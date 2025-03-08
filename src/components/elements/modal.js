import React from 'react';
import ReactDOM from 'react-dom/client';
import Modal2 from './modal2';

function Modal(props) {
    const div = document.createElement('div');
    document.body.appendChild(div);

    const elements = [];
    const draftContainer = document.querySelector('#root');
    if (draftContainer !== null) elements.push(draftContainer);
    elements.forEach(element => {
        element.classList.add('modal-blur');
    });

    const root = ReactDOM.createRoot(div);

    const cleanup = () => {
        root.unmount();
        div.parentNode.removeChild(div);
        elements.forEach(element => {
            element.classList.remove('modal-blur');
        });
    };

    return new Promise((resolve, reject) => {
        root.render(<Modal2 {...props} resolve={resolve} reject={reject} />);
    })
        .then(result => {
            cleanup();
            return result;
        })
        .catch(error => {
            console.warn(error);
            cleanup();
            return undefined;
        });
}

export default Modal;
