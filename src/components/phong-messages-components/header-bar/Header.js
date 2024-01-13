import NavBarCustom from "@components/phong-messages-components/header-bar/nav/Nav-bar";
import RoundSquareNav from "@components/phong-messages-components/header-bar/nav/Round-square-nav";
import SearchBox from "@components/phong-messages-components/header-bar/search/Search-box";
import RoundButton from "@components/phong-messages-components/Round-button";

import './Header.css'

import { faHouse, faUser, faUserGroup, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import { pathNames } from "@root/Routes/routes.js";
import { useLocation, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../../data-store"


function Header(props) {

    const [globalState, dispatchGlobalState] = useGlobalContext();
    let user = globalState?.user;

    let customLogo = <RoundButton width={'45px'} height={'45px'} iconWidth={'90%'} iconHeight={'90%'}
        icon={faFacebookF} backgroundColor={'var(--facebook-color)'}
        iconColor={'white'} />

    let arrow = <RoundButton width={'35px'} height={'35px'}
        icon={faArrowLeft}
        iconWidth={'90%'} iconHeight={'90%px'} />

    let NavCustomStyle = { width: '25%', maxWidth: '150px' }
    let iconNormalStyle = { color: 'var(--sub-text-color)' }
    let iconActiveStyle = { color: 'var(--facebook-color)' }

    let hidePaths = [pathNames.login_register, pathNames.login, pathNames.signup, pathNames.recoverpass, pathNames.resetpass]

    let currentPath = useLocation().pathname;

    const navigate = useNavigate();
    const handleNavigation = (path) => {
        // Programmatic navigation to '/home'
        navigate(path);
        console.log("navigate to " + path);
    };

    if (hidePaths.includes(currentPath))
        return null;
    return (
        <nav className="header-navbar">
            <SearchBox customLogo={customLogo} backIcon={arrow} />
            <div className="header-navbar-navs">
                <RoundSquareNav
                    targetingPath={pathNames.home}
                    onClick={handleNavigation}
                    active={currentPath === pathNames.home}
                    customNavStyle={NavCustomStyle}
                    iconNormalStyle={iconNormalStyle}
                    iconActiveStyle={iconActiveStyle}
                    icon={faHouse}>
                </RoundSquareNav>
                {/* <RoundSquareNav
                    customNavStyle={NavCustomStyle}
                    iconNormalStyle={iconNormalStyle}
                    iconActiveStyle={iconActiveStyle}
                    icon={faUserGroup}>
                </RoundSquareNav> */}
                {
                    user?.id && (
                        <>
                            <RoundSquareNav
                                targetingPath={pathNames.messages}
                                onClick={handleNavigation}
                                active={currentPath === pathNames.messages}
                                customNavStyle={NavCustomStyle}
                                iconNormalStyle={iconNormalStyle}
                                iconActiveStyle={iconActiveStyle}
                                icon={faFacebookMessenger}>
                            </RoundSquareNav>
                            <RoundSquareNav
                                targetingPath={pathNames.profile+"/"+user?.id}
                                onClick={handleNavigation}
                                active={currentPath === pathNames.profile+"/"+user?.id}
                                customNavStyle={NavCustomStyle}
                                iconNormalStyle={iconNormalStyle}
                                iconActiveStyle={iconActiveStyle}
                                icon={faUser}>
                            </RoundSquareNav>
                        </>
                    )
                }
            </div>
            <NavBarCustom />
        </nav>
    )
}

export default Header
