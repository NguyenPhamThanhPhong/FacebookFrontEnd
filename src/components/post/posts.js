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
import { commentApi } from '../../data/index'



const Posts = ({ propsPost, user, people, handleLikeUnlike }) => {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalEditShow, setModalEditShow] = React.useState(false);

  let isLiked = propsPost?.likes?.some((item) => item.userId === user?.id);

  const [comments, setComments] = useState(propsPost?.comments || []);

  const fetchComments = async () => {
    if (propsPost?.commentIds?.length > 0) {
      const res = await commentApi.getMany(propsPost?.commentIds, 0);
      if (!res.isError) {
        setComments(res.data?.data);
      }
    }
  }
  const uniqueUserIdsSet = new Set(comments.map(comment => comment.userId));

  // Convert the Set back to an array
  const distinctUserIds = Array.from(uniqueUserIdsSet);

  useEffect(() => {
    fetchComments();
  }, []);

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
            {propsPost.content}
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
                      return (
                        <span key={item.userId}>
                          {" "}
                          {mypeople?.personalInfo?.name || user?.personalInfo?.name}
                        </span>
                      );
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
                    {distinctUserIds.map(userId => {
                      let person = people.find((p) => p.id === userId);
                      return (
                        <div key={userId}>{person?.personalInfo?.name || user?.personalInfo?.name}</div>
                      );
                    })}
                  </Tooltip>
                }
              >
                <span style={{ marginRight: "10px" }} className="style-service">
                  {comments?.length || 0} bình luận
                </span>
              </OverlayTrigger>

            </div>
          </div>
          <hr style={{ margin: "1rem 16px" }} />
        </div>
        <div className="button-interact">
          <Button style={{ height: '40px', background: isLiked ? 'blue' : 'pink' }}
            onClick={async () => { await handleLikeUnlike(propsPost?.id, isLiked ? 2 : 1) }} > Thích</Button>
          <Button variant="primary" onClick={() => setModalShow(true)}>
            Bình luận
          </Button>

          <CommentModal
            handleLikeUnlike={handleLikeUnlike}
            ownerId={propsPost?.owner?.userId}
            ownerName={propsPost?.owner?.name}
            postId={propsPost.postId}
            user={user}
            people={people}
            image={propsPost.owner.avatarUrl}
            fileUrls={propsPost?.fileUrls}
            description={propsPost?.content}
            show={modalShow}
            comments={comments}
            distinctUserIds={distinctUserIds}
            likes={propsPost?.likes || []}
            isLiked={isLiked}
            onHide={() => setModalShow(false)}
          />
        </div>
        {
          user && <NewComment postId={propsPost?.id} user={user} setComments={setComments} />
        }
        {comments && (
          <div>
            {comments.slice(0, 2).map((comment) => {
              let myperson = people.find((p) => p.id === comment.userId);
              return (
                <Comment
                  key={comment.id}
                  commentinfo={comment}
                  setComments={setComments}
                  personName={myperson?.personalInfo?.name || user?.personalInfo?.name}
                  avatarUrl={myperson?.personalInfo?.avatarUrl || user?.personalInfo?.avatarUrl}
                />
              );
            })}
          </div>
        )}
      </Card>
    </div>
  );
};

export default Posts;
