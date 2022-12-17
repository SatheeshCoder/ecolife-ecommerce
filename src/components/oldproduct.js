import React, { useState, useEffect } from "react";
import {
  Col,
  Row,
  Container,
  Badge,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import StarSharpIcon from "@mui/icons-material/StarSharp";
import FavoriteBorderSharpIcon from "@mui/icons-material/FavoriteBorderSharp";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import ItemImg from "../img/item.jpg";
import ItemImg1 from "../img/item2.jpg";
import "../css/style.css";
function Product() {
  const [productList, setProuductList] = useState([]);

  useEffect(() => {
    setProuductList([
      {
        label_bg: "blue",
        product_name: "big tree farms",
        product_price: "$69.00",
        rating: 4,
        img_1:
          "https://blueskytechmage.com/ecolife/media/catalog/product/cache/9f4525831980a06ae430cf99f4023e93/1/7/17_1_1.jpg",
        img_2:
          "https://blueskytechmage.com/ecolife/media/catalog/product/cache/9f4525831980a06ae430cf99f4023e93/1/8/18_1.jpg",
        catogery: "fresh vegetables",
        lable: "new",
      },
      {
        label_bg: "yellow",
        product_name: "cream-cremers",
        product_price: "$69.00",
        rating: 4,
        img_1:
          "https://blueskytechmage.com/ecolife/media/catalog/product/cache/9f4525831980a06ae430cf99f4023e93/1/8/18_1.jpg",
        img_2:
          "https://blueskytechmage.com/ecolife/media/catalog/product/cache/9f4525831980a06ae430cf99f4023e93/2/1/21_3.jpg",
        catogery: "fresh veg",
        lable: "new",
      },
      {
        label_bg: "red",
        product_name: "mary's gone crackers",
        product_price: "$69.00",
        rating: 4,
        img_1:
          "https://blueskytechmage.com/ecolife/media/catalog/product/cache/9f4525831980a06ae430cf99f4023e93/1/8/18_1.jpg",
        img_2:
          "https://blueskytechmage.com/ecolife/media/catalog/product/cache/9f4525831980a06ae430cf99f4023e93/1/7/17_1_1.jpg",
        catogery: "fresh veg",
        lable: "new",
      },

      {
        label_bg: "yellow",
        product_name: "365 everyday value",
        product_price: "$69.00",
        rating: 4,
        img_1:
          "https://blueskytechmage.com/ecolife/media/catalog/product/cache/9f4525831980a06ae430cf99f4023e93/1/7/17_1_1.jpg",
        img_2:
          "https://blueskytechmage.com/ecolife/media/catalog/product/cache/aa113b67a170bed6206a590b0260c387/1/0/10_1_1.jpg",
        catogery: "fresh veg",
        lable: "new",
      },
      {
        label_bg: "red",
        product_name: "greeen and blues",
        product_price: "$69.00",
        rating: 4,
        img_1:
          "https://blueskytechmage.com/ecolife/media/catalog/product/cache/9f4525831980a06ae430cf99f4023e93/1/0/10_1.jpg",
        img_2:
          "https://blueskytechmage.com/ecolife/media/catalog/product/cache/9f4525831980a06ae430cf99f4023e93/1/7/17_1_1.jpg",
        catogery: "fresh veg",
        lable: "new",
      },
      {
        label_bg: "blue",
        product_name: "butter margarine",
        product_price: "$69.00",
        rating: 4,
        img_1:
          "https://blueskytechmage.com/ecolife/media/catalog/product/cache/9f4525831980a06ae430cf99f4023e93/1/8/18_1.jpg",
        img_2:
          "https://blueskytechmage.com/ecolife/media/catalog/product/cache/9f4525831980a06ae430cf99f4023e93/1/7/17_1_1.jpg",
        catogery: "fresh veg",
        lable: "new",
      },
      {
        product_name: "gone crackers",
        product_price: "$69.00",
        rating: 4,
        img_1:
          "https://blueskytechmage.com/ecolife/media/catalog/product/cache/9f4525831980a06ae430cf99f4023e93/1/0/10_1.jpg",
        img_2:
          "https://blueskytechmage.com/ecolife/media/catalog/product/cache/9f4525831980a06ae430cf99f4023e93/1/7/17_1_1.jpg",
        catogery: "fresh veg",
      },
      {
        product_name: "cherry number on",
        product_price: "$69.00",
        rating: 4,
        img_1:
          "https://blueskytechmage.com/ecolife/media/catalog/product/cache/9f4525831980a06ae430cf99f4023e93/1/0/10_1.jpg",
        img_2:
          "https://blueskytechmage.com/ecolife/media/catalog/product/cache/9f4525831980a06ae430cf99f4023e93/1/7/17_1_1.jpg",
        catogery: "fresh veg",
      },
      {
        product_name: "organic newzealand",
        product_price: "$69.00",
        rating: 4,
        img_1:
          "https://blueskytechmage.com/ecolife/media/catalog/product/cache/9f4525831980a06ae430cf99f4023e93/1/7/17_1_1.jpg",
        img_2:
          "https://blueskytechmage.com/ecolife/media/catalog/product/cache/aa113b67a170bed6206a590b0260c387/1/0/10_1_1.jpg",
        catogery: "fresh veg",
        lable: "new",
        label_bg: "green",
      },
    ]);
  }, []);

  return (
    <Container>
      <Row>
        {productList.map((e, i) => {
          return (
            <Col md={3}>
              <section className="product_bg">
                <div className="item_image">
                  <img src={e.img_1} alt="item_image" />
                  <Badge className="item_badge">new</Badge>
                  {/* {
                  {e . lable != (undefined || null) ? (
                    <Badge className="item_badge">new</Badge>
                  ) : null}} */}
                </div>
                <div className="item_image">
                  {/* <div className="searchcenter"> */}
                  <img src={e.img_2} alt="item_image" />
                  <span className="circle">
                    <SearchSharpIcon />
                  </span>
                  {/* </div> */}
                  {/* {
                {e . lable != (undefined || null) ? (
                    <Badge className="item_badge">new</Badge>
                  ) : null}} */}
                </div>
                <div className="item_text">
                  <h4>fresh vegetables</h4>
                  <p>{e.product_name}</p>
                  <p className="star_icon">
                    <StarSharpIcon />
                    <StarSharpIcon />
                    <StarSharpIcon />
                    <StarSharpIcon />
                  </p>
                  <span className="price">$69.00</span>
                </div>
                <div className="overlay">
                  {/* <Nav.Link href="#action1" className="overlay_ho"> */}
                  <div className="overlay_ho">
                    <OverlayTrigger
                      overlay={
                        <Tooltip id="tooltip-disabled">add to cart</Tooltip>
                      }
                    >
                      <span className="d-inline-block">
                        <div className="overlay_ho1">add to cart</div>
                      </span>
                    </OverlayTrigger>
                  </div>

                  {/* </Nav.Link> */}
                  <div className="overlay_ho">
                    <OverlayTrigger
                      overlay={
                        <Tooltip id="tooltip-disabled">add to wishlist</Tooltip>
                      }
                    >
                      <span className="d-inline-block">
                        {" "}
                        <FavoriteBorderSharpIcon />
                      </span>
                    </OverlayTrigger>{" "}
                    <OverlayTrigger
                      overlay={
                        <Tooltip
                          id="tooltip-disabled"
                          className="tooltipbottom"
                        >
                          add to compare
                        </Tooltip>
                      }
                    >
                      <span className="d-inline-block">
                        {" "}
                        <CompareArrowsIcon />
                      </span>
                    </OverlayTrigger>
                  </div>
                </div>
              </section>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
export default Product;
