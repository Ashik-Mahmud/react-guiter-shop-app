import React from "react";
import { toast, ToastContainer } from "react-toastify";
import { Storage } from "../Storage/Storage";
import Product from "./Product/Product";
import "./Products.css";
const Products = ({ auth, setCartCount, setCartItems, products }) => {
  /* handle add to cart  */
  const handleAddToCart = (id, price) => {
    const items = Storage("shopping-cart");
    const isHas = items.find((item) => item.id === id);
    if (isHas) {
      return toast.error("Product already Added", { theme: "light" });
    }
    items.push({ id, quantity: 1, price });
    localStorage.setItem("shopping-cart", JSON.stringify(items));
    toast.success("Product added successfully", { theme: "light" });
    setCartCount(items.length);
    setCartItems(items);
  };

  return (
    <section id="products">
      <ToastContainer />
      <div className="container">
        <div className="title">
          <h1>Shops forever</h1>
          <p>Get your shops here </p>
        </div>
        <div className="product-container">
          {products.map((product) => (
            <Product
              key={product.id}
              auth={auth}
              product={product}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
