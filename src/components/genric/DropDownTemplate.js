import React from 'react';

//recive closeDiv from DropDownGenric
const DropDownTemplate = (props) => {
    return (
        <div className="dropDown-template">
            <div className={`flexRow spaceBetweent ${props.titleBottomBorder? "bottomBorder":""} m-b-2`}>
                <span></span>
                <h3>{props.title}</h3>
                <button className="exitButton" onClick={props.closeDiv}>X</button>
            </div>
            {props.component}
        </div>
    );
}
export default DropDownTemplate;