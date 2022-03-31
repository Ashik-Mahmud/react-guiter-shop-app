import React, { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { Storage } from "../../Storage/Storage";
import "./CartItem.css";
import { DecreaseCount, IncreaseCount, showQuantity } from "./handleCartCount";
const CartItem = ({ item, setCartTotal, handleDeleteCart }) => {
  const [count, setCount] = useState(1);
  const { image, name, price, id } = item;

  const totalMoneyFromCart = () => {
    const items = Storage("shopping-cart");
    const totalMoney = items.reduce((acc, item) => item.price + acc, 0);
    return totalMoney;
  };

  return (
    <div className="cart-item">
      <div className="cart-inner-item">
        <div className="image">
          <img width={"80"} src={image} alt="product" />
        </div>
        <div className="info">
          <div className="name">
            <h4>{name}</h4>
          </div>
          <div className="counter">
            <span className="colorize">${price * showQuantity(id)}</span>
            <div className="counter-input">
              <button
                onClick={() => {
                  setCartTotal(totalMoneyFromCart());
                  DecreaseCount(setCount, count, item, price);
                }}
              >
                -
              </button>
              <input type="number" readOnly value={showQuantity(id)} />
              <button
                onClick={() => {
                  IncreaseCount(setCount, count, item, price);
                  setCartTotal(totalMoneyFromCart());
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="delete-btn">
        <button onClick={() => handleDeleteCart(id)}>
          <RiDeleteBinLine />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
