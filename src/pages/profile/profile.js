// <<style here>>
import "./profile.css";
import "../../index.css";
//css here

// component here
import Sidebar from "../../components/SideBar/Left/SideBar";
// component here

import React, { useState } from "react";
import MainProfile from "./main-profile";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../../data-store";

function Profile(props) {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
  };
  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
  };
  const [globalState, dispatchGlobalState] = useGlobalContext();

  let user = globalState?.user;
  if(user?.id !== undefined && user?.id !== null)
  {
    // if(user?.id !== myId)
    // {
    //   user = globalState?.people?.find(x => x.id === myId);
    // }
  }
  let { id:myId } = useParams();
  
  

  const handleThemeChange = (e) => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };

  return (
    <div className="profilepage">
      <div className="Profile-item">
        <Sidebar />
        <MainProfile user={user} />
        <div style={{ flex: "2.5"}}>
        </div>
      </div>
    </div>
  );
}
export default Profile;
