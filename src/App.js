// react local css
import "./css/style.css";
// bootstrap css
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Breadcrumbs from "./components/breadcrumbs";
import AppBar from "./components/appBar";
import Product from "./components/product";
import Carousel from "./components/carousel";
import Header from "./components/header";
import Sellerproduct from "./components/sellerproduct";
function App() {
  return (
    <React.Fragment>
      {/* <AppBar />
      <Carousel />
      <Breadcrumbs />
      <Product /> */}
      {/* <Header /> */}
      <Sellerproduct />
    </React.Fragment>
  );
}

export default App;
