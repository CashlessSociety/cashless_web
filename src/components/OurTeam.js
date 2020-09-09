import React from "react";

// reactstrap components
import {
    Button,
    Container,
    Row,
    Col,
  } from "reactstrap";
  
// core components

function OurTeam() {
  
  return (
    <>
      <div id="team-section" className="section section-team text-center">
          <Container>
            <h2 className="title">Who are we?</h2>
            <div className="team">
              <Row>
                <Col md="6">
                  <div className="team-player">
                  <path fill="#000" fill-opacity="0" stroke="#000" stroke-opacity="0" stroke-width="31172.727272727276" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" pointer-events="visiblePainted" d="M 202680.8295 61468.486399999994 C 202684.14320849898 72410.35186364767 193816.69496364766 81283.17269150101 182874.8295 81286.4864 171932.96403635232 81289.80010849898 163060.14320849898 72422.35186364768 163056.8295 61480.486399999994 L 172962.8295 61477.486399999994 C 172964.48635424947 66948.41913182383 177400.89676817614 71382.14325424949 182871.8295 71380.4864 188342.76223182384 71378.8295457505 192776.48635424947 66942.41913182383 192774.8295 61471.486399999994 Z"></path>
        
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/miles_in_front_of_church.jpg")}
                    ></img>
                    <h4 className="title">Miles Thompson</h4>
                    <p className="category text-info">CEO</p>
                    <p className="description">
                    Economist and mathematician. First CTO at CreditSights, 
                    an independent financial research company and leading 
                    voice on credit risk. Recently, CTO at Chatterize, 
                    AI post-seed startup.
                    </p>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="https://twitter.com/utunga"
                      target = "_blank" 
                      rel = "noopener noreferrer"
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="https://github.com/utunga"
                      target = "_blank" 
                      rel = "noopener noreferrer"
                    >
                      <i className="fab fa-github"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="https://linkedin.com/in/milesthompson"
                      target = "_blank" 
                      rel = "noopener noreferrer"
                    >
                      <i className="fab fa-linkedin"></i>
                    </Button>
                  </div>
                </Col>
                <Col md="6">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/linc_gasking.png")}
                    ></img>
                    <h4 className="title">Linc Gasking</h4>
                    <p className="category text-info">CPO</p>
                    <p className="description">
                        30 years serial entrepreneur. First startup acquired by 
                        DreamWorks in 2000. Founded Volumetric industry as CEO 
                        of multi-million dollar 8i. Award-winning photographer.
                        Emmy Award finalist. Co-founded Women Without Borders.
                    </p>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="https://www.linkedin.com/in/lincgasking/"
                      target = "_blank" 
                      rel = "noopener noreferrer"
                    >
                      <i className="fab fa-linkedin"></i>
                    </Button>
                  </div>
                </Col>
            </Row>
            <Row>
                <Col md="6">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/ari_rodriguez.png")}
                    ></img>
                    <h4 className="title">Ari Rodriguez</h4>
                    <p className="category text-info">CSO</p>
                    <p className="description">
                    Top mathematician &amp; cryptographer, in homomorphic encryption and blockchain.
                    </p>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="https://twitter.com/superarius"
                      target = "_blank" 
                      rel = "noopener noreferrer"
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="https://github.com/superarius"
                      target = "_blank" 
                      rel = "noopener noreferrer"
                    >
                      <i className="fab fa-github"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="https://linkedin.com/in/ari-rodriguez-9b201b33"
                      target = "_blank" 
                      rel = "noopener noreferrer"
                    >
                      <i className="fab fa-linkedin"></i>
                    </Button>
                  </div>
                </Col>
                <Col md="6">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/justin_wright.jpg")}
                    ></img>
                    <h4 className="title">Justin Wright</h4>
                    <p className="category text-info">CFO</p>
                    <p className="description">
                    25+ years in accounting, finance, networks, and FinTech companies.
                    </p>
                    
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="https://linkedin.com/in//ari-rodriguez-9b201b33"
                      target = "_blank" 
                      rel = "noopener noreferrer"
                    >
                      <i className="fab fa-linkedin"></i>
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
    </>
  );
}

export default OurTeam;
