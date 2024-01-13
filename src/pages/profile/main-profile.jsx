import React from "react";
import "./profile.css";
import AvatarBar from "../../components/avatar-bar/avatar-bar";
import ProfileMenus from "../../components/avatar-bar/profilemenu";

const MainProfile = (props) => {

  let user = props.user;

  const image = 'assets/person/7.jpeg'
  return (
    <div className="MainProfile-container">
      <div className="MainProfile-item">
        <div className="avatarbarcontainer">
          {
            user &&
            (
              <>
                <AvatarBar img={image} />
                <ProfileMenus image={image} />
              </>
            )
          }
          {
            !user &&
            (
              <h1>Page not found</h1>
            )
          }
        </div>
      </div>
    </div>

  );
};

export default MainProfile;
