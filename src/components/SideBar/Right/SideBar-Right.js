
// import user from data
//
import "./SideBar-Right.css"


export default function Rightbar({ profile }) {
    const HomeRightbar = () => {
    return (
        <div className="rightbar">
        {/* birthday block */}
            <div className="birthdayContainer">
                <img className="birthdayImg" src="assets/gift.png" alt="" />
                <span className="birthdayText">
                    <b>Jane Doe</b> and 3 other people have a birthday today
            </span>
            </div>
            {/* ad block */}
            <img className="rightbarAd" src="assets/ad.png" alt="" />
           
            


            {/* (outdated?) online friend section */}

            {/* <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                {Users.map((u) => (
                    <Online key={u.id} user={u} />
                ))}
            </ul> */}
        </div>
    );
};

    
    
//unused "Online friend logic" for now
const ProfileRightbar = () => {
    return (
    <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
            <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">City:</span>
                <span className="rightbarInfoValue">New York</span>
            </div>
            <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">From:</span>
                <span className="rightbarInfoValue">Madrid</span>
            </div>
            <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
            </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
            {/*  add more follower block to be shown as please*/}
                {/* person 1 */}
            <div className="rightbarFollowing">
                <img
                src="assets/person/1.jpeg"
                alt=""
                className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">John Carter</span>
            </div>
                {/* person 2 */}
            <div className="rightbarFollowing">
                <img
                src="assets/person/2.jpeg"
                alt=""
                className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">John Carter</span>
            </div>
                {/* person 3 */}
            <div className="rightbarFollowing">
                <img
                src="assets/person/3.jpeg"
                alt=""
                className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">John Carter</span>
            </div>

        </div>
    </>
    );
};

return (
    <div className="rightbar">
        <div className="rightbarWrapper">
            {profile ? <ProfileRightbar /> : <HomeRightbar />}
        </div>
    </div>
);
}