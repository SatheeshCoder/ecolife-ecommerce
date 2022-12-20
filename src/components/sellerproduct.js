import { Details } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../components/style2.css";
function Sellerproduct() {
  const [item, setItem] = useState([]);
  useEffect(() => {
    setItem([
      {
        img:
          "ttps://blueskytechmage.com/ecolife/media/catalog/category/thumb-1.jpg",
        items: "(20 items)",
        shoppindtime: "shop now",
      },
      {
        img:
          "https://blueskytechmage.com/ecolife/media/catalog/category/thumb-4.jpg",
        items: "(20 items)",
        shoppindtime: "shop now",
      },
      {
        img:
          "https://blueskytechmage.com/ecolife/media/catalog/category/thumb-5_1.jpg",
        items: "(20 items)",
        shoppindtime: "shop now",
      },
      {
        img:
          "https://blueskytechmage.com/ecolife/media/catalog/category/thumb-3_1.jpg",
        items: "(20 items)",
        shoppindtime: " shop now",
      },
      {
        img:
          "https://blueskytechmage.com/ecolife/media/catalog/category/thumb-2.jpg",
        items: "(20 items)",
        shoppindtime: "shop now",
      },
      {
        img:
          "https://blueskytechmage.com/ecolife/media/catalog/category/thumb-6.jpg",
        items: "(20 items)",
        shoppindtime: "shop now",
      },
    ]);
  }, []);
  return (
    <>
      {item.length > 0 &&
        item.map((e, i) => {
          return (
            <div className="product_bg">
              <Container>
                <Row>
                  <Col sm="12 " md="4">
                    <img src={e.img} />
                    <span>{e.items}</span>
                    <span>{e.shoppindtime}</span>
                  </Col>
                </Row>
              </Container>
            </div>
          );
        })}
    </>
  );
}
export default Sellerproduct;
