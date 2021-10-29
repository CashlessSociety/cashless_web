import React from "react";

// reactstrap components
import { Card, CardBody, Button, Container, Row, Col } from "reactstrap";

// core components

function GetInvolved() {
  return (
    <>
      <div id="get-involved" className="">
        <div className="py-5 my-5">
          <Container>
            <h2 className="title text-center">Is this for you?</h2>
            <Row>
              <Col lg="6">
                
                  <div className=" text-left">
                    <img alt="future" src={require("assets/img/future.png")}></img>
                    <h5 className="info-title font-weight-bold">Yes - let's work together!</h5>
                    <p>
                    The above is a summary of the work so far. But there are many ways to enable peer-to-peer mutual credit. You may already be working on another related project. Let's not work in isolation! At this stage we are open to  contributions and partnerships that take us in new directions as far as product design goes. Just so long as we are all working on solving mutual credit within the "boundaries of collaboration" described below (or to the right) then we want to hear from you.     
                    </p>
                    <p>Right now we're expanding our list of advisors through private contacts. We also especially want to hear from potential collaborators if you think you might be able to:</p>
                    <ul>
                      <li>Help us design our the fundamentals of our token issuance and DAO founding documents.</li>
                       <li>Help us build healthy processes that recognize and value our contributors within a DAO context.</li>
                      <li>Help us design the front end experience and/or build code and smart contracts in React, Rust, Holochain/SSB or NodeJs</li>
                      <li>Help us with the protocol, whitepaper and  simulations.</li>
                      <li>Be a pilot community and connect us to real world people and real world needs.</li>                  
                    </ul>
                    <p>Contributors will earn tokens that convey governance voting rights as well as a share in future profits of our DAO, as explained in <a href="https://mutualaidworld.gitbook.io/cashless/">our contributors handbook</a>.  
                    </p>
                  </div>
                
              </Col>
              <Col lg="5" className="offset-lg-1">
                <Card>
                  <CardBody className="p-5">
                    <p className="lead">
                      The boundary of our collaboration is good people working on <b>peer-to-peer mutual credit</b> that is:
                    </p>
                    <ul className="custom_bullets">
                      <li><b>Fair</b> - Reducing inequality is at the heart of what we are doing.</li>
                      <li><b>Robust</b> - By distributing risk we are building a form of credit suited to changeable times ahead.</li>
                      <li><b>Compassionate</b> - We believe in kinder and gentler forms of money.</li>
                      <li><b>Transparent</b> - Data needs privacy boundaries but corruption, inequality and instability grow in darkness. </li>
                      <li><b>Distributed</b> - We are building structures that put the user in control of their own data, and their own credit.</li>
                      <li><b>Human centered</b> - By giving people room to act with humanity we believe we can co-create a kinder, gentler more prosperous future.</li>
                    </ul>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody className="p-4">
                     <p>If you can get behind these principles and want to change the future with us, let us know here: </p>
                      <a className="btn btn-primary btn-round btn-success" color="success" href="https://mp72k7t29rj.typeform.com/to/GfVdv7Uz">
                          <i className="now-ui-icons ui-2_favourite-28"></i>&nbsp;
                          Yes, I'm interested ! 
                      </a>
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

 
export default GetInvolved;
