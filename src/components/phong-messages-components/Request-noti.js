import React from 'react';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { Button } from 'react-bootstrap';
import "./Request-noti.css";
import { useState } from 'react';

function FriendRequest(props) {
    const [showButtons, setShowButtons] = useState(true);
    const [showAcceptMessage, setshowAcceptMessage] = useState(false);
    const [showDeleteMessage, setshowDeleteMessage] = useState(false);

    let urlstring = props.avatarUrl || 'https://www.w3schools.com/howto/img_avatar.png'
    // let conversationName = props.conversationName || 'Request accepted'
    let requestMessage = props.requestMessage || 'Phong sent you a friend request.'

    
    let myOnClick = ()=>{}
    if(props.onclick){
        myOnClick = ()=>{props.onclick(props.myKey)}
    }
    let myKey = props.myKey

    const handleAcceptClick = () => {
        // Perform any additional actions if needed
        setShowButtons(false);
        setshowAcceptMessage(true);
    }

    const handleDeleteClick = () => {
        // Perform any additional actions if needed
        setShowButtons(false);
        setshowDeleteMessage(true);
    }

    return (

        <div onClick={myOnClick} style={props.style} className="conversation-item-container">
                <div className="inner-container">
                    <div className="conversation-item-left">
                        <div className="flex-avatar-container">
                            <div className="avatar-container">
                                <img src={urlstring}
                                    alt="Avatar" className="round-avatar" />
                            </div>
                        </div>

                        <div className="friend-request-status">
                            <AccountCircleRoundedIcon color='primary' />
                        </div>
                    </div>
                    <div className="request-content-div">
                        <h7>{requestMessage}</h7>
                        {showButtons && (
                        <p>
                            <Button bsPrefix='request-btn1' variant="primary" onClick={handleAcceptClick}>
                                Accept
                            </Button>
                            <Button bsPrefix='request-btn2' variant="secondary" onClick={handleDeleteClick}>
                                Delete
                            </Button>
                        </p>
                        )}
                        {showAcceptMessage && (
                            <p className="accept-message">Friend request accepted!</p>
                        )}
                         {showDeleteMessage && (
                            <p className="delete-message">Friend request deleted! </p>
                         )}
                    </div>

                </div>
        </div>
    );
}

export default FriendRequest
