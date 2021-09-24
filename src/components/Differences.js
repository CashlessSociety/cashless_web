import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function Differences() {
  return (
    <div id="differences" className="features-8 differences">
      <Col className="mr-auto ml-auto text-center" md="8">
        <h2 className="title">
          Governance
        </h2>
        <h4 className="lead">
          Cashless is a Distributed Autonomous Organisation
        </h4>
      </Col>
      <Container>
        <Row>
          <Col className="px-0" md="6">
            <Col sm="12">
              <div className="info">
                <div className="description">
                  <h5 className="info-title">Bitcoin, Ethereum or other crypto?</h5>
                   <p><b>Cashless credit is a relationship not a token.</b> Most crypto is like gold or precious stones in that it has value because of market sentiment. Credit, is a promise of future payment.
                   </p>
                   <p>Bitcoin has a proof of work to enforce limited supply. Credit on the hand can be created as a promises, and accepted whenever plausible. 
                   </p>
                   <p>
                   Cashless Credit has no central server, or global blockchain ledger. It is composed of a separate hash-chains - a network of communities keeping trust, data, and credit small world and local. Promises of reserves are kept local but exchange of underlying currency reserves, when necessary, happens using Ethereum <a href="https://github.com/CashlessSociety/cashless/tree/tumu/contracts">Cashless smart contracts</a> on mainnet.</p>
                </div>
              </div>
              <div className="info">

                <div className="description">
                  <h5 className="info-title">Mainstream banking</h5>
                  <p>Most of the money in the world is <b>created as interest bearing debt by private banks</b>. It may pass through your till without interest, but almost every dollar owes interest to a bank somewhere. 
                  </p>
                  <p>Banks are very good at keeping track of debt and keeping tabs on who owes who what. In a world of global finance, we think it's time to take the systems of credit out of the hands of a few centralized organizations and put it in the hands of communities. We aim to empower people with the ability to create and use credit without need for banks or interest.
                  </p>
                </div>
              </div>
              <div className="info">
                <div className="description">
                  <h5 className="info-title">Mutual credit and timebanking</h5>
                  <p>
                    Cashless is a type of mutual credit. But each cashless credit starts off as a <b>peer to peer promise of value between individuals</b>.
                  </p>
                  <p>There is still a key role for community pools of value, that act like mutual credit associations in practice, but instead of a shared ledger for each  association, each individual has their own credit ledger.</p>
                  <p>Another key difference is that while it is possible to settle debts in a mutual way (using 'reciprocity loops') Cashless also lets you settle promises using currency reserves 'staked' on the block chain.</p>
                  <p>These things together mean each individual runs their own credit ledger and, as a result, carries their own reputation and risk estimate.
                  </p>
                </div>
              </div>
            </Col>
          </Col>
          <Col className="px-0" md="6">
            <Col sm="12">
              <div className="info">
                <div className="description">
                  <h5 className="info-title">Cashless is a hybrid </h5>
                  <p>Cashless is a type of mutual credit strongly informed by years in the alternative currency movement and attempts to address the practical problems that arose when running a timebank. It's also informed by years of providing technology for credit analysis on Wall Street. At the end of the day it's something of a hybrid of mutual credit, block chain and more mainstream credit risk management technology.
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

export default Differences;


