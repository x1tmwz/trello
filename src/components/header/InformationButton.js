import React from 'react';
import DropDownTemplate from '../genric/DropDownTemplate';


const INFORAMTION_MENU = ["Pricing", "Apps", "Blog", "Privacy", "More..."]

const InformationButton = (props) => {
    return (
        <DropDownTemplate
            {...props}
            title="Information"
            titleBottomBorder={true}
            component={(
                <div className="flexColumn">
                    <div className="bottomBorder flexColumn centerContainer">
                        <img
                            src="https://a.trellocdn.com/prgb/dist/images/tips/info-image-03@1x.68fe6ac4cd198b845184.png"
                            className="m-image"
                            alt=""
                        />
                        <p className="xl-Text m-1">Make Boards More PowerFul With Trello Power-Ups</p>
                        <span className="linkText m-b-1">Get a new tip.</span>
                    </div>
                    <div className="flexRow m-t-2 spaceBetweent">
                        {INFORAMTION_MENU.map((option) => <span key={option} className="linkText">{option}</span>)}
                    </div>
                </div>
            )}
        />
    );
}


export default InformationButton;