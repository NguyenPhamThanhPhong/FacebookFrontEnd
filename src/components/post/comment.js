import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { FaThumbsUp, FaThumbsDown, FaReply } from 'react-icons/fa';
import NewComment from "./newcomment.js";
import "./comment.css"


const Comment = (props) => {
  return (
    <section style={{margin:'20px',background:"#3A3B3C", width:"100%"}}>
      <Container style={{padding:'0'}}>
            <div className="d-flex flex-start mb-4" >
              <img
                className="rounded-circle shadow-1-strong me-3"
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
                alt="avatar"
                width="65"
                height="65"
              />

          <Card className="w-100" >
                <Card.Body >
                  <div>
                  <h5>{props.name}</h5>
                    <p className="small">{props.time}</p>
                    <p>
                      {props.content}
                    </p>

                    <div className="comment_inner_container"  >
                      <div className="d-flex align-items-center" >
                        
                      </div>
                      <a href="#!" className="link-muted" style={{color:'white'}}>
                      <FaReply className="me-1" />  Reply
                      </a>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
      </Container>
    </section>
  );
}

export default Comment;