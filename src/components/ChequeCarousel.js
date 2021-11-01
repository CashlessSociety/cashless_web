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
    src: require("assets/img/cheque_hr.png"),
    altText: "",
    caption: ""
  },
  {
    src: require("assets/img/cheque_216.png"),
    altText: "",
    caption: ""
  }
];

function ChequeCarousel() {
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
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        interval='5000'
        className="cheque_image"
        ride="carousel"
      >
        {items.map((item) => {
          return (
            <CarouselItem
              key={item.src}
            >
              <img className="cheque_carousel_img"
                src={item.src}
                alt={item.altText}
              />
            </CarouselItem>
          );
        })}
      </Carousel>
    </>
  );
}

export default ChequeCarousel;
