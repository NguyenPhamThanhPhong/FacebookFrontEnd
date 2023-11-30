// <<style here>>
import './home.css';
import '../../index.css'
//css here

// component here
import Topbar from '../../components/header/top-bar';
// component here

import React, { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';


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

            <Topbar />


        </div>
    );
}
export default Home
