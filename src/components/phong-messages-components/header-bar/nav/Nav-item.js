
// <====style here =====>
import "./Nav-item.css"
// <====library here =====>
import React,{useState} from "react";


function NavItem(props) {

    const [open, setOpen] = useState(false);

    return (
        <li  className="nav-item">
            <a onClick={()=>setOpen(!open)}  className="icon-button">
                {props.icon}
            </a>
            <div className="test-div">

            </div>
            {/* {open && props.children} */}
        </li>
    )
}

export default NavItem
