import React from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = ({ auth, setAuth, isDashboard }) => {
  const handleLogOut = () => {
    if (window.confirm("Do you want to log Out?")) {
      sessionStorage.removeItem("user");
      setAuth(false);
    }
  };

  return (
    <header id="header">
      <div className="container">
        <nav>
          <h3 className="logo">
            <NavLink to="/">LoginReg</NavLink>
          </h3>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              {auth ? (
                <NavLink className="login-btn" to="/login">
                  Dashboard
                </NavLink>
              ) : (
                <NavLink className="login-btn" to="/login">
                  Login
                </NavLink>
              )}
            </li>

            {auth && (
              <>
                <li>
                  <NavLink to={"/carts"} className="user-link">
                    <MdOutlineShoppingCart />
                    <sup className="badge">0</sup>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/profile"} className="user-link">
                    <BiUserCircle />
                    {sessionStorage.getItem("user")}
                  </NavLink>
                </li>
                <li>
                  <button className="logout-btn" onClick={handleLogOut}>
                    <AiOutlineLogout />
                    Log out
                  </button>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
