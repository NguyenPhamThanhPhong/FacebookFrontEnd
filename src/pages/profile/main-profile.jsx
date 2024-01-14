import React from "react";
import "./profile.css";
import AvatarBar from "../../components/avatar-bar/avatar-bar";
import ProfileMenus from "../../components/avatar-bar/profilemenu";

const MainProfile = (props) => {

  let user = props.user;

  let relationship = props.relationship || null;


  const image = 'assets/person/7.jpeg'
  return (
    <div className="MainProfile-container">
      <div className="MainProfile-item">
        <div className="avatarbarcontainer">
          {
            user &&
            (
              <>
                <AvatarBar relationship={relationship} user={user} img={image} />
                <ProfileMenus relationship={relationship} user={user} image={image} />
              </>
            )
          }
        </div>
      </div>
    </div>

  );
};

export default MainProfile;
