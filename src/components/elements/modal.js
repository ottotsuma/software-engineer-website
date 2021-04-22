import React from 'react'
import ReactDOM from 'react-dom';
import Modal from './modal2'

function modal(props) {

    const div = document.body.appendChild(document.createElement('div'));
    const elements = [];
    const draftContainer = document.querySelector('#root');
    if (draftContainer !== null) elements.push(draftContainer);
    elements.forEach(element => {
        element.classList.add('modal-blur');
    });

    const cleanup = () => {
        console.log('cleaning')
        ReactDOM.unmountComponentAtNode(div);
        div.parentNode.removeChild(div);
        // $(div).remove();
        elements.forEach(element => {
            element.classList.remove('modal-blur');
        });
    };

    return new Promise((resolve, reject) => {
        ReactDOM.render(
            <Modal {...props} resolve={resolve} reject={reject} />,
            div
        );
    }).then(result => {
        cleanup();
        console.log('cleaning', result)
        return result;
    }).catch(error => {
        console.warn(error);
        cleanup();
        return undefined;
    });
};

export default modal
