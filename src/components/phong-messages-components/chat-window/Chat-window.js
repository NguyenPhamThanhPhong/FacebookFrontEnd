import './Chat-window.css';

import ChatTextbox from '@root/components/phong-messages-components/chat-window/Chat-textbox';
import RoundButton from '@root/components/phong-messages-components/Round-button';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBellSlash, faCircleInfo, faPhone, faVideo } from '@fortawesome/free-solid-svg-icons'
import { MessageBox, Avatar } from "react-chat-elements";
import React, { useState, useEffect, useRef } from 'react'






function ChatWindow() {


      let myMessages = [{ position: '', text: "\n" }, { position: 'right' }, { position: '' }, { position: '' }, { position: '' }, { position: '' }]
    
      for (let i = 0; i < 50; i++) {
        if (i % 2 === 0)
          myMessages.push({ position: 'right' })
        else
          myMessages.push({ position: '' })
      }


    return (
        <div className='chat-window'>

        <div className='chat-header'>
          <div className='chat-title-group'>
            <div style={{ Display: 'inline' }}>
              <Avatar src="https://avatars.githubusercontent.com/u/80540635?v=4"
                alt="avatar"
                size="xlarge"
                type="circle"
              />
            </div>
            <div className='chat-conversation-title'>
              <div>
                <h5>Taroumaru's Playground</h5>
                <FontAwesomeIcon className='chat-notification-status' icon={faBellSlash} />
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
          {myMessages.map((message, index) => {
            return (
              <div className='chat-message-row'>
                {message.position === '' && <Avatar src="https://avatars.githubusercontent.com/u/80540635?v=4"
                  alt="avatar"
                  size="xlarge"
                  type="circle"
                />}
                <MessageBox
                  key={index}
                  className='message-item '
                  notchStyle={{ fill: message.position === 'right' ? 'var(--facebook-color)' : 'var(--message-color)' }}
                  position={message.position}
                  type={"text"}
                  text="Here is a text type message adsfkasd;lfkopwq3eiqw,ennjsa,djf
          kasd;lfkopwq3eiqw,ennjsa,djf kasd;lfkopwq3eiqw,ennjsa,djf
      basdfasdfasdfasdfadsfaadsfox"
                />
              </div>

            )
          })}
        </div>
        <div className='chat-footer'>
          <ChatTextbox />

        </div>
      </div>
    );
}

export default ChatWindow;
