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

function PostDisplayWindow(props) {
  return (
    <div>
      {props.fileUrls && (
        <div style={{ display: "flex", width: `100%`, minheight: "100px", flexDirection: 'column', gap: '5px' }}>
          <div>
            {props.fileUrls &&
              Object.values(props.fileUrls).map((fileUrl, index) => {
                if (checkUrlType(fileUrl) === "image") {
                  return (
                    <img
                      style={{
                        objectFit: "cover",
                        maxWidth: '45%',
                        minWidth: '30%',
                        // Sử dụng flex để tự co lại
                      }}
                      key={index}
                      src={fileUrl}
                      alt="#" />);
                }
                if (checkUrlType(fileUrl) === "video") {
                  return (
                    <video key={index} controls style={{ width: '100%' }} >
                      <source src={fileUrl} />
                    </video>
                  );
                }
              })}
          </div>
        </div>
      )}
    </div>
  );
}

export default PostDisplayWindow;
