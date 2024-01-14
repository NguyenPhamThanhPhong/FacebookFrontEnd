

import "./Conversation-item.css";

function ConversationItem(props) {

    let urlstring = props.avatarUrl || 'https://www.w3schools.com/howto/img_avatar.png'
    let conversationName = props.conversationName || 'Phong'
    let message = props.message || 'hello'

    
    let myOnClick = ()=>{}
    if(props.onclick){
        myOnClick = ()=>{props.onclick(props.myKey)}
    }
    let myKey = props.myKey

    return (

        <div onClick={myOnClick} style={props.style} className="conversation-item-container">
                <div className="inner-container">
                    <div className="conversation-item-left">
                        <div className="flex-avatar-container">
                            <div className="avatar-container">
                                <img src={urlstring}
                                    alt="Avatar" className="round-avatar" />
                            </div>
                        </div>

                        <div className="flex-online-status">
                            <div className="online-status-div">

                            </div>
                        </div>
                    </div>
                    <div className="content-div">
                        <h4>{message}</h4>
                        <p>{conversationName}</p>
                    </div>

                </div>
        </div>
    );
}

export default ConversationItem
