import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function Governance() {
  return (
    <div id="governance" className="features-8 govern">
      <Col className="mr-auto ml-auto text-center" md="8">
        <h2 className="title">
          Governance
        </h2>
        <h4 className="lead">
          We're building a Distributed Autonomous Organisation
        </h4>
      </Col>
      <Container>
        <Row>
          <Col className="px-0" md="6">
            <Col sm="12">
              <div className="info">
                <div className="description">
                  <h5 className="info-title">DAO to differ</h5>
                   <p>Join Cashless and you're not joining a company, you're joining a community of like minded individuals building software and communities that matter.</p>
                </div>
              </div>
              <div className="info">
                <div className="description">
                  <h5 className="info-title"> Business model</h5>
                  <p>We have uncovered a strong demand for a service like ours in specific communities and within the small business / startup scene</p>
                  <p>
                    Cashless plans to work with thousands communities that build on top of our open protocol. Cashless will make early investments in the community tokens that issue on top of Cashless protocol. Their success will directly influence our success and vice versa.
                    </p>
                    <p>
                    Longer term, Cashless is about AI. Our reference implementation will always be free and open but we will also offer an intelligent service to facilitate credit worthy transactions optimized for your success.
                  </p>
                </div>
              </div>
            </Col>
          </Col>
          <Col className="px-0" md="6">
            <Col sm="12">
              <div className="info">
                <div className="description">
                  <h5 className="info-title">The Cashless DAO</h5>
                  <p>
                    Cashless is an organisation of people building software and communities that run on top of that protocol. Our governance token will enable contributors to earn tokens that convey governance voting rights in the future of the protocol as well as a share of future profits and/or token gains. 
                  </p>
                </div>
              </div>
              <div className="info">
                <div className="description">
                  <h5 className="info-title">Coin offering</h5>
                  <p>
                    Governance tokens are not currently available for sale, but we are actively working on the exact structure for this. The protocol wil not require a use token but there will be a coin offering that allow contributors and investors to share in our success. 
                  </p>
                </div>
              </div>
              <div className="info">

                <div className="description">
                  <h5 className="info-title">Committed to Open Source</h5>
                  <p>
                    Cashless is an open source MPL licensed protocol with a truly open source reference implementation. There are no 'hooks' or embedded crypto tokens required to run it. We want anyone and everyone to be able to build on this protocol. We will make money by building value-add products on top of the open protocol. 
                  </p>
                </div>
              </div>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Governance;


