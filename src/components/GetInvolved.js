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
                    The above is just a brief summary of the work so far. But it is not the only way to enable peer-to-peer mutual credit. We are open to your ideas, your contributions and your partnerships.         
                    </p>
                    <p>Right now we're open to expanding the team. would like to offer an invitation for interested contributors to get in touch. There are a range of areas that we could look for contribution.</p>
                    <ul>
                      <li>DAO, Governance and Community</li>
                      <li>Design, UX, Front End and Product </li>
                      <li>Protocol, Whitepaper and Messaging Layer</li>
                      <li>Smart contract development and SSB</li>
                      <li>Research and Social Science  </li>
                      <li>Implementations and Community Outreach </li>
                      <li>Partnerships and Collaborations</li>
                      <li>Messaging, Outreach, Marketing, Hype</li>
                      <li>Funding outreach and Tokenomics </li>                    
                    </ul>
                    <p>Contributors earn tokens which convey voting rights in our early stage DAO as well as possible for earnings, as explained in <a href="">our contributors handbook</a>.  
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
                    </ul>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody className="p-4">
                     <p>If you are interested in joining us please fill in this short survey and we'll be in touch </p>
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
