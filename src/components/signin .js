import { Radio } from "@mui/icons-material";
import React, { useState } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";

function sign_in() {
  const [lastname, setLastName] = useState("");
  const [firstname, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setcPassword] = useState("");

  function handleshow(event) {
    console.log(event.target.value);
    setEmail(event.target.value);
    // event.preventdefault();
  }
  function handleshow(event) {
    console.log(event.target.value);
    setPassword(event.target.value);
    // event.preventdefault();
  }
  function handleshow(event) {
    console.log(event.target.value);
    setcPassword(event.target.value);
    // event.preventdefault();
  }
  function handleshow(event) {
    console.log(event.target.value);
    setFirstName(event.target.value);
    // event.preventdefault();
  }
  function handleshow(event) {
    console.log(event.target.value);
    setLastName(event.target.value);
    // event.preventdefault();
  }
  return (
    <>
      <Container>
        {" "}
        <div className="signin_page">
          <Row>
            <Col xs={12} sm={12} md={6} lg={6}>
              <div className="fieldcreate_info">
                <h3 className="legend">personal information</h3>
                <Form onClick={handleshow}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="label">first name</Form.Label>
                    <Form.Control
                      onChange={handleshow}
                      type="text"
                      title="firstname"
                      id="lastname"
                    />
                    <div className=" mage-error">This is a required field</div>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="label">last name</Form.Label>
                    <Form.Control
                      onChange={handleshow}
                      type="text"
                      title="lastname"
                    />
                    <div className=" mage-error">This is a required field</div>
                  </Form.Group>
                  <Form.Label className="label">gender</Form.Label>
                  <Form.Check label="male" name="group1" type="Radio" />
                  <Form.Check label="female" name="group1" type="Radio" />
                </Form>
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
              <div className="fieldcreate_account">
                <h3 className="legend">sign in information</h3>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="label">email</Form.Label>
                    <Form.Control
                      onChange={handleshow}
                      type="email"
                      title="email"
                    />
                    <div className=" mage-error">This is a required field</div>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="label">password</Form.Label>
                    <Form.Control
                      onChange={handleshow}
                      type="password"
                      title="password"
                    />
                    <div className=" mage-error">This is a required field</div>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="label">confirm password</Form.Label>
                    <Form.Control
                      onChange={handleshow}
                      type="password"
                      title="confirm password"
                    />
                    <div className=" mage-error">This is a required field</div>
                  </Form.Group>
                </Form>
              </div>
            </Col>
          </Row>
          <div className="primarycontent">
            <Button className="primary" type="submit" title="create an account">
              create account
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
}
export default sign_in;
