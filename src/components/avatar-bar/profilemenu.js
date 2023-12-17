import Topbar from '../../components/header/top-bar';
import SidebarLeft from '../../components/SideBar/Left/SideBar';
import SidebarRight from '../../components/SideBar/Right/SideBar-Right'
import MessageShortcutColumn from '../../components/message-shortcut/MessageShortcutColumn';
import Sidebar from '../../components/SideBar/Left/SideBar'
import React, { useState } from 'react';
import Friend from '../../components/friends/friend';
import Mainpost from '../../components/post/main-post';
import Header from '../../components/phong-messages-components/header-bar/Header';
import AvatarBar from '../../components/avatar-bar/avatar-bar';
import "./profilemenu.css";
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';



function ProfileMenus() {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Nav variant="underline" className="TabContainer">
            <Nav.Item>
              <Nav.Link eventKey="first">Posts</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">Friends</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">Photos</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">Videos</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">More</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">...</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="first">
                <Mainpost/>
            </Tab.Pane>
            <Tab.Pane eventKey="third">
                <Friend/>
            </Tab.Pane>
          </Tab.Content>
    </Tab.Container>
  );
}

export default ProfileMenus;