import "./post.css";
import React from "react";
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
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import ImageIcon from '@mui/icons-material/Image';

function NewPostModal(props) {
  const [content, setContent] = useState("");
  const [anhs, setAnhs] = useState([]);

  

  const onFileUploadHandler = (e) => {
    setAnhs(e.target.files);
  };

  const incacanh = () => {
    return [...anhs].map((anh) => (
      <div>
        <div>
          <img src={URL.createObjectURL(anh)} width={`100%`}/>
        </div>
      </div>
    ));
  };

  const Checkanh = () => {
    if (anhs.length != 0)
      return (
        <div
          className="bg-image hover-overlay"
          style={{
            borderRadius: "10px",
            border: "1px solid white",
            padding: "10px",
            margin: "10px",
          }}
        >
          {incacanh()}
        </div>
      );
  };

  const handleInput = (e) => {
    const userInput = e.target.innerText;
    setContent(userInput);
  };

  const handlePost = () => {
    // Tạo một đối tượng JSON với thông tin bài viết
    const postData = {
      content: content,
      images: {}
    };

    [...anhs].forEach((anh, index) => {
      const fileName = `image_${index + 1}.png`; // Tên tệp ngẫu nhiên hoặc duy nhất
      const imageUrl = URL.createObjectURL(anh);
  
      // Thêm ảnh vào đối tượng images
      postData.images[fileName] = imageUrl;
    });
    // Ghi đối tượng JSON vào console
    console.log(postData);

  };

  return (
    
    <Modal 
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className="modal-post">
        <Modal.Header closeButton closeVariant="white">
          <Modal.Title id="contained-modal-title-vcenter">
            <span>Tạo bài viết</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ marginBottom: "10px" }}>
            <Image src={props.imageuser} roundedCircle className="image-user" />
            <span>hello {props.name}</span>
          </div>
          <div style={{ minHeight: "200px" }}>
            <div
              style={{
                width: "100%",
                minHeight: "200px",
                color: "white",
                fontSize: "24px",
                userSelect: "text",
                padding: "5px",
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
              }}
              role="textbox"
              contentEditable
              spellCheck
              onInput={handleInput}
            >
            </div>
              {Checkanh()}
          </div>
          <div>
            <ImageIcon
              onClick={() => document.getElementById("file").click()}
            ></ImageIcon>
            <input
              style={{ display: "none" }}
              type="file"
              id="file"
              multiple
              accept="image/*"
              onChange={onFileUploadHandler}
            ></input>
          </div>
        </Modal.Body>
        <Modal.Body>
          <div></div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
              handlePost()
            }}
            style={{ width: "90%" }}
          >
            đăng
          </Button>
        </Modal.Footer>
      </div>
    </Modal>
  );
}

const Newpost = (props) => {
  const ImageUrl = 'assets/heart.png'
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="newpost-main">
      <div className="newpost-background">
        <div className="container-newpost">
          <div className="newpost-input">
            <Image
              src={props.image}
              roundedCircle
              className="image-user"
            />
            <div className="input-post" onClick={() => setModalShow(true)}>
              <span>What's in your mind SafaK?</span>
            </div>
            <NewPostModal imageuser={props.image} show={modalShow} onHide={() => setModalShow(false)} />
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

              <div className="newpost-icon">
                <FontAwesomeIcon
                  icon={faFaceSmile}
                  size="lg"
                  style={{ color: "yellowgreen" }}
                />
                <span> Feelings</span>
              </div>
            </div>
            <Button variant="primary" onClick={() => setModalShow(true)}>
              Share
            </Button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newpost;
