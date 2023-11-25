import NavItem from "./Nav-item";

// <======CSS HERE ======>
import "./Nav-bar.css"

// <======Library here ======>
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


function NavBarCustom(props) {

    const iconStyle = {color: 'var(--color-text)',};

    return (
        <nav className="navbar">

            <ul className="navbar-nav">
                <NavItem  icon={(<FontAwesomeIcon className="icon" icon={faGithub} style={iconStyle} />)} />
                <NavItem  icon={(<FontAwesomeIcon className="icon" icon={faGithub} style={iconStyle} />)} />
            </ul>
        </nav>
    );
}

export default NavBarCustom
