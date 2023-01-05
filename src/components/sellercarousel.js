import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderSharpIcon from "@mui/icons-material/FavoriteBorderSharp";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import StarSharpIcon from "@mui/icons-material/StarSharp";
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import {
  Badge,
  Button,
  Container,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
const ProuductList = [
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
];
const responsive = {
  0: { items: 1 },
  568: { items: 2 },

  1024: { items: 3 },
};

const items = [
  <>
    <div className="item">
      {ProuductList.map((e, i) => {
        return (
          <div data-value={i + 1}>
            <section className="product_bg twobg_grid">
              <img src={e.img_1} alt="item_image" className="item_image" />
              <img src={e.img_2} alt="item_image" className="item_image1" />
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
                <h4>{e.catogery}</h4>
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
                          <Tooltip id="tooltip-disabled">add to cart</Tooltip>
                        }
                      >
                        <span className="d-inline-block">
                          <div className="overlay_ho1">add to cart</div>
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
          </div>
        );
      })}
    </div>
  </>,
];

const Carousel = () => (
  <>
    <Container>
      <div className="full-featuredproduct">
        <div className=" rokan-featured-heading">
          {" "}
          <h3 className="product_heading"> featuredproduct</h3>
          <p class="description">Add hot products to weekly line up </p>
        </div>
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
        />
      </div>
    </Container>
  </>
);

export default Carousel;
