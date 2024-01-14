import React, { useState, useRef, useEffect } from 'react';
// import "./chat-box.css";
import { MessageList } from "react-chat-elements";
import "react-chat-elements/dist/main.css";

const Chat_messages = ({ messages }) => {
  const messageListRef = useRef(null);

  useEffect(() => {
    // Cuộn đến bottom khi component được render hoặc messages thay đổi
    if (messageListRef.current) {
      messageListRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, [messages]);

  return (
    <div style={{ height: '300px', overflowY: 'auto',backgroundColor:'gray'}}>
      <MessageList
        className='message-list'
        lockable={true}
        toBottomHeight={'100%'}
        dataSource={messages.map(message => ({
          position: message.sender === 'me' ? 'right' : 'left',
          type: 'text',
          text: message.text,
        }))}
      />
      <div ref={messageListRef}></div>
    </div>
  );
};

export default Chat_messages;
