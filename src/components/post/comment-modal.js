import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Comment from "./comment";
import PostDisplayWindow from './post-display-window.js'

import { useNavigate } from "react-router-dom";


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


const CommentModal = (props) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { user, people, comments } = props;


  let handleLikeUnlike = props.handleLikeUnlike;
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
                onClick={() => navigate(`/profile/${props?.ownerId}`)}
                src={props.image}
                roundedCircle
                width={50}
                height={50}
                style={{ marginRight: "10px", cursor: 'pointer' }}
              />
              <span style={{ cursor: 'pointer' }} onClick={() => { navigate(`/profile/${props?.ownerId}`) }} >{props?.ownerName}</span>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ padding: "0px", backgroundColor: "#242526" }}>
            <span style={{ marginLeft: "10px" }}>{props.description}</span>
            <PostDisplayWindow fileUrls={props?.fileUrls} />
            <div style={{ padding: "5px" }}>
              <div className="interact">
                <OverlayTrigger
                  placement="bottom"
                  overlay={
                    <Tooltip id="span-tooltip">
                      {props.likes &&
                        props.likes.map((item) => {
                          let mypeople = props.people.find((p) => p.id === item.userId);
                          return (
                            <span key={item.userId}>
                              {" "}
                              {mypeople?.personalInfo?.name || props?.user?.personalInfo?.name}
                            </span>
                          );
                        })}
                    </Tooltip>
                  }
                >
                  <span className="style-service">
                    {props?.likes?.length} cảm xúc
                  </span>
                </OverlayTrigger>
                <div>
                  <OverlayTrigger
                    placement="bottom"
                    overlay={
                      <Tooltip id="span-tooltip">
                        {props?.distinctUserIds && props?.distinctUserIds.map(userId => {
                          if (props.people) {
                            let person = props.people.find((p) => p.id === userId);
                            return (
                              <div key={userId}>{person?.personalInfo?.name || props?.user?.personalInfo?.name}</div>
                            );
                          }
                        })}
                      </Tooltip>
                    }>
                    <span
                      style={{ marginRight: "10px" }}
                      className="style-service">
                      {props?.comments?.length || '0'} bình luận
                    </span>
                  </OverlayTrigger>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Body style={{ backgroundColor: "#242526" }}>
            <div className="button-interact" style={{ width: "100%" }}>
              <Button style={{ height: '40px', background: props?.isLiked ? 'blue' : 'pink' }}
                onClick={async () => { await handleLikeUnlike(props?.postId, props?.isLIked ? 2 : 1) }}>Thích</Button>
              <Button style={{ height: '40px' }} variant="primary">Bình luận</Button>
            </div>
          </Modal.Body>

          {comments && (
            <div>
              {comments.map((comment) => {
                let myperson = people.find((p) => p.id === comment.userId);
                return (
                  <Comment
                    key={comment.id}
                    commentinfo={comment}
                    personName={myperson?.personalInfo?.name || user?.personalInfo?.name}
                    avatarUrl={myperson?.personalInfo?.avatarUrl || user?.personalInfo?.avatarUrl}
                  />
                );
              })}
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default CommentModal;