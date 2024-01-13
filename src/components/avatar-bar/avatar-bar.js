import React, { useState } from "react";
import "./avatar-bar.css";
import ProfileEdit from "./profile-edit";

export default function AvatarBar(props) {

  
  let user = props?.user || null;
  let friendIds = user?.friendIds;
  let avatarUrl = user?.personalInfo?.avatarUrl;

  let relationship = props?.relationship;
  console.log(relationship);


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
                {
                  relationship === 'self' && (
                    <span className="profileEdit"> <ProfileEdit myUser={user} /> </span>
                  )
                }
                {
                  relationship === 'other' && (
                    <span className="profileEdit"> <button>add friend</button> </span>
                  )
                }
              </div>

            </div>

            <hr className="Crossline"></hr>
          </div>)
      }
    </>
  );
};


