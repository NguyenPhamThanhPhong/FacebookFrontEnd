import './Groupchat-window.css';

import ChatTextbox from '../chat-window/Chat-textbox';
import RoundButton from '@root/components/phong-messages-components/Round-button';
import Form from 'react-bootstrap/Form';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBellSlash, faCamera, faCircleInfo, faPhone, faVideo } from '@fortawesome/free-solid-svg-icons'
import { MessageBox, Avatar } from "react-chat-elements";
import React, { useState, useEffect, useRef } from 'react'
import { Button } from 'react-bootstrap';
import { useDataHook } from '../../../data-hook'
import { useGlobalContext } from '../../../data-store';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import Modal from 'react-bootstrap/Modal';
import GroupImageUploadd from '../../upload/groupimage-upload';

function GroupchatWindow(props) {

    let selectedConversation = props.conversation;
    let hostId = props.hostId;
    const [globalState, dispatchGlobalState] = useGlobalContext();
    const [searchInput, setSearchInput] = useState('');
    const [selectedFriends, setSelectedFriends] = useState([]);
    const fileInputRef = useRef(null);

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        // Do something with the selected file
        console.log('Selected File:', file.name);
    };

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

    const {updatePersonalInfo} = useDataHook();
    const [GroupChatName, setGroupChatName] = useState('');
    const [blobGroupChatPicture, setblobGroupChatPicture] = useState('');

    const handleClear = () => {
        setGroupChatName('');
        setblobGroupChatPicture(null);
      }

    const handleSaveChanges = () => {
        console.log(GroupChatName);
        console.log(blobGroupChatPicture);
        handleClear();
        handleClose();
        updatePersonalInfo();
      }

    let myMessages = [{ position: '', text: "\n" }, { position: 'right' }, { position: '' }, { position: '' }, { position: '' }, { position: '' }]

    return (

        <>
            <button className='group-chat-add' onClick={handleShow}>
                <FontAwesomeIcon icon={faPenToSquare} />
            </button>
            <Modal size='lg' centered show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create a group chat </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='chat-window' >
                        <div className='friend-search'>
                        <GroupImageUploadd/>

                        <input
                            type="text"
                            placeholder="Group chat's name"
                            value={searchInput}        
                        />
                        </div>
                        
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
                            <button className="cancel-add-group-button" onClick={handleClose}>
                                Close
                            </button>
                            <button className='create-add-group-button' onClick={handleSaveChanges}>
                                Create
                            </button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>

    );
}


export default GroupchatWindow;
