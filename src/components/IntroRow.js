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
                  It lets people share their strengths and build <span className="comment">[cryptographic] </span>
                  networks of exchanges that empower purposes before ever 
                  having to reach for a wallet.</h4>
                <h3><span className="comment"><b>[IMG - Network Effects/Trading Web]</b></span></h3>
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
                    <b>Cashless is distributed by design.</b>
                    <br />Keep the power where it matters, because Distributed Ledger Technology is bigger than bitcoin. 
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
                    We believe in putting communities in charge of their own credit 
                    - letting communities create <span className="comment">[relation-driven, reliable 
                    exchange without banks.]</span> their own, reliable credit without 
                    banks <span className="comment">[could remove w/o banks;; adversarial]</span>.
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