import React, { useState,useRef } from "react";
import "./chat-box.css";
import { Input } from "react-chat-elements";
import { Button } from "react-chat-elements";
import { clear } from "@testing-library/user-event/dist/clear";

const Chat_input = ({ onSendMessage }) => {
  const [newMessage, setNewMessage] = useState('');
  const inputRef = useRef();

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      onSendMessage(newMessage);
      setNewMessage('');

      if (inputRef.current) {
        inputRef.current.input.value = '';
      }
    }
  };


  return (
    <Input className="input"
      placeholder="Type your message..."
      multiline={true}
      maxHeight={75}
      minHeight={25}
      value={newMessage}
      onChange={(e) => setNewMessage(e.target.value)}
      rightButtons=<Button text={"Send"} onClick={() => handleSendMessage()} />
      ref={inputRef}
    />
  );
};

export default Chat_input;

