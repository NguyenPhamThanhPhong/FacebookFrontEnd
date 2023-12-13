
// <<style here>>
import './home.css';
import '../../index.css'
//css here

// component here
import Sidebar from '../../components/SideBar/Left/SideBar'

// component here

import React, { useState } from 'react';
import Friend from '../../components/friends/friend';
import Mainpost from '../../components/post/main-post';
import Header from '../../components/phong-messages-components/header-bar/Header';


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
        <div className='homepage'>
            <div className='homecontainer'>
            <div className='container-item' style={{marginTop:10}}>
                <Sidebar/>
                <Mainpost/>
                <Friend/>
            </div>
            </div>
        </div>
    );
}
export default Home
