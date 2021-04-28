import React, {Fragment} from 'react';
import Backdrop from './Backdrop';

const Modal = props => {
    return (
        <Fragment>
            <Backdrop show={props.open} clicked={props.closed} />
            <div
                className='modal'
                style={{
                    transform: props.open
                        ? 'translateY(0)'
                        : 'translateY(-100vh)',
                    opacity: props.open ? '1' : '0',
                }}>
                {props.children}
            </div>
        </Fragment>
    );
};

export default Modal;
