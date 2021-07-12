import React from "react";

// reactstrap components
import { Card, Container, Row, Col } from "reactstrap";

// core components

function IntroRow() {
  return (
    <>
      <div className="cd-section" id="features">
        <div className="features-3">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">Financially free, together.</h2>
                <h4 className="description">
                  Cashless keeps track of the movement of value through a community.
                  It lets people share their strengths and build networks of exchanges that empower their purposes before ever having to reach for a wallet.
.                </h4>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <div className="info info-hover">
                  <div className="icon icon-success icon-circle">
                    <i className="now-ui-icons objects_globe"></i>
                  </div>
                  <h4 className="info-title">Human-centred</h4>
                  <p className="description">
                    Real exchange is about value shared, and value shared means there are people involved - not just numbers.
                  </p>
                </div>
              </Col>
              <Col md="4">
                <div className="info info-hover">
                  <div className="icon icon-primary icon-circle">
                    <i className="now-ui-icons education_atom"></i>
                  </div>
                  <h4 className="info-title">Distributed</h4>
                  <p className="description">
                    Cashless is distributed by design. <b>[more]</b>
                  </p>
                </div>
              </Col>
              <Col md="4">
                <div className="info info-hover">
                  <div className="icon icon-info icon-circle">
                    <i className="now-ui-icons tech_watch-time"></i>
                  </div>
                  <h4 className="info-title">Credit Autonomy</h4>
                  <p className="description">
                    [Communities can do <b>[thisThing]</b>] and define sharing in ways that respect<b>[/honour] their needs]</b>. 
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default IntroRow;