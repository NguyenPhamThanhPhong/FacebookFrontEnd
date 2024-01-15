import React from "react";
import ImageModal from "./post-image-modal";

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
  const [modalImageShow, setModalImageShow] = React.useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = React.useState("");
  return (
    <div>
      {props.fileUrls && (
        <div
          style={{
            display: "flex",
            width: `100%`,
            minheight: "100px",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          <div>
            {props.fileUrls &&
              Object.values(props.fileUrls).map((fileUrl, index) => {
                if (checkUrlType(fileUrl) === "image") {
                  return (
                    <img
                      style={{
                        objectFit: "cover",
                        maxWidth: "45%",
                        cursor: "pointer",
                        minWidth: "30%",
                        // Sử dụng flex để tự co lại
                      }}
                      onClick={() => {
                        setModalImageShow(true)
                        setSelectedImageUrl(fileUrl)
                      }}
                      key={index}
                      src={fileUrl}
                      alt="#"
                    />
                  );
                }

                if (checkUrlType(fileUrl) === "video") {
                  return (
                    <video
                      key={index}
                      controls
                      style={{ width: "100%" }}
                      onClick={() => {
                        setModalImageShow(true)
                        setSelectedImageUrl(fileUrl)
                      }}
                    >
                      <source src={fileUrl} />
                    </video>
                  );
                }
              })}
          </div>
        </div>
      )}
      <ImageModal
        src = {selectedImageUrl}
        show={modalImageShow}
        onHide={() => setModalImageShow(false)}
      />
    </div>
  );
}

export default PostDisplayWindow;
