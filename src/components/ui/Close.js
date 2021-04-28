import React from 'react';

const Close = props => {
    return (
        <div className="close-container">
            <span
                onClick={props.handleClose}
                className="close rouned thick">
            </span>
        </div>
    );
}

export default Close;
