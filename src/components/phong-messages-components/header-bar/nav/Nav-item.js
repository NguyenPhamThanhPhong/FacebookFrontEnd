
// <====style here =====>
import "./Nav-item.css"
// <====library here =====>
import React, { useState } from "react";


function NavItem(props) {

    const [open, setOpen] = useState(false);

    return (
        // <li  className="nav-item">

        // </li>
        <a onClick={() => setOpen(!open)} className="icon-button">
            {props.icon}
        </a>
    )
}

export default NavItem
