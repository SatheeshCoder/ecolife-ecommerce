// react local css
import "./css/style.css";
// bootstrap css
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Breadcrumbs from "./components/breadcrumbs";
import AppBar from "./components/appBar";
import Product from "./components/product";
function App() {
  return (
    <React.Fragment>
      <AppBar />
      <Breadcrumbs />
      <Product />
    </React.Fragment>
  );
}

export default App;
