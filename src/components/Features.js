import React from "react";

// reactstrap components
import { Card, Container, Row, Col } from "reactstrap";

// core components

function Features() {
  return (
    <>
      <div className="cd-section" id="features">
        <div className="cashless-features">
          <Container>
            <Row>
              <Col md="5">
                <h2 className="title">Working is a pleasure</h2>
                <div className="info info-horizontal">
                  <div className="icon icon-info icon-circle">
                    <i className="now-ui-icons location_world"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Hundreds of Components</h4>
                    <p>
                      The moment you use Now UI Kit, you know you’ve never felt
                      anything like it. With a single use lets you do more than
                      ever before.
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-info icon-circle">
                    <i className="now-ui-icons sport_user-run"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Easy to Use</h4>
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
                    <h4 className="info-title">Fast Prototyping</h4>
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

export default Features;
