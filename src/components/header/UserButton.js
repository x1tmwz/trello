import React from 'react';
import DropDownTemplate from '../genric/DropDownTemplate';


const USER_ACTIVE_OPTIONS = ["Profile and Visibility", "Activity", "Cards", "Settings"];
const USER_OPTIONS = ["Help", "Shortcuts", "Log Out"];


const UserButton = (props) => {
    return (
        <DropDownTemplate
            {...props}
            title="User"
            titleBottomBorder={true}
            component={(
                <div className="flexColumn width-m">
                    <div className="bottomBorder flexColumn">
                        {USER_ACTIVE_OPTIONS.map((option) => <span key={option} className="largeText m-1">{option}</span>)}
                    </div>
                    <div className="flexColumn m-t-2">
                        {USER_OPTIONS.map((option) => <span key={option} className="largeText m-1">{option}</span>)}
                    </div>
                </div>
            )}
        />
    );
}


export default UserButton;