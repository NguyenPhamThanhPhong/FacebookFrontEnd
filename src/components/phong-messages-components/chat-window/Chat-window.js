import './Chat-window.css';

import ChatTextbox from '../chat-window/Chat-textbox';
import RoundButton from '@root/components/phong-messages-components/Round-button';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBellSlash, faCircleInfo, faPhone, faVideo } from '@fortawesome/free-solid-svg-icons'
import { MessageBox, Avatar } from "react-chat-elements";
import React, { useState, useEffect, useRef } from 'react'

import { useDataHook } from '../../../data-hook'
import { useGlobalContext } from '../../../data-store';







function ChatWindow(props) {


    
    let selectedConversation = props.conversation;
    let hostId = props.hostId;

    const [globalState, dispatchGlobalState] = useGlobalContext();

    let people = globalState?.people;


    


    let myMessages = [{ position: '', text: "\n" }, { position: 'right' }, { position: '' }, { position: '' }, { position: '' }, { position: '' }]



    return (
        <div className='chat-window'>

            <div className='chat-header'>
                <div className='chat-title-group'>
                    <div style={{ Display: 'inline' }}>
                    {(props.avatar || (
                                <Avatar
                                    src="https://avatars.githubusercontent.com/u/80540635?v=4"
                                    alt="avatar"
                                    size="xlarge"
                                    type="circle"
                                />
                            ))}
                    </div>
                    <div className='chat-conversation-title'>
                        <div>
                            <h5>{"Taroumaru's Playground"}</h5>
                            <FontAwesomeIcon className='chat-notification-status' icon={faBellSlash} />
                            {props.subText}
                        </div>
                    </div>
                </div>
                <div className='chat-button-group'>
                    <RoundButton width={'40px'} height={'40px'}
                        iconWidth={'80%'} iconHeight={'80%'} iconColor={'red'} icon={faPhone} />
                    <RoundButton width={'40px'} height={'40px'}
                        iconWidth={'80%'} iconHeight={'80%'} iconColor={'red'} icon={faVideo} />
                    <RoundButton width={'40px'} height={'40px'}
                        iconWidth={'80%'} iconHeight={'80%'} iconColor={'red'} icon={faCircleInfo} />
                </div>
            </div>
            <div className='chat-window-chat-body'>
                {selectedConversation?.messages && selectedConversation?.messages.map((message, index) => {
                    let position = message.senderID === hostId ? 'right' : 'left';

                    let person = people.find(x => x.id === message.senderID);
                    let avatarUrl = person?.avatarUrl || 'https://www.w3schools.com/howto/img_avatar.png';
                    return (
                        <div className='chat-message-row' key={index}>
                            {message.senderID !== hostId && (
                                <Avatar
                                    src={avatarUrl}
                                    alt="avatar"
                                    size="xlarge"
                                    type="circle"
                                />
                            )}
                            <MessageBox
                                className='message-item'
                                notchStyle={{ fill: position === 'right' ? 'var(--facebook-color)' : 'var(--message-color)' }}
                                position={position}
                                type="text"
                                text={message.content}
                            />
                        </div>
                    );
                })}
            </div>
            <div className='chat-footer'>
                <ChatTextbox conversation={props.conversation} />

            </div>
        </div>
    );
}

export default ChatWindow;
