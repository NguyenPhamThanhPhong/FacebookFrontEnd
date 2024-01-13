import React, { useState } from "react";
import "./avatar-bar.css";
import ProfileEdit from "./profile-edit";
import { useGlobalContext } from "../../data-store"

export default function AvatarBar(props) {

  let user = props?.user || null;
  let friendIds = user?.friendIds;
  let avatarUrl = user?.personalInfo?.avatarUrl;


  return (
    <>
      {
        user?.id && (
          <div className="Profile-main">
            <div className="ProfileCover">
              <img
                className="profileCoverImg"
                src={avatarUrl}
                alt=""
              />
              <img
                className="profileUserImg"
                src={avatarUrl}
                alt=""
              />
              <div className="profileInfo">
                <h4 className="profileInfoName">{user?.personalInfo?.name}</h4>
                <span className="profileInfoDesc">{friendIds?.length + 'friends'}</span>
                <span className="profileEdit"> <ProfileEdit myUser={user} /> </span>
              </div>

            </div>

            <hr className="Crossline"></hr>
          </div>)
      }
    </>
  );
};


