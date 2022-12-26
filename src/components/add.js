import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import img1 from "../img/1_1.jpg";
import img2 from "../img/2_1.jpg";
import img3 from "../img/3_1.jpg";
function Add() {
  return (
    <div>
      <Container>
        <Row>
          <Col sm={12} md={3}>
            <div className="product_txp">
              <img
                src={img1}
                alt="ad the product"
                className="product_txh"
                width="100%"
              />
            </div>
          </Col>
          <Col sm={12} md={6}>
            <div className="product_txp">
              <img
                src={img2}
                alt="ad the product"
                className="product_txh"
                width="100%"
              />
            </div>
          </Col>
          <Col sm={12} md={3}>
            <div className="product_txp">
              <img
                src={img3}
                alt="ad the product"
                className="product_txh"
                width="100%"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Add;
