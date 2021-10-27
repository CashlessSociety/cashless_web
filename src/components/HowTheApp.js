import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

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
                    <span className="comment">With the app you can send anyone payment in the form of a cashless credit. Back it with your crypto reserves and your reputation.</span><br />
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
            
              <div className="phone-container">
                <div className="phone-container-screens">
                  <section className="carousel" aria-label="Gallery">
                    <ol className="carousel__viewport">
                      <li id="carousel__slide1"
                          tabIndex="0"
                          className="carousel__slide">
                        <div className="carousel__snapper"></div>
                      </li>
                      <li id="carousel__slide2"
                          tabIndex="0"
                          className="carousel__slide">
                        <div className="carousel__snapper"></div>
                      </li>
                      <li id="carousel__slide3"
                          tabIndex="0"
                          className="carousel__slide">
                        <div className="carousel__snapper"></div>
                      </li>
                      <li id="carousel__slide4"
                          tabIndex="0"
                          className="carousel__slide">
                        <div className="carousel__snapper"></div>
                      </li>
                    </ol>
                    { /*
                    <aside className="carousel__navigation">
                      <ol className="carousel__navigation-list">
                        <li className="carousel__navigation-item">
                          <a href="#carousel__slide1"
                             className="carousel__navigation-button" >Go to slide 1</a>
                        </li>
                        <li className="carousel__navigation-item">
                          <a href="#carousel__slide2"
                             className="carousel__navigation-button" >Go to slide 2</a>
                        </li>
                        <li className="carousel__navigation-item">
                          <a href="#carousel__slide3"
                             className="carousel__navigation-button" >Go to slide 3</a>
                        </li>
                        <li className="carousel__navigation-item">
                          <a href="#carousel__slide4"
                             className="carousel__navigation-button" >Go to slide 4</a>
                        </li>
                      </ol>
                    </aside>*/}
                  </section>
                  {/* <img alt="..." src={require("assets/img/cashless_mob1.png")}></img> */}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default HowTheApp;
