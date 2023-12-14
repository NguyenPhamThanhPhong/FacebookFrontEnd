import NavBarCustom from "@components/phong-messages-components/header-bar/nav/Nav-bar";
import RoundSquareNav from "@components/phong-messages-components/header-bar/nav/Round-square-nav";
import SearchBox from "@components/phong-messages-components/header-bar/search/Search-box";
import RoundButton from "@components/phong-messages-components/Round-button";

import './Header.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faSearch,faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";

function Header(props) {

    const homeIcon = <FontAwesomeIcon icon={faHome} />;

    let facebook =<RoundButton width={'45px'} height={'45px'} iconWidth={'90%'} iconHeight={'90%'}
    icon={faFacebookF} backgroundColor={'var(--facebook-color)'}
    iconColor={'white'}/>

    let arrow= <RoundButton width={'35px'} height={'35px'} 
    icon={faArrowLeft}
    iconWidth={'90%'} iconHeight={'90%px'} />
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
