import React, { useState, useEffect } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";

function SignIn() {
  const [lastname, setLastName] = useState("");
  const [firstname, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setcPassword] = useState("");
  const [rlastname, rsetLastName] = useState(false);
  const [rfirstname, rsetFirstName] = useState(false);
  const [remail, rsetEmail] = useState(true);
  const [rpassword, rsetPassword] = useState(true);
  const [rcpassword, rsetcPassword] = useState(true);

  let value = {
    firstname: { firstname },
    lastname: { lastname },
    email: { email },
    password: { password },
    cpassword: { cpassword },
  };
  function handleshowemail(event) {
    console.log(event.target.value);
    setEmail(event.target.value);
    // event.preventdefault();
  }
  function handleshowpassword(event) {
    console.log(event.target.value);
    setPassword(event.target.value);
    // event.preventdefault();
  }
  function handleshowcpassword(event) {
    console.log(event.target.value);

    setcPassword(event.target.value);

    // event.preventdefault();
  }
  function handleshowfirstname(event) {
    // console.log(event.target.value);
    setFirstName(event.target.value);
    console.log("firstname++++", firstname);
    // event.preventdefault()firstname;
  }
  // useEffect(() => {
  //   console.log("firstname", firstname);
  // }, [firstname]);
  function handleshowlastname(event) {
    console.log(event.target.value);
    setLastName(event.target.value);
    // event.preventdefault();
  }
  const handleSubmit = (event) => {
    // console.log(firstname);
    // console.log(lastname);
    // console.log(email);
    // console.log(password);
    // console.log(cpassword);
    // console.log(value);
    // alert("your file is upload");
    // event.preventdefault();
    if (firstname == "" || firstname == undefined) {
      rsetFirstName(true);
    }
  };

  return (
    <>
      <Container>
        {" "}
        <div className="signin_page">
          <form onSubmit={(e) => handleSubmit(e)}>
            <Row>
              <Col xs={12} sm={12} md={6} lg={6}>
                <div className="fieldcreate_info">
                  <h3 className="legend">personal information</h3>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="label">first name</Form.Label>
                    <Form.Control
                      onChange={(e) => handleshowfirstname(e)}
                      type="text"
                      title="firstname"
                    />
                    {rfirstname == true ? (
                      <div className="mage-error">This is a required field</div>
                    ) : null}
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="label">last name</Form.Label>
                    <Form.Control
                      onChange={handleshowlastname}
                      type="text"
                      title="lastname"
                    />
                    {rlastname == true ? (
                      <div className="mage-error">This is a required field</div>
                    ) : null}
                  </Form.Group>
                  <Form.Label className="label">gender</Form.Label>
                  <Form.Check label="male" name="group1" type="Radio" />
                  <Form.Check label="female" name="group1" type="Radio" />
                </div>
              </Col>
              <Col xs={12} sm={12} md={6} lg={6}>
                <div className="fieldcreate_account">
                  <h3 className="legend">sign in information</h3>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="label">email</Form.Label>
                    <Form.Control
                      onChange={handleshowemail}
                      type="email"
                      title="email"
                    />
                    {remail == "true" ? (
                      <div className="mage-error">This is a required field</div>
                    ) : null}
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="label">password</Form.Label>
                    <Form.Control
                      onChange={handleshowpassword}
                      type="password"
                      title="password"
                    />
                    {rpassword == "true" ? (
                      <div className="mage-error">This is a required field</div>
                    ) : null}
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="label">confirm password</Form.Label>
                    <Form.Control
                      onChange={handleshowcpassword}
                      type="password"
                      title="confirm password"
                    />
                    {rcpassword == "true" ? (
                      <div className="mage-error">This is a required field</div>
                    ) : null}
                  </Form.Group>
                </div>
              </Col>
            </Row>
            <div className="primarycontent">
              <Button
                className="primary"
                type="submit"
                title="create an account"
              >
                create account
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </>
  );
}
export default SignIn;
