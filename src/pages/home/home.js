
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
import Mainpost from '../../components/post/main-post';
import Leftmenu from '../../components/left-menu/left-menu';


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
            <div className='homecontainer'>
                <Leftmenu/>
                <Mainpost/>
                <Friend/>
            </div>
        </div>
    );
}
export default Home
