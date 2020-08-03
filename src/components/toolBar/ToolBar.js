import React,{useState,useEffect} from 'react';
import DropDown from '../genric/DropDown';
import InviteButton from './InviteButton';
import UserButton from './UserButton';
import TeamVisibleButton from './TeamVisibleButton';
import UserTeamButton from './UserTeamButton';

const ToolBar = (props) => {
    const [width, setWidth] = useState(window.innerWidth); 
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    });
      
    return (
        <div className="toolBar">
            <div className="toolBar-innerContainer">
                <button className="whiteTranseptButton-s">Company Overview</button>
                <button className="whiteTranseptButton-s">☆</button>
                <DropDown isLeft={width<600} translate="-50%" buttonClassName="whiteTranseptButton-s" button="User Free" component={UserTeamButton} />
                <DropDown isLeft={width<600}  buttonClassName="whiteTranseptButton-s" button="Team Visible" component={TeamVisibleButton} />
            </div>
            <div className="toolBar-innerContainer">
                <DropDown isLeft={width>600} buttonClassName="whiteTranseptButton-s" button="🤓" component={UserButton} />
                <DropDown isLeft={width>600} buttonClassName="whiteTranseptButton-s" button="Invite" component={InviteButton} />
                <button className="whiteTranseptButton-s">📅 Calender</button>
                <button className="whiteTranseptButton-s">🔔 Butler</button>
                <button className="whiteTranseptButton-s">⋯ Show Menu</button>
            </div>
        </div>

    );
}
export default ToolBar;