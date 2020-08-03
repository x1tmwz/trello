import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import style from '../../style/materialUI';
import { withStyles } from '@material-ui/core';
import DropDownTemplate from '../genric/DropDownTemplate';


const SearchInput = (props) => {
    const { classes = {} } = props;
    return (
        <DropDownTemplate
            {...props}
            title="Search"
            component={(
                <div className="flexRow centerContainer">
                    <input type="text" className="input-m  roundBorder bg-whiteOpcity" />
                    <button className="m-0 invisibleButton">
                        <SearchIcon className={classes.SearchIcon}/>
                    </button>
                </div>
            )}
        />

    );
}
export default withStyles(style)(SearchInput);