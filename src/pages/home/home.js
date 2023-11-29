// <<style here>>
import './home.css';
import '../../index.css'
//css here

// component here
import Topbar from '../../components/header/top-bar';
// component here

import React, { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import Chatbox from '../../components/chat-box/chatbox';
import Friend from '../../components/friends/friend';


function Home(props) {
    const setDarkMode = ()=>{
        document.querySelector("body").setAttribute("data-theme", "dark");
    }
    const setLightMode = ()=>{
        document.querySelector("body").setAttribute("data-theme", "light");
    }

    const handleThemeChange = (e) => {

        if(e.target.checked)
            setDarkMode();
        else
        setLightMode();
    };

    return (
        <div>
            <Topbar/>
            <Friend/>
        </div>
    );
}
export default Home
