import React from "react";

// reactstrap components
import { Card, CardBody, Container, Row, Col } from "reactstrap";

// core components



function Details() {
  return (
    <>
      <div className="features-5">
        <div className="credit-lifecycle bg-grey py-5 my-5">
          <Container>
            <h2 className="title">The Cashless Credit Cycle</h2>
            <Row className="no-gutters">
              <Col md="9">
                <div className="info">
                  <span className="alt-up-line"></span>
                  <div className="icon icon-info icon-circle">
                    <i className="now-ui-icons ui-1_send"></i>
                  </div>
                  <div className="description text-left">
                    <h5 className="info-title font-weight-bold">Send</h5>
                    <p>
                    Send anyone money in the form of a cashless credit. A credit is a signed, irrevocable ‘promise to pay it forward’ backed by your reserves and reputation. Send a credit as payment or acknowledgement of work done for you by others. They don't have to be a member, you can send credit to any email address or social media handle.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <lottie-player src="https://assets8.lottiefiles.com/private_files/lf30_tcuqw7ib.json"  background="transparent"  speed="1"  style={{width: "100%", height: "auto"}} hover loop autoplay></lottie-player>
              </Col>
            </Row>
            {/*<Row>
              <Col>
                <div className="cashless-cycle-container">
                  <img
                    alt="..."
                    src={require("assets/img/cycle.png")}
                  ></img>
                </div>
              </Col>
            </Row>*/}
            <Row>
              <Col sm="12"> 
                <div className="info">
                  <span className="alt-down-line"></span>
                  <div className="icon icon-info icon-circle">
                    <i className="now-ui-icons arrows-1_refresh-69"></i>
                  </div>
                  <div className="description text-left">
                    <Row>
                      <Col>
                      <h5 className="info-title font-weight-bold">Reciprocity</h5>
                        <p>
                          The simplest way to erase your cashless credits is offering back an equal value of your time in exchange. For example, if a graphic designer helped you design a logo and you helped with some of their work in turn you have found a ‘reciprocity’ loop that erases the debt. But you don't have to find an exact swap. The Cashless AI works hard at finding and suggesting trades that will help you erase your outstanding debits or spend your credits.
                        </p>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col sm="12">
                <div className="info">
                  <span className="alt-down-line"></span>
                  <div className="icon icon-info icon-circle">
                    <i className="now-ui-icons emoticons_satisfied"></i>
                  </div>
                  <div className="description text-left">
                    <Row>
                      <Col>
                        <h5 className="info-title font-weight-bold">Vest & Spend</h5>
                        <p>
                          Like any living system, the reserves underpinning cashless promises undergo a natural birth, growth and decay cycle. If no reciprocity is found, the value of reserves build up over time, rewarding the recipient for holding on to the promise token. As they mature, promises bear fruit in the form of hard currency reserves, that can be picked into the receiver’s wallet as soon as they vest.
                        </p>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col sm="12">
                <div className="info">
                  <span className="alt-down-arrow"></span>
                  <div className="icon icon-info icon-circle">
                    <i className="now-ui-icons ui-2_time-alarm"></i>
                  </div>
                  <div className="description text-left">
                    <h5 className="info-title font-weight-bold">Demurrage</h5>
                    <p>
                      Unlike the growth imperative of traditional debt based money, or the speculation incentives on most blockchains, Cashless credits live in balance with nature. They start to depreciate back to zero a few months after reaching their highest value. We believe that credit should serve the community, not the other way around. We believe that credit should serve the community, not the other way around, and that nobody should be subjected to endless cycles of compounding debt. Cashless credits ‘want’ to be spent and dissapear. This encourages your local community, local relationships, and local engagement.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div>
          <Container>
            <Card>
              <CardBody className="p-4 text-center">
                <Row>
                  <Col md={6}>
                    <img alt="rating" src={require("assets/img/clip-rating.png")} height={150} className="m-3"></img>
                    <h6>Reputation as gaurantee</h6>
                    <p>
                      The simplest way to 'back yourself' is by having a good reputation. Cashless promises are visible to anyone in the community and cannot be deleted for 18 months. There's no actual punishment for defaulting on promises, but having a reputation in good standing is a valuable thing in any real community. 
                    </p>
                  </Col>
                  <Col md={6}>
                    <img alt="rating" src={require("assets/img/clip-payment.png")} height={150}  className="m-3"></img>
                    <h6>Personal crypto reserves as a gaurantee </h6>
                    <p className="text-small">
                      If you’re looking to have your credit more widely accepted, you can back yourself by 'staking' stable coins like USDC or DAI. Just transfer reserves into your wallet. We're non-custodial - which means you maintain absolute control of your reserve balance - but it becomes visible in your profile. If you choose, you can even 'lock' in the reserves so that your recipient is 100% gauranteed on a particular credit, once it vests. 
                    </p>
                  </Col>
                </Row>
              </CardBody>
            </Card>

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
                  Community nodes act as focal points that increase the likelihood of payments while also providing some degree member validation. They provide a final gaurantee of payments (up to a point) for every member of their community.
                </p>
              </Col>
            </Row>
            <Card className="description">
              <CardBody>
                <p>
                  Each community has token holders who decide how much risk they're willing to take and who they'll cover. It is possible to buy or earn community tokens by engaging in successful trades with that community.
                </p>
                <p className="mb-0">
                  Communities nodes also provide places for people to connect and engage with each other, and token holders are incentivised to build their communities. Each community token comes with a token-bonding contract that locks in an extra layer of collective protection for all members - visible to everyone and managed by members of that community.
                </p>
              </CardBody>
            </Card>

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


export default Details;