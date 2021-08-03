import React from "react";

// reactstrap components
import { Card, Container, Row, Col } from "reactstrap";

// core components

function Governance() {
  return (
    <div className="features-8 govern section-image"
      style={{
        backgroundImage: "url(" + require("assets/img/bg22.jpg") + ")",
      }}>
      <Col className="mr-auto ml-auto text-center" md="8">
        <h2 className="title">Governance
</h2>
        <h4 className="description">
          <span className="comment dark">[Call to action supplementary]</span>
        </h4>
      </Col>
      <Container fluid>
        <Row>
          <Col className="px-0" md="6">
            <Col sm="12">
              <div className="info info-horizontal">
                <div className="icon">
                  <i className="now-ui-icons design-2_html5"></i>
                </div>
                <div className="description">
                  <h5 className="info-title">Value exchange means real human relationships. </h5>
                  <p className="description">
                    You are real humans. Uncle Sam needs you. 
                  </p>
                </div>
              </div>
              <div className="info info-horizontal">
                <div className="icon">
                  <i className="now-ui-icons design_palette"></i>
                </div>
                <div className="description">
                  <h5 className="info-title">DAO to differ</h5>
                  <p className="description">
                    Every community is a stakeholder. Stuff about ownership and warmup to invitation. 
                  </p>
                </div>
              </div>
              <div className="info info-horizontal">
                <div className="icon">
                  <i className="now-ui-icons design-2_ruler-pencil"></i>
                </div>
                <div className="description">
                  <h5 className="info-title">Mad memes</h5>
                  <p className="description">
                    And other fire puns on our <a href="www.google.com">Discord</a>
                  </p>
                </div>
              </div>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Governance;
