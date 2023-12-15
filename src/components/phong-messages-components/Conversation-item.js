

import "./Conversation-item.css";

function ConversationItem(props) {

    let urlstring = 'https://ahrefs.com/blog/wp-content/uploads/2020/05/fb-what-is-https.png'
    let conversationName = 'hello jadskljfa'
    let message = 'Nguyễn Văn A'

    return (

        <div style={props.style} className="conversation-item-container">
                <div className="inner-container">
                    <div className="left">
                        <div className="flex-avatar-container">
                            <div className="avatar-container">
                                <img src={urlstring}
                                    alt="Avatar" className="round-avatar">
                                </img>
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
    )
}

export default ConversationItem
