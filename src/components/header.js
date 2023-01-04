import React from "react";

import { Row, Col, Container } from "react-bootstrap";
import "./style2.css";
import item1 from "../img/icon_cms1.png";
import item2 from "../img/icon_cms2.png";
import item3 from "../img/icon_cms3.png";
import item4 from "../img/icon_cms4.png";
function header() {
  return (
    <div className="setborder">
      <Row>
        <Col sm={6} md={6} lg={3}>
          <span>
            <img src={item1} className="img_headercontent" />
          </span>
          <p className="text_merge">
            <h5>free shipping</h5>
            <p> on all orders over $75.0</p>
          </p>
        </Col>
        <Col sm={6} md={6} lg={3}>
          <span>
            <img src={item2} className="img_headercontent" />
          </span>
          <p className="text_merge">
            <h5>free returns</h5>
            <p>returns are free within 9 days</p>
          </p>
        </Col>
        <Col sm={6} md={6} lg={3}>
          <span>
            <img src={item3} className="img_headercontent" />
          </span>
          <p className="text_merge">
            <h5>100% payment secure </h5>
            <p>your payment are safe with us</p>
          </p>
        </Col>
        <Col sm={6} md={6} lg={3}>
          <span>
            <img src={item4} className="img_headercontent" />
          </span>
          <p className="text_merge">
            <h5>support24/7</h5>
            <p> contact us 24 hours a day</p>
          </p>
        </Col>
      </Row>
    </div>
  );
}
export default header;
