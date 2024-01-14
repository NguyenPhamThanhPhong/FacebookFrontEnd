import React from "react";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "bootstrap/dist/css/bootstrap.min.css";
import "./post.css";

import Comment from "./comment";
import NewComment from "../../components/post/newcomment.js";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import PostDisplayWindow from './post-display-window.js'
import PostsEdit from './post-edit.js'
import CommentModal from './comment-modal.js'
import PostTitleDisplay from './post-title-display.js'



const Posts = ({ propsPost }) => {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalEditShow, setModalEditShow] = React.useState(false);

  return (
    <div>
      <Card bsPrefix="background">
        <Card.Body>
          <Card.Title>
            <PostTitleDisplay propsPost={propsPost}/>
            <PostsEdit
              image={propsPost.Owner.AvatarUrl}
              title={propsPost.Owner.Name}
              show={modalEditShow}
              description={propsPost.Content}
              FileUrls={propsPost.FileUrls}
              onHide={() => setModalEditShow(false)}
            />
          </Card.Title>
          <Card.Text style={{ padding: "0 10px 0 10px" }}>
            {propsPost.Content}
          </Card.Text>
          <PostDisplayWindow propsPost={propsPost}/>
        </Card.Body>
        <div style={{ marginTop: "10px" }}>
          <div className="interact">
            <OverlayTrigger
              placement="bottom"
              overlay={
                <Tooltip id="span-tooltip">
                  {propsPost.Likes.map((item) => (
                    <span key={item.userId}> {item.name}</span>
                  ))}
                </Tooltip>
              }
            >
              <span className="style-service">
                {propsPost.Likes.length} cảm xúc
              </span>
            </OverlayTrigger>

            <div>
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id="span-tooltip">
                    {propsPost.Comments.map((item) => (
                      <span key={item.UserId}> {item.UserId}</span>
                    ))}
                  </Tooltip>
                }
              >
                <span style={{ marginRight: "10px" }} className="style-service">
                  {propsPost.Comments.length} bình luận
                </span>
              </OverlayTrigger>

              <span className="style-service">lượt chia sẻ</span>
            </div>
          </div>
          <hr style={{ margin: "1rem 16px" }} />
        </div>
        <div className="button-interact">
          <Button> Thích</Button>
          <Button variant="primary" onClick={() => setModalShow(true)}>
            Bình luận
          </Button>

          <CommentModal
            image={propsPost.Owner.AvatarUrl}
            FileUrls={propsPost.FileUrls}
            title={propsPost.Owner.Name}
            description={propsPost.Content}
            show={modalShow}
            comments={propsPost.Comments}
            Likes={propsPost.Likes}
            onHide={() => setModalShow(false)}
          />

          <DropdownButton
            as={ButtonGroup}
            title="Chia sẻ"
            id="bg-nested-dropdown"
          >
            <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
            <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
          </DropdownButton>
        </div>
        <NewComment />
        {propsPost.Comments && (
          <div>
            {propsPost.Comments.map((comment) => (
              <Comment key={comment.Id} commentinfo={comment} />
            ))}
          </div>
        )}
      </Card>
    </div>
  );
};

export default Posts;
