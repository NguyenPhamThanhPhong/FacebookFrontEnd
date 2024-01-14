import React from "react";
import { useState, useEffect } from "react";
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
import NewComment from "../../components/post/newcomment.js";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

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
            style={{
              border: "0px",
              paddingBottom: "10px",
              backgroundColor: "#242526",
            }}
          >
            <Modal.Title id="contained-modal-title-vcenter">
              <Image
                src={props.image}
                roundedCircle
                width={50}
                height={50}
                style={{ marginRight: "10px" }}
              />
              <span>Card Title</span>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ padding: "0px", backgroundColor: "#242526" }}>
            <span style={{ marginLeft: "10px" }}>{props.description}</span>
            <div>
            {props.FileUrls && (
              <div
                style={{ display: "flex", width: `100%`, minheight: "100px",flexDirection:'column',gap:'5px'}}
              >
                {Object.values(props.FileUrls).map((fileUrl, index) => {
                  if (checkUrlType(fileUrl) === "image") {
                    return(
                      <img
                      style={{
                        objectFit: "cover",
                        width:'100%',
                        // Sử dụng flex để tự co lại
                        flex: "1",
                      }}
                      key={index}
                      src={fileUrl}
                      alt="#"/>);
                  }
                  if (checkUrlType(fileUrl) === "video") {
                    return(
                      <video key={index} controls style={{width:'100%'}} >
                      <source src={fileUrl}/>
                    </video>
                    );
                  }
                })}
              </div>
            )}
            </div>
            <div style={{ padding: "5px" }}>
              <div className="interact">
                <OverlayTrigger
                  placement="bottom"
                  overlay={
                    <Tooltip id="span-tooltip">
                      {props.Likes.map((item) => (
                        <span key={item.userId}> {item.name}</span>
                      ))}
                    </Tooltip>
                  }
                >
                  <span className="style-service">
                    {props.Likes.length} cảm xúc
                  </span>
                </OverlayTrigger>
                <div>
                  <OverlayTrigger
                    placement="bottom"
                    overlay={
                      <Tooltip id="span-tooltip">
                        {props.comments.map((item) => (
                          <span key={item.UserId}> {item.UserId}</span>
                        ))}
                      </Tooltip>
                    }
                  >
                    <span
                      style={{ marginRight: "10px" }}
                      className="style-service"
                    >
                      {props.comments.length} bình luận
                    </span>
                  </OverlayTrigger>
                  <span className="style-service">lượt chia sẻ</span>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Body style={{ backgroundColor: "#242526" }}>
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

          {props.comments && (
            <div>
              {props.comments.map((comment) => (
                <Comment key={comment.Id} commentinfo={comment} />
              ))}
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};

const PostsEdit = (props) => {
  const [editshow, seteditShow] = useState(false);

  const handleEditClose = () => seteditShow(false);
  const handleEditShow = () => seteditShow(true);
  const [content, setContent] = useState("");

  const handleInput = (e) => {
    const userInput = e.target.innerText;
    setContent(userInput);
  };

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
          <Modal.Body style={{ padding: "0px", margin: "10px" }}>
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
              aria-label="aaa"
              contentEditable
              spellCheck
              onInput={handleInput}
            >
              <p
                aria-label="type something...."
                style={{ fontSize: "20px", height: "20px", color: "white" }}
              ></p>
            </div>
            <div>
              {props.FileUrls && (
                <div
                  style={{ display: "flex", width: `100%`, minheight: "100px" }}
                >
                  {Object.values(props.FileUrls).map((fileurl, index) => (
                    <img
                      style={{
                        objectFit: "cover",
                        width: `50%`,
                        // Sử dụng flex để tự co lại
                        flex: "1",
                      }}
                      key={index}
                      src={fileurl}
                      alt="#"
                    />
                  ))}
                </div>
              )}
            </div>
          </Modal.Body>
          <Modal.Body></Modal.Body>
          <Modal.Footer>
            <Button style={{ width: "90%" }}>Lưu</Button>
          </Modal.Footer>
        </div>
      </Modal>
    </div>
  );
};

