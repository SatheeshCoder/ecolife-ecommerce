import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Offcontent from "../components/accordian";
import "../components/style2.css";

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="success" onClick={handleShow} className="filter_content">
        filter
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>shop by</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Offcontent />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
export default Example;
