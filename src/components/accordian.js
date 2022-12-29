import React from "react";
import { Accordion, Col } from "react-bootstrap";
function Offcontent() {
  return (
    // accordian start
    <Col md={3}>
      <div className="full_page">
        {/* first accordian */}
        <Accordion className="panel_border">
          <Accordion.Item eventKey="1">
            <Accordion.Header className="panel_header">
              <h1 className="filter_option">category</h1>
            </Accordion.Header>
            <Accordion.Body className="panel_body">
              <ul className="items">
                <li className="item">
                  fresh fruit <span className="count">20</span>
                </li>
                <li className="item">
                  fresh vegetales <span className="count">20</span>
                </li>
                <li className="item">
                  fresh salid&dips <span className="count">20</span>
                </li>
                <li className="item">
                  sour cream&dip <span className="count">20</span>
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          {/* second  accordian */}
          <Accordion.Item eventKey="1">
            <Accordion.Header className="panel_header">
              {" "}
              <h1 className="filter_option">price</h1>
            </Accordion.Header>
            <Accordion.Body>
              <div className="price_text">
                <span className="from_fixed">$59.00</span>
                <span className="to_space">-</span>
                <span className="to_fixed">$99.00</span>
              </div>
              <div className="price_slider">
                <p className="ui_slider_price" style={{ left: 0 }}></p>
                <p className="ui_slider_price" style={{ right: 100 }}></p>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          {/* third accordian */}
          <Accordion.Item eventKey="2">
            <Accordion.Header className="panel_header">
              {" "}
              <h1 className="filter_option"> color</h1>
            </Accordion.Header>
            <Accordion.Body>
              {" "}
              <div className="layer_color">
                <p className="layer_color_option item_c"></p>
                <p className="layer_color_option item_c2"></p>
                <p className="layer_color_option item_c3"></p>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </Col>
    // accordian end
  );
}

export default Offcontent;
