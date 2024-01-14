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
                {
                  relationship === friendState.self && (
                    <span className="profileEdit"> <ProfileEdit myUser={user} /> </span>
                  )
                }
                {
                  relationship === friendState?.stranger && (
                    <span className="profileEdit"> <button onClick={handleAddFriend} >thêm bạn</button> </span>
                  )
                }
                {
                  relationship === friendState.friendWaitAccept && (
                    <span className="profileEdit"> <button onClick={handleUndoFriendRequest}>thu hồi lời kết bạn</button> </span>
                  )
                }
                {
                  relationship === friendState.friendRequest && (
                    <span>
                      <span className="profileEdit"> <button onClick={handleRejectFriendRequest} >Từ chối</button> </span>
                      <span className="profileEdit"> <button onClick={handleAcceptFriendRequest} >Chấp nhận</button> </span>
                    </span>
                  )
                }
                {
                  relationship === friendState.friend && (
                    <span className="profileEdit"> <button onClick={handleUnfriend}>hủy kết bạn</button> </span>
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


