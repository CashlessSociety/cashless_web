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
                <div>
                  <p className="description">
                  Right now we have:
                  <ul><li>A small team</li>
                      <li>A proof of concept <a href="https://startups.cashless.social">(deployed on main net)</a></li>
                      <li>A vision of where we're going</li>
                  </ul>
                  </p>
                  <p className="description">
                    We're working on:
                    <ul><li><a href="https://github.com/CashlessSociety/cashless-ui">The 100% open source MVP and reference implementation</a></li>
                    <li>A comprehensive white paper.</li>
                    <li>Working out how to governance our DAO.</li>
                    <li>Finding our founding  team</li>
                    </ul>
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