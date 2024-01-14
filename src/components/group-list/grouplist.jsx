import React, { useState } from "react";
import "./grouplist.css";


const GroupList = () => {
 

  return (
    
      <div className="my-group">
        <div className="group">
          <div className="userInfo">
            <img
              className="img-group"
              src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <div className="online" />
            <span className="name-group">Group hoc tap</span>
            
          </div>
        </div>
        <div className="group" >
          <div className="userInfo">
            <img
              className="img-group"
              src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <div className="online" />
            <span className="name-group">Hahahihi</span>
            
          </div>
        </div>
      </div>
      
    
  );
};

export default GroupList;
