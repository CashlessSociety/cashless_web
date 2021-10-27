import React from "react";

// reactstrap components
import { Card, CardBody, Container, Row, Col } from "reactstrap";


function Guarantees() {
  return (
    <>
      <div className="features-5" id="guarantees">
        <div>
          <Container>
            <h2 className="title">The three guarantees</h2>
            <Row>
              <Col md={6}>
                <Card>
                  <CardBody className="p-5 text-center">
                    <img alt="rating" src={require("assets/img/clip-rating.png")} height={150} className="m-3"></img>
                    <h6>Your reputation</h6>
                    <p>
                    Cashless promises are visible to anyone in the community, signed by you, and cannot be deleted for 18 months. <b>Credit in good standing</b> counts for a lot. That means doing good work, paying your debts and generally building your reputation.
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col md={6}>
                <Card>
                  <CardBody className="p-5 text-center">
                    <img alt="rating" src={require("assets/img/clip-payment.png")} height={150}  className="m-3"></img>
                    <h6>Your personal reserves </h6>
                    <p className="text-small">
                      To have your credit more widely accepted, <b>back yourself by 'staking'</b> any crypto - stable coins like USDC or DAI. Reserves placed in our non-custodial smart contract are transparent to all and can be claimed by counter-parties as soon as they vest.
                    </p>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Card>
                  <CardBody className="p-5">
                      <Row>
                        <Col md={6}>
                          <img
                            alt="social"
                            src={require("assets/img/clip-coop.png")}
                          ></img>
                          {/*<lottie-player src="https://assets6.lottiefiles.com/packages/lf20_dsmgi54l.json" background="transparent" speed="1" style={{width: "100%", height: "auto"}} loop autoplay></lottie-player>*/}
                        </Col>
                        <Col md={6}>
                        <lottie-player src="https://assets3.lottiefiles.com/temp/lf20_pO3t5Q.json"  background="transparent"  speed="0.6"  style={{width: "100%", height: "200px", marginTop: "-50px", marginBottom: "-30px"}}  loop  autoplay></lottie-player>
                          <h6 className="text-center">Your Community, Your Community Token</h6>
                          <p>
                            Communities and <b>community tokens</b> are the final piece of the puzzle.  Community tokens provide a final guarantee of payments (up to an observable limit) for every member of that community using that token.
                     
                          </p>
                          <p className="mb-0">
                            Communities act as focal points to increase the likelihood of reciprocal payment and provide places for people to connect and engage with each other. This can be done on any social platform. Members / token holders are incentivised to build their communities. Each community token comes with a token-bonding contract that locks in an extra layer of <b>collective reserves</b> protection for all members - visible to everyone and managed by members of that community.
                          </p>
                          
                          
{/*                          <p>
                            Anyone can create a community and create a token. For example, a community of ‘tech startups’ could focus on connecting web developers to coders, or a localized community token might focus on a particular local city.
                          </p>
                          <p>
                            Each community has token holders who decide how much risk they're willing to take and who they'll cover. It is possible to buy or earn community tokens by engaging in successful trades with that community.
                          </p>*/}
                        </Col>
                      </Row>
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
                      An obligation can be a hard nosed promise of payment. Or it can just be a nice <b>thank you</b> - a promise to pay it forward that you might attach to a more social expression of gratitude. Gratitude can also be a form of money. Once we recover from our collective PTSD about money, and build a system that lets us express our humanity, new possibilities are created. It's time to heal our scarcity mindset around money and together step into a new kinder more gentle future.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="3" className="pt-4 col-6 container">
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