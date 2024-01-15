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
import "../avatar-bar/profile-edit.css";
import ImageUploadd from '../upload/image-upload';
import CoverImageUploadd from '../upload/coverimage-upload';
import { useDataHook } from '../../data-hook';

function ProfileEdit(props) {
  let myUser = props.myUser || null;
  let prevAvatar = myUser?.personalInfo?.avatarUrl || null;
  let userId = myUser?.id || null;

  const [show, setShow] = useState(false);
  const {updatePersonalInfo} = useDataHook();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [bio, setBio] = useState('');
  const [blobProfilePicture, setBlobProfilePicture] = useState('');
  const [blobCoverPhoto, setBlobCoverPhoto] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleBirthdayChange = (date) => {
    setBirthday(date);
  };

  const handleBioChange = (event) => {
    setBio(event.target.value);
  };

  const handleClear = () => {
    setFirstName('');
    setLastName('');
    setBirthday('');
    setBio('');
    setBlobProfilePicture(null);
    setBlobCoverPhoto(null);
  }

  const handleSaveChanges = () => {
    console.log(firstName);
    console.log(lastName);
    console.log(birthday);
    console.log(bio);
    console.log(blobProfilePicture);
    console.log(blobCoverPhoto);
    handleClear();
    handleClose();
    updatePersonalInfo(userId ,firstName, lastName, birthday, bio, prevAvatar, blobProfilePicture, blobCoverPhoto);
  }

  return (
    <>
      <button  className='edit-profile-button' onClick={handleShow}>
        Edit profile
      </button>

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
                    value={firstName}
                    onChange={handleFirstNameChange}
                    autoFocus />
                </Col>
                <Col>
                  <Form.Control
                    type="name"
                    placeholder="Last name"
                    value={lastName}
                    onChange={handleLastNameChange}
                    autoFocus
                  />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3" controlId="Picture">
              <Modal.Title>
                Profile picture
                {
                  // UPload profile here!!!!!!!!!!!!!!!!!!!!!!
                  // UPload profile here!!!!!!!!!!!!!!!!!!!!!!
                }
                <ImageUploadd className="img-uploader" setBlobProfilePicture={setBlobProfilePicture} />
              </Modal.Title>
              <Row bsPrefix='row2'>
                <img
                  className="profile-picture"
                  src={blobProfilePicture && URL.createObjectURL(blobProfilePicture)}
                  alt=""
                />
              </Row>
            </Form.Group>

            <Form.Group className="mb-3" controlId="CoverPhoto">
              <Modal.Title>
                Cover photo
                {
                  // UPload cover here!!!!!!!!!!!!!!!!!!!!!!
                  // UPload cover here!!!!!!!!!!!!!!!!!!!!!!
                }
                <CoverImageUploadd setBlobCoverPhoto={setBlobCoverPhoto} />
              </Modal.Title>
              <Row bsPrefix='row2'>
                <img
                  className="cover-picture"
                  src={blobCoverPhoto && URL.createObjectURL(blobCoverPhoto)}
                  alt=""
                />
              </Row>
            </Form.Group>

            <Form.Group className="mb-3" controlId="Birthday">
              <Modal.Title>Birthday</Modal.Title>
              <Row bsPrefix='row1'>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    value={birthday}
                    onChange={handleBirthdayChange}
                    slotProps={{ textField: { size: 'large' } }} format='LL' defaultValue={dayjs('2003-07-03')} />
                </LocalizationProvider>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3" controlId="Bio">
              <Modal.Title>Bio</Modal.Title>
              <Row bsPrefix='row1'>
                <Form.Control value={bio}
                  onChange={handleBioChange} as="textarea" rows={3} />
              </Row>
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ProfileEdit;