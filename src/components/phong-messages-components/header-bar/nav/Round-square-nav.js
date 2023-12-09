
import './Round-square-nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function RoundSquareNav(props) {

    let active = props.active
    let navClassName = active ? "icon-clicked"  : 'icon-nav'
    let iconStyle = active ? { color: '#0866ff', } : {color: 'var(--text-color)', };
    return (
        <li>
            <a className={navClassName}>
                <FontAwesomeIcon className='icon'
                 style={iconStyle} icon={props.icon} />
            </a>

        </li>
    )
}

export default RoundSquareNav
