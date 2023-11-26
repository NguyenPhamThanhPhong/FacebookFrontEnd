import NavBarCustom from "@components/phong-messages-components/header-bar/nav/Nav-bar";
import RoundSquareNav from "@components/phong-messages-components/header-bar/nav/Round-square-nav";
import TextBox from "@components/phong-messages-components/header-bar/search/Text-box";
import RoundButton from "@components/phong-messages-components/Round-button";

import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

function Header(props) {

    const homeIcon = <FontAwesomeIcon icon={faHome} />;

    return (
        <nav className="navbar">
            <div className="search-box-div">
                <RoundButton />
                <TextBox />
            </div>
            <div >
                <ul className="navbar-nav">
                    <RoundSquareNav
                    active = {true}
                        icon={faHome}>
                    </RoundSquareNav>
                    <RoundSquareNav
                        icon={faHome}>
                    </RoundSquareNav>
                </ul>
            </div>
            <NavBarCustom />
        </nav>
    )
}

export default Header
