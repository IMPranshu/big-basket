import React from "react";
import ProductCard from "./ProductCard";
import "./AllProduct.css";
import products from "../../db/data/products";
const AllProduct = () => {
  return (
    <div className="allproducts">
      <h1>All Products</h1>
      <div className="products">
        {products.map((item, index) => {
          return <ProductCard data={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default AllProduct;
