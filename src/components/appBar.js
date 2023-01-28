// react local css
import "../css/style.css";
// bootstrap css
import { Link } from "react-router-dom";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import { Form, Navbar, ListGroup, Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import ecolifelogo from "../img/logo1.png";
import contactlogo from "../img/logo2.png";
import FreshFruitImg from "../img/dropdown_menu.jpg";

function AppBar() {
  return (
    <div className="App">
      <header>
        {/* black header start */}
        <div className="top_header">
          <Row>
            <Col md={5} lg={3} sm={12}>
              Welcome to a ecolife
            </Col>
            <Col md={7} lg={9} sm={12}>
              <div className="top_header1">
                <span>my wish lists</span> <span>|</span>
                <Link to="/sign_in">
                  {" "}
                  <span>sign in</span>
                </Link>{" "}
                <span>|</span>
                <span>company products</span> <span>|</span>
                <span>create account</span> <span>|</span>
                <span>
                  english
                  <NavDropdown
                    id="basic-nav-dropdown"
                    className="dropdownl"
                  ></NavDropdown>
                </span>
                <span>|</span>
                <span>
                  usd
                  <NavDropdown id="basic-nav-dropdown"></NavDropdown>
                </span>
              </div>
            </Col>
          </Row>
          <span></span>
        </div>
        {/* black header end */}
        {/* middle header start */}
        <Navbar expand="lg">
          <Container fluid>
            <Navbar.Brand href="#home">
              {/* ecolife logo */}
              <img src={ecolifelogo} alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className="nav_toogler"
            />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto nav_item">
                <Nav.Link href=" #home">
                  <Link to="/home"> Home</Link>
                </Nav.Link>
                <NavDropdown
                  title={<Link to="/product"> fresh food</Link>}
                  id="basic-nav-dropdown"
                  className="ddowm_item fullwidth_dropdown"
                >
                  {/* <NavDropdown.Item>
                    <Link to="/product">Fresh Fruit</Link>
                  </NavDropdown.Item> */}
                  {/* <Link to="/product"> fresh food</Link> */}
                  <Row>
                    <Col sm={6} md={6} lg={3}>
                      {" "}
                      <ListGroup>
                        <ListGroup.Item className="fw-bold">
                          Cras justo odio
                        </ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                      </ListGroup>
                    </Col>
                    <Col sm={6} md={6} lg={3}>
                      {" "}
                      <ListGroup>
                        <ListGroup.Item className="fw-bold">
                          Cras justo odio
                        </ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                      </ListGroup>
                    </Col>
                    <Col sm={6} md={6} lg={3}>
                      {" "}
                      <ListGroup>
                        <ListGroup.Item className="fw-bold">
                          Cras justo odio
                        </ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                      </ListGroup>
                    </Col>
                    <Col sm={6} md={6} lg={3}>
                      {" "}
                      <ListGroup>
                        <ListGroup.Item className="fw-bold">
                          Cras justo odio
                        </ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                      </ListGroup>
                    </Col>
                    <Col md={12}>
                      <img src={FreshFruitImg} alt="fruits" />
                    </Col>
                  </Row>
                </NavDropdown>
                <NavDropdown
                  title="page"
                  id="basic-nav-dropdown"
                  className="dowm_item"
                >
                  <Row>
                    <Col sm={12}>
                      <ListGroup>
                        <ListGroup.Item>
                          <Link to="/home">Home page</Link>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <Link to="/product">Fresh food page</Link>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <Link to="/sign_in">Login page</Link>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <Link to="/sign_up">Register page</Link>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <Link to="*">404 page</Link>
                        </ListGroup.Item>
                      </ListGroup>
                    </Col>
                  </Row>
                </NavDropdown>
                {/* <NavDropdown
                  title="sign up"
                  id="basic-nav-dropdown"
                  className="dowm_item"
                ></NavDropdown> */}

                <Nav.Link href="#contact">contact</Nav.Link>
              </Nav>

              <Form className="d-flex header_contact_info">
                <Nav.Link href="#action1">
                  <SearchIcon />
                  <span></span>
                </Nav.Link>
                <Nav.Link href="#action1">
                  <div className="customize_icon">
                    {" "}
                    <img
                      src={contactlogo}
                      alt="logo"
                      className="contact_icon"
                    />
                    <span className="contact_info">
                      call us:
                      <br />
                      <b>(+800) 345 678</b>
                    </span>
                  </div>
                </Nav.Link>

                <Nav.Link href="#action1">
                  <div className="customize_text">
                    <span className="contact_text1">
                      <LocalMallIcon />
                      <span className="cart_number">0</span>
                    </span>
                  </div>
                </Nav.Link>
                <Nav.Link href="#action1">
                  <span className="price_number">
                    <b className="top_header1">
                      {" "}
                      <span>$0.00</span>
                    </b>
                  </span>
                </Nav.Link>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {/* middle header end */}
      </header>
    </div>
  );
}

export default AppBar;
