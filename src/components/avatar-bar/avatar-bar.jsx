import React, { useState } from "react";
import "./avatar-bar.css";

function AvatarBar() {
  return (
    <>
    <div>
      <div className="profileCover">
              <img
                className="profileCoverImg"
                src="assets/post/3.jpeg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="assets/person/7.jpeg"
                alt=""
              />
      </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Coconut</h4>
                <span className="profileInfoDesc">Hello my friends!</span>
            </div>
    </div>
    </>
  );
}
export default AvatarBar;