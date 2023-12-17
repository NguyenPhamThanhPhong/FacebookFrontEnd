import React, { useState } from 'react';
import Friend from '../../components/friends/friend';
import Mainpost from '../../components/post/main-post';
import "./profilemenu.css";
import About from '../../pages/profile/about';
//React-API here
import Nav from 'react-bootstrap/Nav';
import NavLink from 'react-bootstrap/NavLink'
import NavItem from 'react-bootstrap/NavItem'
import { NavDropdown } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import TabContainer from 'react-bootstrap/TabContainer'
import TabContent from 'react-bootstrap/TabContent';
import TabPane from 'react-bootstrap/TabPane';
import 'bootstrap/dist/css/bootstrap.min.css';


function ProfileMenus() {
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
              <Nav.Link eventKey="6">Videos</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="7">More</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link eventKey="8">...</Nav.Link>
            </Nav.Item>
            
          </Nav>
          <Tab.Content as = 'tab-content'>

            <Tab.Pane  eventKey="1">
                <Mainpost/>
            </Tab.Pane>
            <Tab.Pane  eventKey="2">
                <About/>
            </Tab.Pane>
            <Tab.Pane eventKey="3">
                <Friend/>
            </Tab.Pane>

          </Tab.Content>
    </Tab.Container>
    </div>
  );
}

export default ProfileMenus;