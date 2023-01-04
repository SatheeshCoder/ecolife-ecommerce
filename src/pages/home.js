import React from "react";
// import Home from "./pages/home";
import Featuredproduct from "../components/sellerproduct";
import Carousel from "../components/carousel";
import Grocery from "../components/gocery";
import Productcarousel from "../components/productcarousel";
import Sellercarousel from "../components/sellercarousel";
import Header from "../components/header";
import Add from "../components/add";
function Home() {
  return (
    <div>
      <Carousel />
      <Header />
      <Featuredproduct />
      <Sellercarousel />
      <Add />
      <Productcarousel />
      <Grocery />
    </div>
  );
}

export default Home;
