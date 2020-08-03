import React from 'react';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchIcon from '@material-ui/icons/Search';
import AppsIcon from '@material-ui/icons/Apps';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import ViewQuiltOutlinedIcon from '@material-ui/icons/ViewQuiltOutlined';
import style from '../../style/materialUI';
import { withStyles } from '@material-ui/core';
import DropDown from '../genric/DropDown';
import { Link } from 'react-router-dom';
import HeaderBoardDropDown from './HeaderBoardDropDown';
import CreateButton from './CreateButton';
import BoardsButton from './BoardsButton';
import SearchInput from './SearchInput';
import InformationButton from './InformationButton';
import NotificationsButton from './NotificationsButton';
import UserButton from './UserButton';








const Header = ({classes}) => {
   


    return (
        <header className="header">

            <div className="flexRow">
                <DropDown buttonClassName="invisibleButton" button={<AppsIcon className={classes.HeaderIcons} />} component={HeaderBoardDropDown} />
                <Link to="/"><HomeOutlinedIcon className={classes.HeaderIcons}/></Link>
                <DropDown
                    buttonClassName="invisibleButton"
                    button={<ViewQuiltOutlinedIcon className={classes.HeaderIcons}/>}
                    component={BoardsButton}
                />
                <DropDown buttonClassName="invisibleButton" button={<SearchIcon className={classes.HeaderIcons} />} component={SearchInput} />;
            </div>

            <Link className="xl-Text whiteText boldText header-logo-button" to="/">
                <div className="flexRow centerContainer">
                    <ViewQuiltOutlinedIcon className={classes.HeaderIcons_logoIcon} />
                    <span>Trello</span>
                </div>
            </Link>

            <div className="flexRow">
                <DropDown
                    isLeft={true}
                    buttonClassName="invisibleButton"
                    button={<AddOutlinedIcon  className={classes.HeaderIcons}/>}
                    component={CreateButton}
                />
                <DropDown
                    isLeft={true}
                    buttonClassName="invisibleButton"
                    button={<HelpOutlineOutlinedIcon  className={classes.HeaderIcons}/>}
                    component={InformationButton}
                />
                <DropDown buttonClassName="invisibleButton"
                    isLeft={true}
                    button={<NotificationsNoneOutlinedIcon className={classes.HeaderIcons} />}
                    component={NotificationsButton}
                />
                <DropDown buttonClassName="invisibleButton"
                    isLeft={true}
                    button={<EmojiEmotionsOutlinedIcon className={classes.HeaderIcons} />}
                    component={UserButton}
                />

            </div>


        </header>


    );
}
export default withStyles(style)(Header);