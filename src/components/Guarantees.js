import React from "react";

// reactstrap components
import { Card, CardBody, Container, Row, Col } from "reactstrap";


function Guarantees() {
  return (
    <>
      <div className="features-5">
        <div>
          <Container>
            <h4 className="info-title">The three gaurantees</h4>
            <Row>
              <Col md={6}>
                <Card>
                  <CardBody className="p-4 text-center">
                    <img alt="rating" src={require("assets/img/clip-rating.png")} height={150} className="m-3"></img>
                    <h6>Your reputation</h6>
                    <p>
                    Cashless promises are visible to anyone in the community, signed by you, and cannot be deleted for 18 months. Credit in good standing means paying your debts.
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col md={6}>
                <Card>
                  <CardBody className="p-4 text-center">
                    <img alt="rating" src={require("assets/img/clip-payment.png")} height={150}  className="m-3"></img>
                    <h6>Your personal reserves </h6>
                    <p className="text-small">
                      To have your credit more widely accepted, back yourself by 'staking' stable coins like USDC or DAI. Reserves placed in our non-custodial contract are transparent to all. 
                    </p>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Card className="description">
                  <CardBody>
                    <Container>
                      <Row className="mt-5">
                        <Col md={4}>
                          <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_dsmgi54l.json" background="transparent" speed="1" style={{width: "100%", height: "auto"}} loop autoplay></lottie-player>
                        </Col>
                        <Col md={8}>
                          <h4 className="info-title">Your community</h4>
                          <p>
                            Communities and community tokens are the final piece of the puzzle.  Community nodes act as focal points that increase the likelihood of reciprocal payments but also provide member validation. They can provide a final guarantee of payments (up to a point) for every member of their community.
                          </p>
                          <p className="mb-0">
                            Communities  provide places for people to connect and engage with each other. Members / token holders are incentivised to build their communities. Each community token comes with a token-bonding contract that locks in an extra layer of collective protection for all members - visible to everyone and managed by members of that community.
                          </p>
{/*                          <p>
                            Anyone can create a community and create a token. For example, a community of ‘tech startups’ could focus on connecting web developers to coders, or a localized community token might focus on a particular local city.
                          </p>
                          <p>
                            Each community has token holders who decide how much risk they're willing to take and who they'll cover. It is possible to buy or earn community tokens by engaging in successful trades with that community.
                          </p>
                          <p className="mb-0">
                            Communities nodes also provide places for people to connect and engage with each other, and token holders are incentivised to build their communities. Each community token comes with a token-bonding contract that locks in an extra layer of collective protection for all members - visible to everyone and managed by members of that community.
                          </p>*/}
                        </Col>
                      </Row>
                    </Container>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col md="9">
                <div>
                  <div>
                    <h4 className="info-title">Social and viral </h4>
                    <p>
                      An obligation can be a hard nosed promise of payment. Or it can just be a nice <b>thank you</b> - a promise to pay it forward that you might attach to a more social expression of gratitude. Gratitude can also be money. Once we recover from our collective PTSD about money, we can hopefully start to see the new possibilities.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="3" className="pt-4">
                <img
                  alt="social"
                  src={require("assets/img/clip-welcome.png")}
                ></img>
              </Col>
            </Row>
            <Row>
              <Col md="12">
                <div className="cashless-payit4wd-container">
                  <img
                    alt="..."
                    src={require("assets/img/pay_it_4wd_horiz.png")}
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

 


export default Guarantees;