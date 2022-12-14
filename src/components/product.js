import React from "react";
import { Col, Row, Container, Badge, Nav } from "react-bootstrap";
import StarSharpIcon from "@mui/icons-material/StarSharp";
import FavoriteBorderSharpIcon from "@mui/icons-material/FavoriteBorderSharp";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import ItemImg from "../img/item.jpg";
import "../css/style.css";
function Product() {
  return (
    <Container>
      <Row>
        <Col md={3}>
          <section className="product_bg">
            <div className="item_image">
              <img src={ItemImg} alt="item_image" />
              <Badge className="item_badge">new</Badge>
            </div>
            <div className="item_text">
              <h4>fresh vegetables</h4>
              <p>big tree farms</p>
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
                <div className="overlay_ho1">add to cart</div>
              </div>

              {/* </Nav.Link> */}
              <div className="overlay_ho">
                <FavoriteBorderSharpIcon />
                <CompareArrowsIcon />
              </div>
            </div>
          </section>
        </Col>
      </Row>
    </Container>
  );
}
export default Product;
