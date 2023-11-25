
// <====style here =====>
import "./Nav-item.css"
// <====library here =====>
import React,{useState} from "react";


function NavItem(props) {

    const [open, setOpen] = useState(false);

    console.log(props.children)
    console.log(open);
    return (
        <li onClick={()=>setOpen(!open)} className="nav-item">
            <a  className="icon-button">
                {props.icon}
            </a>
            {open && props.children}
        </li>
    )
}

export default NavItem
