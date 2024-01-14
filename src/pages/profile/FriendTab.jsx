import { MessageBox, Avatar } from "react-chat-elements";
import React, { useState, useEffect, useRef } from 'react';
import { useGlobalContext } from '../../data-store';
import './profile.css';
import {
  GroupAdd,
  DoDisturb,
} from "@mui/icons-material";

const FriendTab = () => {
  const [globalState, dispatchGlobalState] = useGlobalContext();
  let people = globalState?.people;

  const [searchInput, setSearchInput] = useState('');
  const [selectedFriends, setSelectedFriends] = useState([]);
  const filteredFriends = people && people.filter(friend =>
      friend.personalInfo?.name && friend.personalInfo?.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className="separate">
      <div className="friendtabcontainer">
        <div className='friend-search'>
          <input
            type="text"
            placeholder="To :"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          {filteredFriends.length > 0 && (
            <div className='search-results'>
              {filteredFriends.map((friend, index) => (
                <div key={index} className='friend-result'>
                  {/* You can customize the appearance of each friend result */}
                  <Avatar
                    src={friend.avatarUrl || 'https://www.w3schools.com/howto/img_avatar.png'}
                    alt="avatar"
                    size="medium"
                    type="circle"
                  />
                  <span className=''>{friend?.personalInfo?.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
          <div className="friend">
          <div className="info-friend">
            <img
              className="img-friend"
              src="./assets/person/1.jpeg"
              alt=""
            />
            <span className="name-friend">Jane Doe</span>
            <div className="friend-buttons">
              <button type="button" className="btn btn-success smaller-button">
                <GroupAdd sx={{ fontSize: 20 }} className="buttonIcon"/>Accept
              </button>
              <button type="button" className="btn btn-danger smaller-button">
                <DoDisturb sx={{ fontSize: 20 }} className="buttonIcon"/>Decline
              </button>
            </div>
          </div>
        </div>

        <div className="friend">
          <div className="info-friend">
            <img
              className="img-friend"
              src="./assets/person/2.jpeg"
              alt=""
            />
            <span className="name-friend">Joe Dane</span>
          </div>
        </div>

        <div className="friend">
          <div className="info-friend">
            <img className="img-friend"
              src="./assets/person/3.jpeg"
              alt=""
            />
            <span className="name-friend">Jane Doe</span>
          </div>
        </div>

        <div className="friend">
          <div className="info-friend">
            <img
              className="img-friend"
              src="./assets/person/4.jpeg"
              alt=""
            />
            <span className="name-friend">Jane Doe</span>
          </div>
        </div>

        <div className="friend">
          <div className="info-friend">
            <img
              className="img-friend"
              src="./assets/person/5.jpeg"
              alt=""
            />
            <span className="name-friend">Jane Doe</span>
          </div>
        </div>

        <div className="friend">
          <div className="info-friend">
            <img
              className="img-friend"
              src="./assets/person/6.jpeg"
              alt=""
            />
            <span className="name-friend">Jane Doe</span>
          </div>
        </div>

        <div className="friend">
          <div className="info-friend">
            <img
              className="img-friend"
              src="./assets/person/7.jpeg"
              alt=""
            />
            <span className="name-friend">Jane Doe</span>
          </div>
        </div>

        <div className="friend">
          <div className="info-friend">
            <img
              className="img-friend"
              src="./assets/person/8.jpeg"
              alt=""
            />
            <span className="name-friend">Jane Doe</span>
          </div>
        </div>

        <div className="friend">
          <div className="info-friend">
            <img
              className="img-friend"
              src="./assets/person/9.jpeg"
              alt=""
            />
            <span className="name-friend">Jane Doe</span>
          </div>
        </div>

        <div className="friend">
          <div className="info-friend">
            <img
              className="img-friend"
              src="./assets/person/10.jpeg"
              alt=""
            />
            <span className="name-friend">Jane Doe</span>
          </div>
        </div>

        <div className="friend">
          <div className="info-friend">
            <img
              className="img-friend"
              src="./assets/person/1.jpeg"
              alt=""
            />
            <span className="name-friend">Jane Doe</span>
          </div>
        </div>

        </div>
    </div>
  );
};

export default FriendTab;