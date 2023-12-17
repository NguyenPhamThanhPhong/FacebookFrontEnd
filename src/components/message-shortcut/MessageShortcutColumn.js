
import './MessageShortcutColumn.css';
import React, { useState } from "react";
import Chatbox from "../../components/chat-box/chatbox";


const MessageShortcutColumn = ({ messages, onChatOpen, onBubbleClose }) => {
//   return (
//     <div className="message-shortcut-column">
//       {messages.map((message, index) => (
//         <div key={index} className="chat-bubble">
//           <img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" alt={`User ${index + 1}`} className="avatar" />
//           <button className="close-button" onClick={() => onBubbleClose(index)}>
//             X
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

const [componentTwoList, setComponentTwoList] = useState([]);

  const handleButtonClick = () => {

    setComponentTwoList((prevList) => [
      ...prevList,
      { position: prevList.length * 10 + 10 }, 
    ]);
  };

  return (
    
      <div className="ongoing-chat">
        <div className="user" onClick={() => handleButtonClick()}>
          <div className="userInfo">
            <img
              className="img-user"
              src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <div className="online" />
            
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

            {componentTwoList.map((item, index) => (
              <Chatbox key={index} position={item.position} />
            ))}
          </div>
        </div>
      </div>
      
    
  );
};







export default MessageShortcutColumn;

