import NavBarCustom from "@components/phong-messages-components/header-bar/nav/Nav-bar";
import RoundSquareNav from "@components/phong-messages-components/header-bar/nav/Round-square-nav";
import SearchBox from "@components/phong-messages-components/header-bar/search/Search-box";
import RoundButton from "@components/phong-messages-components/Round-button";

import './Header.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse,faUser, faUserGroup, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF,faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";

function Header(props) {

    // const homeIcon = <FontAwesomeIcon icon={faHome} />;

    let facebook = <RoundButton width={'45px'} height={'45px'} iconWidth={'90%'} iconHeight={'90%'}
        icon={faFacebookF} backgroundColor={'var(--facebook-color)'}
        iconColor={'white'} />

    let arrow = <RoundButton width={'35px'} height={'35px'}
        icon={faArrowLeft}
        iconWidth={'90%'} iconHeight={'90%px'} />

    let NavCustomStyle = {width:'25%', maxWidth:'150px'}
    let iconNormalStyle = { color: 'var(--sub-text-color)' }
    let  iconActiveStyle={ color: 'var(--facebook-color)' }

    return (
        <nav className="header-navbar">
            <SearchBox />
            <div className="header-navbar-navs">
                    <RoundSquareNav
                        active={true}
                        customNavStyle = {NavCustomStyle}
                        iconNormalStyle = {iconNormalStyle}
                        iconActiveStyle = {iconActiveStyle}
                        icon={faHouse}>
                    </RoundSquareNav>
                    <RoundSquareNav
                        customNavStyle = {NavCustomStyle}
                        iconNormalStyle = {iconNormalStyle}
                        iconActiveStyle = {iconActiveStyle}
                        icon={faUserGroup}>
                    </RoundSquareNav>
                    <RoundSquareNav
                        customNavStyle = {NavCustomStyle}
                        iconNormalStyle = {iconNormalStyle}
                        iconActiveStyle = {iconActiveStyle}
                        icon={faFacebookMessenger}>
                    </RoundSquareNav>
                    <RoundSquareNav
                        customNavStyle = {NavCustomStyle}
                        iconNormalStyle = {iconNormalStyle}
                        iconActiveStyle = {iconActiveStyle}
                        icon={faUser}>
                    </RoundSquareNav>
                </div>
            <NavBarCustom />
        </nav>
    )
}

export default Header
