import React from "react";
import HandleAccess from "../HandleAccess/HandleAccess";
import "./Cart.css";
const Cart = () => {
  HandleAccess();
  return (
    <section id="cart">
      <div className="container">
        <h1>Cart</h1>
      </div>
    </section>
  );
};

export default Cart;
