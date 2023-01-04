import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Container } from "react-bootstrap";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const items = [
  <div className="item" data-value="1">
    1
  </div>,
  <div className="item" data-value="2">
    2
  </div>,
  <div className="item" data-value="3">
    3
  </div>,
  <div className="item" data-value="4">
    4
  </div>,
  <div className="item" data-value="5">
    5
  </div>,
];

const Carousel = () => (
  <>
    <Container>
      <div className="full-featuredproduct">
        <div className=" rokan-featured-heading">
          {" "}
          <h3 className="product_heading"> featuredproduct</h3>
          <p class="description">Add hot products to weekly line up </p>
        </div>
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
        />
      </div>
    </Container>
  </>
);

export default Carousel;
