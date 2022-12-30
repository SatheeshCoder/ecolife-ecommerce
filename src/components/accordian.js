import React from "react";
import { Accordion, Col } from "react-bootstrap";

function Offcontent() {
  return (
    // accordian start

    <div className="full_page">
      {/* first accordian */}
      <Accordion defaultActiveKey={["0"]} alwaysOpen className="panel_border">
        <Accordion.Item eventKey="0">
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
      </Accordion>
      <Accordion defaultActiveKey={["0"]}>
        {/* second  accordian */}
        <Accordion.Item eventKey="0">
          <Accordion.Header className="panel_header">
            {" "}
            <h1 className="filter_option">price</h1>
          </Accordion.Header>
          <Accordion.Body className="panel_body">
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
      </Accordion>

      {/* third accordian */}
      <Accordion defaultActiveKey={["0"]}>
        <Accordion.Item eventKey="0">
          <Accordion.Header className="panel_header">
            {" "}
            <h1 className="filter_option"> color</h1>
          </Accordion.Header>
          <Accordion.Body className="panel_body">
            {" "}
            <div className="layer_color">
              <p className="layer_color_option item_c"></p>
              <p className="layer_color_option item_c2"></p>
              <p className="layer_color_option item_c3"></p>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <div className="block_title">
        <strong className="block_heading">compare product</strong>
        <span className="empty">You have no items to compare</span>
      </div>
      <div className="block_title">
        <strong className="block_heading">my wish list</strong>
        <span className="empty">You have no items in your wishlist </span>
      </div>
    </div>

    // accordian end
  );
}

export default Offcontent;
