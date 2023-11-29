import "./Drop-down-menu.css"


import DropDownItem from "./Drop-down-item"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { CSSTransition } from "react-transition-group"
import { useRef, useState } from "react"

function DropDownMenu(props) {

    const [activeMenu, setActiveMenu] = useState('main')

    function ChangeMenu(menu) {
        setActiveMenu('nothing')
        setTimeout(() => {
            setActiveMenu(menu)
        }, 500);
    }
    const nodeRef = useRef(null);

    let isDisplayAvatar = true;

    let avatarUrl = 'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/383210613_1729916487446622_4326261461704479707_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=OCidl3XFR48AX_259dl&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfCXwL5OodnE9D-sWm_O6B_epq7oFoUFYdMnAFOzBCE0Ww&oe=6569A1EE'



    return (
        <div className="dropdown">
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
                    <DropDownItem
                        leftIcon={<FontAwesomeIcon icon={faUser} />}
                        rightIcon={<FontAwesomeIcon icon={faCog} />}
                        setActiveMenu={setActiveMenu}
                        ChangeMenu={ChangeMenu}
                        goToMenu="settings">
                        Settings
                    </DropDownItem>
                    <DropDownItem>Profile1</DropDownItem>
                    <DropDownItem>Profile2</DropDownItem>
                </div>
            </CSSTransition>

            <CSSTransition in={activeMenu === 'settings'}
                unmountOnExit timeout={500}
                className="menu-secondary">
                <div>
                    <DropDownItem
                        leftIcon={<FontAwesomeIcon icon={faUser} />}
                        rightIcon={<FontAwesomeIcon icon={faCog} />}
                        ChangeMenu={ChangeMenu}
                        goToMenu="main"
                    >My Profile</DropDownItem>
                    <DropDownItem>Profile1</DropDownItem>
                    <DropDownItem>Profile2</DropDownItem>
                </div>
            </CSSTransition>
        </div>
    )
}
export default DropDownMenu