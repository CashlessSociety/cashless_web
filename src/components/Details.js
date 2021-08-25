import React from "react";

// reactstrap components
import { Card, Container, Row, Col } from "reactstrap";

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
                  <div className="icon icon-info icon-circle">
                    <i className="now-ui-icons ui-1_send"></i>
                  </div>
                  <div className="description text-left">
                    <h5 className="info-title font-weight-bold">Send Cashless Credit</h5>
                    <p>
                    The fundamental unit of cashless is the cashless credit. You use the app to make a signed and non-repudiatable 'promise to pay it forward'. You can send someone a cashless credit as payment or acknowledgement of work done for you by others. The 'denomination' of this cashless credit is a unit of measure and can be anything. In this example it is USD (as measured by USDC).
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
                  <div className="icon icon-info icon-circle">
                    <i className="now-ui-icons emoticons_satisfied"></i>
                  </div>
                  <div className="description text-left">
                    <h5 className="info-title font-weight-bold">Vesting</h5>
                    <p>For the first two months the locked reserves grow in value and the recipient is incentivized to hold on to them. Once fully vested they are like ripe fruit that may be picked at any time.
                    </p>
                  </div>
                </div>
              </Col>
              <Col sm="12"> 
                <div className="info">
                  <div className="icon icon-info icon-circle">
                    <i className="now-ui-icons arrows-1_refresh-69"></i>
                  </div>
                  <div className="description text-left">
                    <h5 className="info-title font-weight-bold">Reciprocate</h5>
                    <p>There’s a period of time where you’re encouraged to make connections and incentivized to spend to get the most value. The Cashless AI will help you find these connections.</p>
                  </div>
                </div>
              </Col>
              <Col sm="12">
                <div className="info">
                  <div className="icon icon-info icon-circle">
                    <i className="now-ui-icons ui-2_time-alarm"></i>
                  </div>
                  <div className="description text-left">
                    <h5 className="info-title font-weight-bold">Demurrage</h5>
                    <p>Unlike the infinite growth imperative of traditional interest bearing debt, or the speculation and accumulation incentive of traditional crypto, Cashless promises live in harmony with natural forces and are designed to stimulate community, relationships and local engagement.</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <Container>
          <Row>
            <Col md="7">
              <div className="info info-horizontal">
                <div className="icon icon-info icon-circle">
                  <i className="now-ui-icons arrows-1_refresh-69"></i>
                </div>
                <div className="description text-left">
                  <h4 className="info-title">Clear your payments 'hour for hour'</h4>
                  <p>
                  One way to clear or 'pay back' credits is with an equal value of your time in return. Let's say a graphic designer helps you with a logo and then you help them with some of their work - you've found a 'reciprocity' that cancels out that debt. You can also find loops of more complicated type. The Cashless AI works hard to find and recommend trades that will cancel out your outstanding loops. 
                  </p>
                </div>
              </div>
            </Col>
            <Col md="5">
              <div className="info info-horizontal">
                <div className="description">
                  <h4 className="info-title">Reputation as gaurantee</h4>
                  <p>
                  The simplest way to 'back yourself' is by having a good reputation. Cashless promises are visible to anyone in the community and cannot be deleted. There's no punishment for defaulting on your un-backed promises, but having a reputation in good standing is a valuable thing in real communities. Old data is deleted after 18 months or 5 hops from the source.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md="7">
              <div className="info info-horizontal">
                <div className="icon icon-info icon-circle">
                  <i className="now-ui-icons business_bank"></i>
                </div>
                <div className="description">
                  <h4 className="info-title">Clear your payments with 'hard currency'</h4>
                  <p>
                  If you can't or don't wish to pay via reciprocity you can always just pay your debts using the underlying currency of denomination - USDC in this case. Just add that currency to your (non custodial) Cashless wallet address and Cashless will handle the rest. 
                  </p>
                </div>
              </div>
            </Col>
            <Col md="5">
              <div className="info info-horizontal">
                <div className="description">
                  <h4 className="info-title">Crypto reserves as a gaurantee </h4>
                  <p>If you want your 'credit' to be more widely accepted, you can back yourself by 'staking' crypto reserves. Cashless technology makes those reserves visible and automatic.{/* It is not widely understood that banks actually 'clear' almost all outstanding payments via reciprocity loops and only put their cash reserves on the line as gaurantee of those payments. Cashless makes this dynamic accessibe to the 'rest of us'*/}. You can even (if you choose) 'lock' in the reserves so that your recipient is 100% gauranteed to recieve their funds. 
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <div className="info info-horizontal">
                <div className="icon icon-info icon-circle">
                  <i className="now-ui-icons design_vector"></i>
                </div>
                <div className="description">
                  <h4 className="info-title">Community tokens act as insurance and focal points</h4>
                  <p>
                  Community nodes and their corresponding community tokens are the final piece of the puzzle. There might be a community of 'tech startups' connecting web designers or with programmers or a localized community token for a specific area. Community nodes act as focal points that make loops of reciprocity more likely, provide some degree of vetting of members and through token bonding curves provide a degree of insurance or further gaurantee on payments denominated in that particular community currency (up to a point). Community nodes will also often run a convenience server for people to connect to and engage with others. Each community token has a token bonding curve that locks reserves away in a shared contract that is visible to all and controlled by the members of that community.
                  </p>
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
            <Col md="12">
              <div className="info info-horizontal">
                <div className="icon icon-info icon-circle">
                  <i className="now-ui-icons location_world"></i>
                </div>
                <div className="description">
                  <h4 className="info-title">Social and viral </h4>
                  <p>
                    An obligation can be a hard nosed promise of payment. Or it can be a thank you - a promise to pay it forward that you might attach to a more social expression of gratitude. We also hope to build social integratino bots that will allow you to create and close loops.
                  </p>
                </div>
              </div>
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
    </>
  );
}

export default Details;