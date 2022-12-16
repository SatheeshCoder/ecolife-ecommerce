import React, { useState } from "react";
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
  const [productList, setProuductList] = useState("");

  return (
    <Container>
      <Row>
        <Col md={3}>
          <section className="product_bg">
            <div className="item_image">
              <img src={ItemImg} alt="item_image" />
              <Badge className="item_badge">new</Badge>
            </div>
            <div className="item_image1">
              {/* <div className="searchcenter"> */}
              <img src={ItemImg1} alt="item_image" />
              <span className="circle">
                <SearchSharpIcon />
              </span>
              {/* </div> */}
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
                <OverlayTrigger
                  overlay={<Tooltip id="tooltip-disabled">add to cart</Tooltip>}
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
                    <Tooltip id="tooltip-disabled" className="tooltipbottom">
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
      </Row>
    </Container>
  );
}
export default Product;
