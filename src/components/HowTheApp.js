import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

//
import AppCarousel from "./AppCarousel";

// core components

function HowTheApp() {
  return (
    <>
      <div id="how-the-app" className="how_it_works cashless-features">
        <Container>
          <h2 className="title pt-0">How It Works</h2>
          <Row>
            <Col md="5">
              <div className="info info-horizontal">
                <div className="icon icon-info icon-circle">
                  <i className="now-ui-icons sport_user-run"></i>
                </div>
                <div className="description">
                  <h4 className="info-title">Send anyone credit</h4>
                  <p>
                    <span className="comment">With the app you can send anyone payment in the form of a cashless credit. Back it with your reserves and your reputation.</span><br />
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
                    Buy what you need. Then pay your balance over time through work in service of others. Or just load cash into your wallet to ensure your credit remains pristine.
                  </p>
                </div>
              </div>
              <div className="info info-horizontal">
                <div className="icon icon-info icon-circle">
                  <i className="now-ui-icons location_world"></i>
                </div>
                <div className="description">
                  <h4 className="info-title">Act as your own bank</h4>
                    <p>
                      With Cashless, people create and extend credit to each other, building natural networks of reciprocity. Our whitepaper (in progress) will explain how our credit clearing method is the next step in distributed finance. 
                    </p>
                </div>
              </div>
            </Col>
            <Col md="7">

              <AppCarousel />
              
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default HowTheApp;
