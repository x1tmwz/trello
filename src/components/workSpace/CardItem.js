import React, { useRef } from 'react';
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { swapCards } from '../../actions/list';
import { Draggable } from "react-beautiful-dnd";





const CardItem = ({ title, id, index, startSwapCards, listId }) => {
    const ref = useRef(null)

    const history = useHistory();

    const clickHandler = () => {
        history.push(`/edit/${id}`);
    }


    return (
        // <div ref={ref} onClick={clickHandler} className={`card ${isDragging?"card-drag":""} ${isOver?"card-drag":""}`}>
        //     <p >{title}</p>
        // </div>
        <Draggable draggableId={id} index={index}>
            {(provided, snapshot) => (
                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} onClick={clickHandler} className={`card `}>
                    <p>{title}</p>
                </div>
            )}
        </Draggable>

    );

}
const mapDispatchToProps = (dispatch) => ({
    startSwapCards: (dragIndex, hoverIndex, dragListId, hoverListId, dragCardId) => dispatch(swapCards(dragIndex, hoverIndex, dragListId, hoverListId, dragCardId))
})
export default connect(undefined, mapDispatchToProps)(CardItem);