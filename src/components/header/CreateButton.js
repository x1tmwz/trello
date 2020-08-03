import React from 'react';
import DropDownTemplate from '../genric/DropDownTemplate';
import GroupIcon from '@material-ui/icons/Group';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';



const CreateButton = (props) => {
    return (
        <DropDownTemplate
            {...props}
            title="Create"
            titleBottomBorder={true}
            component={(
                <div className="flexColumn width-xl">
                    <button className="transeptButton-flex" onClick={(e)=>{alert("Create a board")}}>
                        <h4>▩ Create Board...</h4>
                        <p>A board is made up of cards orederd on lists,Use it to manage projects,track information,or organize anything</p>
                    </button>
                    <button className="transeptButton-flex" onClick={(e)=>{alert("Create a Team")}}> 
                        <h4><GroupIcon style={{ fontSize:20 }} /> Create Team...</h4>
                        <p>A team is a group of boards and people,Use it to organize your company,side hustle,famliy,or friends.</p>
                    </button>
                    <button className="transeptButton-flex" onClick={(e)=>{alert("Create Buisness Team")}}>
                        <h4><BusinessCenterIcon style={{ fontSize:20 }} />Create Buisness Team...</h4>
                        <p>With Business Class your team has more security administrative controls,and unlimited Power-Ups.</p>
                    </button>
                </div>
            )}
        />
    );
}


export default CreateButton;