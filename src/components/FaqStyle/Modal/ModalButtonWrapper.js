import React, { useState } from 'react';
import Modal from './Modal';


const ModalButtonWrapper = ({buttonText, children, className, bgClose, open }) => {
    const [visible, setVisible] = useState(false);


    const onButtonClick = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    open&& setVisible(true)

    return (
        <div className="modal-button-wrapper">
            <button className={className} onClick={onButtonClick} >{buttonText}</button>
            <Modal visible={visible} clases='home-modal' onClose={onClose} bgClose={bgClose}>
                <div className='scroll'>{children}</div>
            </Modal>
        </div>
    );
}

export default ModalButtonWrapper;