import React from "react";

// reactstrap components
import { Card, Container, Row, Col } from "reactstrap";

// core components

function IntroRow() {
  return (
    <>
      <div className="features-3 cashless-features text-center">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="12">
              <h2 className="title">Live life on your own terms with Cashless.</h2>
              <h4 className="description">
                Cashless is an alternative way to keep track of credit through communities. <br />We provide trust and transparency but <b>you are your own bank.</b></h4>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <div className="info info-hover">
                <div className="icon icon-primary icon-circle">
                  <i className="now-ui-icons education_atom"></i>
                </div>
                <h4 className="info-title">Distributed</h4>
                <p className="description">
                  Cashless is distributed by design. Distributed ledger technology puts <b>data where it belongs</b> - in your hands. Not in the cloud - or even on the blockchain.
                </p>
              </div>
            </Col>
            <Col md="4">
              <div className="info info-hover">
                <div className="icon icon-success icon-circle">
                  <i className="now-ui-icons objects_key-25"></i>
                </div>
                <h4 className="info-title">Autonomous</h4>
                 <p className="description">
                 <b>Give anyone credit.</b> You choose who to accept it and within which communities. We provide credit clearing and reputation but you, collectively, act as your own bank.
                </p>
              </div>
            </Col>
            <Col md="4">
              <div className="info info-hover">
                <div className="icon icon-info icon-circle">
                  <i className="now-ui-icons business_money-coins"></i>
                </div>
                <h4 className="info-title">Collective</h4>
                <p className="description">
                    We put communities in charge of their own credit. We act as a node within that fabric, providing tools that let communities build their own financial future <b>free from interest bearing debt</b>.
                    </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      
    </>
  );
}

export default IntroRow;