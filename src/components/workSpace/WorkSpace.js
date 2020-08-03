import React, { useState, useRef, useEffect, useMemo } from "react";
import AddListButton from './AddListButton';
import { connect } from 'react-redux';
import CardList from './CardList';
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { swapLists, swapCardsBetweenLists, swapCards } from '../../actions/list';
import types from '../../data/types';


const WorkSpace = ({ lists, startSwapLists, startSwapCardBetweenLists, startSwapCards }) => {
    const ref = useRef(null);
    const [needScroll, setNeedScroll] = useState(false);

    const onMouseDown = (e) => {
        let clientX = e.clientX;
        const mouseMove =(e)=>{
            const delta = clientX - e.clientX
            ref.current.scrollLeft +=  delta; 
            clientX = e.clientX;
        }
        const mouseUp = (e)=>{
            ref.current.removeEventListener("mousemove", mouseMove)
            ref.current.removeEventListener("mouseup",mouseUp)
        }
        if (needScroll && e.target.className === "flexRowAlignItemsStart") {
            ref.current.addEventListener("mousemove", mouseMove)
            ref.current.addEventListener("mouseup",mouseUp)
        }
    }
    useEffect(() => {
        if (ref) {
            if (ref.current.scrollWidth > window.innerWidth) {
                if (!needScroll) {
                    setNeedScroll(true)
                }else{
                    ref.current.scrollLeft += ref.current.scrollWidth;
                }
            } else {
                setNeedScroll(false)
            }
        }
    }, [lists.length, needScroll])






    const onDragEnd = (result) => {
        const { source, destination, draggableId, type } = result;
        if (!destination) {
            return;
        }
        if (type === types.CARD) {
            if (source.droppableId === destination.droppableId) {
                startSwapCards(source.droppableId, source.index, destination.index);
            } else {
                startSwapCardBetweenLists(source.droppableId, destination.droppableId, source, destination);
            }
        }
        if (type === types.LIST) {
            startSwapLists(source.index, destination.index);

        }
    }
  
    return (
        <DragDropContext onDragEnd={onDragEnd} >
            <div
                ref={ref}
                className={`workSpace`}
                onMouseDown={onMouseDown}
            >
                <Droppable droppableId="all" direction='horizontal' type={types.LIST}>
                    {(provided, snapshot) => (
                        <div {...provided.droppableProps} ref={provided.innerRef} className='flexRowAlignItemsStart'>
                            {lists.map((list, index) => <CardList {...list} index={index} key={list.id} />)}
                            {provided.placeholder}
                        </div>

                    )}

                </Droppable>


                <AddListButton />
            </div>

        </DragDropContext>

    );
}
const mapStateToProps = (state) => ({
    lists: state.lists
})
const mapDispatchToProps = (dispatch) => ({
    startSwapLists: (dragIndex, hoverIndex) => dispatch(swapLists(dragIndex, hoverIndex)),
    startSwapCardBetweenLists: (dragFromListId, dragToListId, source, destination) => dispatch(swapCardsBetweenLists(dragFromListId, dragToListId, source, destination)),
    startSwapCards: (listId, startIndex, endIndex) => dispatch(swapCards(listId, startIndex, endIndex))


})
export default connect(mapStateToProps, mapDispatchToProps)(WorkSpace);