// <============================Component here ============================>

// import FirstColumn from './first-column';
import Header from '@components/phong-messages-components/header-bar/Header';
import FirstColumn from '@pages/messages/first-column';
import RoundButton from '@root/components/phong-messages-components/Round-button';
import ChatTextbox from '@root/components/phong-messages-components/chat-window/Chat-textbox';
// <============================Library here ============================>

import React, { useState, useEffect, useRef } from 'react'
import { MessageBox, Avatar } from "react-chat-elements";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBellSlash, faVideo, faCircleInfo, faPhone } from '@fortawesome/free-solid-svg-icons';
// <============================CSS HERE ============================>
import "./messages.css"
import "react-chat-elements/dist/main.css"
// import { CSSTransition } from "react-transition-group"
// import CustomModal from './custom-modal';



function Messages(props) {
  document.querySelector("body").setAttribute("data-theme", "dark");

  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch('https://api.sampleapis.com/beers/ale');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  // useEffect(() => {
  //   fetchData();
  // }, []);

  let styleCallButton = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: 'var(--header-color)',
    color: 'red',
    margin: '0 10px'
  }
  let myMessages =[{position: ''},{position: 'right'},{position: ''},{position: ''},{position: ''},{position: ''}]

  for (let i = 0; i < 50; i++) {
    if(i%2===0)
     myMessages.push({position: 'right'})
    else
      myMessages.push({position: ''})
  }
  return (
    <div >
      <Header />

      <div className='message-page-wrapper-div'>
        <div className='first-column-wrapper' >
          <FirstColumn products={products} />
        </div>

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
          <div className='chat-box'>
            {myMessages.map((message, index) => {
              return (
                <MessageBox
                  key={index}
                  className='message-item '
                  notchStyle={{ fill: 'var(--header-color)' }}
                  position={message.position}
                  type={"text"}
                  text="Here is a text type message \n
                basdfasdfasdfasdfadsfaadsfox"
                />
              )
            })}
            <MessageBox
              className='message-item '
              notchStyle={{ fill: 'var(--header-color)' }}
              position='right'
              type={"text"}
              text="Here is a text type message \n
              basdfasdfasdfasdfadsfaadsfox"
            />

          </div>
          <div className='chat-footer'>
          <ChatTextbox />
            
          </div>
        </div>
      </div>


    </div>
  )
}
export default Messages