import React from "react";
import { Row, Col } from "react-bootstrap";
import Imagegrocery from "../img/grocery.jpg";
function grocery() {
  return (
    <div className="groceryfullcontent">
      <Row>
        <Col sm={12} md={12} lg={12}>
          <div className="image_grocery">
            <img src={Imagegrocery} alt="groceryproduct" />
          </div>
        </Col>
      </Row>
    </div>
  );
}
export default grocery;
