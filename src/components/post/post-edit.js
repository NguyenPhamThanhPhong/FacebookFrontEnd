import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";


const PostsEdit = (props) => {
    const [editshow, seteditShow] = useState(false);
  
    const handleEditClose = () => seteditShow(false);
    const handleEditShow = () => seteditShow(true);
    const [content, setContent] = useState("");
  
    const handleInput = (e) => {
      const userInput = e.target.innerText;
      setContent(userInput);
    };
  
    return (
      <div>
        <Modal
          style={{ borderRadius: "10px", zIndex: "9999" }}
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <div className="modal-post">
            <Modal.Header
              closeButton
              closeVariant="white"
              style={{ border: "0px", paddingBottom: "10px" }}
            >
              <Modal.Title id="contained-modal-title-vcenter">
                <Image
                  src={props.image}
                  roundedCircle
                  width={50}
                  height={50}
                  style={{ marginRight: "10px" }}
                />
                <span>{props.title}</span>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ padding: "0px", margin: "10px" }}>
              <div
                style={{
                  width: "100%",
                  minHeight: "200px",
                  color: "white",
                  fontSize: "24px",
                  userSelect: "text",
                  padding: "5px",
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-word",
                }}
                role="textbox"
                aria-label="aaa"
                contentEditable
                spellCheck
                onInput={handleInput}
              >
                <p
                  aria-label="type something...."
                  style={{ fontSize: "20px", height: "20px", color: "white" }}
                ></p>
              </div>
              <div>
                {props.FileUrls && (
                  <div
                    style={{ display: "flex", width: `100%`, minheight: "100px" }}
                  >
                    {Object.values(props.FileUrls).map((fileurl, index) => (
                      <img
                        style={{
                          objectFit: "cover",
                          width: `50%`,
                          // Sử dụng flex để tự co lại
                          flex: "1",
                        }}
                        key={index}
                        src={fileurl}
                        alt="#"
                      />
                    ))}
                  </div>
                )}
              </div>
            </Modal.Body>
            <Modal.Body></Modal.Body>
            <Modal.Footer>
              <Button style={{ width: "90%" }}>Lưu</Button>
            </Modal.Footer>
          </div>
        </Modal>
      </div>
    );
  };

  export default PostsEdit;