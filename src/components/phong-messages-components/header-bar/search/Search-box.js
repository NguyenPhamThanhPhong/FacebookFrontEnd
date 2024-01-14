import RoundButton from "@components/phong-messages-components/Round-button";
import "./Search-box.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";

import React, { useRef,useState } from 'react';

function TextBox(props) {
    const inputRef = useRef(null);
    const [isFocused, setIsFocused] = useState(false);


    function clickInput() {
        inputRef.current.focus();
    }

    var arrow = props.backIcon
    var temparrow = <RoundButton width={'35px'} height={'35px'} 
    icon={faArrowLeft}
    iconWidth={'90%'} iconHeight={'90%px'} />

    var facebook = props.customLogo
    var tempFacebook = <RoundButton width={'45px'} height={'45px'} iconWidth={'90%'} iconHeight={'90%'}
    icon={faFacebookF} backgroundColor={'var(--facebook-color)'}
    iconColor={'white'}/>
    

    return (
        <div className="search-box-div">
            {isFocused ? arrow : facebook}
            <div onClick={clickInput} style={props.textboxContainerStyle} className="textbox-container">
                {!isFocused && <FontAwesomeIcon className="search-box-icon" icon={faSearch} />}
                <input ref={inputRef} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)}
                className="search-box-input" placeholder="Search here" type="text" />
            </div>
        </div>
    )
}

export default TextBox
