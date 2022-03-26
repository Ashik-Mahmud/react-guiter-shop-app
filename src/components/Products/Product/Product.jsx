import React from "react";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import "./Product.css";
const Product = () => {
  return (
    <div className="product">
      <div className="image">
        <img
          width={"300"}
          src="https://images.musicstore.de/images/1600/yamaha-c40-classical-guitar-_1_GIT0000636-000.jpg"
          alt="guitar"
        />
      </div>
      <div className="details">
        <h3>Yamaah 43cd</h3>
        <div className="inner-details">
          <span>$4323</span>
          <button>
            <MdOutlineAddShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
