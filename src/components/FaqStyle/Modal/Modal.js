import './Modal.css';

const Modal = (props) => {
    let { visible, children, onClose, bgClose } = props;

    const onModalClick = (e) => {
        e.stopPropagation();
    }

    const onCloseHandler = () => {
        onClose && onClose();
    };

    const onBgClick = () => {
        bgClose && onCloseHandler();
    }

    return visible?(

        <div className={"modal--overlay"}  onClick={onBgClick}>
            <div className={"modal"} onClick={onModalClick}>
                <div className={'modal--header'}>
                    <button className={"modal--close-btn"} onClick={onCloseHandler}></button>
                </div>
                <div className={'modal--body'}>
                    {children}
                </div>
            </div>
        </div>
        
    ) :
    null;
}

export default Modal;