import React from "react";
import "./profile.css";
import AvatarBar from "../../components/avatar-bar/avatar-bar";
import Posts from "../../components/post/posts";
import Newpost from "../../components/post/new-post";
import ProfileMenus from "../../components/avatar-bar/profilemenu";

const MainProfile = () => {
  return (
    <div className="MainProfile-container">
      <div className="MainProfile-item">
        <div className="avatarbarcontainer">
          <AvatarBar />
          <ProfileMenus />
        </div>
      </div>
    </div>
  );
};

export default MainProfile;
