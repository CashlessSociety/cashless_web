import React from "react";

// reactstrap components
import { Card, Container, Row, Col } from "reactstrap";

// core components

function Governance() {
  return (
    <div className="govern section-image"
      style={{
        backgroundImage: "url(" + require("assets/img/bg11.jpg") + ")",
      }}>
      <Col className="mr-auto ml-auto text-center" md="8">
        <h2 className="title">About us</h2>
        <h4 className="description">
          This is the paragraph where you can write more details about your
          product. Keep you user engaged by providing meaningful
          information.
        </h4>
      </Col>
     {/*NOTE2DH: 
       It's weird that this is <Container fluid but the others 
       are just <Container */}
      <Container fluid>
        <Row>
          <Col className="px-0" md="6">
            <Col sm="12">
              <div className="info info-horizontal">
                <div className="icon">
                  <i className="now-ui-icons design-2_html5"></i>
                </div>
                <div className="description">
                  <h5 className="info-title">For Developers</h5>
                  <p className="description">
                    The moment you use Now UI Kit, you know you’ve never
                    felt anything like it. With a single use, this powerfull
                    UI Kit lets you do more than ever before.
                  </p>
                </div>
              </div>
              <div className="info info-horizontal">
                <div className="icon">
                  <i className="now-ui-icons design_palette"></i>
                </div>
                <div className="description">
                  <h5 className="info-title">For Designers</h5>
                  <p className="description">
                    The moment you use Now UI Kit, you know you’ve never
                    felt anything like it. With a single use, this powerfull
                    UI Kit lets you do more than ever before.
                  </p>
                </div>
              </div>
              <div className="info info-horizontal">
                <div className="icon">
                  <i className="now-ui-icons design-2_ruler-pencil"></i>
                </div>
                <div className="description">
                  <h5 className="info-title">For Artists</h5>
                  <p className="description">
                    The moment you use Now UI Kit, you know you’ve never
                    felt anything like it. With a single use, this powerfull
                    UI Kit lets you do more than ever before.
                  </p>
                </div>
              </div>
            </Col>
          </Col>
          <Col md="6">
            <div className="image-container">
              <img alt="..." src={require("assets/img/ipad3.png")}></img>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Governance;
