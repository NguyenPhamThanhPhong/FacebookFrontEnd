import Newpost from "./new-post";
import "./post.css";
import Posts from "./posts";
// import {Postdata} from "../../data/post-api.js"
import React from "react";
import { useState } from "react";
import { Postdata } from "../../data/post-api";

async function convertToRealPath(dataURL) {
  // Tạo một đối tượng Blob từ dữ liệu nhị phân
  const blob = await fetch(dataURL).then((response) => response.blob());

  // Lấy đường dẫn thực tế của Blob
  const realPath = await URL.createObjectURL(blob);

  // Trả về đường dẫn thực tế của Blob
  return realPath;
}
const Mainpost = (props) => {
  const imageuser = 'assets/person/7.jpeg'
  return (
    <div className="container-mainpost">
      <div className="containerpost">
        <Newpost image={imageuser}/>
        {Postdata.map((item,index) => (
          <Posts
            
            key = {item.id}
            image = {item.owner.avatarUrl}
            title = {item.owner.name}
            description = {item.content}
            
          >
            {console.log(item.fileUrls)}
          </Posts>
        ))}
      </div>
    </div>
  );
};

export default Mainpost;
