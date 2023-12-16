import React, { useState } from "react";
import "./avatar-bar.css";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';


export default function AvatarBar() {
  return (
    <>
    <div>
      <div className="ProfileCover">
              <img
                className="profileCoverImg"
                src="assets/post/3.jpeg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="assets/person/7.jpeg"
                alt=""
              />
              <div className="profileInfo">
                <h4 className="profileInfoName">Your Name</h4>
                <span className="profileInfoDesc">999 Friends</span>
            </div>
      </div>
            
      <hr className="Crossline">
           </hr>

            {/* <div className="buttonContainer"> */}
                    {/* <div className="button-interact" style={{ width: "100%" }}>

            <Button variant="primary">Posts</Button>

            <Button variant="primary">Introduction</Button>

            <Button variant="primary">Friends</Button>

            <Button variant="primary">Photos</Button>

            <Button variant="primary">Videos</Button>

            <DropdownButton
              as={ButtonGroup}
              title="..."
              id="bg-nested-dropdown"
            >
              <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
              <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
            </DropdownButton>
            </div>   */}
            {/* </div> */}
           
           
    </div>
    </>
  );
};


