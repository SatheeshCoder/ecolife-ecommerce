import React from "react";
import { Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import img1 from "../img/logo1.png";
import img2 from "../img/icon_phone.png";
import img3 from "../img/app_store.png";
import img4 from "../img/google_play.png";
import img5 from "../img/payment.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";

function footer() {
  return (
    <>
      <footer className="page_footer">
        <Row>
          <Col sm={6} md={6} lg={4}>
            <div className="col_content">
              <div className="footer_logo">
                <img src={img1} alt="footerhome_logo" />
              </div>

              <p className="text_info">
                we are a team of designers an d develop mthat create high
                quality mageneto,prestashop,opencart
              </p>
              <div className="need_help">
                <div className="img_phone">
                  <img src={img2} alt="phonelogo" />
                </div>
                <div className="text_phone">
                  <p className="phone1">need help?</p>
                  <p className="phone">(+123)4567809,(+800)12345</p>
                </div>
              </div>
              <div className="social_follow">
                <ul>
                  <li>
                    <FacebookIcon />
                  </li>
                  <li>
                    <YouTubeIcon />
                  </li>
                  <li>
                    <TwitterIcon />
                  </li>
                  <li>
                    <GoogleIcon />
                  </li>
                  <li>
                    <InstagramIcon />
                  </li>
                </ul>
              </div>
            </div>
          </Col>

          <Col sm={6} md={6} lg={2}>
            <div className="col_content mb_device">
              <h3>information</h3>
              <ul>
                <li>delivery</li>
                <li>about us</li>
                <li>secure payments</li>
                <li>contact us</li>
                <li>site map</li>
                <li>stores</li>
              </ul>
            </div>
          </Col>
          <Col sm={6} md={6} lg={2}>
            <div className="col_content  mb_device">
              <h3>custom links</h3>
              <ul>
                <li>legal notice</li>
                <li>prices drop</li>
                <li>new products</li>
                <li>best sales</li>
                <li>login</li>
                <li>my account</li>
              </ul>
            </div>
          </Col>
          <Col sm={6} md={6} lg={4}>
            <div className="col_content  mb_device">
              <h3>newspaper</h3>
              <p>
                you may unsubscribe at vany moment.for that purpose,please find
                our contact info in the notice
              </p>
              <InputGroup className="form_box">
                <Form.Control
                  placeholder="subscribe to our newspaper"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Text id="basic-addon2">subscribe</InputGroup.Text>
              </InputGroup>
              <div className="appstore_logo">
                <img src={img3} alt="appstore_log" />
              </div>
              <div className="googleplay_logo">
                <img src={img4} alt="appstore_logo" />
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={6} md={6} lg={4}>
            <p> copyright© 2020 technofort all rights reserved .</p>
          </Col>
          <Col sm={6} md={6} lg={8}>
            <div>
              <img src={img5} alt="payment_logo" />
            </div>
          </Col>
        </Row>
      </footer>
    </>
  );
}
export default footer;
