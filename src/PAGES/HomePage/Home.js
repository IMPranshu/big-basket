import React from "react";
import HomeCategories from "../../COMPONENTS/Category/HomeCategories";

import Navbar from "../../COMPONENTS/Navbar/Navbar";
import ProductsSlider from "../../COMPONENTS/Product/ProductsSlider";
import ProductCard from "../../COMPONENTS/Product/ProductCard";
import Product_Sidebar from "../../COMPONENTS/Product/Product_Sidebar";
import products from "../../db/data/products";
import { useState } from "react";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [query, setQuery] = useState("");
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
  const filteredItems = products.filter(
    (product) =>
      product.ProductName.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Items
    if (query) {
      filteredProducts = filteredItems;
    }
    // Selected Filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ product }) => product.ProductCategory === selected
      );
    }

    return filteredProducts.map(
      ({ ProductImage, SalesPrice, ProductPrice, ProductName, counttype }) => (
        <ProductCard
          data={
            (ProductImage, SalesPrice, ProductPrice, ProductName, counttype)
          }
          key={Math.random()}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <div>
      <Navbar reloadnavbar={false} />
      <HomeCategories handleChange={handleChange} />
      <Product_Sidebar handleChange={handleChange} />

      <div className="slidercont">
        <ProductsSlider products={products} categoryname="Related Products" />
      </div>
      <div className="slidercont">
        <ProductsSlider products={products} categoryname="Explore More" />
      </div>
    </div>
  );
};

export default Home;
