import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

function SignIn() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setcPassword] = useState("");
  const [validationlastname, setValidationLastname] = useState(false);
  const [validationfirstname, setValidationFirstname] = useState(false);
  const [validationemail, setValidationEmail] = useState(false);
  const [Validationpassword, setValidationPassword] = useState(false);
  const [validationconfirmpassword, setValidationConfirmpassword] =
    useState(false);

  function handleshowfirstname(event) {
    // console.log(event.target.value);
    setFirstName(event.target.value);
    setValidationFirstname(false);
    console.log("firstname++++", firstname);
  }
  function handleshowlastname(event) {
    // console.log(event.target.value);
    console.log(event.target.value);
    setValidationLastname(false);
    setLastName(event.target.value);
  }
  function handleshowemail(event) {
    // console.log(event.target.value);
    console.log(event.target.value);
    setEmail(event.target.value);
    setValidationEmail(false);
  }
  function handleshowpassword(event) {
    // console.log(event.target.value);
    console.log(event.target.value);
    setPassword(event.target.value);
    setValidationPassword(false);
  }
  function handleshowcpassword(event) {
    // console.log(event.target.value);
    console.log(event.target.value);
    setcPassword(event.target.value);
    setValidationConfirmpassword(false);
  }

  // useEffect(() => {
  //   console.log("firstname", firstname);
  // }, [firstname]);

  const handleSubmit = (event) => {
    // console.log(firstname);
    // console.log(lastname);
    // console.log(email);
    // console.log(password);
    // console.log(cpassword);
    // console.log(value);
    // alert("your file is upload");
    event.preventDefault();
    if (firstname === "" || firstname === undefined) {
      setValidationFirstname(true);
    }
    if (lastname === "" || lastname === undefined) {
      setValidationLastname(true);
    }
    if (email === "" || email === undefined) {
      setValidationEmail(true);
    }
    if (password === "" || password === undefined) {
      setValidationPassword(true);
    }
    if (cpassword === "" || cpassword === undefined) {
      setValidationConfirmpassword(true);
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
                    {validationfirstname === true ? (
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
                    {validationlastname === true ? (
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
                    ></Form.Control>
                    {validationemail === true ? (
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
                    {Validationpassword === true ? (
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
                    {validationconfirmpassword === true ? (
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
