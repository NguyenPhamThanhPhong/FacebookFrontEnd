// <<style here>>
import "./profile.css";
import "../../index.css";
//css here

// component here
import Sidebar from "../../components/SideBar/Left/SideBar";
// component here

import React, { useState } from "react";
import MainProfile from "./main-profile";

function Profile(props) {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
  };
  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
  };

  const handleThemeChange = (e) => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };

  return (
    <div className="profilepage">
      <div className="Profile-item">
        <div style={{flex:"2.5"}}>
        <Sidebar />
        </div>
        <MainProfile />
        <div style={{ flex: "2.5"}}>
        </div>
      </div>
    </div>
  );
}
export default Profile;
