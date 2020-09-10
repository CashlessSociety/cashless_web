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
                      href="https://www.linkedin.com/in/linkjustinwright/"
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
