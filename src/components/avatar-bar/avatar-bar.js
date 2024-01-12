import React, { useState } from "react";
import "./avatar-bar.css";
import ProfileEdit from "./profile-edit";


export default function AvatarBar(props) {
  return (
    <>
    <div className="Profile-main">
      <div className="ProfileCover">
              <img
                className="profileCoverImg"
                src="assets/post/3.jpeg"
                alt=""
              />
              <img
                className="profileUserImg"
                src={props.img}
                alt=""
              />
              <div className="profileInfo">
                <h4 className="profileInfoName">Your Name</h4>
                <span className="profileInfoDesc">999 Friends</span>
                <span className="profileEdit"> <ProfileEdit/> </span>
              </div>
              
      </div>
            
      <hr className="Crossline"></hr>    
    </div>
    </>
  );
};


