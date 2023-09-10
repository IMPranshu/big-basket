import React from "react";
import "./CategorySidebar.css";
import category from "../../db/data/category";

const CategorySidebar = (handleChange) => {
  return (
    <div className="categorysidebar">
      {category.map((item) => {
        return (
          <div className="category">
            <input type="radio" name="category" />
            <img src={item.categoryimage} alt="categoryimage" />
            <h3>{item.categoryname}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default CategorySidebar;
