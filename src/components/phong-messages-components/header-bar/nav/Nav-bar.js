import NavItem from "./Nav-item";
import DropDownMenu from "../dropdown/Drop-down-menu";

// <======CSS HERE ======>
import "./Nav-bar.css"

// <======Library here ======>
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


function NavBarCustom(props) {

    const iconStyle = { color: 'var(--color-text)',width:'80%',height:'80%' };

    return (
        <ul className="navbar-nav">

            <NavItem icon={(<FontAwesomeIcon className="icon" icon={faGithub} style={iconStyle} />)} >
                <DropDownMenu />
            </NavItem>
            {/* <NavItem  icon={(<FontAwesomeIcon className="icon" icon={faGithub} style={iconStyle} />)} /> */}
        </ul>

    );
}

export default NavBarCustom
