import React from 'react';

const CommonButton = props => {
    return (
        <button
            type={props.type ? props.type : 'button'}
            onClick={props.click}
            className="common-button">
            {props.buttonText}
        </button>
    );
}

export default CommonButton;
