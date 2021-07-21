import React from "react";

// reactstrap components
import { Card, Container, Row, Col } from "reactstrap";

// core components

function HowTheApp() {
  return (
    <>
      <div className="cd-section" id="features">
        <div className="cashless-features">
          <Container>
            <Row>
              <Col md="5">
                <h2 className="title">Cashless App</h2>
                <div className="info info-horizontal">
                  <div className="icon icon-info icon-circle">
                    <i className="now-ui-icons location_world"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Be your own bank</h4>
                    <p>
                      Every dollar of bank-created credit creates 
                      interest owed to the bank that created it. <br /><br />
                      With Cashless, people create and extend credit to each other, 
                      building natural networks of reciprocity without interest-bearing debt.
                      </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-info icon-circle">
                    <i className="now-ui-icons sport_user-run"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Give anyone credit</h4>
                    <p>
                      <span className="comment">[extend description of 
                      app use but give relevance in terms of higher level dialogue. Do we introduce the cheque & vesting here?]</span><br />
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-info icon-circle">
                    <i className="now-ui-icons ui-2_time-alarm"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Pay with time or money</h4>
                    <p>
                      Get what you need and cancel out the cost against the great 
                      stuff you've done in the service of others.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="7">
                <div className="tablet-container">
                  <img
                    alt="..."
                    src={require("assets/img/cashless_padportrait1.png")}
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

export default HowTheApp;
