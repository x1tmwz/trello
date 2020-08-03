import React, {useState } from 'react';

const ExpandButton = (props) => {
    const [isOpen, setOpen] = useState(false);

    const openHanlder = () => {
        setOpen(!isOpen);
    }
    return (
        <div className="flexColumn  largeText">
            <div className="flexRow spaceBetweent p-0 m-0">
                <h3>{props.title}</h3>
                <button className="transeptButton-alignCenter smallButton" onClick={openHanlder}>+</button>
            </div>
            {isOpen && props.options}

            
        </div>
    );

}
export default ExpandButton