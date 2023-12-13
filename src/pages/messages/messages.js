// <============================Component here ============================>

// import FirstColumn from './first-column';
import Header from '@components/phong-messages-components/header-bar/Header';
import FirstColumn from '@pages/messages/first-column';
// <============================Library here ============================>

import React, { useState, useEffect, useRef } from 'react'
import { MessageBox } from "react-chat-elements";

// <============================CSS HERE ============================>
import "./messages.css"
import "react-chat-elements/dist/main.css"
// import { CSSTransition } from "react-transition-group"
// import CustomModal from './custom-modal';



function Messages(props) {
  document.querySelector("body").setAttribute("data-theme", "dark");


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

  // useEffect(() => {
  //   fetchData();
  // }, []);
  function titleCLick(){
    console.log("title clicked")
  }

  return (
    <div >
      <Header />

      <div className='message-page-wrapper-div'>
        <div className='first-column-wrapper' >
          <FirstColumn products={products} />
        </div>

        <div className='chat-window'>
          <div className='chat-box'>
            <MessageBox
              className='message-item'
              type={"text"}
              text="Here is a text type messagsddfsadsdafdasdfasdfasdfadsfe \n
              basdfasdfasdfasdfadsfaadsfoxgsddfsadsdafdasgsddfsadsdafdasgsddfsadsdafdas"
            />
            <MessageBox
            
              className='message-item '
              notchStyle={{fill:'var(--header-color)'}}
              position='right'
              type={"text"}
              text="Here is a text type message \n
              basdfasdfasdfasdfadsfaadsfox"
            />
          </div>

        </div>
      </div>


    </div>
  )
}
export default Messages