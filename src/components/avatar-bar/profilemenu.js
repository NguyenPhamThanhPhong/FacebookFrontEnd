// profilemenu.js
import React from 'react';
import Mainpost from '../../components/post/main-post';
import "./profilemenu.css";
import About from '../../pages/profile/AboutTab';
import FriendTab from '../../pages/profile/FriendTab';
import PhotoTab from '../../pages/profile/PhotoTab';
import VideoTab from '../../pages/profile/VideoTab';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useGlobalContext } from "../../data-store"

function ProfileMenus(props) {
  let user = props?.user || null;

  return (
    <div className='ProfileMenusMain'>
      <Tab.Container id="left-tabs-example" defaultActiveKey="1">
        <Nav variant="pills" className="TabContainer">
          <Nav.Item>
            <Nav.Link eventKey="1">Posts</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="2">About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="3">Friends</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="4">Photos</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="5">Videos</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content as="div" className="tab-content">
          <Tab.Pane eventKey="1">
            <Mainpost image={props.image} />
          </Tab.Pane>
          <Tab.Pane eventKey="2">
            <About user={user} activeKey={props.activeKey} />
          </Tab.Pane>
          <Tab.Pane eventKey="3">
            <FriendTab />
          </Tab.Pane>
          <Tab.Pane eventKey="4">
            <PhotoTab />
          </Tab.Pane>
          <Tab.Pane eventKey="5">
            <VideoTab />
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
}

export default ProfileMenus;
