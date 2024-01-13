import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import "./newcomment.css"
const NewComment = () => {
  return (
    <div className="commentcontainer" >
      <img
        className="rounded-circle shadow-1-strong me-3"
        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
        alt="avatar"
        width="65"
        height="65"
      />
      <Card className="w-100">
        <Card.Body className="p-4" style={{ background:"black"}}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" placeholder="Write a comment ..."/>
          </Form.Group>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NewComment;
