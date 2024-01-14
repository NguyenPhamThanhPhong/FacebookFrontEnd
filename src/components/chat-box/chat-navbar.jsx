import React, { Component } from "react";
// import "./chat-box.css";
import { Person, Phone, Videocam, Remove, Close } from "@mui/icons-material";
import "react-chat-elements/dist/main.css";
import { Avatar } from "react-chat-elements";
import { Navbar } from "react-chat-elements";

class Chat_navbar extends Component {
  render() {
    return (
      <Navbar
        left=<div>
          <Avatar
            src="https://avatars.githubusercontent.com/u/80540635?v=4"
            alt="avatar"
            size="xsmall"
            type="circle"
          />
        </div>
        type="dark"
      />
    );
  }
}

export default Chat_navbar;
