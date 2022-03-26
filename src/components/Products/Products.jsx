import React, { useEffect, useState } from "react";
import Product from "./Product/Product";
import "./Products.css";

const Products = ({ auth }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <section id="products">
      <div className="container">
        <div className="title">
          <h1>Shops forever</h1>
          <p>Get your shops here </p>
        </div>
        <div className="product-container">
          {products.map((product) => (
            <Product key={product.id} auth={auth} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
