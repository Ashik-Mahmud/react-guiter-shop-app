import React from "react";
import Product from "./Product/Product";
import "./Products.css";

const Products = () => {
  return (
    <section id="products">
      <div className="container">
        <div className="title">
          <h1>Shops forever</h1>
          <p>Get your shops here </p>
        </div>
        <div className="product-container">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </section>
  );
};

export default Products;
