import React, { useState, useRef, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { addNewList } from '../../actions/list';


const AddListButton = ({startAddNewList}) => {
    const [isOpen, setOpen] = useState(false);
    const [mouseLocation, setLocation] = useState([])
    const openDiv = useRef(null);

    const openCloseSwitchHandler = (e) => {
        setOpen(!isOpen);
    }

    const closeHandler = (e) => {
        setOpen(false);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const title = e.target.elements["title"].value
        if(title){
            startAddNewList(title);
            setOpen(false);
        }
        
    }

    const getMouseLocation = useCallback((e) => {
        setLocation([e.clientX, e.clientY]);
    },[])
    const blurHandler = (e) => {
        const { left, width, height, top } = openDiv.current.getBoundingClientRect()
        const x = left + width;
        const y = height + top;
        if (mouseLocation[0] > x || mouseLocation[1] > y || mouseLocation[1]< top || mouseLocation[0]< left) {
            setOpen(false);
        }
    }
    
    useEffect(() => {
        if (isOpen) {
            openDiv.current.firstChild.focus();
            window.addEventListener("mousedown", getMouseLocation)
        }
        return () => {
            window.removeEventListener("mousedown", getMouseLocation);
        };
    }, [isOpen,getMouseLocation])



    return (
        <div className="trelloButton-container">
            {!isOpen && <button className="whiteTranseptButton" onMouseDown={openCloseSwitchHandler}>+ Add a list</button>}
            {isOpen && (
                <form className="trelloButton-form" onSubmit={submitHandler} onBlur={blurHandler} ref={openDiv}>
                    <input type="text" autoComplete="off" name="title" placeholder="Enter list title..." />
                    <div className="flexRow spreadContainer">
                        <button className="greenButton" type="submit">Add List</button>
                        <button className="exitButton" onMouseDown={closeHandler} type="button">X</button>
                    </div>
                </form>
            )}

        </div>
    )

}
const mapDispatchToProps = (dispatch) => ({
    startAddNewList:(title)=>dispatch(addNewList(title))
})
export default connect(undefined,mapDispatchToProps)(AddListButton);