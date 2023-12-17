import React, { useState } from "react";
import Chat_navbar from "./chat-navbar";
import Chat_messages from "./chat-messages";
import Chat_input from "./chat-input";
import "./chat-box.css";

const Chatbox = () => {
  const [messages, setMessages] = useState([
    { sender: "me", text: "Hello!" },
    { sender: "other", text: "Hi there!" },
  ]);

  const handleSendMessage = (newMessage) => {
    setMessages([...messages, { sender: "me", text: newMessage }]);
  };

  return (
    <div className="container-chat">
      <Chat_navbar />
      <Chat_messages messages={messages}/>
      <Chat_input onSendMessage={handleSendMessage} />
    </div>
  );
};

export default Chatbox;
