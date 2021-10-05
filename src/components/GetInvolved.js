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
            <h2 className="title text-center">Is it for you?</h2>
            <Row>
              <Col lg="6">
                
                  <div className=" text-left">
                    <img alt="future" src={require("assets/img/future.png")}></img>
                    <h5 className="info-title font-weight-bold">There are so many possibilities.</h5>
                    <p>
                    The above is just a brief summary of the work so far. But it is not the only way to enable peer-to-peer mutual credit. At this early stage we remain open to your ideas, your contributions and even potential key partnerships.        
                    </p>
                    <p>Right now we're looking into expanding the team and so we are offering an invitation for interested contributors to get in touch. We're especially keen to hear from you if you think you might be able to:</p>
                    <ul>
                      <li>Help us design our DAO, Governance and Community</li>
                      <li>Help us design the front end experience or code in React, Rust, Holochain or NodeJs</li>
                      <li>Help us with protocol, whitepaper, ssb or holochain messaging, and/or smart contract development</li>
                      <li>Be a pilot community and connect us to real world people and real world needs.</li>                  
                    </ul>
                    <p>Contributors earn tokens which convey voting rights in our early stage DAO as well as possible for earnings, as explained in <a href="https://mutualaidworld.gitbook.io/cashless/">our contributors handbook</a>.  
                    </p>
                  </div>
                
              </Col>
              <Col lg="5" className="offset-lg-1">
                <Card>
                  <CardBody className="p-5">
                    <p className="lead">
                      The boundary of this collaboration is good people working on <b>peer-to-peer mutual credit</b> that is:
                    </p>
                    <ul className="custom_bullets">
                      <li><b>Fair</b> - Reducing inequality is at the heart of what we are doing.</li>
                      <li><b>Robust</b> - By distributing risk we are building a form of credit suited to changeable times ahead.</li>
                      <li><b>Compassionate</b> - We believe in a kinder and gentler form of money.</li>
                      <li><b>Transparent</b> - Data needs boundaries but corruption, inequality and instability grow in darkness. </li>
                      <li><b>Distributed</b> - We are building structures that put the user in control of their own data, and their own credit.</li>
                      <li><b>Human centered</b> - By giving people room to act with humanity we believe we can co-create a kinder, gentler more prosperous future.</li>
                    </ul>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody className="p-4">
                     <p>If you are interested in joining us please let us know by filling in this short survey, and we'll be in touch. </p>
                      <Button className="btn-round" color="success" type="button">
                          <i className="now-ui-icons ui-2_favourite-28"></i>&nbsp;
                          Get involved! &gt; 
                      </Button>
                     
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
