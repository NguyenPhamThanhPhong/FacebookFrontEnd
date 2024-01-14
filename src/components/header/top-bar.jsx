import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

function TopBar() {
    return (
        <div style={{position:'fixed'}}>
            Hello world!
            <div className="topbarLeft">
                <span classname="logo">
                    phongbook.com
                </span>
            </div>
            <div className="topbarLeft">
                <div className="searchbar">
                    <SearchIcon/>
                    <input placeholder='search for friends' className="searchInput" />
                </div>
            </div>
            <div className="topbarLeft">
                <div className="topbarLinks">
                    <span className="TopbarLink">Home page</span>
                    <span className="TopbarLink">Time line</span>
                </div>
                <div className="topbar-Icons">
                    <div className="topbarIconItem">
                        <PersonIcon/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <ChatIcon/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <NotificationsNoneIcon/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
            </div>
            {/* Your top bar content goes here */}
        
    </div>
  );
}

export default TopBar;
