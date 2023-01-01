import React, { useState, useEffect } from "react";
import StarSharpIcon from "@mui/icons-material/StarSharp";
import SearchIcon from "@mui/icons-material/Search";
import Image from "../img/item.jpg";
import Image2 from "../img/item2.jpg";
import { Row, Col, Container } from "react-bootstrap";

import "../components/style2.css";
function Featuredproduct() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    setProduct([
      {
        product_name: "big tree farms",
        product_price: "$69.00",
        rating: 4,
        img_1:
          "https://blueskytechmage.com/ecolife/media/catalog/product/cache/9f4525831980a06ae430cf99f4023e93/1/7/17_1_1.jpg",
        img_2:
          "https://blueskytechmage.com/ecolife/media/catalog/product/cache/9f4525831980a06ae430cf99f4023e93/1/8/18_1.jpg",
        catogery: "fresh vegetables",
      },
      {
        product_name: "cream-cremers",
        product_price: "$69.00",
        rating: 2,
        img_1:
          "https://blueskytechmage.com/ecolife/media/catalog/product/cache/9f4525831980a06ae430cf99f4023e93/1/8/18_1.jpg",
        img_2:
          "https://blueskytechmage.com/ecolife/media/catalog/product/cache/9f4525831980a06ae430cf99f4023e93/2/1/21_3.jpg",
        catogery: "fresh veg",
      },
      {
        product_name: "mary's gone crackers",
        product_price: "$69.00",
        rating: 4,
        img_1:
          "https://blueskytechmage.com/ecolife/media/catalog/product/cache/9f4525831980a06ae430cf99f4023e93/1/8/18_1.jpg",
        img_2:
          "https://blueskytechmage.com/ecolife/media/catalog/product/cache/9f4525831980a06ae430cf99f4023e93/1/7/17_1_1.jpg",
        catogery: "fresh veg",
      },

      {
        product_name: "365 everyday value",
        product_price: "$69.00",
        rating: 4,
        img_1:
          "https://blueskytechmage.com/ecolife/media/catalog/product/cache/9f4525831980a06ae430cf99f4023e93/1/7/17_1_1.jpg",
        img_2:
          "https://blueskytechmage.com/ecolife/media/catalog/product/cache/aa113b67a170bed6206a590b0260c387/1/0/10_1_1.jpg",
        catogery: "fresh veg",
      },
      {
        product_name: "greeen and blues",
        product_price: "$69.00",
        rating: 4,
        img_1:
          "https://blueskytechmage.com/ecolife/media/catalog/product/cache/9f4525831980a06ae430cf99f4023e93/1/0/10_1.jpg",
        img_2:
          "https://blueskytechmage.com/ecolife/media/catalog/product/cache/9f4525831980a06ae430cf99f4023e93/1/7/17_1_1.jpg",
        catogery: "fresh veg",
      },
      {
        product_name: "butter margarine",
        product_price: "$69.00",
        rating: 4,
        img_1:
          "https://blueskytechmage.com/ecolife/media/catalog/product/cache/9f4525831980a06ae430cf99f4023e93/1/8/18_1.jpg",
        img_2:
          "https://blueskytechmage.com/ecolife/media/catalog/product/cache/9f4525831980a06ae430cf99f4023e93/1/7/17_1_1.jpg",
        catogery: "fresh veg",
      },
      {
        product_name: "gone crackers",
        product_price: "$69.00",
        rating: 4,
        img_1:
          "https://blueskytechmage.com/ecolife/media/catalog/product/cache/9f4525831980a06ae430cf99f4023e93/1/0/10_1.jpg",
        img_2:
          "https://blueskytechmage.com/ecolife/media/catalog/product/cache/9f4525831980a06ae430cf99f4023e93/1/7/17_1_1.jpg",
        catogery: "Fresh veg",
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
    ]);
  }, []);
  return (
    <div>
      <Container>
        <Row>
          {product.map((e, i) => {
            return (
              <Col sm={6} md={4} lg={3}>
                <div className="product_info ">
                  <div className="fullinfoproduct mt-3">
                    <span className="product_item1">
                      <img
                        src={e.img_1}
                        alt="product"
                        className="product_item1"
                      />
                      <img
                        src={e.img_2}
                        alt="product"
                        className="product_item2"
                      />
                    </span>
                    {/* <span className="product_search">
                      <SearchIcon />
                    </span> */}
                    <div className="product_text">
                      <p className="product_category">fresh vegetable</p>
                      <p className="product_name">{e.product_name}</p>
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
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
export default Featuredproduct;
