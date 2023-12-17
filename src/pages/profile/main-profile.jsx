import React from "react";
import "./profile.css";
import AvatarBar from "../../components/avatar-bar/avatar-bar";
import Posts from "../../components/post/posts";
import Newpost from "../../components/post/new-post";

const MainProfile = () => {
  return (
    <div className="MainProfile-container">
      <div className="MainProfile-item">
        <div className="avatarbarcontainer">
          <AvatarBar />
          <Newpost/>
          <Posts/>
        </div>
      </div>
    </div>
  );
};

export default MainProfile;
