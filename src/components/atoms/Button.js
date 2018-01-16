import React from 'react';
export const Button = (props) => {
    return (
        <button
            className="button"
            onClick={props.click}>
            <span>{props.children}</span>
        </button>)
};