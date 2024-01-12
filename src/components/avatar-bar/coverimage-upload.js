import React, { useState } from 'react';
import Avatar from "react-avatar-clip"; // Import your Avatar component library
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./profile-edit.css";
const CoverImageUploadd = () => {
  const [show, setShow] = useState(false);
    const [hide, setHide] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [state, setState] = useState({
    preview: null,
    
  });

  const onClose = () => {
    setState((prevState) => ({ ...prevState, preview: null }));
  };

  const onCrop = (preview) => {
    setState((prevState) => ({ ...prevState, preview }));
  };

  const onBeforeFileLoad = (elem) => {
    if (elem.target.files[0].size > 71680) {
      alert('File is too big!');
      elem.target.value = '';
    }
  };
  const handleSaveChanges = () => {
    // Logic to save changes
  };


  return (
    <>
    <Button variant="primary" size="sm" onClick={handleShow}>
        Edit
      </Button>

      <Modal size='lg' centered show={show} onHide={handleClose}>
      <Modal.Header closeButton>
          <Modal.Title>Edit cover photo </Modal.Title>
        </Modal.Header>
    <Modal.Body>
    <Row bsPrefix='row2'>
      <Avatar
        width={750}
        height={300}
        onCrop={onCrop}
        onClose={onClose}
        onBeforeFileLoad={onBeforeFileLoad}
        src={state.src}
      />
      </Row>
      
    </Modal.Body>
    <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
    </Modal>
    </>
  );
};

export default CoverImageUploadd;
