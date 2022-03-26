import React from "react";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "./Product.css";
const Product = ({ auth }) => {
  const navigate = useNavigate();
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
          {auth ? (
            <button>
              <MdOutlineAddShoppingCart />
            </button>
          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
