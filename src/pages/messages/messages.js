// <============================Component here ============================>

// import FirstColumn from './first-column';
import Header from '@components/phong-messages-components/header-bar/Header';
import FirstColumn from '@pages/messages/first-column';
// <============================Library here ============================>

import React, { useState, useEffect,useRef } from 'react'
import { MessageBox } from "react-chat-elements";

// <============================CSS HERE ============================>
import "./messages.css"
import "react-chat-elements/dist/main.css"
import { CSSTransition } from "react-transition-group"
import CustomModal from './custom-modal';



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

  return (
    <div>
      <Header />

      <h1>Messages</h1>
      <CustomModal />

      <FirstColumn products={products} />
    </div>
  )
}
export default Messages