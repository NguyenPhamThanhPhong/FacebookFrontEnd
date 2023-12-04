import NavBarCustom from "@components/phong-messages-components/header-bar/nav/Nav-bar";
import RoundSquareNav from "@components/phong-messages-components/header-bar/nav/Round-square-nav";
import SearchBox from "@components/phong-messages-components/header-bar/search/Search-box";

import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

function Header(props) {

    const homeIcon = <FontAwesomeIcon icon={faHome} />;

    return (
        <nav className="navbar">
            <SearchBox/>
            <div >
                {/* <ul className="navbar-nav">
                    <RoundSquareNav
                    active = {true}
                        icon={faHome}>
                    </RoundSquareNav>
                    <RoundSquareNav
                        icon={faHome}>
                    </RoundSquareNav>
                </ul> */}
            </div>
            <NavBarCustom />
        </nav>
    )
}

export default Header
