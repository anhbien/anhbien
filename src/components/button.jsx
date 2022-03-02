import React from "react";

const Button = (props) => {
    let buttonStyle = "";
    const { type, text } = props;
    switch (type) {
        case "default":
            buttonStyle = "btn-default"
            break;
        default:
            buttonStyle = "btn-primary";
            break;
    }
    return (<button href="#" className={buttonStyle}>{text}</button>);
};

export default Button;