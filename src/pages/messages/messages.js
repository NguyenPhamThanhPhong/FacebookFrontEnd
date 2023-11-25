// <============================Component here ============================>

// import FirstColumn from './first-column';
import NavBarCustom from '@components/phong-messages-components/header-bar/nav/Nav-bar';
import FirstColumn from '@pages/messages/first-column';
// <============================Library here ============================>

import React, { useState,useEffect } from 'react'
import { MessageBox } from "react-chat-elements";

// <============================CSS HERE ============================>
import "./messages.css"
import "react-chat-elements/dist/main.css"



function Messages(props) {

    const [products, setProducts] = useState([]);

    const fetchData = async () => {
      try {
        const response = await fetch('https://api.sampleapis.com/beers/ale');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []);


    return (
        <div>
            <NavBarCustom/>
            <h1>Messages</h1>
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


            <FirstColumn products={products}/>
        </div>
    )
}
export default Messages