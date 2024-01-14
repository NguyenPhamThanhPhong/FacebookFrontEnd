// <============================Component here ============================>

// import FirstColumn from './first-column';
import FirstColumn from './first-column';
import GroupchatWindow from '../../components/phong-messages-components/chat-window/Groupchat-window';
// <============================Library here ============================>

import React, { useState, useEffect, useRef } from 'react'
// <============================CSS HERE ============================>
import "./messages.css"
import "react-chat-elements/dist/main.css"
// import { CSSTransition } from "react-transition-group"
import { useGlobalContext } from '../../data-store';
import { useDataHook } from '../../data-hook'


function Messages(props) {
  document.querySelector("body").setAttribute("data-theme", "dark");

  const [products, setProducts] = useState([]);

  const [globalState, dispatchGlobalState] = useGlobalContext();
  const [selectedConversation, setSelectedConversation] = useState(null);

  const {fetchMessages} = useDataHook();

  
  const handleSelectConversation = (conversationId) => {
    setSelectedConversation(conversationId)
    let chosenConversation = globalState.conversations?.find(conversation=>conversation.id===selectedConversation)
    fetchMessages(chosenConversation?.id,chosenConversation?.messageIds,0)
  }

  let hostId = globalState?.user?.id;



  // useEffect(() => {
  //   if (globalState?.conversations && globalState?.conversations.length > 0) {
  //     setSelectedConversation(globalState?.conversations[0].id)
  //   }
  // },[globalState?.conversations])
  




  return (
    <div >

      <div className='message-page-container'>

        <div className='message-page-wrapper-div'>
          <div className='first-column-wrapper' >
            <FirstColumn conversations={globalState?.conversations} setSelectedConversation={handleSelectConversation} />
          </div>
          <GroupchatWindow conversation={globalState?.conversations?.find(conversation => conversation.id === selectedConversation)} 
          hostId={hostId} />
        </div>
      </div>

    </div>
  )
}
export default Messages

// let styleCallButton = {
//   width: '40px',
//   height: '40px',
//   borderRadius: '50%',
//   background: 'var(--header-color)',
//   color: 'red',
//   margin: '0 10px'
// }