// <<style here>>
import './home.css';
// import {ThemeController} from '../../ui-configuration/theme.js';
// import TopBar from '../../components/header/top-bar';
import '../../index.css'

import React, { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import Topbar from '../../components/header/top-bar';
// import { Checkbox } from '@mui/material';



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
        // console.log(document.querySelector("body").getAttribute("data-theme"));
    };

    return (
        <div>
            <Topbar />
            <h1 className='my-element'>
                this is home <HomeIcon />
            </h1>
            <input type='checkbox' onChange={handleThemeChange}>
            </input>
            {/* <button type='text' onChange={handleThemeChange} >Switch Theme</button> */}
        </div>
    );
}
export default Home
