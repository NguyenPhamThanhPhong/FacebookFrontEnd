import React, { useState } from "react";
import "./friend.css";
import Chatbox from "../../components/chat-box/chatbox";

const Friend = () => {
  const [componentTwoList, setComponentTwoList] = useState([]);

  const handleButtonClick = () => {
    // Thêm một instance mới của ComponentTwo vào mảng, với vị trí dựa trên vị trí trước đó
    setComponentTwoList((prevList) => [
      ...prevList,
      { position: prevList.length * 10 + 10 }, // Cập nhật vị trí cách 10px so với component trước
    ]);
  };

  return (
    <div className="container">
      <div className="item">
        <span>Online Friends</span>
      </div>
      <div className="user-online">
        <div className="user" onClick={() => handleButtonClick()}>
          <div className="userInfo">
            <img
              className="img-user"
              src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <div className="online" />
            <span className="name-user">Jane Doe</span>
            {componentTwoList.map((item, index) => (
              <Chatbox key={index} position={item.position} />
            ))}
          </div>
        </div>
        <div className="user" onClick={() => handleButtonClick()}>
          <div className="userInfo">
            <img
              className="img-user"
              src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <div className="online" />
            <span className="name-user">Jane Doe</span>
            {componentTwoList.map((item, index) => (
              <Chatbox key={index} position={item.position} />
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Friend;
