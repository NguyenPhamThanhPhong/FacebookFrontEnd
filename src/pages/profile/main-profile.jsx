import React from "react";
import "./profile.css";
import AvatarBar from "../../components/avatar-bar/avatar-bar";
import Posts from "../../components/post/posts";
import Newpost from "../../components/post/new-post";
import Mainpost from "../../components/post/main-post";
import ProfileMenus from "../../components/avatar-bar/profilemenu";

const MainProfile = () => {
  const image = 'assets/person/7.jpeg'
  return (
    <div className="MainProfile-container">
      <div className="MainProfile-item">
        <div className="avatarbarcontainer">
          <AvatarBar img = {image}/>
          <ProfileMenus image = {image}/>
        </div>
      </div>
    </div>
  
  );
};

export default MainProfile;
