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

function WhatCouldGoWrong() {
  return (
    <>
     <div className="projects-5 cashless-features">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">What could go wrong?</h2>
              <h4 className="description">
                <b>(Yes we've actually thought about this)</b>
              </h4>
              <div className="section-space"></div>
            </Col>
            <Col className="ml-auto mt-5" md="5">
              <div className="info info-horizontal">
                <div className="icon icon-warning">
                  <i className="now-ui-icons users_single-02"></i>
                </div>
                <div className="description">
                  <h4 className="info-title">Thing 1</h4>
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
                  <h4 className="info-title">Thing 2</h4>
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
                  <h4 className="info-title">Thing 3</h4>
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
    </>
  );
}

export default WhatCouldGoWrong;


