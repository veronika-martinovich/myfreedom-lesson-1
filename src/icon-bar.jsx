import React from "react";
import "./icon-bar.css";

export const IconBar = ({orientation}) => {
    let className = '';
    if (orientation) { 
    className = `icon-bar icon-bar_${orientation}`
    } else {
    className = 'icon-bar icon-bar_horizontal';
    }
    
    return (
        <div className={className} orientation={orientation}>
            <a className="active" href="#"><i className="fa fa-home"></i></a> 
            <a><i className="fa fa-search"></i></a> 
            <a><i className="fa fa-envelope"></i></a> 
            <a><i className="fa fa-globe"></i></a>
            <a><i className="fa fa-trash"></i></a> 
        </div>
    );
}