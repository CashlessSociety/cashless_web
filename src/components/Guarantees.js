import React from "react";

// reactstrap components
import { Card, CardBody, Container, Row, Col } from "reactstrap";


function Guarantees() {
  return (
    <>
      <div className="features-5">
        <div>
          <Container>
            <h4 className="info-title">Three types of guarantee</h4>
            <Row>
              <Col md={6}>
                <Card>
                  <CardBody className="p-4 text-center">
                    <img alt="rating" src={require("assets/img/clip-rating.png")} height={150} className="m-3"></img>
                    <h6>Reputation as guarantee</h6>
                    <p>
                      The simplest way to 'back yourself' is by having a good reputation. Cashless promises are visible to anyone in the community and cannot be deleted for 18 months. There's no actual punishment for defaulting on promises, but having a reputation in good standing is a valuable thing in any real community. 
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col md={6}>
                <Card>
                  <CardBody className="p-4 text-center">
                    <img alt="rating" src={require("assets/img/clip-payment.png")} height={150}  className="m-3"></img>
                    <h6>Personal crypto reserves as a guarantee </h6>
                    <p className="text-small">
                      If you’re looking to have your credit more widely accepted, you can back yourself by 'staking' stable coins like USDC or DAI. Just transfer reserves into your wallet. We're non-custodial - which means you maintain absolute control of your reserve balance - but it becomes visible in your profile. If you choose, you can even 'lock' in the reserves so that your recipient is 100% guaranteed on a particular credit, once it vests. 
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
                          <h4 className="info-title">Community tokens act as insurance and focal points</h4>
                          <p>
                            Community tokens are the final piece of the puzzle. Anyone can create a community and create a token. For example, a community of ‘tech startups’ could focus on connecting web developers to coders, or a localized community token might focus on a particular local city.
                          </p>
                          <p>
                            Community nodes act as focal points that increase the likelihood of payments while also providing some degree member validation. They provide a final guarantee of payments (up to a point) for every member of their community.
                          </p>
                          <p>
                            Each community has token holders who decide how much risk they're willing to take and who they'll cover. It is possible to buy or earn community tokens by engaging in successful trades with that community.
                          </p>
                          <p className="mb-0">
                            Communities nodes also provide places for people to connect and engage with each other, and token holders are incentivised to build their communities. Each community token comes with a token-bonding contract that locks in an extra layer of collective protection for all members - visible to everyone and managed by members of that community.
                          </p>
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

 


{/*        <Row className="justify-content-md-center">
          <Col md="7">
            <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_vf4s9n4i.json"  background="transparent"  speed="1"  style={{width: "600px", height: "auto"}}  loop  autoplay></lottie-player>
          </Col>
        </Row>*/}


export default Guarantees;