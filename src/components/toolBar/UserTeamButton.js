import React from 'react';

import DropDownTemplate from '../genric/DropDownTemplate';


const TEAM_OPTIONS = ["Change Team...", "View Team Page"];
const UPGRADE_OPTION = "UPGRADE to Buisness Class";


const UserTeamButton = (props) => {
    return (
        <DropDownTemplate
            {...props}
            title="User"
            titleBottomBorder={true}
            component={(
                <div className="flexColumn width-m">
                    <div className="bottomBorder flexColumn">
                        {TEAM_OPTIONS.map((option) => <span key={option} className="largeText m-1">{option}</span>)}
                    </div>
                    <div className="flexColumn m-t-2">
                        <span className="largeText m-1">{UPGRADE_OPTION}</span>
                    </div>
                </div>
            )}
        />
    );
}

export default UserTeamButton;