import React from "react";

// reactstrap components
import { Card, Container, Row, Col } from "reactstrap";

// core components

function PainPoints() {
  return (
  <>
    <div className="features-8 cashless-features bg-sunset">
      <Container>
        <Row>
            <Col className="mr-auto ml-auto text-center" md="8">
              <h2 className="title">Why?</h2>
            </Col>
        </Row>
        <Row>
          <Col md="7">
            <div>
              <h5 className="info-title">Build your network</h5>
              <p>
               Community organizers have long known that interest free mutual credit is an amazing tool for helping communities grow and become self reliant. But until now, such communities have lacked the extra liquidity and transparency that cashless credit can provide.
              </p>
            </div>
            <div className="mt-5">
              <h5 className="info-title">No barriers, no bias and discrimination</h5>
              <p>
               Credit barriers, bias and discrimination plague the financial industry through biased 'credit reports' or even just narrow mindedness that puts banks and other financial gatekeepers in the role of limiting access to resources. Instead of 'removing barriers' the cashless approach is to empower communities to take control of their own credit and exercize their collective power. When you control your own networks of sharing and credit you don't have to ask for permission from anybody.
              </p>
            </div>
          </Col>
          <Col>
            <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_fjv8qxqn.json"  background="transparent"  speed="0.6"  style={{width: "100%", height: "auto"}}  loop  autoplay></lottie-player>
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <img
              alt="work together"
              src={require("assets/img/clip-brainstorm.png")}
            ></img>
          </Col>
          <Col md={9}>
            <div>
              <div>
                <h5 className="info-title">End Poverty</h5>
                <p>
                  Credit unions, micro-credit and community banks are well known to be effective ways to lift communities out of poverty. Cashless leverages recent advances in distributed finance and cryptography to do the same thing without banks, in a more meaningful way.
                </p>
              </div>
            </div>
          </Col>
          
        </Row>
      </Container>
    </div>
  </>
  );
}

export default PainPoints;
