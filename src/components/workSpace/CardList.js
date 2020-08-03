import React, { useRef, useEffect, useState } from 'react';
import { connect } from 'react-redux'
import AddCardButton from './AddCardButton';
import CardItem from './CardItem';
import ListMenu from './ListMenu';
import DropDown from '../genric/DropDown';
import { Droppable, Draggable } from "react-beautiful-dnd";
import { editListTitle } from '../../actions/list';
import types from '../../data/types';



const CardList = ({
    title,
    id,
    list,
    index,
    startEditListTitle
}) => {
    const [isTitleEditable, setIsTitleEditable] = useState(false);
    const [listTitle, setListTitle] = useState(title);
    const editListTitleInputRef = useRef(null);

    const makeTitleEdit = (e) => {
        setIsTitleEditable(true);
    }
    const changeTitle = (e) => {
        const text = e.target.value
        setListTitle(text);
    }
    const finishChange = (e) => {
        if (!!listTitle && listTitle !== title) {
            startEditListTitle(listTitle, id)
        }
        setIsTitleEditable(false);
    }

    const ref = useRef(null)


    useEffect(() => {
        if (isTitleEditable) {
            if (editListTitleInputRef) {
                editListTitleInputRef.current.focus();
            }
        }
    }, [isTitleEditable])



    return (
        <Draggable draggableId={id} index={index} >
            {(provided, snapshot) => (
                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className="list-container" >
                    <div className="flexRow centerContainer">
                        {isTitleEditable ?
                            <input
                                type="text"
                                value={listTitle}
                                onChange={changeTitle}
                                onBlur={finishChange}
                                autoComplete="off"
                                className="input-m"
                                ref={editListTitleInputRef}
                            />
                            :
                            <p
                                className="list-title"
                                onClick={makeTitleEdit}
                            >
                                {title}
                            </p>}

                        <DropDown
                            buttonClassName="transeptButtonS"
                            button={"⋯"}
                            component={ListMenu}
                            listId={id}
                            isLeft={true}
                        />
                    </div>
                    <Droppable droppableId={id} type={types.CARD}>
                        {(provided, snapshot) => (

                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                className={`list`}
                            >


                                {list.map((card, index) => <CardItem {...card} key={card.id} index={index} listId={id} />)}
                                {provided.placeholder}
                                <AddCardButton listId={id} />
                            </div>


                        )}


                    </Droppable>

                </div>







            )}


        </Draggable>


    );

}
const mapDispatchToProps = (dispatch) => ({
    startEditListTitle: (title, listId) => dispatch(editListTitle(title, listId))

})
export default connect(undefined, mapDispatchToProps)(CardList);