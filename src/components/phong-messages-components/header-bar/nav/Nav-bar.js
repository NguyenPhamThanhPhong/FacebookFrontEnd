
// <======CSS HERE ======>
import "./Nav-bar.css"

//<=======Components here ==========>
import NavItem from "./Nav-item";
import CustomDropDownItem from "@components/phong-messages-components/header-bar/dropdown/Drop-down-item";
import ConversationItem from '@components/phong-messages-components/Conversation-item';
import RoundButton from "@components/phong-messages-components/Round-button";
import SearchBox from "@components/phong-messages-components/header-bar/search/Search-box";

// <======Library here ==================================>
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons'
import { faUser,faArrowLeft,faPenToSquare, faEllipsis, faBell, faCog } from "@fortawesome/free-solid-svg-icons";
import Dropdown from 'react-bootstrap/Dropdown';
import React, { useState, useRef, useEffect } from "react";
import { FormControl } from "react-bootstrap";
import { CSSTransition } from "react-transition-group";
import FriendRequest from "../../Request-noti"
import { pathNames } from '../../../../Routes/routes'
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../../../data-store"

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href="a"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}>
    {children}
  </a>
));
const CustomMenu = React.forwardRef(
  ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
    const [value, setValue] = useState("");

    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <ul className="list-unstyled">
          {React.Children.toArray(children).filter(
            (child) =>
              !value || child.props.children.toLowerCase().startsWith(value)
          )}
        </ul>
      </div>
    );
  }
);
const iconTitleStyle = { color: 'var(--color-text)', width: '80%', height: '80%' };
const iconMessengerStyle = { color: 'var(--color-text)', width: '70%', height: '70%' };
const iconBellStyle = { color: 'var(--color-text)', width: '70%', height: '70%' };
const iconTitle = <NavItem icon={(<FontAwesomeIcon className="icon" icon={faGithub} style={iconTitleStyle} />)} />
const navMessenger = <NavItem icon={(<FontAwesomeIcon className="icon" icon={faFacebookMessenger} style={iconMessengerStyle} />)} />
const navNotification = <NavItem icon={(<FontAwesomeIcon className="icon" icon={faBell} style={iconBellStyle} />)} />
let searchboxContainerStyle = {
  width: '95%',
  height: '40px',
  borderRadius: '20px',
  margin: 'auto'
}
let arrow = <RoundButton width={'35px'} height={'35px'}
icon={faArrowLeft}
iconWidth={'90%'} iconHeight={'90%px'} />

function NavBarCustom(props) {
  const navigate = useNavigate();

  const [activeMenu, setActiveMenu] = useState('main')

  const [globalState, dispatchGlobalState] = useGlobalContext();

  const [userRequestPeople, setUserRequestPeople] = useState([]);

  let people = globalState?.people;
  let user = globalState?.user;
  
  useEffect(() => {
    if(people && user){
      if(people?.length > 0 && user?.id){
        let friendRequestPeople = people.filter(x=> user.friendRequestIds.includes(x.id));
        setUserRequestPeople(friendRequestPeople);
      }
    }
  }, [globalState?.people,globalState?.user])


  let avatarUrl = 'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/383210613_1729916487446622_4326261461704479707_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=OCidl3XFR48AX_259dl&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfCXwL5OodnE9D-sWm_O6B_epq7oFoUFYdMnAFOzBCE0Ww&oe=6569A1EE'

  


  const nodeRef = useRef(null);


  return (
    <div className="d-flex">

      <Dropdown>
        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
          {navMessenger}
        </Dropdown.Toggle>

        <Dropdown.Menu className="my-dropdown" as={CustomMenu}>

          <div ref={nodeRef} >
            <div className="my-dropdown-title-group">
              <h4 className='my-dropdown-chat-title'>
                Chats
              </h4>
              <div>
              <RoundButton width={'35px'} height={'35px'} backgroundColor={'var(--container-color)'}
                icon={faEllipsis}
                iconWidth={'90%'} iconHeight={'90%px'} />
              <RoundButton width={'35px'} height={'35px'} backgroundColor={'var(--container-color)'}
                icon={faPenToSquare}
                iconWidth={'90%'} iconHeight={'90%px'} />
              </div>
            </div>
            <SearchBox backIcon={arrow} textboxContainerStyle={searchboxContainerStyle} />
            <ConversationItem/>
            <ConversationItem/>
            <ConversationItem/>
            <ConversationItem/>
            <ConversationItem/>
          </div>

        </Dropdown.Menu>
      </Dropdown>

      <Dropdown>
        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
          {navNotification}
        </Dropdown.Toggle>

        <Dropdown.Menu className="my-dropdown" as={CustomMenu}>

          <div ref={nodeRef} >
            <div className="my-dropdown-title-group">
              <h4 className='my-dropdown-chat-title'>
                Notifications
              </h4>
              <div>
              <RoundButton width={'35px'} height={'35px'} backgroundColor={'var(--container-color)'}
                icon={faEllipsis}
                iconWidth={'90%'} iconHeight={'90%px'} />
              </div>
            </div>
            {
              userRequestPeople?.length > 0 && userRequestPeople.map((x, index) => {
                return (
                  <FriendRequest myKey={x.id} onclick={(key)=>{navigate(pathNames.profile+`/${key}`)}} />
                )
              })
            }
            {/* <FriendRequest myKey={'659fcda9c3695f610c039ab9'} onclick={(key)=>{navigate(pathNames.profile+`/${key}`)}} /> */}
          </div>

        </Dropdown.Menu>
      </Dropdown>

      <Dropdown>
        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
          {iconTitle}
        </Dropdown.Toggle>

        <Dropdown.Menu className="my-dropdown" as={CustomMenu}>
          <div className="info-section">
            <div className="round-avatar-div">
              <img className="round-avatar-div-img" src={avatarUrl} />
            </div>
            <div className="info-section-username">
              <h3 className="info-section-username-span"> Nguyễn Phạm Thanh Phong</h3>
            </div>
          </div>
          <CSSTransition nodeRef={nodeRef} in={activeMenu === 'main'} unmountOnExit timeout={500}
            classNames="menu-primary">
            <div ref={nodeRef} >
              <CustomDropDownItem
                leftIcon={<FontAwesomeIcon icon={faGithub} />}
                rightIcon={<FontAwesomeIcon icon={faCog} />}
                setActiveMenu={setActiveMenu}
                goToMenu="main">
                Settings nothing
              </CustomDropDownItem>
              <CustomDropDownItem>Profile1</CustomDropDownItem>
              <CustomDropDownItem>Profile2</CustomDropDownItem>
            </div>
          </CSSTransition>

        </Dropdown.Menu>
      </Dropdown>




    </div>
  );
}

export default NavBarCustom
