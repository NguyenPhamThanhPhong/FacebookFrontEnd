import React, { useState } from "react";
import "./grouplist.css";
import Chatbox from "../chat-box/chatbox";

const GroupList = () => {
  const [componentTwoList, setComponentTwoList] = useState([]);

  const handleButtonClick = () => {
    // Thêm một instance mới của ComponentTwo vào mảng, với vị trí dựa trên vị trí trước đó
    setComponentTwoList((prevList) => [
      ...prevList,
      { position: prevList.length * 10 + 10 }, // Cập nhật vị trí cách 10px so với component trước
    ]);
  };

  return (
    
      <div className="my-group">
        <div className="group" onClick={() => handleButtonClick()}>
          <div className="userInfo">
            <img
              className="img-group"
              src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <div className="online" />
            <span className="name-group">Group hoc tap</span>
            {componentTwoList.map((item, index) => (
              <Chatbox key={index} position={item.position} />
            ))}
          </div>
        </div>
        <div className="group" onClick={() => handleButtonClick()}>
          <div className="userInfo">
            <img
              className="img-group"
              src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <div className="online" />
            <span className="name-group">Hahahihi</span>
            {componentTwoList.map((item, index) => (
              <Chatbox key={index} position={item.position} />
            ))}
          </div>
        </div>
      </div>
      
    
  );
};

export default GroupList;
