import React from 'react';
import DropDownTemplate from '../genric/DropDownTemplate';





const UserButton = (props) => {
    return (
        <DropDownTemplate
            {...props}
            title={(
                <div className="flexRow">
                    <h1>🤓</h1>
                    <div>
                        <h2>USER</h2>
                        <p className="linkText">Edit profile info</p>
                    </div>
                </div>
            )}
            component={(
                <div className="flexColumn width-m">
                    <span className="largeText">Change permissions...(Admin)</span>
                    <span className="largeText">View Member's Board Activity</span>
                </div>
            )}
        />

    );
}


export default UserButton;

