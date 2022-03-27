import React, { useEffect } from "react";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Storage } from "./../../Storage/Storage";
import "./Product.css";
const Product = ({ auth, product, setCartCount }) => {
  const { name, image, price, id } = product;
  const navigate = useNavigate();

  /* handle add to cart  */
  const handleAddToCart = (id) => {
    const items = Storage("shopping-cart");
    const isHas = items.find((item) => item.id === id);
    if (isHas) {
      return toast.error("Product already Added", { theme: "light" });
    }
    items.push({ id, quantity: 1 });
    localStorage.setItem("shopping-cart", JSON.stringify(items));
    toast.success("Product added successfully", { theme: "light" });
    setCartCount(items.length);
  };

  useEffect(() => {
    setCartCount(Storage("shopping-cart").length);
  }, [setCartCount]);

  return (
    <div className="product">
      <ToastContainer theme="light" />
      <div className="image">
        <img width={"300"} src={image} alt={name} />
      </div>
      <div className="details">
        <h3>{name}</h3>
        <div className="inner-details">
          <span>${price}</span>
          {auth ? (
            <button onClick={() => handleAddToCart(id)}>
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
