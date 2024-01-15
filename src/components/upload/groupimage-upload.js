import React, { useState } from 'react';
import Avatar from "react-avatar-clip";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import "../avatar-bar/profile-edit.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBellSlash, faCamera, faCircleInfo, faPhone, faVideo } from '@fortawesome/free-solid-svg-icons'
const GroupImageUploadd = (props) => {
  const [show, setShow] = useState(false);
  const [croppedImage, setCroppedImage] = useState(null);

  const handleClose = () => {
    setShow(false);
    setCroppedImage(null);
  };

  const handleShow = () => setShow(true);

  const onCrop = (preview) => {
    setCroppedImage(preview);
  };

  const onBeforeFileLoad = (elem) => {
    if (elem.target.files[0].size > (10 * 1024 * 1024)) {
      alert('File is too big!');
      elem.target.value = '';
    }
  };

  const handleSaveChanges = async () => {
    const blob = await fetch(croppedImage).then((res) => res.blob());
    if(blob.size > 0) {
      props.setBlobProfilePicture(blob);
      handleClose();
    }
  };

  return (
    <>
      <button className="img-upload-button" onClick={handleShow}>
        <FontAwesomeIcon icon={faCamera} />
      </button>

      <Modal size='lg' centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit profile picture </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row bsPrefix='row2'>
            <Avatar
              width={300}
              height={330}
              onCrop={onCrop}
              onBeforeFileLoad={onBeforeFileLoad}
              // Make sure to pass 'croppedImage' as the 'src' prop to show the cropped preview
              src={croppedImage}
            />
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default GroupImageUploadd;
