import React from 'react';
import DropDownTemplate from '../genric/DropDownTemplate';

const NotificationsButton = (props) => {
    return (
        <DropDownTemplate
            {...props}
            title="Notifications"
            titleBottomBorder={true}
            component={(
                <div className="flexColumn">
                    <span className="linkText m-b-1">View All</span>
                    <div className="flexColumn centerContainer">
                        <img
                            src="https://a.trellocdn.com/prgb/dist/images/taco-sleep.0582d9f3bdb5060e7285.svg"
                            className="m-image"
                            alt=""
                        />
                        <p className="xl-Text m-1">No Unread Notifications</p>
                        <span className="largeText m-b-1">click View All to view all of your notifications</span>
                    </div>
                    <div className="flexColumn m-t-2">
                       <span className="largeText m-b-1">Change Notification Email Frequency</span>
                       <span className="largeText">Allot Desktop Notification</span>
                    </div>
                </div>
            )}
        />
    );
}


export default NotificationsButton;