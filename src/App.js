import React from "react";
import Home from "./pages/home";
import Product from "./pages/fresh";
import AppBar from "./components/appBar";
import Footer from "./components/footer";
import Featuredproduct from "./components/featuredproduct";

// react local css
import "./css/style.css";
// bootstrap css
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        {/* <div>
          <Link to="/">Home</Link>
          <Link to="/home">Home</Link>
          <Link to="/product">product</Link>
        </div> */}
        <AppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      {/* <Carousel />  */}
      {/* <Breadcrumbs /> */}
      {/* <Product /> */}
      {/* <Add /> */}
      {/* <Sellerproduct /> */}
      {/* <Header /> */}
      {/* <Grocery /> */}
      {/* <Featuredproduct /> */}
    </React.Fragment>
  );
}

export default App;
