import React from "react";

// reactstrap components
import { Container, Row, Col, Card, CardBody } from "reactstrap";

function Differences() {
  return (
    <>
      <div id="differences">
        <div className="differences bg-grey py-5">
          <Container>
            <Row>
              <Col sm="12">
                <h2 className="title"> How is Cashless different from ... ?</h2>
              </Col>
            </Row>
            <Row className="no-gutters">
              <Col sm="12">
                
                  <div className="description text-left">
                    <h5 className="info-title font-weight-bold">Bitcoin, Ethereum or other crypto?</h5>
                     <p>Cashless credit is a relationship not a token. Most crypto is like gold or precious stones in that it has value because of market sentiment. Credit has value because it is a promise of future payment. Bitcoin has a proof of work to enforce limited supply. Credit on the other hand, can be created as a promises, and accepted whenever plausible. 
                     </p>
                     <p>Cashless is like bitcoin meets personal checking. It has no central server, nor even a global blockchain ledger. It is composed of a separate hash-chains - a network of communities keeping trust, data, and credit small world and local.
                      </p>
                      <p>Cashless is like a layer 2 solution in that promises of reserves are kept local but exchange of underlying currency reserves, when necessary, happens using Ethereum <a href="https://github.com/CashlessSociety/cashless/tree/tumu/contracts">Cashless smart contracts</a> on mainnet.
                     </p>
                  </div>
                
              </Col>
            </Row>
            <Row>
              <Col sm="12"> 
                
                  <div className="description text-left">
                    <Row>
                      <Col>
                        <h5 className="info-title font-weight-bold">Mainstream banking
                        </h5>
                        <p>Most of the money in the world is created as interest bearing debt by private banks. It may pass through your till without interest, but almost every dollar owes interest to a bank somewhere. 
                        </p>
                        <p>Banks are very good at keeping track of debt and keeping tabs on who owes who what. In a world of global finance, we think it's time to take the systems of credit out of the hands of a few centralized organizations and put it in the hands of communities. We aim to empower people with the ability to create and use credit without need for banks or interest.
                        </p>
                      </Col>
                    </Row>
                  </div>
        
              </Col>
            </Row>
            <Row>
              <Col sm="12">
                
                  <div className="description text-left">
                    <Row>
                      <Col>
                        <h5 className="info-title font-weight-bold">Mutual credit and timebanking
                        </h5>
                        <p>Cashless is a type of mutual credit and can be used to run a timebank. But unlike most mutual credit, each cashless credit starts off as a peer to peer promise of value between individuals. There is still a key role for community pools of value, that act like mutual credit associations in practice.</p>
                        <p>Another key difference is that while it is possible to settle debts in a mutual credit way (using 'reciprocity loops') Cashless also lets you settle promises using currency reserves 'staked' on the block chain.</p>
                        <p>These things together mean each individual runs their own credit ledger and, as a result, carries their own reputation and risk estimation.
                        </p>
                      </Col>
                    </Row>
                  </div>
          
              </Col>
            </Row>
            <Row>
              <Col sm="12">
                <Card>
                  <CardBody>
                    <div className="description text-left">
                      <h5 className="info-title font-weight-bold">Cashless is a hybrid
                      </h5>
                      <p>Cashless is strongly informed by years in the mutual credit and alternative currency movement and is an attempt to address the practical problems that arise with running a timebank. It's also informed by technology used for credit analysis on Wall Street. At the end of the day it's something of a hybrid of mutual credit, blockchain and mainstream credit risk management approaches.
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}


export default Differences;



