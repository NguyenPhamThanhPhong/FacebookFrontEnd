import "./friend.css";
import Chatbox from "../../components/chat-box/chatbox";




const Friend = () => {
  const openchatbox = () =>{
      <Chatbox/>
  }
  return (
    <div className="container">
      <div className="item">
        <span>Online Friends</span>
        <div className="user" onClick={() => openchatbox() }>
          <div className="userInfo">
            <img
              className="img-user"
              src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <div className="online" />
            <span>Jane Doe</span>
          </div>
        </div>
        <div className="user">
          <div className="userInfo">
            <img
              className="img-user"
              src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <div className="online" />
            <span>Jane Doe</span>
          </div>
        </div>
        <div className="user">
          <div className="userInfo">
            <img
              className="img-user"
              src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <div className="online" />
            <span>Jane Doe</span>
          </div>
        </div>
        <div className="user">
          <div className="userInfo">
            <img
              className="img-user"
              src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <div className="online" />
            <span>Jane Doe</span>
          </div>
        </div>
        <div className="user">
          <div className="userInfo">
            <img
              className="img-user"
              src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <div className="online" />
            <span>Jane Doe</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friend;
