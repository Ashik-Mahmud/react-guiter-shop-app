import React from "react";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "./Product.css";
const Product = ({ auth, product }) => {
  const { name, image, price } = product;
  const navigate = useNavigate();
  return (
    <div className="product">
      <div className="image">
        <img width={"300"} src={image} alt={name} />
      </div>
      <div className="details">
        <h3>{name}</h3>
        <div className="inner-details">
          <span>${price}</span>
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
