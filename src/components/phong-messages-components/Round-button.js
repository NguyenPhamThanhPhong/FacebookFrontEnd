import './Round-button.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'


function RoundButton(props) {


    return (
        <button className='round-button'>
            <FontAwesomeIcon className='icon-round' icon={faArrowLeft} />
        </button>

    )
}

export default RoundButton
