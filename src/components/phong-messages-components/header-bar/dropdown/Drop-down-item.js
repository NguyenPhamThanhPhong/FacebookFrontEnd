
import "./drop-down-item.css"


function DropDownItem(props) {
    return (
        <a href="#" className="menu-item">
            <span className="icon-button">
                {props.leftIcon}
            </span>
            {props.children}
            <span className="icon-right">
                {props.rightIcon}
            </span>
        </a>
    )
}

export default DropDownItem