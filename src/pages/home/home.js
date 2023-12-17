// <<style here>>
import "./home.css";
import "../../index.css";
//css here

// component here
import Topbar from "../../components/header/top-bar";
import SidebarLeft from "../../components/SideBar/Left/SideBar";
import SidebarRight from "../../components/SideBar/Right/SideBar-Right";
import ChatWindow from "@components/phong-messages-components/chat-window/Chat-window";
import MessageShortcutColumn from "../../components/message-shortcut/MessageShortcutColumn";
import Sidebar from "../../components/SideBar/Left/SideBar";

// component here

import React, { useState } from "react";
import Friend from "../../components/friends/friend";
import Mainpost from "../../components/post/main-post";
import { faBell, faX } from "@fortawesome/free-solid-svg-icons";

import Header from "../../components/phong-messages-components/header-bar/Header";

function Home(props) {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
  };
  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
  };

  const handleThemeChange = (e) => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };

  let chatWindowCustomStyle = {
    avatarSize: "small",
    customXIcon: faX,
    customIconSize: "80%",
    customIconButtonSize: "30px",
  };
  let conversation = {
    subText: "Active 1h ago",
  };

  return (
    <div className="homepage">
      <div className="homecontainer">
        <div className="container-item">
          <SidebarLeft />

          <Mainpost />

          <div className="rightmenu">
            <SidebarRight />
            <Friend />
          </div>
          {/* <div  className='chat-mini-window'>
                    <ChatWindow customStyle={chatWindowCustomStyle} conversation={conversation} />
                </div> */}
          {/* <MessageShortcutColumn/> */}
        </div>
      </div>
    </div>
  );
}
export default Home;
