
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@mui/icons-material";

// import { Group } from "@mui/icons-material";

// import { Users } from "../../dummyData";
// import CloseFriend from "../closeFriend/CloseFriend";

import "./SideBar.css"
import GroupList from "../../group-list/grouplist";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import React, {useState} from "react";


  const Sidebar = (props) => {
    const [isClicked, setIsClicked] = useState(false);
  
    const handleClick = () => {
      setIsClicked(!isClicked);
    };
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
        <li className="sidebarListItem">
            <span className="sidebarIcon">
                <img
                className="sidebarAvatarItem"
                src={"assets/persons/7.jpeg"}
                alt=""
                />
            </span>
            <span className="sidebarListItemText">Anh Viet</span>
          </li>
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilledOutlined className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <Button variant="primary" className="sidebarButton">Show More</Button>{" "}
        
        <hr className="sidebarHr" />
        
        <h4 className="sidebarTitle">Your Groups</h4>

        {/* Your group list */}
        <ul className="sidebarGroupList">
        
        {/*Re-use friend component  */}
          <GroupList name="grouplist1"/>
          
        </ul>

        <hr className="sidebarHr" />
      </div>
    </div>
  );
}
export default Sidebar;