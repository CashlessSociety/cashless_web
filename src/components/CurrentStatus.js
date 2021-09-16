import React from "react";

// reactstrap components
import { Card, Container, Row, Col } from "reactstrap";

// core components



function CurrentStatus() {
  return (
    <>
      <div id="status" className="cashless-features current-status">
        <Container>
        
         <Row>
            <Col md={8}>
              <h2 className="title">Current Status</h2>
              <p>
                Right now we have:
              </p>
              <ul><li>A small team</li>
                  <li>A proof of concept <a href="https://startups.cashless.social">(deployed on main net)</a></li>
                  <li>A vision of where we're going</li>
              </ul>
            
              <p>
                We're working on:
              </p>
              <ul><li><a href="https://github.com/CashlessSociety/cashless-ui">The 100% open source MVP and reference implementation</a></li>
              <li>A comprehensive white paper.</li>
              <li>Working out how to governance our DAO.</li>
              <li>Finding our founding  team</li>
              </ul>
            </Col>
            <Col md={4} className="pt-5">
              <img
                alt="working"
                src={require("assets/img/working.jpg")}
              ></img>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default CurrentStatus;