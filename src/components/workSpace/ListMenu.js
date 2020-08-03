import React from 'react';
import DropDownTemplate from '../genric/DropDownTemplate';
import { connect } from 'react-redux';
import { deletList } from '../../actions/list'


const LIST_ACTIVE_OPTIONS = ["Add Card...", "Copy List...", "Move List...", "Watch"];
const LIST_SORT_OPTION = "Sort By...";
const LIST_MOVE_OPTIONS = ["Move All Cards in This List...", "Archive All Cards in This List..."];
const LIST_ARCHIVE_OPTION = "Archive This List";


const ListMenu = (props) => {
    const deletHandler =(e)=>{
        if(!!props.startDeletList && !!props.listId){
            props.startDeletList(props.listId);
        }
    }

    return (
        <DropDownTemplate
            {...props}
            title="List Actions"
            titleBottomBorder={true}
            component={(
                <div className="flexColumn width-m">
                    <div className="bottomBorder flexColumn">
                        {LIST_ACTIVE_OPTIONS.map((option) => <span key={option} className="largeText m-1">{option}</span>)}
                    </div>
                    <div className="flexColumn m-t-2 bottomBorder">
                        <span className="largeText m-1">{LIST_SORT_OPTION}</span>
                    </div>
                    <div className="flexColumn m-t-2 bottomBorder">
                        {LIST_MOVE_OPTIONS.map((option) => <span key={option} className="largeText m-1">{option}</span>)}
                    </div>
                    <div className="flexColumn m-t-2">
                        <button onClick={deletHandler} className="transeptButtonS">{LIST_ARCHIVE_OPTION}</button>
                    </div>
                </div>
            )}
        />
    );
}
const mapDispatchToProps = (dispatch) => ({
    startDeletList: (listId) => dispatch(deletList(listId))
})


export default connect(undefined, mapDispatchToProps)(ListMenu);