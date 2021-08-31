import React from "react";

// reactstrap components
import { Card, Container, Row, Col } from "reactstrap";

// core components

function Why() {
  return (
  <>
    <div className="features-8 cashless-features section-image"
      style={{ 
        backgroundImage: "url(" + require("assets/img/light_house_pink.jpg") + ")"}}>
      <Container>
        <Row>
            <Col className="mr-auto ml-auto text-center" md="8">
              <h2 className="title">Why?</h2>
            </Col>
        </Row>
        <Row>
          <Col className="px-0" md="6">
            <Col sm="12">
              <div className="info info-horizontal">
                <div className="icon">
                  <i className="now-ui-icons objects_umbrella-13"></i>
                </div>
                <div className="description">
                  <h5 className="info-title">End Poverty</h5>
                  <p className="description">
                    Credit unions, micro-credit and community banks are well known to be effective ways to lift communities out of poverty. Cashless leverages recent advances in distributed finance and cryptography to do the same thing without banks, and without interest, in a much more scalable way.
                  </p>
                </div>
              </div>
              <div className="info info-horizontal">
                <div className="icon">
                  <i className="now-ui-icons objects_spaceship"></i>
                </div>
                <div className="description">
                  <h5 className="info-title">Build community</h5>
                  <p className="description">
                   Community organizers have long known that interest free mutual credit is an amazing tool for helping communities grow and become self reliant. But until now, such communities have lacked the extra liquidity and transparency that cashless credit can provide.
                  </p>
                </div>
              </div>
            </Col>
          </Col>
          <Col className="px-0" md="6">
            <Col sm="12">
              <div className="info info-horizontal">
                <div className="icon">
                  <i className="now-ui-icons objects_key-25"></i>
                </div>
                <div className="description">
                  <h5 className="info-title">No barriers, no bias and discrimination</h5>
                  <p className="description">
                   Credit barriers, bias and discrimination plague the financial industry through biased 'credit reports' or even just narrow mindedness that puts banks and other financial gatekeepers in the role of limiting access to resources. Instead of 'removing barriers' the cashless approach is to empower communities to take control of their own credit and exercize their collective power. When you control your own networks of sharing and credit you don't have to ask for permission from anybody.
                  </p>
                </div>
              </div>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  </>
  );
}

export default Why;
