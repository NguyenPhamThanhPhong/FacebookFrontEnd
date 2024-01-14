import React from 'react';
import Image from "react-bootstrap/Image";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";


function PostTitleDisplay({propsPost,setModalEditShow}) {
    return (
        <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex" }}>
          <Image
            src={propsPost.Owner.AvatarUrl}
            roundedCircle
            width={50}
            height={50}
            style={{ margin: "10px" }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ marginTop: "15px" }}>
              {propsPost.Owner.Name}
            </span>
            <span
              style={{
                fontSize: "12px",
                fontWeight: "100",
                marginBottom: "0px",
              }}
            >
              5 giờ
            </span>
          </div>
        </div>
        <MoreHorizIcon
          style={{ cursor: "pointer", margin: "10px" }}
          onClick={() => setModalEditShow(true)}
        ></MoreHorizIcon>
      </div>
    );
}

export default PostTitleDisplay;
