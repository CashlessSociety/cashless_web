import React from "react";

// reactstrap components
import {
    Button,
    Container,
    Row,
    Col,
    Input,
    Form,
    FormGroup
  } from "reactstrap";

// core components

function ContactForm() {
  
  

  return (
    <>
        <div className="section section-contact-us text-center">
          <Container>
          <div className="subscribe">
                <h5 className="info-text">
                    Join our early access waiting list!
                 </h5>
                <Row>
                    <Col className="text-center ml-auto mr-auto" lg="6" md="8">

                      <Form action="https://social.us7.list-manage.com/subscribe/post?u=ad628dbb14a6935a063c3b0e7&amp;id=a1ff54cacf" className="form form-newsletter" method="post">
                        <FormGroup>
                          <Input placeholder="First Name"  name="FNAME"  type="text" id="mce-FNAME"></Input>
                          <Input placeholder="Email address" style={{ marginTop: "1rem"}}   name="EMAIL"  type="email" id="mce-EMAIL"></Input>
                          
                          {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups --> */}
                          <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true"><input type="text" name="b_ad628dbb14a6935a063c3b0e7_a1ff54cacf" tabIndex="-1" value="" readOnly /></div>
                        </FormGroup>
                        <Button className="btn-icon btn-round" type="submit" style={{ marginTop: "3.9rem"}} color="info"  name="button" id="mc-embedded-subscribe"
                        >
                          <i className="now-ui-icons ui-1_email-85"></i>
                        </Button>
                      </Form>

                    </Col>
                </Row>
    
          </div>
          </Container>
        </div>
    </>
  );
}

export default ContactForm;