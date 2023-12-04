import NavItem from "./Nav-item";
import CustomDropDownItem from "@components/phong-messages-components/header-bar/dropdown/Drop-down-item";

// <======CSS HERE ======>
import "./Nav-bar.css"

// <======Library here ======>
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faUser, faCog } from "@fortawesome/free-solid-svg-icons";
import Dropdown from 'react-bootstrap/Dropdown';
import React, { useState,useRef } from "react";
import { FormControl } from "react-bootstrap";
import { CSSTransition } from "react-transition-group";


function NavBarCustom(props) {

  const [activeMenu, setActiveMenu] = useState('main')


  const iconStyle = { color: 'var(--color-text)', width: '80%', height: '80%' };
  const iconTitle = <NavItem icon={(<FontAwesomeIcon className="icon" icon={faGithub} style={iconStyle} />)} />

  let avatarUrl = 'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/383210613_1729916487446622_4326261461704479707_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=OCidl3XFR48AX_259dl&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfCXwL5OodnE9D-sWm_O6B_epq7oFoUFYdMnAFOzBCE0Ww&oe=6569A1EE'


  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href="a"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
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
          {/* <FormControl
                autoFocus
                className="mx-3 my-2 w-auto"
                placeholder="Type to filter..."
                onChange={(e) => setValue(e.target.value)}
                value={value}
              /> */}
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

  const nodeRef = useRef(null);


  return (
    <div className="d-flex">
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
                        leftIcon={<FontAwesomeIcon icon={faUser} />}
                        rightIcon={<FontAwesomeIcon icon={faCog} />}
                        setActiveMenu={setActiveMenu}
                        goToMenu="settings">
                        Settings
                    </CustomDropDownItem>
                    <CustomDropDownItem>Profile1</CustomDropDownItem>
                    <CustomDropDownItem>Profile2</CustomDropDownItem>
                </div>
            </CSSTransition>
          {/* <CustomDropDownItem
            leftIcon={<FontAwesomeIcon icon={faUser} />}
            rightIcon={<FontAwesomeIcon icon={faCog} />}>
            Settings
          </CustomDropDownItem> */}

        </Dropdown.Menu>
      </Dropdown>

      {/* <Dropdown>
            <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
              Custom toggle
            </Dropdown.Toggle>
    
            <Dropdown.Menu as={CustomMenu}>
              <Dropdown.Item eventKey="1">Red</Dropdown.Item>
              <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
              <Dropdown.Item eventKey="3" active>
                Orange
              </Dropdown.Item>
              <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown> */}
    </div>
  );
}

export default NavBarCustom
