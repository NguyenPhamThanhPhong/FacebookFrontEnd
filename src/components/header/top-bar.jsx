import React from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import { faBell,faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from 'react-bootstrap/Image';
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

function TopBar() {
  return (
    <div style={{background:'#242526', color:'white'}}>

    <Navbar className="bg-body-tertiary-fixed header justify-content-between" >
      <Navbar.Brand href="#home" style={{color:'white'}}>Facebook clone</Navbar.Brand>
      <div className="search-bar">
        <FontAwesomeIcon icon={faMagnifyingGlass} style={{margin:'10px',color:`var(--color-item-navbar)`}} />
        <input type="text" className="search-input" placeholder="Tìm kiếm"></input>
      </div>
      <div className="container-button">
        <div className="buttonstyle">
          <FontAwesomeIcon icon={faFacebookMessenger} />
        </div>
        <div className="buttonstyle">
          <FontAwesomeIcon icon={faBell} />
        </div>
        <Image src="https://th.bing.com/th/id/OIP.kVVWYJbqPc6WJpRrScsBswHaE7?rs=1&pid=ImgDetMain" roundedCircle className="image-user"/>
      </div>
    </Navbar>
    </div>
  );
}

export default TopBar;
