import { Button } from "react-bootstrap";
import "./recommendfriend.css";

const RecommendFriend = () => {
  return (
    <div className="background-rcm">
      <div className="container-rcm">
        <div className="item-rcm">
          <div className="item-rcm-infor">
            <img
              className="img-user"
              src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <span className="name-user">Jane Doe</span>
          </div>
          <Button>Thêm bạn bè</Button>
        </div>
        <div className="item-rcm">
          <div className="item-rcm-infor">
            <img
              className="img-user"
              src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <span className="name-user">Jane Doe</span>
          </div>
          <Button>Thêm bạn bè</Button>
        </div>
        <div className="item-rcm">
          <div className="item-rcm-infor">
            <img
              className="img-user"
              src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <span className="name-user">Jane Doe</span>
          </div>
          <Button>Thêm bạn bè</Button>
        </div>
      </div>
    </div>
  );
};

export default RecommendFriend;
