//CSS:
import './Chat-textbox.css'

// =========================== components here ===========================
import RoundButton from "@components/phong-messages-components/Round-button";
import { faSmile, faImage, faNoteSticky, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { useGlobalContext } from '../../../data-store';
// =========================== library here ===========================
import React, { useState } from 'react';

import { useDataHook } from '../../../data-hook'

function ChatTextbox(props) {
    const [inputValue, setInputValue] = useState('');
    const [rows, setRows] = useState(1);
    const [globalState, dispatchGlobalState] = useGlobalContext();

    const { fetchMessages, sendMessage } = useDataHook();

    let conversation = props.conversation;

    const handleSend = async (content) => {
        if (globalState.realtime?.connection && conversation) {
            sendMessage(conversation?.participantIds,conversation.id, globalState.user?.id, content, null, null)
        }
    }



    const handleKeyPress = (event) => {
        if (event.key === 'Enter' && event.shiftKey) {
            event.preventDefault();
            if (rows <= 4)
                setRows(rows + 1);
            setInputValue((prevValue) => {
                console.log(prevValue);
                return prevValue + '\n';
            });
            return;
        }
        if (event.key === 'Enter') {
            event.preventDefault();
            if (inputValue.trim() !== '' && conversation) {
                handleSend(inputValue);
                setInputValue('');
                setRows(1);
            }
        }
    };

    const handleChange = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue);
        let count = (newValue.match(/\n/g) || []).length;
        var rownums = count + 1;
        if (rownums < 1)
            rownums = 1;
        else if (rownums > 4)
            rownums = 4;
        setRows(rownums);
    };

    return (
        <div>
            <div className='chat-chatinput-container'>
                <RoundButton width={'35px'} height={'35px'}
                    iconWidth={'100%'} iconHeight={'100%'} iconColor={'red'} icon={faImage} />
                <RoundButton width={'35px'} height={'35px'}
                    iconWidth={'100%'} iconHeight={'100%'} iconColor={'red'} icon={faNoteSticky} />
                <div className='chat-textarea-container'>
                    <textarea
                        className='chat-textbox'
                        value={inputValue} placeholder='Aa'
                        onChange={handleChange}
                        onKeyDown={handleKeyPress}
                        rows={rows} // You can adjust the number of rows as needed
                    />
                    <RoundButton width={'35px'} height={'35px'}
                        iconWidth={'100%'} iconHeight={'100%'} iconColor={'red'} icon={faSmile} />
                </div>
                <RoundButton width={'35px'} height={'35px'}
                    iconWidth={'100%'} iconHeight={'100%'} iconColor={'red'} icon={faPaperPlane} />
            </div>


        </div>
    );
};

export default ChatTextbox;