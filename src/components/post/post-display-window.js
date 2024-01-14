import React from 'react';


const checkUrlType = (url) => {
    const videoExtensions = ["mp4", "avi", "mov", "mkv"];
    const imageExtensions = ["jpg", "jpeg", "png", "gif", "bmp"];
  
    const fileExtension = url.split(".").pop().toLowerCase();
  
    const isVideo = new RegExp(videoExtensions.join("|")).test(fileExtension);
    const isImage = new RegExp(imageExtensions.join("|")).test(fileExtension);
  
    if (isVideo) {
      return "video";
    } else if (isImage) {
      return "image";
    } else {
      return "unknown";
    }
  };

function PostDisplayWindow({propsPost}) {
    return (
        <div>
        {propsPost.FileUrls && (
          <div
            style={{ display: "flex", width: `100%`, minheight: "100px",flexDirection:'column',gap:'5px' }}
          >
            {Object.values(propsPost.FileUrls).map((fileUrl, index) => {
              if (checkUrlType(fileUrl) === "image") {
                return(
                  <img
                  style={{
                    objectFit: "cover",
                    // Sử dụng flex để tự co lại
                    flex: "1",
                    width:'100%'
                  }}
                  key={index}
                  src={fileUrl}
                  alt="#"/>);
              }
              if (checkUrlType(fileUrl) === "video") {
                return(
                  <video key={index} controls style={{width:'100%'}}>
                  <source src={fileUrl}/>
                </video>
                );
              }
            })}
          </div>
        )}
      </div>
    );
}

export default PostDisplayWindow;