const checkUrlType = (url) => {
  const videoExtensions = ["mp4", "avi", "mov", "mkv"];
  const imageExtensions = ["jpg", "jpeg", "png", "gif", "bmp"];

  const fileExtension = url.split(".").pop().toLowerCase();

  const isVideo = new RegExp(videoExtensions.join("|")).test(fileExtension);
  const isImage = new RegExp(imageExtensions.join("|")).test(fileExtension);

  if (isVideo) {
    return "video";
  } else if (isImage) {
    return "image";
  } else {
    return "unknown";
  }
};

const Posts = ({ propsPost }) => {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalEditShow, setModalEditShow] = React.useState(false);

  return (
    <div>
      <Card bsPrefix="background">
        <Card.Body>
          <Card.Title>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex" }}>
                <Image
                  src={propsPost.Owner.AvatarUrl}
                  roundedCircle
                  width={50}
                  height={50}
                  style={{ margin: "10px" }}
                />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ marginTop: "15px" }}>
                    {propsPost.Owner.Name}
                  </span>
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
              <MoreHorizIcon
                style={{ cursor: "pointer", margin: "10px" }}
                onClick={() => setModalEditShow(true)}
              ></MoreHorizIcon>
            </div>
            <PostsEdit
              image={propsPost.Owner.AvatarUrl}
              title={propsPost.Owner.Name}
              show={modalEditShow}
              description={propsPost.Content}
              FileUrls={propsPost.FileUrls}
              onHide={() => setModalEditShow(false)}
            />
          </Card.Title>
          <Card.Text style={{ padding: "0 10px 0 10px" }}>
            {propsPost.Content}
          </Card.Text>

          <div>
            {propsPost.FileUrls && (
              <div
                style={{ display: "flex", width: `100%`, minheight: "100px",flexDirection:'column',gap:'5px' }}
              >
                {Object.values(propsPost.FileUrls).map((fileUrl, index) => {
                  if (checkUrlType(fileUrl) === "image") {
                    return(
                      <img
                      style={{
                        objectFit: "cover",
                        // Sử dụng flex để tự co lại
                        flex: "1",
                        width:'100%'
                      }}
                      key={index}
                      src={fileUrl}
                      alt="#"/>);
                  }
                  if (checkUrlType(fileUrl) === "video") {
                    return(
                      <video key={index} controls style={{width:'100%'}}>
                      <source src={fileUrl}/>
                    </video>
                    );
                  }
                })}
              </div>
            )}
          </div>
        </Card.Body>
        <div style={{ marginTop: "10px" }}>
          <div className="interact">
            <OverlayTrigger
              placement="bottom"
              overlay={
                <Tooltip id="span-tooltip">
                  {propsPost.Likes.map((item) => (
                    <span key={item.userId}> {item.name}</span>
                  ))}
                </Tooltip>
              }
            >
              <span className="style-service">
                {propsPost.Likes.length} cảm xúc
              </span>
            </OverlayTrigger>

            <div>
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id="span-tooltip">
                    {propsPost.Comments.map((item) => (
                      <span key={item.UserId}> {item.UserId}</span>
                    ))}
                  </Tooltip>
                }
              >
                <span style={{ marginRight: "10px" }} className="style-service">
                  {propsPost.Comments.length} bình luận
                </span>
              </OverlayTrigger>

              <span className="style-service">lượt chia sẻ</span>
            </div>
          </div>
          <hr style={{ margin: "1rem 16px" }} />
        </div>
        <div className="button-interact">
          <Button> Thích</Button>
          <Button variant="primary" onClick={() => setModalShow(true)}>
            Bình luận
          </Button>

          <CommentModal
            image={propsPost.Owner.AvatarUrl}
            FileUrls={propsPost.FileUrls}
            title={propsPost.Owner.Name}
            description={propsPost.Content}
            show={modalShow}
            comments={propsPost.Comments}
            Likes={propsPost.Likes}
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
        {propsPost.Comments && (
          <div>
            {propsPost.Comments.map((comment) => (
              <Comment key={comment.Id} commentinfo={comment} />
            ))}
          </div>
        )}
      </Card>
    </div>
  );
};

export default Posts;
