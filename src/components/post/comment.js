import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { FaThumbsUp, FaThumbsDown, FaReply } from "react-icons/fa";
import NewComment from "./newcomment.js";
import { commentApi } from "../../data/index"


function formatISODate(isoDate) {
  const date = new Date(isoDate);

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;

  return formattedDate;
}


const Comment = ({ commentinfo, avatarUrl, personName,setComments }) => {

  const deleteComment = async (commentId) => {
    try {
      let resposne = await commentApi.deleteComment(commentId);
      if (!resposne.isError) {
        setComments(prev => prev.filter(comment => comment.id !== commentId))
      }
    }
    catch (err) {
      console.log(err)
    }
  }

  const handleDeleteComment = (commentId) => {
    deleteComment(commentinfo?.id)
  }

  return (
    <div>
      <section style={{ margin: "20px" }}>
        <Container style={{ padding: "0" }}>
          <div className="d-flex flex-start mb-4">
            <img
              className="rounded-circle shadow-1-strong me-3"
              src={avatarUrl}
              alt="avatar"
              width="65"
              height="65"
            />

            <Card className="w-100">
              <Card.Body>
                <div>
                  <h5>{personName}</h5>
                  <p className="small">{formatISODate(commentinfo?.commentTime)}</p>
                  <p>{commentinfo?.content}</p>

                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      {/* This need to install react-icons */}
                      {/* <a href="#!" className="link-muted me-2">
                          <FaThumbsUp className="me-1" />
                          132
                        </a>
                        <a href="#!" className="link-muted">
                          <FaThumbsDown className="me-1" />
                          15
                        </a> */}
                    </div>
                    <a
                      href="#!"
                      className="link-muted"
                      style={{ color: "black" }}
                    >
                      <button>chỉnh sửa</button>
                      <button onClick={handleDeleteComment}>Delete</button>
                      <FaReply className="me-1" /> Reply
                    </a>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </section>


    </div>
  );
};

export default Comment;
