import React, { useState, useRef, useEffect, useCallback } from 'react';



const DropDown = ({
    component: Component,
    button,
    isLeft,
    buttonClassName,
    translate="-87%",
    ...rest
}) => {
    const [isOpen, setOpen] = useState(false);
    const [mouseLocation, setLocation] = useState([])
    const openDiv = useRef(null);
    const buttonRef = useRef(null);

    const openCloseSwitchHandler = (e) => {
        setOpen(!isOpen);
    }

    const closeHandler = (e) => {
        setOpen(false);
    }

    const getMouseLocation = useCallback((e) => {
        setLocation([e.clientX, e.clientY]);
    }, [])

    const blurHandler = (e) => {
        const { left, width, height, top } = openDiv.current.getBoundingClientRect()
        const buttonLocation = buttonRef.current.getBoundingClientRect();
        const buttonWidth = buttonLocation.left + buttonLocation.width;
        const buttonHeight = buttonLocation.height + buttonLocation.top;
        if (mouseLocation[0] <= buttonWidth && mouseLocation[0] >= buttonLocation.left && mouseLocation[1] <= buttonHeight && mouseLocation[1] >= buttonLocation.top) {
            return;
        }
        const x = left + width;
        const y = height + top;
        if (mouseLocation[0] > x || mouseLocation[1] > y || mouseLocation[1] < top || mouseLocation[0] < left) {
            setOpen(false);
        }
    }
   

    useEffect(() => {
        if (isOpen) {
            openDiv.current.focus();
            window.addEventListener("mousedown", getMouseLocation)
        }
        return () => {
            window.removeEventListener("mousedown", getMouseLocation);
        };
    }, [isOpen, getMouseLocation])
    



    return (
        <div>
            {<button onClick={openCloseSwitchHandler} className={buttonClassName} ref={buttonRef}>{button}</button>}
            {isOpen && (
                <div className="openDiv flexColumn" style={{ transform: isLeft ? `translate(${translate}, 0)` : "" }} onBlur={blurHandler} tabIndex={0} ref={openDiv}>
                    <Component closeDiv={closeHandler} {...rest} />
                </div>
            )}

        </div>
    )

}

export default DropDown;