import React from 'react';
import DropDownTemplate from '../genric/DropDownTemplate';
import GroupIcon from '@material-ui/icons/Group';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';



const TeamVisibleButton = (props) => {
    return (
        <DropDownTemplate
            {...props}
            title="Change Visibility"
            titleBottomBorder={true}
            component={(
                <div className="flexColumn width-xl">
                    <button className="transeptButton-flex" onClick={(e)=>{alert("Make Private")}}>
                        <h4>🔒 Private</h4>
                        <p>Only board members can see and edit this board</p>
                    </button>
                    <button className="transeptButton-flex" onClick={(e)=>{alert("Make public for team")}}> 
                        <h4><GroupIcon style={{ fontSize:20 }} /> Team</h4>
                        <p>All members of the tomer team can see and edit this board</p>
                    </button>
                    <button className="transeptButton-flex" onClick={(e)=>{alert("Make public to Buisness Team")}}>
                        <h4><BusinessCenterIcon style={{ fontSize:20 }} />Organization</h4>
                        <p>All members of the organization can see this board .The board must be added to an enterpise team to enable this.</p>
                    </button>
                    <button className="transeptButton-flex" onClick={(e)=>{alert("Make Public for all pepole")}}>
                        <h4>🌎Organization</h4>
                        <p>Anyone on the internet (including Google) can see this board.Only board members can edit. </p>
                    </button>
                </div>
            )}
        />
    );
}


export default TeamVisibleButton;