import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import "./profile-edit.css";
import ImageUploadd from './image-upload';
import CoverImageUploadd from './coverimage-upload';
function ProfileEdit() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" size="lg" onClick={handleShow}>
        Edit profile
      </Button>

      <Modal size='lg' centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit profile </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="Name">
            <Modal.Title>Profile name</Modal.Title>
              <Row >
              <Col>
              <Form.Control
                type="name"
                placeholder="First name"
                autoFocus/>
                </Col>
              <Col>
                <Form.Control
                  type="name"
                  placeholder="Last name"
                  autoFocus
                />
              </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3" controlId="Picture">
            <Modal.Title>
              Profile picture         
                <ImageUploadd/> 
               </Modal.Title>
            <Row bsPrefix='row2'>
            <img
                className="profile-picture"
                src='assets/person/7.jpeg'
                alt=""
              />
            </Row>
            </Form.Group>

            <Form.Group className="mb-3" controlId="CoverPhoto">
            <Modal.Title>
              Cover photo
              <CoverImageUploadd/>
              </Modal.Title>
            <Row bsPrefix='row2'>
            <img
                className="cover-picture"
                src='assets/post/3.jpeg'
                alt=""
              />
            </Row>
            </Form.Group>

            <Form.Group className="mb-3" controlId="Birthday">
                <Modal.Title>Birthday</Modal.Title>
                <Row bsPrefix='row1'>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker slotProps={{ textField: { size: 'large' } }} format='LL' defaultValue={dayjs('2003-07-03')} />
                </LocalizationProvider>
                </Row>
              </Form.Group>

            <Form.Group className="mb-3" controlId="Bio">    
              <Modal.Title>Bio</Modal.Title>
              <Row bsPrefix='row1'>
              <Form.Control as="textarea" rows={3}/>
              </Row>
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ProfileEdit;