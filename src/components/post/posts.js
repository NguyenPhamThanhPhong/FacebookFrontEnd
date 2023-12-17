import React from "react";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import "./post.css";

import Comment from "./comment";
import { ModalBody } from "react-bootstrap";

const CommentModal = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div >
      <Modal style={{borderRadius:'10px',zIndex:'9999'}}
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div className="modal-post">
        <Modal.Header
          closeButton
          style={{ border: "0px", paddingBottom: "10px" }}
        >
          <Modal.Title id="contained-modal-title-vcenter">
            <Image
              src="https://img.freepik.com/free-photo/beautiful-nature-landscape-with-mountains-lake_23-2150705947.jpg?t=st=1702046850~exp=1702050450~hmac=86d2ada4d8881b53bfd83ca81f8a94fba7ee3ded65745ef889d5496f971a4da7&w=1800"
              roundedCircle
              width={50}
              height={50}
              style={{ marginRight: "10px" }}
            />
            <span>Card Title</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ padding: "0px" }}>
          <span style={{marginLeft:'10px'}}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </span>
          <Image
            src="https://img.freepik.com/free-photo/beautiful-nature-landscape-with-mountains-lake_23-2150705947.jpg?t=st=1702046850~exp=1702050450~hmac=86d2ada4d8881b53bfd83ca81f8a94fba7ee3ded65745ef889d5496f971a4da7&w=1800"
            style={{margin:"10px 0px" }}
            width={"100%"}
          />
          <div style={{padding:'5px'}}>
            <div className="interact">
              <span>cảm xúc</span>
              <div>
                <span style={{ marginRight: "10px" }}>bình luận</span>
                <span>lượt chia sẻ</span>
              </div>
            </div>
            </div>
        </Modal.Body>
        <Modal.Body>
          <div className="button-interact" style={{ width: "100%" }}>
            <Button>Thích</Button>
            <Button variant="primary">Bình luận</Button>

            <DropdownButton
              as={ButtonGroup}
              title="Chia sẻ"
              id="bg-nested-dropdown"
            >
              <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
              <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
            </DropdownButton>
            </div>  
        </Modal.Body>
        <Modal.Footer>
          {/* <div className="button-interact" style={{ width: "100%" }}>
            <Button>Thích</Button>
            <Button variant="primary">Bình luận</Button>

            <DropdownButton
              as={ButtonGroup}
              title="Chia sẻ"
              id="bg-nested-dropdown"
            >
              <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
              <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
            </DropdownButton>
          </div> */}
            <Comment/> 


        </Modal.Footer>
        </div>
      </Modal>
      
    </div>
  );
};

const Posts = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
      <Card bsPrefix="background">
        <Card.Body>
          <Card.Title >
            <Image
              src="https://img.freepik.com/free-photo/beautiful-nature-landscape-with-mountains-lake_23-2150705947.jpg?t=st=1702046850~exp=1702050450~hmac=86d2ada4d8881b53bfd83ca81f8a94fba7ee3ded65745ef889d5496f971a4da7&w=1800"
              roundedCircle
              width={50}
              height={50}
              style={{ margin:'10px' }}
            />
            <span >Card Title</span>
          </Card.Title>
          <Card.Text style={{padding:"0 10px 0 10px"}}>
            Someeeeeeeeeeeeeeeeee quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Img
            variant="top"
            src="https://img.freepik.com/free-photo/beautiful-nature-landscape-with-mountains-lake_23-2150705947.jpg?t=st=1702046850~exp=1702050450~hmac=86d2ada4d8881b53bfd83ca81f8a94fba7ee3ded65745ef889d5496f971a4da7&w=1800"
          />
        </Card.Body>
        <div style={{marginTop:'10px'}}>
          <div className="interact">
            <span>cảm xúc</span>
            <div>
              <span style={{ marginRight: "10px" }}>bình luận</span>
              <span>lượt chia sẻ</span>
            </div>
          </div>
          <hr style={{ margin: "1rem 16px" }} />
        </div>
        <div className="button-interact">
          <Button>Thích</Button>
          <Button variant="primary" onClick={() => setModalShow(true)}>
            Bình luận
          </Button>

          <CommentModal show={modalShow} onHide={() => setModalShow(false)} />

          <DropdownButton
            as={ButtonGroup}
            title="Chia sẻ"
            id="bg-nested-dropdown"
          >
            <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
            <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
          </DropdownButton>
        </div>
      </Card>
    </div>
  );
};

export default Posts;
