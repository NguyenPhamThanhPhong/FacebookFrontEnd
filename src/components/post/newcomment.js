import React, { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { useDataHook } from '../../data-hook'
import { commentApi } from "../../data/index"

const NewComment = ({ user, postId, setComments }) => {

  const [content, setContent] = useState("");

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const handleSendComment = async (content, userId, postId, parentId, files = []) => {
    const formData = new FormData();
    formData.append("Content", content);
    formData.append("UserId", userId);
    formData.append("PostId", postId);
    formData.append("ParentId", parentId);
    for (let file of files) {
      formData.append("Files", file);
    }
    try {
      let resposne = await commentApi.create(formData);
      if (!resposne.isError) {
        setContent("");
        setComments(prev => [resposne.data?.data, ...prev])
      }
    }
    catch (err) {
      console.log(err)
    }
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && event.shiftKey) {
      setContent(content + '\n');
      return;
    }
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSendComment(content, user?.id, postId, postId, []);
    }
  }

  const { doComment } = useDataHook()

  return (
    <div className="d-flex flex-start mb-4" style={{ margin: '20px' }}>
      {
        user?.personalInfo?.avatarUrl &&
        <img
          className="rounded-circle shadow-1-strong me-3"
          src={user?.personalInfo?.avatarUrl}
          alt="avatar"
          width="65"
          height="65"
        />
      }
      <Card className="w-100">
        <Card.Body className="p-4">
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control
              onChange={handleChange}
              onKeyDown={handleKeyDown} as="textarea" placeholder="Viết bình luận ..." />
          </Form.Group>

        </Card.Body>
      </Card>
    </div>
  );
};

export default NewComment;
