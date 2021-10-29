import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";

// core components
const items = [
  {
    src: require("assets/img/screenshot-profile.png"),
    altText: "",
    caption: ""
  },
  {
    src: require("assets/img/screenshot-send.png"),
    altText: "",
    caption: ""
  },
  {
    src: require("assets/img/screenshot-skills.png"),
    altText: "",
    caption: ""
  },
  {
    src: require("assets/img/screenshot-sent.png"),
    altText: "",
    caption: ""
  }
];

function AppCarousel() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>

      <div id="carousel">

              <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
              >

                <CarouselIndicators
                  items={items}
                  activeIndex={activeIndex}
                  onClickHandler={goToIndex}
                />
                {items.map((item) => {
                  return (
                    <CarouselItem
                      onExiting={onExiting}
                      onExited={onExited}
                      key={item.src}
                    >
                      <div className="phone-container">
                        <div className="phone-container-screens">
                          <img
                            src={item.src}
                            alt={item.altText}
                            className="d-block"
                          />
                        </div>
                      </div>
                    </CarouselItem>
                  );
                })}
                <a
                  className="carousel-control-prev"
                  data-slide="prev"
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    previous();
                  }}
                  role="button"
                >
                  <i className="now-ui-icons arrows-1_minimal-left"></i>
                </a>
                <a
                  className="carousel-control-next"
                  data-slide="next"
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    next();
                  }}
                  role="button"
                >
                  <i className="now-ui-icons arrows-1_minimal-right"></i>
                </a>
              </Carousel>
        {/*<Container>
          <Row className="justify-content-center">
            <Col lg="8" md="12">
              
            </Col>
          </Row>
        </Container>*/}
      </div>
    </>
  );
}

export default AppCarousel;
