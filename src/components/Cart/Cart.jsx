import React, { useEffect, useState } from "react";
import { BsCreditCard2Front } from "react-icons/bs";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import HandleAccess from "../HandleAccess/HandleAccess";
import { Storage } from "../Storage/Storage";
import "./Cart.css";
import CartItem from "./CartItem/CartItem";
const Cart = ({ cartItems, products, setCartCount, setCartItems }) => {
  const [cartTotal, setCartTotal] = useState(0);
  const [show, setShow] = useState(false);
  const [coupon, setCoupon] = useState("");
  const [isCoupon, setIsCoupon] = useState(false);
  const [isItemsLength, setIsItemsLength] = useState(false);
  HandleAccess();

  const cartItemsId = cartItems.map((item) => item.id);
  const cartAddedItems = products.filter((product) =>
    cartItemsId.includes(product.id)
  );

  useEffect(() => {
    const items = Storage("shopping-cart");
    const totalMoney = items.reduce((acc, item) => item.price + acc, 0);
    setCartTotal(totalMoney);
    if (items.length > 0) {
      setIsItemsLength(true);
    } else {
      setIsItemsLength(false);
    }
  }, []);

  /* handle Coupon */
  const handleCoupon = () => {
    if (!coupon) {
      return toast.warning("Put Coupon Code Please");
    }
    const couponCode = "react";
    if (coupon === couponCode) {
      setIsCoupon(true);
      toast.success("Coupon code applied successfully.");
    }
  };

  const handleClearCart = () => {
    if (window.confirm("Do you want clear all the carts")) {
      localStorage.removeItem("shopping-cart");
      setCartCount(0);
      setIsItemsLength(false);
    }
  };

  const handleDeleteCart = (id) => {
    if (window.confirm("Do you want delete this item?")) {
      const items = Storage("shopping-cart");
      const restItems = items.filter((item) => item.id !== id);
      localStorage.setItem("shopping-cart", JSON.stringify(restItems));
      window.location.reload();
    }
  };

  return (
    <section id="cart">
      {" "}
      <ToastContainer />
      <div className="container">
        <div className="title">
          <h1>Carts Item</h1>
          <p>Get you all selected product here</p>
        </div>
        {isItemsLength ? (
          <div className="cart-container">
            <div className="cart-items">
              {cartAddedItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  setCartTotal={setCartTotal}
                  handleDeleteCart={handleDeleteCart}
                />
              ))}
            </div>
            <div className="cart-dashboard">
              <h3>Cart Summery</h3>
              <div className="cart-dashboard-content">
                <table>
                  <tbody>
                    <tr>
                      <td>Selected Items</td>
                      <th>{cartItemsId.length}</th>
                    </tr>
                    <tr>
                      <td>Total Money</td>
                      <th>{cartTotal}$</th>
                    </tr>
                    <tr>
                      <td>Shipping Charge</td>
                      <th>10$</th>
                    </tr>
                    <tr>
                      <td>Tax 5%</td>
                      <th>{(cartTotal * 5) / 100}$</th>
                    </tr>
                    <tr>
                      <td>Grand Total</td>
                      <th>
                        {isCoupon
                          ? (cartTotal * 5) / 100 + cartTotal + 10 - 50
                          : (cartTotal * 5) / 100 + cartTotal + 10}
                        $
                      </th>
                    </tr>
                  </tbody>
                </table>
                <div className="getCouponToggle">
                  <span>
                    If you have a coupon code{" "}
                    <b
                      onClick={() => setShow((prev) => !prev)}
                      className="colorize cursor-pointer"
                    >
                      Apply{" "}
                    </b>
                  </span>
                </div>
                <div className={`coupon-panel ${show ? "active" : " "}`}>
                  <span>Coupon</span>
                  <div>
                    <input
                      type="text"
                      placeholder="Coupon"
                      value={coupon}
                      onChange={(e) => setCoupon(e.target.value)}
                    />
                    <button
                      className={isCoupon ? "disabled" : ""}
                      onClick={handleCoupon}
                    >
                      {isCoupon ? "Applied" : "Apply"}
                    </button>
                  </div>
                </div>
                <div className="btn-group">
                  <button>
                    Check Out <BsCreditCard2Front />
                  </button>
                  <button onClick={handleClearCart}>
                    Clear Cart <MdOutlineRemoveShoppingCart />{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="not-found-message">
            <span>
              <MdOutlineRemoveShoppingCart />
            </span>
            <h1>No Carts found yet.</h1>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
