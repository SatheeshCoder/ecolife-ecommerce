import React from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
function sign_up() {
  return (
    <>
      <Container>
        {" "}
        <div className="signin_page">
          <Row>
            <Col xs={12} sm={12} md={6} lg={6}>
              <div className="fieldcreate_info">
                <h3 className="legend legendbo">register customer</h3>
                <div>
                  <p className="field_note">
                    If you have an account, sign in with your email address.
                  </p>
                </div>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="label">email</Form.Label>
                    <Form.Control type="email" title="email" id="lastname" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="label">password</Form.Label>
                    <Form.Control type="text" title="lastname" />
                  </Form.Group>
                  <div className="primarycontent inlinecontent">
                    <Button className="primary" type="submit" title="signin">
                      sign in
                    </Button>
                    <p className="secondary">Forgot Your Password?</p>
                  </div>
                </Form>
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
              <div className="fieldcreate_account">
                <h3 className="legend legendbo">new customer</h3>
                <div>
                  <p className="field_note">
                    Creating an account has many benefits: check out faster,
                    keep more than one address, track orders and more.
                  </p>
                </div>
                <div className="primarycontent inlinecontent">
                  <Button className="primary">create an account</Button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}
export default sign_up;
