import React, { useState,useEffect } from 'react'
// <============================Component here ============================>

// import FirstColumn from './first-column';
import Header from '@components/phong-messages-components/header-bar/Header';
// <============================Library here ============================>

import { MessageBox } from "react-chat-elements";

// <============================CSS HERE ============================>
import "./messages.css"
import { CSSTransition } from "react-transition-group"

import "react-chat-elements/dist/main.css"

import FirstColumn from './first-column';
import "./messages.css"



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

      <FirstColumn products={products} />
    </div>
  )
}
export default Messages