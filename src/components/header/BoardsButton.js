import React from 'react';
import DropDownTemplate from '../genric/DropDownTemplate';
import ExpandButton from '../genric/ExpandButton';
import GroupIcon from '@material-ui/icons/Group';




const BoardsButton = (props) => {
    return (
        <DropDownTemplate
            {...props}
            title={<input type="text" placeholder="Find boards by name..." className="input-m" />}
            component={(
                <div className="flexColumn width-m">
                    <ExpandButton
                        title="☆ STARRED BOARDS"
                        options={<p>Star your most importanat boards to kepp them right at your fingertips</p>}
                    />
                    <ExpandButton
                        title="🕑 RECENT BOARDS"
                        options="Your Board"
                    />
                    <ExpandButton
                        title={
                            <>
                                <GroupIcon />
                                <span>USER</span>
                            </>
                        }
                        options="Your Board"
                    />
                    <span className="linkText">Create new Board...</span>
                    <span className="linkText">Always keep this menu open.</span>
                    <span className="linkText">See closed boards...</span>

                </div>
            )}
        />

    );
}


export default BoardsButton;

