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

function NewPostModal(props) {
  return (
    
    <Modal 
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className="modal-post">

      <Modal.Header closeButton closeVariant ='white'>
        <Modal.Title id="contained-modal-title-vcenter">
          <span>Tạo bài viết</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={{marginBottom:'10px'}}>
          <Image
            src={props.imageuser}
            roundedCircle
            className="image-user"
          />
          <span>hello{props.name}</span>
        </div>
        <Form >
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" rows={10} placeholder="Bạn đang nghĩ gì ?"/>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} style={{width:'90%'}}>đăng</Button>
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
