import React from "react";

// reactstrap components
import { Card, Container, Row, Col } from "reactstrap";

// core components

function HowTheApp() {
  return (
    <>
      <div className="cd-section" id="features">
        <div className="cashless-features">
          <Container>
            <Row>
              <Col md="5">
                <h2 className="title">Cashless App</h2>
                <div className="info info-horizontal">
                  <div className="icon icon-info icon-circle">
                    <i className="now-ui-icons location_world"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Be your own bank</h4>
                    <p>
                      [Something about Banks cancel out checks overnight. Cashless gives you the ability to cancel out things that are owed to you]
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-info icon-circle">
                    <i className="now-ui-icons sport_user-run"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Other key point</h4>
                    <p>
                      Divide details about your product or agency work into
                      parts. Write a few lines about each one. A paragraph
                      describing a feature.
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-info icon-circle">
                    <i className="now-ui-icons ui-2_time-alarm"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Your team, your community</h4>
                    <p>
                      Divide details about your product or agency work into
                      parts. Write a few lines about each one. A paragraph
                      describing a feature.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="7">
                <div className="tablet-container">
                  <img
                    alt="..."
                    src={require("assets/img/ipad2-inverted.png")}
                  ></img>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default HowTheApp;
