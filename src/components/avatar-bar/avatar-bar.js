import React, { useState } from "react";
import "./avatar-bar.css";
import ProfileEdit from "./profile-edit";
import { useDataHook } from "../../data-hook"

const friendState = {
  friend: 'friend',
  friendRequest: 'friendRequest',
  friendWaitAccept: 'friendWaitAccept',
  stranger: 'stranger',
  self: 'self',
}

export default function AvatarBar(props) {


  let user = props?.user || null;
  let friendIds = user?.friendIds;
  let avatarUrl = user?.personalInfo?.avatarUrl;

  let relationship = props?.relationship;
  console.log(relationship);
  const { sendFriendRequest, undoFriendRequest, acceptFriendRequest,rejectFriendRequest, unfriend } = useDataHook();

  const handleAddFriend = () => {
    sendFriendRequest(user?.id);
  }
  const handleUndoFriendRequest = () => {
    undoFriendRequest(user?.id);
  }
  const handleAcceptFriendRequest = () => {
    acceptFriendRequest(user?.id, 1, user?.name, user?.avatarUrl);
  }

  const handleRejectFriendRequest = () => {
    rejectFriendRequest(user?.id);
  }

  const handleUnfriend = () => {
    unfriend(user?.id);
  }


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
              </div>
                <div className="abcxyz">
                {
                  relationship === friendState.self && (
                    <span className="profileEdit"> <ProfileEdit myUser={user} /> </span>
                  )
                }
                {
                  relationship === friendState?.stranger && (
                    <span> <button className="Addfriend-button" onClick={handleAddFriend}> Add friend</button> </span>
                  )
                }
                {
                  relationship === friendState.friendWaitAccept && (
                    <span> <button className="UndoRequest" onClick={handleUndoFriendRequest}>Undo request</button> </span>
                  )
                }
                {
                  relationship === friendState.friendRequest && (
                    <div className="friend-request-message">
                      {user?.personalInfo?.name} sent you a friend request
                      <span> <button className="AcceptRequest" onClick={handleAcceptFriendRequest} >Accept request</button> </span>
                      <span> <button className="DenyRequest" onClick={handleRejectFriendRequest} >Deny request</button> </span> 
                    </div>
                  )
                }
                {
                  relationship === friendState.friend && (
                    <span > <button className="Unfriend-button" onClick={handleUnfriend}>Unfriend</button> </span>
                  )
                }
                </div>
              

            </div>


          </div>)
      }
    </>
  );
};


