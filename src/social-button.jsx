import React from "react";
import "./social-button.css";

export const SocialButton = ({type}) => {
    const className = `fa fa-${type}`;

    return (
        <a className={className}></a>
    );
}