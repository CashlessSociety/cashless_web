import React from "react";
// react plugin used to create google maps
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

const MapWrapper = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={13}
      defaultCenter={{ lat: 40.748817, lng: -73.985428 }}
      defaultOptions={{
        scrollwheel: false,
        styles: [
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#e9e9e9" }, { lightness: 17 }],
          },
          {
            featureType: "landscape",
            elementType: "geometry",
            stylers: [{ color: "#f5f5f5" }, { lightness: 20 }],
          },
          {
            featureType: "road.highway",
            elementType: "geometry.fill",
            stylers: [{ color: "#ffffff" }, { lightness: 17 }],
          },
          {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [{ color: "#ffffff" }, { lightness: 29 }, { weight: 0.2 }],
          },
          {
            featureType: "road.arterial",
            elementType: "geometry",
            stylers: [{ color: "#ffffff" }, { lightness: 18 }],
          },
          {
            featureType: "road.local",
            elementType: "geometry",
            stylers: [{ color: "#ffffff" }, { lightness: 16 }],
          },
          {
            featureType: "poi",
            elementType: "geometry",
            stylers: [{ color: "#f5f5f5" }, { lightness: 21 }],
          },
          {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [{ color: "#dedede" }, { lightness: 21 }],
          },
          {
            elementType: "labels.text.stroke",
            stylers: [
              { visibility: "on" },
              { color: "#ffffff" },
              { lightness: 16 },
            ],
          },
          {
            elementType: "labels.text.fill",
            stylers: [
              { saturation: 36 },
              { color: "#333333" },
              { lightness: 40 },
            ],
          },
          { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
          {
            featureType: "transit",
            elementType: "geometry",
            stylers: [{ color: "#f2f2f2" }, { lightness: 19 }],
          },
          {
            featureType: "administrative",
            elementType: "geometry.fill",
            stylers: [{ color: "#fefefe" }, { lightness: 20 }],
          },
          {
            featureType: "administrative",
            elementType: "geometry.stroke",
            stylers: [{ color: "#fefefe" }, { lightness: 17 }, { weight: 1.2 }],
          },
        ],
      }}
    >
      <Marker position={{ lat: 40.748817, lng: -73.985428 }} />
    </GoogleMap>
  ))
);

function ContactUs() {
  const [first1Focus, setFirst1Focus] = React.useState(false);
  const [last1Focus, setLast1Focus] = React.useState(false);
  const [email1Focus, setEmail1Focus] = React.useState(false);
  const [first2Focus, setFirst2Focus] = React.useState(false);
  const [email2Focus, setEmail2Focus] = React.useState(false);
  return (
    <>
     <div id="contact-us" className="contactus-1 cashless-features bg-sunset">
        <Container>
          <Row>
            <Col md="5">
              <h2 className="title">Contact us</h2>
              <p className="lead">
                If you wish to find out more about possible collaboration, please <a href="#get-involved">see above</a>. 
              </p>
              <p className="lead">
                  For any other questions, comments, ideas - or to leave us a more general message, feel free to do so here.
              </p>
            </Col>
            <Col className="ml-auto mr-auto" md="5">
              <Card className="card-contact card-raised">
                <Form id="contact-form1" method="post" role="form">
                  <CardHeader className="text-center">
                    <CardTitle tag="h4">Contact Us</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="pr-2" md="6">
                        <label>First name</label>
                        <InputGroup
                          className={first1Focus ? "input-group-focus" : ""}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="now-ui-icons users_circle-08"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            aria-label="First Name..."
                            autoComplete="given-name"
                            placeholder="First Name..."
                            type="text"
                            onFocus={() => setFirst1Focus(true)}
                            onBlur={() => setFirst1Focus(false)}
                          ></Input>
                        </InputGroup>
                      </Col>
                      <Col className="pl-2" md="6">
                        <FormGroup>
                          <label>Last name</label>
                          <InputGroup
                            className={last1Focus ? "input-group-focus" : ""}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="now-ui-icons text_caps-small"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              aria-label="Last Name..."
                              autoComplete="family-name"
                              placeholder="Last Name..."
                              type="text"
                              onFocus={() => setLast1Focus(true)}
                              onBlur={() => setLast1Focus(false)}
                            ></Input>
                          </InputGroup>
                        </FormGroup>
                      </Col>
                    </Row>
                    <FormGroup>
                      <label>Email address</label>
                      <InputGroup
                        className={email1Focus ? "input-group-focus" : ""}
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="now-ui-icons ui-1_email-85"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          autoComplete="email"
                          placeholder="Email Here..."
                          type="email"
                          onFocus={() => setEmail1Focus(true)}
                          onBlur={() => setEmail1Focus(false)}
                        ></Input>
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <label>Your message</label>
                      <Input
                        id="message"
                        name="message"
                        rows="6"
                        type="textarea"
                      ></Input>
                    </FormGroup>
                    <Row>
                      <Col md="6">
                        <FormGroup check>
                          <Label check>
                            <Input type="checkbox"></Input>
                            <span className="form-check-sign"></span>
                            I'm not a robot
                          </Label>
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <Button
                          className="btn-round pull-right"
                          color="info"
                          type="submit"
                        >
                          Send Message
                        </Button>
                      </Col>
                    </Row>
                  </CardBody>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default ContactUs;
