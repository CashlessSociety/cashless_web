import React from "react";

// reactstrap components
import { Card, Container, Row, Col } from "reactstrap";

// core components

function IntroRow() {
  return (
    <>
      <div className="features-3 cashless-features">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="12">
              <h2 className="title">Financially free, together</h2>
              <h4 className="description">
                Cashless keeps track of the movement of value through a community. We empower you to share strengths and build networks of credit, achieving our goals without banks.</h4>
              {/*
              <h3><span className="comment"><b>[IMG - Network Effects/Trading Web]</b></span></h3>*/}
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
                  <b>Cashless is distributed by design.</b> Distributed ledger technology puts data where it belongs - in your hands. Not in the cloud - or even on the blockchain. 
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
                <b>Give anyone credit.</b> You choose who to accept it and within which communities. We provide credit clearing and reputation but <b>you are your own bank</b>. 
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
                    We put communities in charge of their own credit. We act as a node within that fabric, providing tools that let communities build their own social / financial networks <b>free from interest bearing debt</b>.
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