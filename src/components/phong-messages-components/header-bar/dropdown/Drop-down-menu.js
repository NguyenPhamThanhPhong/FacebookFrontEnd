import "./Drop-down-menu.css"

// import App from "~/App"

import DropDownItem from "./Drop-down-item"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

function ProfileDropDown(props) {

    return (
        <div className="dropdown">
            <DropDownItem
                leftIcon={<FontAwesomeIcon icon={faUser} />}
                rightIcon={<FontAwesomeIcon icon={faCog} />}
            >My Profile</DropDownItem>
            <DropDownItem>Setting</DropDownItem>
            <DropDownItem>Log Out</DropDownItem>
        </div>
    )
}
export default ProfileDropDown