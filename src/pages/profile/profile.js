
import React, { useState } from 'react'
import "react-chat-elements/dist/main.css"
import { MessageBox } from "react-chat-elements";



import "./profile.css"

function Profile(props) {

    const [users,setUsers]=useState([
        "hello1",
        "hello2",
        "hello3",
        "hello4",
        "hello5"
    ])

    function handleClick(){
        setUsers([...users,"helloadded"])
    }
    console.log("reloaded")
    return (
        <div>
            <h1>PersonDetail</h1>
            <div>
            <MessageBox
  position='left'
  title='Burhan'
  type='text'
  text="Hi there !"
  date={new Date()}
  replyButton={true}
/>

<MessageBox
  position="right"
  title="Emre"
  type="meetingLink"
  text="Click to join the meeting"
  date={new Date()}
/>
            </div>
            <div>
                {
                    users.map((item, index) => {
                        return (
                            <div key={index}>{item} </div>
                        )
                    })
                }
            </div>
            <button onClick={handleClick} > check this out</button>
        </div>
    )
}

export default Profile
