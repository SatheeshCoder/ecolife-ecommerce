import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import StarSharpIcon from "@mui/icons-material/StarSharp";
import SearchIcon from "@mui/icons-material/Search";
import "../components/style2.css";
import Image from "../img/item.jpg";
import Image2 from "../img/item2.jpg";
import Image3 from "../img/orange.jpg";
import Image4 from "../img/apple.jpg";
import { Container } from "react-bootstrap";

const responsive = {
  0: { items: 1 },

  568: { items: 2 },
  700: { items: 3 },
  1024: { items: 4 },
};

const items = [
  <div className="item" data-value="1">
    <div className="product_info ">
      <div className="fullinfoproduct">
        <span className="product_item1">
          <img src={Image} alt="product" className="product_item" />
          <img src={Image2} alt="product" className="product_item2" />
        </span>
        <span className="product_search">
          <SearchIcon />
        </span>
        <div className="product_text">
          <p className="product_category">fresh vegetable</p>
          <p className="product_name">organic fruit</p>
          <p className="product_review">
            <p className="star_icon">
              <StarSharpIcon />
              <StarSharpIcon />
              <StarSharpIcon />
              <StarSharpIcon />
            </p>
          </p>
          <p className="product_price">$69.00</p>
        </div>
      </div>
    </div>{" "}
    <div className="product_info ">
      <div className="fullinfoproduct">
        <span className="product_item1">
          <img src={Image} alt="product" className="product_item" />
          <img src={Image2} alt="product" className="product_item2" />
        </span>
        <span className="product_search">
          <SearchIcon />
        </span>
        <div className="product_text">
          <p className="product_category">fresh vegetable</p>
          <p className="product_name">organic fruits</p>
          <p className="product_review">
            <p className="star_icon">
              <StarSharpIcon />
              <StarSharpIcon />
              <StarSharpIcon />
              <StarSharpIcon />
            </p>
          </p>
          <p className="product_price">$69.00</p>
        </div>
      </div>
    </div>
  </div>,
  <div className="item" data-value="2">
    {" "}
    <div className="product_info ">
      <div className="fullinfoproduct">
        <span className="product_item1">
          <img src={Image3} alt="product" className="product_item" />
          <img src={Image2} alt="product" className="product_item2" />
        </span>
        <span className="product_search">
          <SearchIcon />
        </span>
        <div className="product_text">
          <p className="product_category">fresh vegetable</p>
          <p className="product_name">organic fruit</p>
          <p className="product_review">
            <p className="star_icon">
              <StarSharpIcon />
              <StarSharpIcon />
              <StarSharpIcon />
              <StarSharpIcon />
            </p>
          </p>
          <p className="product_price">$69.00</p>
        </div>
      </div>
    </div>{" "}
    <div className="product_info ">
      <div className="fullinfoproduct">
        <span className="product_item1">
          <img src={Image3} alt="product" className="product_item" />
          <img src={Image2} alt="product" className="product_item2" />
        </span>
        <span className="product_search">
          <SearchIcon />
        </span>
        <div className="product_text">
          <p className="product_category">fresh vegetable</p>
          <p className="product_name">organic fruits</p>
          <p className="product_review">
            <p className="star_icon">
              <StarSharpIcon />
              <StarSharpIcon />
              <StarSharpIcon />
              <StarSharpIcon />
            </p>
          </p>
          <p className="product_price">$69.00</p>
        </div>
      </div>
    </div>
  </div>,
  <div className="item" data-value="3">
    {" "}
    <div className="product_info ">
      <div className="fullinfoproduct">
        <span className="product_item1">
          <img src={Image4} alt="product" className="product_item" />
          <img src={Image2} alt="product" className="product_item2" />
        </span>
        <span className="product_search">
          <SearchIcon />
        </span>
        <div className="product_text">
          <p className="product_category">fresh vegetable</p>
          <p className="product_name">organic fruit</p>
          <p className="product_review">
            <p className="star_icon">
              <StarSharpIcon />
              <StarSharpIcon />
              <StarSharpIcon />
              <StarSharpIcon />
            </p>
          </p>
          <p className="product_price">$69.00</p>
        </div>
      </div>
    </div>{" "}
    <div className="product_info ">
      <div className="fullinfoproduct">
        <span className="product_item1">
          <img src={Image4} alt="product" className="product_item" />
          <img src={Image2} alt="product" className="product_item2" />
        </span>
        <span className="product_search">
          <SearchIcon />
        </span>
        <div className="product_text">
          <p className="product_category">fresh vegetable</p>
          <p className="product_name">organic fruits</p>
          <p className="product_review">
            <p className="star_icon">
              <StarSharpIcon />
              <StarSharpIcon />
              <StarSharpIcon />
              <StarSharpIcon />
            </p>
          </p>
          <p className="product_price">$69.00</p>
        </div>
      </div>
    </div>
  </div>,
  <div className="item" data-value="4">
    {" "}
    <div className="product_info ">
      <div className="fullinfoproduct">
        <span className="product_item1">
          <img src={Image3} alt="product" className="product_item" />
          <img src={Image2} alt="product" className="product_item2" />
        </span>
        <span className="product_search">
          <SearchIcon />
        </span>
        <div className="product_text">
          <p className="product_category">fresh vegetable</p>
          <p className="product_name">organic fruits</p>
          <p className="product_review">
            <p className="star_icon">
              <StarSharpIcon />
              <StarSharpIcon />
              <StarSharpIcon />
              <StarSharpIcon />
            </p>
          </p>
          <p className="product_price">$69.00</p>
        </div>
      </div>
    </div>{" "}
    <div className="product_info ">
      <div className="fullinfoproduct">
        <span className="product_item1">
          <img src={Image4} alt="product" className="product_item" />
          <img src={Image2} alt="product" className="product_item2" />
        </span>
        {/* <span className="product_search">
                      <SearchIcon />
                    </span> */}
        <div className="product_text">
          <p className="product_category">fresh vegetable</p>
          <p className="product_name">organic fruits</p>
          <p className="product_review">
            <p className="star_icon">
              <StarSharpIcon />
              <StarSharpIcon />
              <StarSharpIcon />
              <StarSharpIcon />
            </p>
          </p>
          <p className="product_price">$69.00</p>
        </div>
      </div>
    </div>
  </div>,
  <div className="item" data-value="5">
    {" "}
    <div className="product_info ">
      <div className="fullinfoproduct">
        <span className="product_item1">
          <img src={Image} alt="product" className="product_item" />
          <img src={Image2} alt="product" className="product_item2" />
        </span>
        <span className="product_search">
          <SearchIcon />
        </span>
        <div className="product_text">
          <p className="product_category">fresh vegetable</p>
          <p className="product_name">organic fruits</p>
          <p className="product_review">
            <p className="star_icon">
              <StarSharpIcon />
              <StarSharpIcon />
              <StarSharpIcon />
              <StarSharpIcon />
            </p>
          </p>
          <p className="product_price">$69.00</p>
        </div>
      </div>
    </div>{" "}
    <div className="product_info ">
      <div className="fullinfoproduct">
        <span className="product_item1">
          <img src={Image} alt="product" className="product_item" />
          <img src={Image2} alt="product" className="product_item2" />
        </span>
        <span className="product_search">
          <SearchIcon />
        </span>
        <div className="product_text">
          <p className="product_category">fresh vegetable</p>
          <p className="product_name">organic fruits</p>
          <p className="product_review">
            <p className="star_icon">
              <StarSharpIcon />
              <StarSharpIcon />
              <StarSharpIcon />
              <StarSharpIcon />
            </p>
          </p>
          <p className="product_price">$69.00</p>
        </div>
      </div>
    </div>
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
        <div>
          <AliceCarousel
            mouseTracking
            items={items}
            responsive={responsive}
            controlsStrategy="alternate"
          />
        </div>
      </div>
    </Container>
  </>
);
export default Carousel;
