import React, { useState, useEffect } from "react";
import { useMedia } from "react-use";
import {
  Col,
  Row,
  Container,
  Badge,
  OverlayTrigger,
  Tooltip,
  Button,
  Navbar,
} from "react-bootstrap";
import Offcontent from "../components/accordian";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import GridViewIcon from "@mui/icons-material/GridView";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarSharpIcon from "@mui/icons-material/StarSharp";
import FavoriteBorderSharpIcon from "@mui/icons-material/FavoriteBorderSharp";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import ItemImg from "../img/item.jpg";
import ItemImg1 from "../img/item2.jpg";
import "../css/style.css";
function Product() {
  const [productList, setProuductList] = useState([]);
  const [twoProduct, setTwoproduct] = useState(false);
  const [threeProduct, setThreeproduct] = useState(false);
  const [fourProduct, setFourproduct] = useState(true);
  useEffect(() => {
    setProuductList([
      {
        lable: "new",
        label_bg: "blue",
        product_name: "big tree farms",
        product_price: "$69.00",
        rating: 4,
        img_1:
          "https://blueskytechmage.com/ecolife/media/catalog/product/cache/9f4525831980a06ae430cf99f4023e93/1/7/17_1_1.jpg",
        img_2:
          "https://blueskytechmage.com/ecolife/media/catalog/product/cache/9f4525831980a06ae430cf99f4023e93/1/8/18_1.jpg",
        catogery: "fresh vegetables",
        heart: "1",
        out_Of_Stock: "false",
      },
      {
        lable: "new",
        label_bg: "yellow",
        product_name: "cream-cremers",
        product_price: "$69.00",
        rating: 2,
        img_1:
          "https://blueskytechmage.com/ecolife/media/catalog/product/cache/9f4525831980a06ae430cf99f4023e93/1/8/18_1.jpg",
        img_2:
          "https://blueskytechmage.com/ecolife/media/catalog/product/cache/9f4525831980a06ae430cf99f4023e93/2/1/21_3.jpg",
        catogery: "fresh vegetables",
        heart: "1",
        out_Of_Stock: "true",
      },
      {
        label_bg: "red",
        product_name: "mary's gone crackers",
        product_price: "$69.00",
        rating: 4,
        img_1:
          "https://blueskytechmage.com/ecolife/media/catalog/product/cache/9f4525831980a06ae430cf99f4023e93/1/8/18_1.jpg",
        img_2:
          "https://blueskytechmage.com/ecolife/media/catalog/product/cache/9f4525831980a06ae430cf99f4023e93/1/7/17_1_1.jpg",
        catogery: "fresh vegetables",
        lable: "new",
        heart: "1",
        out_Of_Stock: "false",
      },

      {
        label_bg: "blue",
        product_name: "365 everyday value",
        product_price: "$69.00",
        rating: 4,
        img_1:
          "https://blueskytechmage.com/ecolife/media/catalog/product/cache/9f4525831980a06ae430cf99f4023e93/1/7/17_1_1.jpg",
        img_2:
          "https://blueskytechmage.com/ecolife/media/catalog/product/cache/aa113b67a170bed6206a590b0260c387/1/0/10_1_1.jpg",
        catogery: "fresh vegetables",
        lable: "new",
        heart: "1",
        out_Of_Stock: "true",
      },
      {
        label_bg: "red",
        product_name: "greeen and blues",
        product_price: "$69.00",
        rating: 4,
        img_1:
          "https://blueskytechmage.com/ecolife/media/catalog/product/cache/9f4525831980a06ae430cf99f4023e93/1/0/10_1.jpg",
        img_2:
          "https://blueskytechmage.com/ecolife/media/catalog/product/cache/9f4525831980a06ae430cf99f4023e93/1/7/17_1_1.jpg",
        catogery: "fresh vegetables",
        lable: "new",
        heart: "1",
        out_Of_Stock: "true",
      },
      {
        label_bg: "green",
        product_name: "butter margarine",
        product_price: "$69.00",
        rating: 4,
        img_1:
          "https://blueskytechmage.com/ecolife/media/catalog/product/cache/9f4525831980a06ae430cf99f4023e93/1/8/18_1.jpg",
        img_2:
          "https://blueskytechmage.com/ecolife/media/catalog/product/cache/9f4525831980a06ae430cf99f4023e93/1/7/17_1_1.jpg",
        catogery: "fresh vegetables",
        lable: "new",
        heart: "1",
        out_Of_Stock: "false",
      },
      {
        lable: "new",
        product_name: "gone crackers",
        product_price: "$69.00",
        rating: 4,
        img_1:
          "https://blueskytechmage.com/ecolife/media/catalog/product/cache/9f4525831980a06ae430cf99f4023e93/1/0/10_1.jpg",
        img_2:
          "https://blueskytechmage.com/ecolife/media/catalog/product/cache/9f4525831980a06ae430cf99f4023e93/1/7/17_1_1.jpg",
        catogery: "fresh vegetables",
        heart: "1",
        label_bg: "yellow",
        out_Of_Stock: "true",
      },
      {
        lable: "new",
        product_name: "cherry number on",
        product_price: "$69.00",
        rating: 4,
        img_1:
          "https://blueskytechmage.com/ecolife/media/catalog/product/cache/9f4525831980a06ae430cf99f4023e93/1/0/10_1.jpg",
        img_2:
          "https://blueskytechmage.com/ecolife/media/catalog/product/cache/9f4525831980a06ae430cf99f4023e93/1/7/17_1_1.jpg",
        catogery: "fresh vegetables",
        heart: "1",
        label_bg: "red",
        out_Of_Stock: "true",
      },
      {
        product_name: "organic newzealand",
        product_price: "$69.00",
        rating: 4,
        img_1:
          "https://blueskytechmage.com/ecolife/media/catalog/product/cache/9f4525831980a06ae430cf99f4023e93/1/7/17_1_1.jpg",
        img_2:
          "https://blueskytechmage.com/ecolife/media/catalog/product/cache/aa113b67a170bed6206a590b0260c387/1/0/10_1_1.jpg",
        catogery: "fresh vegetables",
        lable: "new",
        label_bg: "red",
        heart: "0",
        out_Of_Stock: "false",
      },
    ]);
  }, []);
  const userScreenDevice = useMedia("(max-width: 480px)");
  const captitalName = (e) => {
    // alert(e);
    const str = e;
    const str2 = str.charAt(0).toUpperCase() + str.slice(1);
    console.log(str2);
    return str2;
  };
  const handleshowtogrid = () => {
    setTwoproduct(true);
    setThreeproduct(false);
    setFourproduct(false);
  };
  const handleshowtofour = () => {
    setTwoproduct(false);
    setThreeproduct(true);
    setFourproduct(false);
  };
  const handleshowtofull = () => {
    setTwoproduct(false);
    setThreeproduct(false);
    setFourproduct(true);
  };
  return (
    <>
      {/* <Container> */}
      <>
        <Row>
          <Col md={3} lg={3}>
            <Offcontent />
          </Col>
          <Col md={9} lg={9}>
            <div className="toolbar_products">
              <Col sm={3} md={3} lg={3}>
                <p className="sorter-label ">
                  <label className="sorter_labeltext">sort by</label>
                  <select className="sorter-options ">
                    <option value="position">position</option>
                    <option value="position">position</option>
                    <option value="position">position</option>
                  </select>
                  <ArrowUpwardIcon />
                </p>
              </Col>
              <Col sm={6} md={6} lg={6}>
                {" "}
                <div className="toolbar_product list_icon">
                  <div>
                    <Button
                      onClick={handleshowtogrid}
                      className={twoProduct == true ? "active_grid" : null}
                    >
                      <GridViewIcon />
                    </Button>
                    <Button
                      onClick={handleshowtofour}
                      className={threeProduct == true ? "active_grid" : null}
                    >
                      <DragIndicatorIcon />
                    </Button>
                    <Button
                      onClick={handleshowtofull}
                      // className="active_grid"
                      className={fourProduct == true ? "active_grid" : null}
                    >
                      <ViewModuleIcon />
                    </Button>
                  </div>
                </div>
              </Col>
              <Col sm={3} md={3} lg={3}>
                <div className="toolbar_amount">
                  no of producs: {productList.length}
                </div>
              </Col>
            </div>
            {userScreenDevice ? (
              <div>one device one product </div>
            ) : (
              <>
                {twoProduct == true && (
                  <Row>
                    {productList.map((e, i) => {
                      return (
                        <Col sm={12} md={6}>
                          <section className="product_bg">
                            <img
                              src={e.img_1}
                              alt="item_image"
                              className="item_image"
                            />
                            <img
                              src={e.img_2}
                              alt="item_image"
                              className="item_image1"
                            />
                            {e.lable != (undefined || null) ? (
                              <Badge
                                bg={
                                  e.label_bg == "blue"
                                    ? "primary"
                                    : e.label_bg == "yellow"
                                    ? "secondary"
                                    : e.label_bg == "red"
                                    ? "danger"
                                    : "warning"
                                }
                                className="item_badge"
                              >
                                new
                              </Badge>
                            ) : null}
                            {e.out_Of_Stock == "true" ? (
                              <Button variant="danger" className="ot_Stock">
                                out of stock
                              </Button>
                            ) : (
                              undefined
                            )}
                            {e.out_Of_Stock == "true" ? null : (
                              <span className="circle">
                                <SearchSharpIcon />
                              </span>
                            )}

                            <div className="item_text">
                              {/* {e.catogery.charAt(0).toUpperCase() + e.catogery.slice(1)} */}
                              <h4>{captitalName(e.catogery)}</h4>
                              <p>{e.product_name}</p>
                              <p className="star_icon">
                                <StarSharpIcon />
                                <StarSharpIcon />
                                <StarSharpIcon />
                                <StarSharpIcon />
                              </p>
                              <span className="price">$69.00</span>
                            </div>
                            <div className="overlay">
                              {e.out_Of_Stock == "true" ? null : (
                                <>
                                  <div className="overlay_ho">
                                    <OverlayTrigger
                                      overlay={
                                        <Tooltip id="tooltip-disabled">
                                          add to cart
                                        </Tooltip>
                                      }
                                    >
                                      <span className="d-inline-block">
                                        <div className="overlay_ho1">
                                          add to cart
                                        </div>
                                      </span>
                                    </OverlayTrigger>
                                  </div>
                                  <div className="overlay_ho">
                                    <OverlayTrigger
                                      overlay={
                                        <Tooltip id="tooltip-disabled">
                                          add to wishlist
                                        </Tooltip>
                                      }
                                    >
                                      <span className="d-inline-block">
                                        {" "}
                                        {e.heart == 1 ? (
                                          <FavoriteIcon />
                                        ) : (
                                          <FavoriteBorderSharpIcon />
                                        )}
                                      </span>
                                    </OverlayTrigger>{" "}
                                    <OverlayTrigger
                                      overlay={
                                        <Tooltip
                                          id="tooltip-disabled"
                                          className="tooltipbottom"
                                        >
                                          add to compare
                                        </Tooltip>
                                      }
                                    >
                                      <span className="d-inline-block">
                                        {" "}
                                        <CompareArrowsIcon />
                                      </span>
                                    </OverlayTrigger>
                                  </div>
                                </>
                              )}
                            </div>
                          </section>
                        </Col>
                      );
                    })}
                  </Row>
                )}

                {threeProduct == true && (
                  <Row>
                    {productList.map((e, i) => {
                      return (
                        <Col sm={12} md={4}>
                          <section className="product_bg">
                            <img
                              src={e.img_1}
                              alt="item_image"
                              className="item_image"
                            />
                            <img
                              src={e.img_2}
                              alt="item_image"
                              className="item_image1"
                            />
                            {e.lable != (undefined || null) ? (
                              <Badge
                                bg={
                                  e.label_bg == "blue"
                                    ? "primary"
                                    : e.label_bg == "yellow"
                                    ? "secondary"
                                    : e.label_bg == "red"
                                    ? "danger"
                                    : "warning"
                                }
                                className="item_badge"
                              >
                                new
                              </Badge>
                            ) : null}
                            {e.out_Of_Stock == "true" ? (
                              <Button variant="danger" className="ot_Stock">
                                out of stock
                              </Button>
                            ) : (
                              undefined
                            )}
                            {e.out_Of_Stock == "true" ? null : (
                              <span className="circle">
                                <SearchSharpIcon />
                              </span>
                            )}

                            <div className="item_text">
                              {/* {e.catogery.charAt(0).toUpperCase() + e.catogery.slice(1)} */}
                              <h4>{captitalName(e.catogery)}</h4>
                              <p>{captitalName(e.catogery)}</p>
                              <p className="star_icon">
                                <StarSharpIcon />
                                <StarSharpIcon />
                                <StarSharpIcon />
                                <StarSharpIcon />
                              </p>
                              <span className="price">$69.00</span>
                            </div>
                            <div className="overlay">
                              {e.out_Of_Stock == "true" ? null : (
                                <>
                                  <div className="overlay_ho">
                                    <OverlayTrigger
                                      overlay={
                                        <Tooltip id="tooltip-disabled">
                                          add to cart
                                        </Tooltip>
                                      }
                                    >
                                      <span className="d-inline-block">
                                        <div className="overlay_ho1">
                                          add to cart
                                        </div>
                                      </span>
                                    </OverlayTrigger>
                                  </div>
                                  <div className="overlay_ho">
                                    <OverlayTrigger
                                      overlay={
                                        <Tooltip id="tooltip-disabled">
                                          add to wishlist
                                        </Tooltip>
                                      }
                                    >
                                      <span className="d-inline-block">
                                        {" "}
                                        {e.heart == 1 ? (
                                          <FavoriteIcon />
                                        ) : (
                                          <FavoriteBorderSharpIcon />
                                        )}
                                      </span>
                                    </OverlayTrigger>{" "}
                                    <OverlayTrigger
                                      overlay={
                                        <Tooltip
                                          id="tooltip-disabled"
                                          className="tooltipbottom"
                                        >
                                          add to compare
                                        </Tooltip>
                                      }
                                    >
                                      <span className="d-inline-block">
                                        {" "}
                                        <CompareArrowsIcon />
                                      </span>
                                    </OverlayTrigger>
                                  </div>
                                </>
                              )}
                            </div>
                          </section>
                        </Col>
                      );
                    })}
                  </Row>
                )}
                {fourProduct == true && (
                  <Row>
                    {productList.map((e, i) => {
                      return (
                        <Col sm={6} md={4} lg={3}>
                          <section className="product_bg">
                            <img
                              src={e.img_1}
                              alt="item_image"
                              className="item_image"
                            />
                            <img
                              src={e.img_2}
                              alt="item_image"
                              className="item_image1"
                            />
                            {e.lable != (undefined || null) ? (
                              <Badge
                                bg={
                                  e.label_bg == "blue"
                                    ? "primary"
                                    : e.label_bg == "yellow"
                                    ? "secondary"
                                    : e.label_bg == "red"
                                    ? "danger"
                                    : "warning"
                                }
                                className="item_badge"
                              >
                                new
                              </Badge>
                            ) : null}
                            {e.out_Of_Stock == "true" ? (
                              <Button variant="danger" className="ot_Stock">
                                out of stock
                              </Button>
                            ) : (
                              undefined
                            )}
                            {e.out_Of_Stock == "true" ? null : (
                              <span className="circle">
                                <SearchSharpIcon />
                              </span>
                            )}

                            <div className="item_text">
                              {/* {e.catogery.charAt(0).toUpperCase() + e.catogery.slice(1)} */}
                              <h4>{captitalName(e.catogery)}</h4>
                              <p>{e.product_name}</p>
                              <p className="star_icon">
                                <StarSharpIcon />
                                <StarSharpIcon />
                                <StarSharpIcon />
                                <StarSharpIcon />
                              </p>
                              <span className="price">$69.00</span>
                            </div>
                            <div className="overlay">
                              {e.out_Of_Stock == "true" ? null : (
                                <>
                                  <div className="overlay_ho">
                                    <OverlayTrigger
                                      overlay={
                                        <Tooltip id="tooltip-disabled">
                                          add to cart
                                        </Tooltip>
                                      }
                                    >
                                      <span className="d-inline-block">
                                        <div className="overlay_ho1">
                                          add to cart
                                        </div>
                                      </span>
                                    </OverlayTrigger>
                                  </div>
                                  <div className="overlay_ho">
                                    <OverlayTrigger
                                      overlay={
                                        <Tooltip id="tooltip-disabled">
                                          add to wishlist
                                        </Tooltip>
                                      }
                                    >
                                      <span className="d-inline-block">
                                        {" "}
                                        {e.heart == 1 ? (
                                          <FavoriteIcon />
                                        ) : (
                                          <FavoriteBorderSharpIcon />
                                        )}
                                      </span>
                                    </OverlayTrigger>{" "}
                                    <OverlayTrigger
                                      overlay={
                                        <Tooltip
                                          id="tooltip-disabled"
                                          className="tooltipbottom"
                                        >
                                          add to compare
                                        </Tooltip>
                                      }
                                    >
                                      <span className="d-inline-block">
                                        {" "}
                                        <CompareArrowsIcon />
                                      </span>
                                    </OverlayTrigger>
                                  </div>
                                </>
                              )}
                            </div>
                          </section>
                        </Col>
                      );
                    })}
                  </Row>
                )}
              </>
            )}
          </Col>
        </Row>
      </>
      {/* </Container> */}
    </>
  );
}

export default Product;
