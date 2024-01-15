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

function GroupchatWindow(props) {

    let selectedConversation = props.conversation;
    let hostId = props.hostId;
    const [globalState, dispatchGlobalState] = useGlobalContext();
    const [searchInput, setSearchInput] = useState('');
    const [selectedFriends, setSelectedFriends] = useState([]);

    const [selectedFile, setSelectedFile] = useState(null); // storing the uploaded file
    const fileInputRef = useRef(null);

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        if (e.target?.files && e.target?.files.length > 0) {
            setSelectedFile(e.target.files[0]);
        }
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

    const { updatePersonalInfo } = useDataHook();
    const [GroupChatName, setGroupChatName] = useState('');
    const [blobGroupChatPicture, setblobGroupChatPicture] = useState('');


    const handleSelectChange = (value) => {
        console.log(value);
        if(value)
        {
            let person = people.find(person => person.id === value);
            setSelectedFriends([...selectedFriends, person]);
            console.log(selectedFriends);
            console.log(value)
        }
    }

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
                        <img style={{ maxWidth: '100%', maxHeight: "400px" }} src={selectedFile && URL.createObjectURL(selectedFile)} >
                        </img>
                        <div className='friend-search'>
                            <div className="group-chat-add">
                                <button className="group-chat-add" onClick={handleButtonClick}>
                                    <FontAwesomeIcon icon={faCamera} />
                                </button>
                                <input
                                    ref={fileInputRef}
                                    id="file-input"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    style={{ display: 'none' }}
                                />
                            </div>

                            <input
                                type="text"
                                placeholder="Group chat's name"
                                
                            />
                        </div>
                        <div style={{display:'flex'}} >
                            {
                                selectedFriends && selectedFriends.map((friend, index) => (
                                    <div key={index} className='friend-result'>
                                        <Avatar
                                            src={friend.personalInfo?.avatarUrl || 'https://www.w3schools.com/howto/img_avatar.png'}
                                            alt="avatar"
                                            size="medium"
                                            type="circle"
                                        />
                                        <span className=''>{friend?.personalInfo?.name}</span>
                                    </div>
                                ))
                            }
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
                                        <div key={friend?.id} onClick={()=>{console.log('clikas')}} className='friend-result'>
                                            <Avatar
                                                src={friend.personalInfo?.avatarUrl || 'https://www.w3schools.com/howto/img_avatar.png'}
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

                        <div className='chat-footer'>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleSaveChanges}>
                                Create
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>

    );
}


export default GroupchatWindow;
