import React from "react";

// reactstrap components
import { Card, Container, Row, Col } from "reactstrap";

// core components



function CurrentStatus() {
  return (
    <>
      <div className="features-5 cashless-features current-status  section-image"    
        style={{
          backgroundImage: "url(" + require("assets/img/current_status.png") + ")",
        }}
      >
        <Container>
         <Row>
            <Col md="12">
              <h2 className="title">Current Status</h2>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <div className="info info-horizontal">
                <div className="description">
                  <p>
                  Right now we have a small team, a proof of concept <a href="https://startups.cashless.social">(deployed on main net)</a> and we're working on <a href="https://github.com/CashlessSociety/cashless-ui"> the MVP - all 100% Open Source</a>. Miles is head down working on the white paper and we're working on how to move governance to a DAO with a governance token. 
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default CurrentStatus;