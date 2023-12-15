
import './Round-square-nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function RoundSquareNav(props) {

    let active = props.active
    let navClassName = active ? "icon-clicked" : 'icon-nav'

    let iconStyle = active ?  props.iconActiveStyle  : props.iconNormalStyle;

    return (
        <a style={props.customNavStyle } 
        className={'round-square-nav-normal ' + navClassName}>
            <FontAwesomeIcon className='icon'
                style={iconStyle} icon={props.icon} />
        </a>
    )
}

export default RoundSquareNav
