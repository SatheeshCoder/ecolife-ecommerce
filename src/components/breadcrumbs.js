import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "../css/style.css";
function Breadcrumbs() {
  return (
    <section className="breadcrumbs_bg">
      <div>
        <h5>Fresh Food</h5>
        <div>
          Home <KeyboardArrowRightIcon />
          Fresh Food
        </div>
      </div>
    </section>
  );
}

export default Breadcrumbs;
