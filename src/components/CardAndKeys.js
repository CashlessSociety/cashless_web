import React from "react";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

function CardAndKeys() {
  return (
    <>
    <div className="cd-section" id="projects">
     <div className="projects-5">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Access to credit is a must/human right etc </h2>
                <h4 className="description">
                  <b>[WHY / Bit about pain].</b> Poverty = No credit <b>[more detail]</b>
                </h4>
                <div className="section-space"></div>
              </Col>
            </Row>
            <Row>
              <Col className="ml-auto" md="5">
                <Card
                  className="card-background card-background-product card-raised"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/project8.jpg") + ")",
                  }}
                >
                  <CardBody>
                    <CardTitle tag="h2">Fico is broken, Bitcoin is just</CardTitle>
                    <p className="card-description">
                      [Feature piece that ties into blog. Maybe this is a space to talk about commodity vs exchange currency? Suspendisse eu lorem at
                      libero posuere aliquam quis eu mi. Mauris ac nisl facilisis, ultrices ipsum.
                    </p>
                    <Badge className="badge-neutral">Link to blog</Badge>
                  </CardBody>
                </Card>
              </Col>
              <Col className="mr-auto" md="5">
                <div className="info info-horizontal">
                  <div className="icon icon-danger">
                    <i className="now-ui-icons ui-2_chat-round"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">
                      Locking us out
                    </h4>
                    <p className="description">
                      Credit barriers, bias, discrimination <b>[more detail]</b>
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-danger">
                    <i className="now-ui-icons business_chart-pie-36"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Banks have a monopoly on credit</h4>
                    <p className="description">
                      Banks have a monopoly on credit <b>[more detail]</b>
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-danger">
                    <i className="now-ui-icons design-2_ruler-pencil"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Additional pain point</h4> 
                    <p className="description">
                       [maybe borrowing risk/ pain of 1st-time starters/business owners?]Lack of credit sucks. What we need is [segue to solutions] <b>More detail or other space for another point here </b>
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
            <hr></hr>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Value exchange that reflects real human relationships.</h2>
                <h4 className="description">
                  <b>Cashless is:</b> Distributed credit via peer-to-peer checking [more detail/what this means for humans]
                </h4>
                <div className="section-space"></div>
              </Col>
              <Col className="ml-auto mt-5" md="5">
                <div className="info info-horizontal">
                  <div className="icon icon-warning">
                    <i className="now-ui-icons users_single-02"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">No barriers</h4>
                    <p className="description">
                      [What is possible when you don't have to jump through hoops. Needs fleshing out. ].
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-warning">
                    <i className="now-ui-icons business_chart-bar-32"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Give anyone credit</h4>
                    <p className="description">
                      [Bit about giving anyone credit. Needs fleshing out.]
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-warning">
                    <i className="now-ui-icons arrows-1_refresh-69"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Pay with time or money</h4>
                    <p className="description">
                      [Pay with time or money! Get what you need and cancel out the cost against fun stuff you've done through the service of others]
                    </p>
                  </div>
                </div>
              </Col>
              <Col className="mr-auto" md="5">
                <Card
                  className="card-background card-background-product card-raised"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/project9.jpg") + ")",
                  }}
                >
                  <CardBody>
                    <CardTitle tag="h2">Feature Piece.</CardTitle>
                    <p className="card-description">
                      Existing monetary tokens - whether dollars or bitcoin - reduce complex relationships to a single common denominator. 
In natural ecology exchange of value is not all of the same type. 
Instead of just tokenizing everything, we simply keep track of the web of value exchanges directly.
The web of irrevocable peer to peer credit transactions we are building allows value exchange to be what it is - a relationship between two parties.
                    </p>
                    <Badge className="badge-neutral">Link to blog</Badge>
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

export default CardAndKeys;


