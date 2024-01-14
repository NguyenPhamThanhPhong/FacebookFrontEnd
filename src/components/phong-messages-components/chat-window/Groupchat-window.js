import './Groupchat-window.css';

import ChatTextbox from '../chat-window/Chat-textbox';
import RoundButton from '@root/components/phong-messages-components/Round-button';
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBellSlash, faCircleInfo, faPhone, faVideo } from '@fortawesome/free-solid-svg-icons'
import { MessageBox, Avatar } from "react-chat-elements";
import React, { useState, useEffect, useRef } from 'react'

import { useDataHook } from '../../../data-hook'
import { useGlobalContext } from '../../../data-store';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import Modal from 'react-bootstrap/Modal';

function GroupchatWindow(props) {

    let selectedConversation = props.conversation;
    let hostId = props.hostId;
    const [globalState, dispatchGlobalState] = useGlobalContext();
    const [searchInput, setSearchInput] = useState('');
    const [selectedFriends,setSelectedFriends] = useState([]);
        

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSelectedFriends = () => {
        setSelectedFriends(friend.personalInfo?.userId);
        onSelectUser(friend.personalInfo?.userId); 
    let people = globalState?.people;

    // Filter friends based on search input
    const filteredFriends = people && people.filter(friend =>
        friend.personalInfo?.name && friend.personalInfo?.name.toLowerCase().includes(searchInput.toLowerCase())
    );


    let myMessages = [{ position: '', text: "\n" }, { position: 'right' }, { position: '' }, { position: '' }, { position: '' }, { position: '' }]

    return (

        <>
            <Button hidden={true} icon={faPenToSquare} onClick={handleShow} />

            <Modal size='lg' centered show={show} onHide={handleClose}>
                <Modal.Body>
                    <div className='chat-window' >
                        <div className='chat-header'>
                            <div className='friend-search'>
                                <input
                                    type="text"
                                    placeholder="To :"
                                    value={searchInput}
                                    onChange={(e) => setSearchInput(e.target.value)}
                                />
                                {filteredFriends.length > 0 && (
                                    <div className='search-results'>
                                        {filteredFriends.map((friend, index) => (
                                                <div key={index} className='friend-result'>
                                                    {/* You can customize the appearance of each friend result */}
                                                    <Avatar
                                                        src={friend.avatarUrl || 'https://www.w3schools.com/howto/img_avatar.png'}
                                                        alt="avatar"
                                                        size="medium"
                                                        type="circle"
                                                    />
                                                    <span className=''>{friend?.personalInfo?.name} onClick= {(e) => setSelectedFriends([e.target.value)} </span>
                                                </div>
                                            ))}
                                    </div>
                                )}
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
                </Modal.Body>
            </Modal>
        </>

    );
}

export default GroupchatWindow;
