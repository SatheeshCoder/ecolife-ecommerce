import React from "react";
import Breadcrumbs from "./components/breadcrumbs";
import AppBar from "./components/appBar";
import Product from "./components/product";
import Carousel from "./components/carousel";
import Header from "./components/header";
import Sellerproduct from "./components/sellerproduct";
import Add from "./components/add";
import Grocery from "./components/gocery";
import Footer from "./components/footer";

// react local css
import "./css/style.css";
// bootstrap css
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <React.Fragment>
      <AppBar />
      <Carousel />
      {/* <Breadcrumbs /> */}
      {/* <Product />
     

      {/* <Add /> */}
      {/* <Sellerproduct /> */}
      <Header />
      <Grocery />
      <Footer />
    </React.Fragment>
  );
}

export default App;
