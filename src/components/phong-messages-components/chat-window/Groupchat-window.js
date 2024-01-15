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
    const [selectedFriends, setSelectedFriends] = useState([]);


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let people = globalState?.people;


    const [isInputFocused, setIsInputFocused] = useState(false);

    const handleInputFocus = () => {
        setIsInputFocused(true);
    };

    const handleInputBlur = () => {
        setIsInputFocused(false);
    };
    // Filter friends based on search input
    const filteredFriends = people && people.filter(friend =>
        friend.personalInfo?.name && friend.personalInfo?.name.toLowerCase().includes(searchInput.toLowerCase())
    );


    let myMessages = [{ position: '', text: "\n" }, { position: 'right' }, { position: '' }, { position: '' }, { position: '' }, { position: '' }]

    return (

        <>
            <button className='group-chat-add' onClick={handleShow}>
                <FontAwesomeIcon icon={faPenToSquare} />
            </button>

            <Modal  size='lg' centered show={show} onHide={handleClose}>
                <Modal.Body>
                    <div className='chat-window' style={{borderRadius:'10px'}} >
                        <div className='chat-header'>
                            <div className='friend-search'>
                                <input
                                    type="text"
                                    placeholder="To :"
                                    value={searchInput}
                                    onChange={(e) => setSearchInput(e.target.value)}
                                    onFocus={handleInputFocus}
                                    onBlur={handleInputBlur}
                                />
                                {isInputFocused && filteredFriends.length > 0 && (
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
                                                <span className=''>{friend?.personalInfo?.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                       
                    </div>
                </Modal.Body>
            </Modal>
        </>

    );
}


export default GroupchatWindow;
