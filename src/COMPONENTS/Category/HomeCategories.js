import React from "react";
import "./HomeCategories.css";
import img1 from "../../ASSETS/Category/1.png";
import img2 from "../../ASSETS/Category/2.png";
import img3 from "../../ASSETS/Category/3.png";
import img4 from "../../ASSETS/Category/4.png";

const HomeCategories = () => {
  return (
    <div className="homecategories">
      <button className="container">
        <img src={img1} alt="img1" />
        <div className="content">
          <h1>Home needs at your doorstep</h1>
          <p> Shop now</p>
        </div>
      </button>
      <button className="container">
        <img src={img2} alt="img2" />
        <div className="content">
          <h1>Daily Essentials at your doorstep</h1>
          <p> Shop now</p>
        </div>
      </button>
      <button className="container">
        <img src={img3} alt="img3" />
        <div className="content">
          <h1>Vegetables & Fruits at your doorstep</h1>
          <p> Shop now</p>
        </div>
      </button>
      <button className="container">
        <img src={img4} alt="img4" />
        <div className="content">
          <h1>Meat, Chicken & Eggs at your doorstep</h1>
          <p> Shop now</p>
        </div>
      </button>
    </div>
  );
};

export default HomeCategories;
