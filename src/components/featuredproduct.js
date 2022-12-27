import React from "react";
import StarSharpIcon from "@mui/icons-material/StarSharp";
import SearchIcon from "@mui/icons-material/Search";
import Image from "../img/item.jpg";
import Image2 from "../img/item2.jpg";
import { Row, Col, Container } from "react-bootstrap";

import "../components/style2.css";
function Featuredproduct() {
  return (
    <div>
      <Container>
        <Row>
          <Col sm={6} md={4} lg={3}>
            <div className="product_info">
              <div className="fullinfoproduct">
                <span className="product_item1">
                  <img src={Image} alt="product" />
                  {/* <img src={Image2} alt="product" className="product_item2" /> */}
                </span>
                <span className="product_search">
                  <SearchIcon />
                </span>
                <div className="product_text">
                  <p className="product_category">fresh vegetable</p>
                  <p className="product_name">organic value</p>
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
        </Row>
      </Container>
    </div>
  );
}
export default Featuredproduct;
