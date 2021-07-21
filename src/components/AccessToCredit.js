import React from "react";

// reactstrap components
import { Card, Container, Row, Col } from "reactstrap";

// core components

function PainPoints() {
  return (
    <div className="govern section-image"
      style={{
        backgroundImage: "url(" + require("assets/img/bg11.jpg") + ")",
      }}>
      <Col className="mr-auto ml-auto text-center" md="8">
        <h2 className="title">Access to credit is a human right
</h2>
        <h4 className="description">
          It's literally goal #1 of the <a href="https://sdgs.un.org/goals">UN Sustainable Development Goals</a>:
  <br /><i>End poverty in all its forms everywhere</i>
      </h4>
      </Col>
     {/*NOTE2DH: 
       It's weird that this is <Container fluid but the others 
       are just <Container */}
      <Container fluid>
        <Row>
          <Col className="px-0" md="6">
            <Col sm="12">
              <div className="info info-horizontal">
                <div className="icon">
                  <i className="now-ui-icons design-2_html5"></i>
                </div>
                <div className="description">
                  <h5 className="info-title">Equitable access to credit</h5>
                  <p className="description">
                    It has been <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">repeatedly shown</a> that credit unions, 
                      micro-credit and even small community banks are 
                      one of the most effective ways to lift communities 
                      out of poverty and reduce inequality. <br /><br />
                      Cashless leverages <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">recent advances</a><span className="comment dark"> [Blogpost opportunity]</span> in distributed finance 
                      and cryptography, this is now possible in a meaningful way.
                  </p>
                </div>
              </div>
              <div className="info info-horizontal">
                <div className="icon">
                  <i className="now-ui-icons design_palette"></i>
                </div>
                <div className="description">
                  <h5 className="info-title">Banks had a monopoly on credit
</h5>
                  <p className="description">
                    Credit barriers, bias, discrimination and more all limit 
                    our ability to connect resources to where they need to be.
                    <br /><br />
                    We're taking back control by letting you decide who gets what <span className="comment dark">[who you support]</span>, when.
                  </p>
                </div>
              </div>
              <div className="info info-horizontal">
                <div className="icon">
                  <i className="now-ui-icons design-2_ruler-pencil"></i>
                </div>
                <div className="description">
                  <h5 className="info-title">Prevent bad debt</h5>
                  <p className="description">
                    Starting a business is risky and hard. If you go out 
                    on a limb to create something awesome, you shouldn't get stuck
                     with interest-bearing debt! <br /><br />
                     When you control your networks of sharing, you don't have to.
                  </p>
                </div>
              </div>
            </Col>
          </Col>
          <Col md="6">
            <div className="image-container">
              <img alt="..." src={require("assets/img/cashless_pad1.png")}></img>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PainPoints;
