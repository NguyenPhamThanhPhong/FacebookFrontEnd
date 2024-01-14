import './Round-button.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function RoundButton(props) {

    let style={
        width : props.width,
        height : props.height,
        backgroundColor: props.backgroundColor,
    }
    let styleIcon={
        color: props.iconColor,
        width: props.iconWidth,
        height: props.iconHeight,
    }

    return (
        <button style={style} className='round-button'>
            <FontAwesomeIcon className='icon-round' style={styleIcon} icon={props.icon} />
        </button>

    )
}

export default RoundButton
