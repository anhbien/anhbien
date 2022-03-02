import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
    let buttonStyle = "";
    const { type, text, to } = props;
    switch (type) {
        case "default":
            buttonStyle = "btn-default"
            break;
        default:
            buttonStyle = "btn-primary";
            break;
    }
    return (<Link to={to} className={buttonStyle}>{text}</Link>);
};

export default Button;