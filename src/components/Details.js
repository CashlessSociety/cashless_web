import React from "react";

// reactstrap components
import { Card, CardBody, Container, Row, Col } from "reactstrap";

// core components



function Details() {
  return (
    <>
      <div className="features-5">
        <Container>
         <Row>
            <Col md="12">
              <h2 className="title">Peer to peer, interest-free, credit.</h2>
              <div className="cashless-cheque-container">
                <img
                  alt="..."
                  src={require("assets/img/cashless_cheque.png")}
                ></img>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="credit-lifecycle py-5 my-5">
          <Container>
          <h2 className="title">The Cashless Credit Cycle</h2>
            <Row className="no-gutters">
              <Col sm="12">
                <div className="info">
                  <span className="alt-up-line"></span>
                  <div className="icon icon-info icon-circle">
                    <i className="now-ui-icons ui-1_send"></i>
                  </div>
                  <div className="description text-left">
                    <h5 className="info-title font-weight-bold">Send</h5>
                    <p>
                    Send anyone money in the form of a cashless credit. A credit is a signed, irrevocable ‘promise to pay it forward’ backed by your reserves and reputation. Send a credit as payment or acknowledgement of work done for you by others.
                    </p>
                  </div>
                </div>
              </Col>
            
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
            
              <Col sm="12"> 
                <div className="info">
                  <span className="alt-down-line"></span>
                  <div className="icon icon-info icon-circle">
                    <i className="now-ui-icons arrows-1_refresh-69"></i>
                  </div>
                  <div className="description text-left">
                    <h5 className="info-title font-weight-bold">Reciprocity</h5>
                    <p>
                      The simplest way to erase your cashless credits is offering back an equal value of your time in exchange. For example, if a graphic designer helped you design a logo and you helped with some of their work in turn you have found a ‘reciprocity’ loop that erases the debt. But you don't have to find an exact swap. The Cashless AI works hard at finding and suggesting trades that will help you erase your outstanding debits or spend your credits.
                    </p>
                  </div>
                </div>
              </Col>
              <Col sm="12">
                <div className="info">
                  <span className="alt-down-line"></span>
                  <div className="icon icon-info icon-circle">
                    <i className="now-ui-icons emoticons_satisfied"></i>
                  </div>
                  <div className="description text-left">
                    <Row>
                      <Col md="9">
                        <h5 className="info-title font-weight-bold">Vest & Spend</h5>
                        <p>
                          From day one through month two, the hard currency reserves build up in value, rewarding the recipient for holding on to your promise token. Like all living systems, cashless promises go through a natural birth, growth and decay cycle. As they vest, promises are like trees bearing fruit in the form of hard currency reserves, which can be ‘picked’ (swapped into the receiver's wallet) at any moment.
                        </p>
                      </Col>
                      <Col md="3">
                        <lottie-player src="https://assets8.lottiefiles.com/private_files/lf30_tcuqw7ib.json"  background="transparent"  speed="1"  style={{width: "100%", height: "auto"}} hover loop autoplay></lottie-player>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
              <Col sm="12">
                <div className="info">
                  <span className="alt-down-arrow"></span>
                  <div className="icon icon-info icon-circle">
                    <i className="now-ui-icons ui-2_time-alarm"></i>
                  </div>
                  <div className="description text-left">
                    <h5 className="info-title font-weight-bold">Demurrage</h5>
                    <p>
                      Unlike the inexorable growth imperative of traditional debt, or the speculation incentives on most blockchains, cashless credits live in balance with nature, start to depreciate back to zero a few months after reaching their highest value. We believe that credit should serve the community, not the other way around. Cashless credits ‘want’ to be spent. This encourages your local community, local relationships, and local engagement.
                    </p>
                      
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <Row className="justify-content-md-center">
          <Col md="7">
            <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_vf4s9n4i.json"  background="transparent"  speed="1"  style={{width: "600px", height: "auto"}}  loop  autoplay></lottie-player>
          </Col>
        </Row>
        <div>
          <Container>
            <Row>
              <Col md="7">
                <div className="info info-horizontal">
                  {/*<div className="icon icon-info icon-circle">
                    <i className="now-ui-icons arrows-1_refresh-69"></i>
                  </div>*/}
                  <div className="description text-left">
                  <Row>
                    <Col md="2">
                      <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_bro9ocvt.json"  background="transparent"  speed="1"  style={{width: "100%", height: "auto"}}  loop  autoplay></lottie-player>
                    </Col>
                    <Col md="10">
                      <h4 className="info-title">Clear your payments 'hour for hour'</h4>
                      <p>
                      One way to clear or 'pay back' credits is with an equal value of your time in return. Let's say a graphic designer helps you with a logo and then you help them with some of their work - you've found a 'reciprocity' that cancels out that debt. You can also find loops of more complicated type. The Cashless AI works hard to find and recommend trades that will cancel out your outstanding loops. 
                      </p>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
              <Col md="5">
                <Card>
                  <CardBody>
                      <Row>
                        <Col>
                          <h6>Reputation as gaurantee</h6>
                          <p className="text-small">
                          The simplest way to 'back yourself' is by having a good reputation. Cashless promises are visible to anyone in the community and cannot be deleted. There's no punishment for defaulting on your un-backed promises, but having a reputation in good standing is a valuable thing in real communities. Old data is deleted after 18 months or 5 hops from the source.
                          </p>
                        </Col>
                      </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col md="7">
                <div className="info info-horizontal">
                  {/*<div className="icon icon-info icon-circle">
                    <i className="now-ui-icons business_bank"></i>
                  </div>*/}
                  <div className="description">
                    <Row>
                      <Col md="2">
                        <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_eujvgitv.json"  background="transparent"  speed="1"  style={{width: "100%", height: "auto"}} loop  autoplay></lottie-player>
                      </Col>
                      <Col md="10">
                        <h4 className="info-title">Clear your payments with 'hard currency'</h4>
                        <p>
                        If you can't or don't wish to pay via reciprocity you can always just pay your debts using the underlying currency of denomination - USDC in this case. Just add that currency to your (non custodial) Cashless wallet address and Cashless will handle the rest. 
                        </p>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
              <Col md="5">
                <Card>
                  <CardBody>
                      <h6>Crypto reserves as a gaurantee </h6>
                      <p className="text-small">If you want your 'credit' to be more widely accepted, you can back yourself by 'staking' crypto reserves. Cashless technology makes those reserves visible and automatic.{/* It is not widely understood that banks actually 'clear' almost all outstanding payments via reciprocity loops and only put their cash reserves on the line as gaurantee of those payments. Cashless makes this dynamic accessibe to the 'rest of us'*/}. You can even (if you choose) 'lock' in the reserves so that your recipient is 100% gauranteed to recieve their funds. 
                      </p>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div>
          <Container>
            <Row>
              <Col md="12">
                <div className="info info-horizontal">
                  {/*<div className="icon icon-info icon-circle">
                    <i className="now-ui-icons design_vector"></i>
                  </div>*/}
                  <div className="description">
                    <Row>
                      <Col md="4">
                        <lottie-player src="https://assets4.lottiefiles.com/temp/lf20_DGLtjO.json"  background="transparent"  speed="1"  style={{width: "300px", height: "300px"}} hover autoplay loop ></lottie-player>
                      </Col>
                      <Col md="8">
                        <h4 className="info-title">Community tokens act as insurance and focal points</h4>
                        <p>
                        Community nodes and their corresponding community tokens are the final piece of the puzzle. There might be a community of 'tech startups' connecting web designers or with programmers or a localized community token for a specific area. Community nodes act as focal points that make loops of reciprocity more likely, provide some degree of vetting of members and through token bonding curves provide a degree of insurance or further gaurantee on payments denominated in that particular community currency (up to a point). Community nodes will also often run a convenience server for people to connect to and engage with others. Each community token has a token bonding curve that locks reserves away in a shared contract that is visible to all and controlled by the members of that community.
                        </p>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>{/*
              <Col md="5">
                <div className="cashless-community-container">
                  <img
                    alt="..."
                    src={require("assets/img/community.png")}
                  ></img>
                </div>
              </Col>*/}
            </Row>
            <Row>
              <Col md="6">
                <div className="info info-horizontal">
                  {/*<div className="icon icon-info icon-circle">
                    <i className="now-ui-icons location_world"></i>
                  </div>*/}
                  <div className="description">
                    <h4 className="info-title">Social and viral </h4>
                    <p>
                      An obligation can be a hard nosed promise of payment. Or it can be a thank you - a promise to pay it forward that you might attach to a more social expression of gratitude. We also hope to build social integratino bots that will allow you to create and close loops.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="6">
                <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_rdsqlthv.json"  background="transparent"  speed="1"  style={{width: "450px", height: "350px"}}  loop autoplay></lottie-player>
              </Col>
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

export default Details;