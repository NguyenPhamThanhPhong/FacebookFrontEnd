
import './Round-square-nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function RoundSquareNav(props) {

    let active = props.active
    let navClassName = active ? "icon-clicked" : 'icon-nav'

    let iconStyle = active ?  props.iconActiveStyle  : props.iconNormalStyle;

    function onclickOverride(event){
        event.preventDefault();
        if(props.onClick!==null && props.onClick!==undefined 
            && props.targetingPath!==null && props.targetingPath!==undefined)
            props.onClick(props.targetingPath);
    }

    return (
        <a style={props.customNavStyle } onClick={(event) => onclickOverride(event)}
        className={'round-square-nav-normal ' + navClassName}>
            <FontAwesomeIcon className='icon'
                style={iconStyle} icon={props.icon} />
        </a>
    )
}

export default RoundSquareNav
