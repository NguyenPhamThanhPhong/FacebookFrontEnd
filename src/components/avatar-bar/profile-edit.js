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
  const { updatePersonalInfo } = useDataHook();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [birthplace, setBirthplace] = useState('');
  const [status, setStatus] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
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

  const handleBirthplaceChange = (event) => {
    setBirthplace(event.target.value);
  };
  
  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setStatus(event.target.value);
  };

  const handleClear = () => {
    setFirstName('');
    setLastName('');
    setBirthday('');
    setBirthplace('');
    setStatus('');
    setPhonenumber('');
    setBlobProfilePicture(null);
    setBlobCoverPhoto(null);
  }

  const handleSaveChanges = () => {
    console.log(firstName);
    console.log(lastName);
    console.log(birthday);
    console.log(birthplace);
    console.log(status);
    console.log(phonenumber);
    console.log(blobProfilePicture);
    console.log(blobCoverPhoto);
    handleClear();
    handleClose();
    updatePersonalInfo(userId, firstName, lastName, birthday, birthplace, status, phonenumber, prevAvatar, blobProfilePicture, blobCoverPhoto);
  }

  return (
    <>
      <button className='edit-profile-button' onClick={handleShow}>
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

            <Form.Group className="mb-3" controlId="Birthplace">
              <Modal.Title>Birthplace</Modal.Title>
              <Row bsPrefix='row1'>
                <Form.Select aria-label="Default select example">
                  <option>Where were you born ?</option>
                <option value="1">Hà Nội</option>
                <option value="2">Hồ Chí Minh</option>
                <option value="3">Đà Nẵng</option>
                <option value="4">Hải Phòng</option>
                <option value="5">Cần Thơ</option>
                <option value="6">An Giang</option>
                <option value="7">Bà Rịa - Vũng Tàu</option>
                <option value="8">Bắc Giang</option>
                <option value="9">Bắc Kạn</option>
                <option value="10">Bạc Liêu</option>
                <option value="11">Bắc Ninh</option>
                <option value="12">Bến Tre</option>
                <option value="13">Bình Dương</option>
                <option value="14">Bình Định</option>
                <option value="15">Bình Phước</option>
                <option value="16">Bình Thuận</option>
                <option value="17">Cà Mau</option>
                <option value="18">Cao Bằng</option>
                <option value="19">Đắk Lắk</option>
                <option value="20">Đắk Nông</option>
                <option value="21">Điện Biên</option>
                <option value="22">Đồng Nai</option>
                <option value="23">Đồng Tháp</option>
                <option value="24">Gia Lai</option>
                <option value="25">Hà Giang</option>
                <option value="26">Hà Nam</option>
                <option value="27">Hà Tĩnh</option>
                <option value="28">Hải Dương</option>
                <option value="29">Hậu Giang</option>
                <option value="30">Hòa Bình</option>
                <option value="31">Hưng Yên</option>
                <option value="32">Khánh Hòa</option>
                <option value="33">Kiên Giang</option>
                <option value="34">Kon Tum</option>
                <option value="35">Lai Châu</option>
                <option value="36">Lâm Đồng</option>
                <option value="37">Lạng Sơn</option>
                <option value="38">Lào Cai</option>
                <option value="39">Long An</option>
                <option value="40">Nam Định</option>
                <option value="41">Nghệ An</option>
                <option value="42">Ninh Bình</option>
                <option value="43">Ninh Thuận</option>
                <option value="44">Phú Thọ</option>
                <option value="45">Quảng Bình</option>
                <option value="46">Quảng Nam</option>
                <option value="47">Quảng Ngãi</option>
                <option value="48">Quảng Ninh</option>
                <option value="49">Quảng Trị</option>
                <option value="50">Sóc Trăng</option>
                <option value="51">Sơn La</option>
                <option value="52">Tây Ninh</option>
                <option value="53">Thái Bình</option>
                <option value="54">Thái Nguyên</option>
                <option value="55">Thanh Hóa</option>
                <option value="56">Thừa Thiên Huế</option>
                <option value="57">Tiền Giang</option>
                <option value="58">Trà Vinh</option>
                <option value="59">Tuyên Quang</option>
                <option value="60">Vĩnh Long</option>
                <option value="61">Vĩnh Phúc</option>
                <option value="62">Yên Bái</option>
                <option value="63">Phú Yên</option>
                  <Form.Control
                    type="status"
                    value={status}
                    onChange={handleStatusChange}
                    autoFocus
                  />
                </Form.Select>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3" controlId="Status">
              <Modal.Title>Set status</Modal.Title>
              <Row bsPrefix='row1'>
                <Form.Select aria-label="Default select example">
                  <option>Status</option>
                  <option value="1">Single</option>
                  <option value="2">In a relationship</option>
                  <option value="3">Engaged</option>
                  <option value="3">Married</option>
                  <option value="3">Divorced</option>
                  <option value="3">Complicated</option>
                  <option value="3">Widowed</option>
                  <Form.Control
                    type="status"
                    value={status}
                    onChange={handleStatusChange}
                    autoFocus
                  />
                </Form.Select>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3" controlId="Number">
              <Modal.Title>Number</Modal.Title>
              <Row bsPrefix='row1'>
                <Form.Control
                  type="name"
                  placeholder="Number"
                  value={lastName}
                  onChange={handlePhoneNumberChange}
                  autoFocus
                />
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