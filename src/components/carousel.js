import React, { useEffect, useState } from "react";
import { Button, Carousel } from "react-bootstrap";
import "../css/style2.css";
import SlideItem from "../img/carousel.jpg";
import SlideItem2 from "../img/carousel1.jpg";

import "../components/style2.css";

function carousel() {
  const [detail, setDetail] = useState([]);
  useEffect(() => {
    setDetail([
      {
        category: "not fried not baked",
        fruits: "organic fruits",
        fruitsname: "summerdrinks",
        shippingdetail: "free shipping on qualified orders over",
      },
    ]);
  }, []);
  useEffect(() => {
    console.log("ppp", detail);
  }, [detail]);
  return (
    <div className="fullcontent">
      {detail.map((e, i) => {
        return (
          <Carousel variant="dark">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={SlideItem2}
                alt="First slide"
              />
              <Carousel.Caption>
                <h5 className="text_one slide-in-left">not a fried break</h5>
                <p className="text_two slide-in-right ">organic fruits</p>
                <p className="text_two slide-in-left ">summer drinks</p>
                <p className="text_four">
                  Free Shipping On Qualified Orders Over $35
                </p>
                <p>
                  <Button className="button_content scale-in-center ">
                    shop now
                  </Button>
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item variant="dark">
              <img
                className="d-block w-100"
                src={SlideItem}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h5 className="text_one  slide-in-left">not a fried break</h5>
                <p className="text_two  slide-in-left">organic fruits</p>
                <p className="text_two slide-in-right ">summer drinks</p>
                <p className="text_four">
                  Free Shipping On Qualified Orders Over $35
                </p>
                <p>
                  <Button className="button_content scale-in-center ">
                    shop now
                  </Button>
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        );
      })}
    </div>
  );
}
export default carousel;
