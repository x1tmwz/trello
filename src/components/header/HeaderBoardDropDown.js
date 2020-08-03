import React from 'react';
import { Link } from 'react-router-dom';
import ViewQuiltOutlinedIcon from '@material-ui/icons/ViewQuiltOutlined';
import DropDownTemplate from '../genric/DropDownTemplate';
import { makeStyles } from '@material-ui/core';
import styles from '../../style/materialUI';

const useStyles = makeStyles({
    root: styles.switchToTrelloIcon

})

//recive closeDiv from DropDownGenric
const HeaderBoardDropDown = (props) => {
    const classes = useStyles();
    return (
        <DropDownTemplate
            {...props}
            title="More from Atlassian"
            titleBottomBorder={true}
            component={(
                <>
                    <h3 className="boldText m-b-2">SWITCH TO</h3>
                    <Link to="/homePage" className="largeText">
                        <div className="flexRow centerContainer">
                            <ViewQuiltOutlinedIcon className={classes.root} />
                            <span className="m-l-1">Trello</span>
                        </div>
                    </Link>

                </>
            )}
        />

    );
}
export default HeaderBoardDropDown;

