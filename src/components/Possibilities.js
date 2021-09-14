import React from "react";

// reactstrap components
import { Card, CardBody, Container, Row, Col } from "reactstrap";

// core components

function Possibilities() {
  return (
    <>
      <div className="">
        <div className="py-5 my-5">
          <Container>
            <h2 className="title text-center">This is just the beginning.</h2>
            <Row className="justify-content-md-center">
              <Col md="6" className="p-3">
                  <img alt="future" src={require("assets/img/future.png")}></img>
              </Col>
            </Row>
            <Row>
              <Col md="7">
                
                  <div className=" text-left">
                    <h5 className="info-title font-weight-bold"> There are so many more possibilities!</h5>
                    <p>
              The above summary is only an explanation of the idea so far. But it is far from the only way to enable peer-to-peer mutual credit. We are in touch globally with. The project ahead is to iterate and improve this overall model. 
                    </p>
                    <ul>
                    <li >
      Our white paper and simulations are a work in progress informed by all the best and most up to date research on mutual credit, no matter the resource, such as <a href="https://www.isda.org/a/yiEDE/isdadiscussion-ccp-pirrong.pdf">central credit clearing models in traditional finance</a>,      
       the latest <a href="https://digital-anthropology.me/">mutual credit</a> <a href="https://www.mdpi.com/1911-8074/13/12/295">research</a> or even <a href="https://medium.com/gelato-network/introducing-g-uni-lp-like-a-pro-in-uniswap-v3-8fd6fdf9fc35">new liquidity models</a> in distributed finance. 
                    </li>
                    <li>
      We are also developing the app based on feedback with end users and look forward to testing and iterating our app in direct relationship with our test communities.
                    </li>
                    <li>
      Even our method of collaboration and governance is work in progress. We've made a good start but would love to get input on this.
                    </li>
                    <li>
      Generally there is still a lot of room for your best ideas and perspectives to contribute across this project. 
                    </li>
                  </ul>
                  </div>
                
              </Col>
              <Col md="4" className="offset-md-1">
                <Card>
                  <CardBody className="p-5">
                    <p className="lead">
                      Nothing is sacred other than the boundaries of building a new form of mutual currency that is 
                    </p>
                    <ul>
                      <li>Fair</li><li>Robust</li><li>Compassionate</li><li>Autonomous</li><li> Distributed</li><li> and (crucially) Valuable.</li>
                    </ul>  
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

 
export default Possibilities;
