import React from "react";

// reactstrap components
import { Card, Container, Row, Col } from "reactstrap";

// core components

function HowTheApp() {
  return (
    <>
      <div className="how_it_works cashless-features">
        <Container>
          <Row>
            <Col md="5">
              <h2 className="title">How It Works</h2>
              <div className="info info-horizontal">
                <div className="icon icon-info icon-circle">
                  <i className="now-ui-icons location_world"></i>
                </div>
                <div className="description">
                  <h4 className="info-title">Be your own bank</h4>
                    <p>
                      With Cashless, people create and extend credit to each other, building natural networks of reciprocity.
                    </p>
                </div>
              </div>
              <div className="info info-horizontal">
                <div className="icon icon-info icon-circle">
                  <i className="now-ui-icons sport_user-run"></i>
                </div>
                <div className="description">
                  <h4 className="info-title">Send anyone credit</h4>
                  <p>
                    <span className="comment">With the app you can send anyone payment in the form of a cashless credit. Back it with your crypto reserves and your reputation.</span><br />
                  </p>
                </div>
              </div>
              <div className="info info-horizontal">
                <div className="icon icon-info icon-circle">
                  <i className="now-ui-icons ui-2_time-alarm"></i>
                </div>
                <div className="description">
                  <h4 className="info-title">Pay with time or money</h4>
                  <p>
                    Get what you need. Cancel out your debts through 
                    work done in the service of others.
                  </p>
                </div>
              </div>
            </Col>
            <Col md="7">
              <div className="phone-container">
                <img alt="..." src={require("assets/img/cashless_mob1.png")}></img>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default HowTheApp;
