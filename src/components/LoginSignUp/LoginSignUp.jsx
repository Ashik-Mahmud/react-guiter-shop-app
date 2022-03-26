import React, { useState } from "react";
import "./LoginSignUp.css";
const LoginSignUp = () => {
  const [show, setShow] = useState(false);
  return (
    <section id="login">
      {!show ? (
        <div className="login-area">
          <h3>
            <span className="colorize">Login</span> into Account
          </h3>

          <form action="#">
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input type="text" placeholder="Username" id="username" />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password" placeholder="Password" id="password" />
            </div>
            <button>Login</button>
            <p>
              Not Account yet?{" "}
              <span
                onClick={() => setShow(true)}
                className={"colorize cursor-pointer"}
              >
                Create
              </span>{" "}
              Account
            </p>
          </form>
        </div>
      ) : (
        <div className="login-area">
          <h3>
            <span className="colorize">Sign Up</span> into Account
          </h3>

          <form action="#">
            <div className="input-group">
              <label htmlFor="name">Name</label>
              <input type="text" placeholder="Name" id="name" />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" placeholder="Email" id="email" />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password" placeholder="Password" id="password" />
            </div>
            <div className="input-group">
              <label htmlFor="avatar">Avatar URL</label>
              <input type="url" placeholder="Profile URL" id="avatar" />
            </div>
            <button>Sign Up </button>
            <p>
              Already Account?{" "}
              <span
                onClick={() => setShow(false)}
                className={"colorize cursor-pointer"}
              >
                Login
              </span>{" "}
              Account
            </p>
          </form>
        </div>
      )}
    </section>
  );
};

export default LoginSignUp;
