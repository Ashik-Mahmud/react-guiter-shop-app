import React from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { GiGuitar } from "react-icons/gi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = ({ auth, setAuth, cartCount }) => {
  const handleLogOut = () => {
    if (window.confirm("Do you want to log Out?")) {
      sessionStorage.removeItem("user");
      setAuth(false);
    }
  };

  const userName = sessionStorage.getItem("user");

  return (
    <header id="header">
      <div className="container">
        <nav>
          <h3 className="logo">
            <NavLink to="/">
              {" "}
              <GiGuitar /> Guitar
            </NavLink>
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
                  <NavLink to={"/cart"} className="user-link">
                    <MdOutlineShoppingCart />
                    <sup className="badge">{cartCount}</sup>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/profile"} className="user-link">
                    <BiUserCircle />
                    {userName.length > 10
                      ? userName.substring(0, 10) + "..."
                      : userName}
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
