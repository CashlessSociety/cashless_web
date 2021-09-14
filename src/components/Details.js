import React from "react";

// reactstrap components
import { Card, CardBody, Container, Row, Col } from "reactstrap";

// core components



function Details() {
  return (
    <>
      <div id="details" className="features-5">
        <div className="credit-lifecycle bg-grey py-5 my-5">
          <Container>
            <Row className="no-gutters">
              <Col md="8">
                <h2 className="title">The Cashless Credit Cycle</h2>
              </Col>
              <Col md="4">
                <lottie-player src="https://assets8.lottiefiles.com/private_files/lf30_tcuqw7ib.json"  background="transparent"  speed="1"  style={{width: "200px", height: "auto"}} hover loop autoplay></lottie-player>
              </Col>
            </Row>
            <Row className="no-gutters">
              <Col md="8">
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
              <Col sm="8"> 
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
              <Col sm="8">
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
              <Col sm="8">
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