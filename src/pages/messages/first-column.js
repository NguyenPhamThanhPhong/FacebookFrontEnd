import ConversationItem from '../../components/phong-messages-components/Conversation-item';
import RoundButton from "../../components/phong-messages-components//Round-button";
import SearchBox from "../../components/phong-messages-components//header-bar/search/Search-box";

import React, { useState } from 'react';

import "./first-column.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import GroupchatWindow from '../../components/phong-messages-components/chat-window/Groupchat-window';

function FirstColumn(props) {

 
  let arrow = <RoundButton width={'35px'} height={'35px'}
    icon={faArrowLeft}
    iconWidth={'90%'} iconHeight={'90%px'} />



  let searchboxContainerStyle = {
    width: '95%',
    height: '40px',
    borderRadius: '20px',
    margin: 'auto'
  }

  let conversations = props.conversations


  return (
    <div >

      <div className='first-column-title-wrapper'>
        <h4 className='first-column-chat'>
          Chats
        </h4>
          <GroupchatWindow/>
          
          
      </div>
      <SearchBox backIcon={arrow} textboxContainerStyle={searchboxContainerStyle} />

      <div className="scrollable-product-list">
        {
          conversations && conversations.map((item, index) => {
            return (
              <ConversationItem onclick={props.setSelectedConversation}  conversationName={item?.name} message={item?.message} avatarUrl={item?.avatarUrl} myKey={item.id} />
            )
          })
        }
      </div>
    </div>
  );
}

export default FirstColumn;