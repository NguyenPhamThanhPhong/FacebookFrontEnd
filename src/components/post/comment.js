import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { FaThumbsUp, FaThumbsDown, FaReply } from "react-icons/fa";
import NewComment from "./newcomment.js";

const Comment = ({commentinfo}) => {
  return (
    <div>
      <section style={{ margin: "20px" }}>
        <Container style={{ padding: "0" }}>
          <div className="d-flex flex-start mb-4">
            <img
              className="rounded-circle shadow-1-strong me-3"
              src={commentinfo.AvatarUrl}
              alt="avatar"
              width="65"
              height="65"
            />

            <Card className="w-100">
              <Card.Body>
                <div>
                  <h5>{commentinfo.UserId}</h5>
                  <p className="small">{commentinfo.CommentTime}</p>
                  <p>{commentinfo.Content}</p>

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
