import React from "react";
// import Home from "./pages/home";

import Carousel from "../components/carousel";
import Featuredproduct from "../components/featuredproduct";
import Header from "../components/header";
function Home() {
  return (
    <div>
      <Carousel />
      <Header />
      <Featuredproduct />
    </div>
  );
}

export default Home;
