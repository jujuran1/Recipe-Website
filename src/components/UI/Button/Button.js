import React from 'react';

import './Button.css';

const button = (props) => {
    const classes = [];
    classes.push("Button")

    switch (props.btnType) {
        case ("Success"):
            classes.push("Success");
            break;
        case ("Danger"):
            classes.push("Danger");
            break;
        default:
            break;
    }

    return (
        <button

            disabled={props.disabled}
            className={classes.join(' ')}
            onClick={props.onClick}>{props.children}</button>
    )
};

export default button;