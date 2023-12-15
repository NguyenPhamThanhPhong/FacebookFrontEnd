import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { FaThumbsUp, FaThumbsDown, FaReply } from 'react-icons/fa';

export default function Comment() {
  return (
    <section>
      <Container className="py-5" style={{ maxWidth: "1000px" }}>
        <Row className="justify-content-center">
          <Col md="12" lg="12" xl="12">
            <div className="d-flex flex-start mb-4">
              <img
                className="rounded-circle shadow-1-strong me-3"
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
                alt="avatar"
                width="65"
                height="65"
              />

              <Card className="w-100">
                <Card.Body className="p-4">
                  <div>
                    <h5>Johny Cash</h5>
                    <p className="small">3 hours ago</p>
                    <p>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel
                      metus scelerisque ante sollicitudin. Cras purus odio,
                      vestibulum in vulputate at, tempus viverra turpis. Fusce
                      condimentum nunc ac nisi vulputate fringilla. Donec
                      lacinia congue felis in faucibus ras purus odio,
                      vestibulum in vulputate at, tempus viverra turpis.
                    </p>

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
                      <a href="#!" className="link-muted">
                        <FaReply className="me-1" /> Reply
                      </a>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>

            <div className="d-flex flex-start mb-4">
              <img
                className="rounded-circle shadow-1-strong me-3"
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(31).webp"
                alt="avatar"
                width="65"
                height="65"
              />

              <Card className="w-100">
                <Card.Body className="p-4">
                  <div>
                    <h5>Mindy Campbell</h5>
                    <p className="small">5 hours ago</p>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Delectus cumque doloribus dolorum dolor repellat nemo
                      animi at iure autem fuga cupiditate architecto ut quam
                      provident neque, inventore nisi eos quas?
                    </p>

                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        
                                              
                        {/*this need to further install react-icon  */}
                        {/* <a href="#!" className="link-muted me-2">
                          <FaThumbsUp className="me-1" />
                          158
                        </a>
                        <a href="#!" className="link-muted">
                          <FaThumbsDown className="me-1" />
                          13
                        </a> */}
                      </div>
                      <a href="#!" className="link-muted">
                        <FaReply className="me-1" /> Reply
                      </a>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
