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



const Posts = ({ propsPost, user, people, handleLikeUnlike }) => {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalEditShow, setModalEditShow] = React.useState(false);

  let isLIked = propsPost?.likes?.some((item) => item.userId === user?.id);

  return (
    <div>
      <Card bsPrefix="background">
        <Card.Body>
          <Card.Title>
            <PostTitleDisplay propsPost={propsPost} />
            <PostsEdit
              image={propsPost?.owner?.avatarUrl}
              title={propsPost.owner?.name}
              show={modalEditShow}
              description={propsPost?.content}
              fileUrls={propsPost?.fileUrls}
              onHide={() => setModalEditShow(false)}
            />
          </Card.Title>
          <Card.Text style={{ padding: "0 10px 0 10px" }}>
            {propsPost.Content}
          </Card.Text>
          <PostDisplayWindow fileUrls={propsPost?.fileUrls} />
        </Card.Body>
        <div style={{ marginTop: "10px" }}>
          <div className="interact">
            <OverlayTrigger
              placement="bottom"
              overlay={
                <Tooltip id="span-tooltip">
                  {propsPost.likes &&
                    propsPost.likes.map((item) => {
                      let mypeople = people.find((p) => p.id === item.userId);
                      (
                        <span key={item.userId}> {mypeople?.personalInfo?.name || user?.personalInfo?.name}</span>
                      )
                    })}
                </Tooltip>
              }
            >
              <span className="style-service">
                {propsPost?.likes?.length || 0} cảm xúc
              </span>
            </OverlayTrigger>

            <div>
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id="span-tooltip">
                    {propsPost.comments &&
                      propsPost.comments.map((item) => (
                        <span key={item.UserId}> {item.UserId}</span>
                      ))}
                  </Tooltip>
                }
              >
                <span style={{ marginRight: "10px" }} className="style-service">
                  {propsPost?.comments?.length} bình luận
                </span>
              </OverlayTrigger>

              <span className="style-service">lượt chia sẻ</span>
            </div>
          </div>
          <hr style={{ margin: "1rem 16px" }} />
        </div>
        <div className="button-interact">
          <Button style={{ height: '40px', background: isLIked ? 'blue' : 'pink' }}
            onClick={async () => { await handleLikeUnlike(propsPost?.id, isLIked ? 2 : 1) }} > Thích</Button>
          <Button variant="primary" onClick={() => setModalShow(true)}>
            Bình luận
          </Button>

          <CommentModal
            handleLikeUnlike={handleLikeUnlike}
            ownerId = {propsPost?.owner?.userId}
            ownerName = {propsPost?.owner?.name}
            postId={propsPost.postId}
            people={people}
            image={propsPost.owner.avatarUrl}
            fileUrls={propsPost?.fileUrls}
            description={propsPost?.content}
            show={modalShow}
            comments={propsPost?.comments}
            likes={propsPost?.likes || []}
            onHide={() => setModalShow(false)}
          />
        </div>
        {
          user && <NewComment postId={propsPost?.id} user={user} />
        }
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
