import React from 'react';
import DropDownTemplate from '../genric/DropDownTemplate';





const inviteButton = (props) => {
    return (
        <DropDownTemplate
            {...props}
            title="Invite To Board"
            component={(
                <div className="flexColumn width-m">
                    <input type="text" placeholder="Email address or name" className="input-m" />
                    <div className="flexRow spaceBetweent ">
                        <span className="largeText boldText">🔗 Invaite with link</span>
                        <span className="linkText">Create link</span>
                    </div>
                    <p>Anyone with link can join as board member</p>
                    <button disabled>Send Invitaion</button>
                </div>
            )}
        />

    );
}


export default inviteButton;

