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


    return (
        <div className="dropdown">
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