// <<style here>>
import "./profile.css";
import "../../index.css";
//css here

// component here
import Sidebar from "../../components/SideBar/Left/SideBar";
// component here

import React, { useEffect, useState } from "react";
import MainProfile from "./main-profile";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../../data-store";
import { userApi } from "../../data/index";

function Profile(props) {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
  };
  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
  };
  const [globalState, dispatchGlobalState] = useGlobalContext();
  const [pageUser, setPageUser] = useState(null);

  const [relationship, setRelationship] = useState(null);

  let { id: myId } = useParams();
  let user = globalState?.user;

  
  function queryUser(id) {
    userApi.viewDTO(id).then(res => {
      if (!res.isError) {
        console.log(myId);
        console.log(res.data?.data);
        setPageUser(res.data?.data);
      }
    }).catch(err => {
      console.log(err);
    });
  }

  useEffect(() => {
    if (user?.id !== undefined && user?.id !== null) {
      if (user?.id !== myId) {
        let myUser = globalState?.people?.find(x => x.id === myId);
        if (myUser) {
          setRelationship('friend');
          setPageUser(myUser);
        }
        else {
          queryUser(myId);
          setRelationship('other');
        }
      }
      else {
        setRelationship('self');
        setPageUser(user);
      }
    }
  }, [globalState?.user,myId]);



  const handleThemeChange = (e) => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };

  return (
    <div className="profilepage">
      <div className="Profile-item">
        <Sidebar  />
        <MainProfile relationship={relationship} user={pageUser} />
        <div style={{ flex: "2.5" }}>
        </div>
      </div>
    </div>
  );
}
export default Profile;
