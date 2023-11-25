
// <====style here =====>
import "./Nav-item.css"
// <====library here =====>
import React,{useState} from "react";


function NavItem(props) {

    const [open, setOpen] = useState(false);

    return (
        <li onClick={()=>setOpen(!open)} className="nav-item">
            <a href="#" className="icon-button">
                {props.icon}
            </a>
            {open && props.children}
        </li>
    )
}

export default NavItem
