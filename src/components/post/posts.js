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
import { Commentdata } from "../../data/comment-api.js";
import Form from "react-bootstrap/Form";
import Comment from "./comment.js";
import { ModalBody } from "react-bootstrap";
import NewComment from "../../components/post/newcomment.js";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const CommentModal = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Modal
        style={{ borderRadius: "10px", zIndex: "9999" }}
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div className="modal-post">
          <Modal.Header
            closeButton
            closeVariant="white"
            style={{ border: "0px", paddingBottom: "10px" }}
          >
            <Modal.Title id="contained-modal-title-vcenter">
              <Image
                src={props.image}
                roundedCircle
                width={50}
                height={50}
                style={{ marginRight: "10px" }}
              />
              <span>{props.title}</span>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ padding: "0px" }}>
            <span style={{ marginLeft: "10px" }}>{props.description}</span>
            <Image
              src={props.imagepost}
              style={{ margin: "10px 0px" }}
              width={"100%"}
            />
            <div style={{ padding: "5px" }}>
              <div className="interact">
                <span className="style-service">cảm xúc</span>
                <div>
                  <span
                    style={{ marginRight: "10px" }}
                    className="style-service"
                  >
                    bình luận
                  </span>
                  <span className="style-service">lượt chia sẻ</span>
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
            <Comment />
          </Modal.Footer>
        </div>
      </Modal>
    </div>
  );
};

const PostsEdit = (props) => {
  const [editshow, seteditShow] = useState(false);

  const handleEditClose = () => seteditShow(false);
  const handleEditShow = () => seteditShow(true);

  return (
    <div>
      <Modal
        style={{ borderRadius: "10px", zIndex: "9999" }}
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div className="modal-post">
          <Modal.Header
            closeButton
            closeVariant="white"
            style={{ border: "0px", paddingBottom: "10px" }}
          >
            <Modal.Title id="contained-modal-title-vcenter">
              <Image
                src={props.image}
                roundedCircle
                width={50}
                height={50}
                style={{ marginRight: "10px" }}
              />
              <span>{props.title}</span>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ padding: "0px", margin:"10px" }}>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control
                    as="textarea"
                    defaultValue={props.description}
                    rows={3}
                  ></Form.Control>
                </Form.Group>
              </Form>
            <Image
              src={props.imagepost}
              style={{ margin: "10px 0px" }}
              width={"100%"}
            />
          </Modal.Body>
          <Modal.Body></Modal.Body>
          <Modal.Footer>
            <Button>Lưu</Button>
          </Modal.Footer>
        </div>
      </Modal>
    </div>
  );
};

const Posts = (props) => {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalEditShow, setModalEditShow] = React.useState(false);

  return (
    <div>
      <Card bsPrefix="background">
        <Card.Body>
          <Card.Title>
            <div style={{ display: "flex", justifyContent: "space-between",alignItems:'center' }}>
              <div style={{ display: "flex" }}>
                <Image
                  src={props.image}
                  roundedCircle
                  width={50}
                  height={50}
                  style={{ margin: "10px" }}
                />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ marginTop: "15px" }}>{props.title}</span>
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: "100",
                      marginBottom: "0px",
                    }}
                  >
                    5 giờ
                  </span>
                </div>
              </div>
              <MoreHorizIcon style={{cursor:'pointer',margin:'10px'}} onClick={() => setModalEditShow(true)}></MoreHorizIcon>
              
            </div>
            <PostsEdit
                image={props.image}
                title={props.title}
                show={modalEditShow}
                description={props.description}
                imagepost={props.imagepost}
                onHide={() => setModalEditShow(false)}
              />
          </Card.Title>
          <Card.Text style={{ padding: "0 10px 0 10px" }}>
            {props.description}
          </Card.Text>
          
          <Card.Img variant="top" src={props.imagepost} />
        </Card.Body>
        <div style={{ marginTop: "10px" }}>
          <div className="interact">
            <span className="style-service">cảm xúc</span>
            <div>
              <span style={{ marginRight: "10px" }} className="style-service">
                bình luận
              </span>
              <span className="style-service">lượt chia sẻ</span>
            </div>
          </div>
          <hr style={{ margin: "1rem 16px" }} />
        </div>
        <div className="button-interact">
          <Button>Thích</Button>
          <Button variant="primary" onClick={() => setModalShow(true)}>
            Bình luận
          </Button>

          <CommentModal
            image={props.image}
            title={props.title}
            show={modalShow}
            description={props.description}
            imagepost={props.imagepost}
            onHide={() => setModalShow(false)}
          />

          <DropdownButton
            as={ButtonGroup}
            title="Chia sẻ"
            id="bg-nested-dropdown"
          >
            <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
            <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
          </DropdownButton>
        </div>
        <NewComment />
        {/* {Commentdata.map((item, index) => (
          <Comment
            key={item.Id}
            name={item.UserId}
            time={item.CommentTime}
            content={item.Content}
          ></Comment>
        ))} */}
      </Card>
    </div>
  );
};

export default Posts;
