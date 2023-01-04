import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Imagegrocery from "../img/grocery.jpg";
function grocery() {
  return (
    <Container>
      <div className="groceryfullcontent">
        <Row>
          <Col sm={12} md={12} lg={12}>
            <div className="image_grocery">
              <img src={Imagegrocery} alt="groceryproduct" />
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
export default grocery;
