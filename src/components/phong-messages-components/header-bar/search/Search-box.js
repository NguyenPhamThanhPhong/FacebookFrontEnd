import RoundButton from "@components/phong-messages-components/Round-button";


import "./Search-box.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import React, { useRef } from 'react';

function TextBox(props) {
    const inputRef = useRef(null);

    function clickInput() {
        // Focus on the input element when the div is clicked
        inputRef.current.focus();
    }

    var temp = <RoundButton width={'38px'} height={'38px'} 
    icon={faArrowLeft}
    iconWidth={'28px'} iconHeight={'20px'} />

    return (
        <div className="search-box-div">
            <RoundButton width={'38px'} height={'38px'} iconWidth={'28px'} iconHeight={'30px'}
            icon={faFacebookF} backgroundColor={'var(--facebook-color))'}
            iconColor={'white'}
     />

            <div onClick={clickInput} className="textbox-container">
                <FontAwesomeIcon className="icon" icon={faSearch} />
                <input ref={inputRef} className="input" type="text" />
            </div>
        </div>
    )
}

export default TextBox
