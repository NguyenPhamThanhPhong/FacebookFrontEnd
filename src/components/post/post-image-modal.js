import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

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

const ImageModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {checkUrlType(props.src) === "image" && <div>
            <img src={props.src} style={{width:'100%'}}/>
        </div>}
        {checkUrlType(props.src) === "video" && <div>
            <video style={{width:'100%'}}>
                <source src={props.src} type="video/mp4"></source>
            </video>
        </div>}
      </Modal.Body>
    </Modal>
  );
};

export default ImageModal;
