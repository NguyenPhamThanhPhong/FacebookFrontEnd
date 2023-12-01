import "./post.css";
import Image from "react-bootstrap/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImages,
  faTag,
  faLocationDot,
  faFaceSmile,
} from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
const Newpost = () => {
  return (
    <div className="container-newpost">
      <div className="newpost-input">
        <Image
          src="https://th.bing.com/th/id/OIP.kVVWYJbqPc6WJpRrScsBswHaE7?rs=1&pid=ImgDetMain"
          roundedCircle
          className="image-user"
        />
        <div className="input-post">
          <span>What's in your mind SafaK?</span>
        </div>
      </div>
      <hr />
      <div className="newpost-service">
        <div className="container-icon">
          <div className="newpost-icon">
            <FontAwesomeIcon
              icon={faImages}
              size="lg"
              style={{ color: "red" }}
            />
            <span> Photo or Video</span>
          </div>
          <div className="newpost-icon" >
            <FontAwesomeIcon icon={faTag} size="lg" style={{ color: "blue" }} />
            <span> Tag</span>
          </div>
          <div className="newpost-icon">
            <FontAwesomeIcon
              icon={faLocationDot}
              size="lg"
              style={{ color: "green" }}
            />
            <span> Location</span>
          </div>
          <div className="newpost-icon">
            <FontAwesomeIcon
              icon={faFaceSmile}
              size="lg"
              style={{ color: "yellowgreen" }}
            />
           <span> Feelings</span>
          </div>
        </div>
        <Button variant="primary">Share</Button>{" "}
      </div>
    </div>
  );
};

export default Newpost;
