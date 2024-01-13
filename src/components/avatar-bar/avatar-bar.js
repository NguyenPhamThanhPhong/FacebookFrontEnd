import React, { useState } from "react";
import "./avatar-bar.css";
import ProfileEdit from "./profile-edit";
import { useDataHook } from "../../data-hook"

export default function AvatarBar(props) {

  
  let user = props?.user || null;
  let friendIds = user?.friendIds;
  let avatarUrl = user?.personalInfo?.avatarUrl;

  let relationship = props?.relationship;
  console.log(relationship);
  const {sendFriendRequest,undoFriendRequest,acceptFriendRequest,unfriend} = useDataHook();


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
                {
                  relationship === 'friend' && (
                    <span className="profileEdit"> <button>unfriend</button> </span>
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


