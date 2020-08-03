import React, { useState, useEffect, useRef } from 'react';



const ADD_TO_CARD_OPTIONS = ["Members", "Labels", "CheckList", "Due Date", "Attachment", "Cover"];
const POWER_UPS_OPTION = "Get Power-Ups";
const ACTIONS_OPTIONS = ["Move", "Copy", "Make Template", "Watch"];


const CardForm = ({ card, listId, deletCard, closeModal }) => {
    const [description, setDescription] = useState(card.description || "");
    const [textAreaHeight, setHeight] = useState(59);
    const [activeTextArea, setActiveTextArea] = useState(false);
    const inputRef = useRef(null);

    const descriptionHandler = (e) => {
        setDescription(e.target.value);

    }
    const deletCardHandler = (e) => {
        if (!!card && !!listId && !!deletCard) {
            deletCard(listId, card.id);
            closeModal();
        }

    }

    const activeTextAreaHandler = () => {
        setActiveTextArea(true);
    }

    const textAreaBlurHandler = () => {
        setActiveTextArea(false);
    }
    useEffect(() => {
        if (activeTextArea) {
            if (inputRef.current.scrollHeight > inputRef.current.clientHeight) {
                setHeight(parseInt(inputRef.current.scrollHeight) + 5)
            }
        }
    }, [activeTextArea, description])

    return (
        <div className="cardForm">
            <div className="cardForm-description">
                <h1><span role="img" aria-label="">📓</span> Description</h1>
                {activeTextArea ?
                    <textarea
                        name="title"
                        onChange={descriptionHandler}
                        value={description}
                        autoComplete="off"
                        className="trelloButton-form-ajustInput"
                        placeholder="Add a more detailed description..."
                        ref={inputRef}
                        type="text"
                        onBlur={textAreaBlurHandler}
                        style={{ height: textAreaHeight }}
                        className="cardForm-description-textArea"
                    /> :
                    <p onClick={activeTextAreaHandler} className="cardForm-description-textArea">
                        Add a more detailed description...
                    </p>
                }

            </div>
            <div className="flexColumnAlignItemsStart">
                <h3>ADD TO CARD</h3>
                <div className="cardForm-menu-options">
                    {ADD_TO_CARD_OPTIONS.map((option) => <button
                        className="cardForm-menu-option"
                        value={option}
                        key={option}
                        onClick={(e) => { alert(e.target.value) }}

                    >{option}
                    </button>)}
                </div>
                <h3>POWER_UPS</h3>
                <div className="cardForm-menu-options">
                    <button
                        className="cardForm-menu-option"
                        key={POWER_UPS_OPTION}
                        value={POWER_UPS_OPTION}
                        onClick={(e) => { alert(e.target.value) }}
                    >
                        {POWER_UPS_OPTION}
                    </button>
                </div>
                <h3>ACTIONS</h3>
                <div className="cardForm-menu-options">
                    {ACTIONS_OPTIONS.map((option) => <button
                        className="cardForm-menu-option"
                        key={option}
                        value={option}
                        onClick={(e) => { alert(e.target.value) }}

                    >{option}
                    </button>)}
                </div>
                <div className="cardForm-menu-options">
                    <button className="cardForm-menu-option" onClick={deletCardHandler}>Archive</button>
                </div>

            </div>

        </div>
    );



}
export default CardForm;