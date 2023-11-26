

import "./Text-box.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import React, { useRef } from 'react';

function TextBox(props) {
    const inputRef = useRef(null);

    function clickInput() {
        // Focus on the input element when the div is clicked
        inputRef.current.focus();
    }

    return (
        <div onClick={clickInput} className="textbox-container">
            <FontAwesomeIcon className="icon" icon={faHome} />
            <input ref={inputRef} className="input" type="text" />
        </div>
    )
}

export default TextBox
