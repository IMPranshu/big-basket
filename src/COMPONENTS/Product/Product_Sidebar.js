import React from "react";
import AllProduct from "./AllProduct";
import CategorySidebar from "./CategorySidebar";
import "./Product_Sidebar.css";
const Product_Sidebar = (handleChange) => {
  return (
    <div className="product_sidebar">
      <CategorySidebar handleChange={handleChange} />
      <AllProduct handleChange={handleChange} />
    </div>
  );
};

export default Product_Sidebar;
