import React from "react";

// reactstrap components
import { Card, Container, Row, Col } from "reactstrap";

// core components

function Features2() {
  return (
    <>
      <div className="cd-section" id="features">
        <div className="features-6">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">A web of thank-you's</h2>
                <h4 className="description">
                  This is the paragraph where you can write more details about
                  your product. Keep you user engaged by providing meaningful
                  information.
                </h4>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <div className="info info-horizontal">
                  <div className="icon icon-info">
                    <i className="now-ui-icons design-2_html5"></i>
                  </div>
                  <div className="description">
                    <h5 className="info-title">Connect your wallet</h5>
                    <p>
                      The moment you use Now UI Kit, you know you’ve never felt
                      anything like it. With a single use, this powerfull UI Kit
                      lets you do more than ever before.
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-danger">
                    <i className="now-ui-icons design_palette"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Collaborate together</h4>
                    <p>
                      Divide details about your product or agency work into
                      parts. Write a few lines about each one. A paragraph
                      describing a feature will be enough.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="4">
                <div className="phone-container">
                  <img alt="..." src={require("assets/img/iphone2.png")}></img>
                </div>
              </Col>
              <Col md="4">
                <div className="info info-horizontal">
                  <div className="icon icon-primary">
                    <i className="now-ui-icons design-2_ruler-pencil"></i>
                  </div>
                  <div className="description">
                    <h5 className="info-title">Extend credit</h5>
                    <p>
                      Divide details about your product or agency work into
                      parts. Write a few lines about each one. A paragraph
                      describing a feature will be enough.
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-success">
                    <i className="now-ui-icons files_single-copy-04"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Get what you need!</h4>
                    <p>
                      Divide details about your product or agency work into
                      parts. Write a few lines about each one. A paragraph
                      describing a feature will be enough.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Features2;
