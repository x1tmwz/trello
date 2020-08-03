import React, { useState, useRef, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { addNewCard } from '../../actions/list';


const AddCardButton = ({ startAddNewCard, listId }) => {
    const [isOpen, setOpen] = useState(false);
    const [mouseLocation, setLocation] = useState([])
    const [text, setText] = useState("");
    const [textAreaHeight,setHeight] =useState(59);
    const openDivRef = useRef(null);
    const inputRef = useRef(null);

    const openCloseSwitchHandler = (e) => {
        setOpen(!isOpen);
    }

    const closeHandler = (e) => {
        setOpen(false);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if(text){
            startAddNewCard(text, listId);
            setText("");
            setOpen(false);
        }
    }

    const getMouseLocation = useCallback((e) => {
        setLocation([e.clientX, e.clientY]);
    }, [])

    const textHandler = (e) => {
        setText(e.target.value);

    }

    const blurHandler = (e) => {
        const { left, width, height, top } = openDivRef.current.getBoundingClientRect()
        const x = left + width;
        const y = height + top;
        if (mouseLocation[0] > x || mouseLocation[1] > y || mouseLocation[1]< top || mouseLocation[0]< left) {
            setOpen(false);
        }
    }

    useEffect(() => {
        if (isOpen) {
            openDivRef.current.firstChild.focus();
            window.addEventListener("mousedown", getMouseLocation)
        }
        return () => {
            window.removeEventListener("mousedown", getMouseLocation);
        };

    }, [isOpen, getMouseLocation])

    useEffect(() => {
        if(isOpen){
           if(inputRef.current.scrollHeight > inputRef.current.clientHeight ){
               setHeight(parseInt(inputRef.current.scrollHeight)+5)
           }
        }
    }, [isOpen,text])

    return (
        <div className="trelloButton-container">
            {!isOpen && <button className="transeptButton" onMouseDown={openCloseSwitchHandler}>+Add another card</button>}
            {isOpen && (
                <form className="trelloButton-form" onSubmit={submitHandler} onBlur={blurHandler} ref={openDivRef}>
                    <textarea
                        name="title"
                        onChange={textHandler}
                        value={text}
                        autoComplete="off"
                        className="trelloButton-form-ajustInput"
                        placeholder="Enter a title for this card..."
                        ref={inputRef}
                        type="text"
                        style={{height:textAreaHeight}}
                    />
                    <div className="flexRow spreadContainer">
                        <button className="greenButton" type="submit">Add Card</button>
                        <button className="exitButton" onMouseDown={closeHandler} type="button">X</button>
                    </div>
                </form>
            )}

        </div>
    )

}
const mapDispatchToProps = (dispatch) => ({
    startAddNewCard: (title, listId) => dispatch(addNewCard(title, listId))
})
export default connect(undefined, mapDispatchToProps)(AddCardButton);