import React, { useEffect, useState } from "react";
import { AiOutlineGoogle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Storage } from "../Storage/Storage";
import "./LoginSignUp.css";
const LoginSignUp = ({ setAuth }) => {
  const [show, setShow] = useState(false);
  /* for data save */
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");

  /* for login account */
  const [loginUsername, setLoginUserName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [message, setMessage] = useState(false);

  /* navigate path */
  const navigate = useNavigate();

  useEffect(() => {
    const sessionUsername = sessionStorage.getItem("user");
    if (sessionUsername) {
      navigate("/dashboard");
    }
  }, [navigate]);

  /* save data into storage */
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !email || !username || !password) {
      return alert("Fill out all the Required Fields.");
    }
    const items = Storage();
    const isHas = items.find((item) => item.username === username);
    const id = Math.round(Math.random() * 10000);
    if (!isHas) {
      items.push({
        id,
        name,
        email,
        username,
        password,
        avatar,
      });
      localStorage.setItem("user-info", JSON.stringify(items));
      setMessage("New User Saved successfully");
      setShow(false);
      setName("");
      setEmail("");
      setPassword("");
      setAvatar("");
      setUsername("");
    } else {
      return alert("User already registered !");
    }
  };

  /* login into using storage username & password */

  const handleLogin = () => {
    if (!loginUsername || !loginPassword) {
      return alert("All field are required for login");
    }
    const items = Storage();
    const isHasAccount = items.find(
      (item) =>
        item.username === loginUsername && item.password === loginPassword
    );

    if (isHasAccount) {
      setAuth(true);
      navigate("/dashboard");
      sessionStorage.setItem("user", loginUsername);
    } else {
      return alert("Sorry Not Registered Account by this username or password");
    }
  };

  return (
    <section id="login">
      {!show ? (
        <div className="login-area">
          {" "}
          {message && (
            <div className={`message success`}>{message && message}</div>
          )}
          <h3>
            <span className="colorize">Login</span> into Account
          </h3>
          <form action="#">
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                placeholder="Username"
                id="username"
                value={loginUsername}
                onChange={(e) => setLoginUserName(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Password"
                id="password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
            </div>
            <button onClick={handleLogin}>Login</button>

            <div className="google-sign-in-btn">
              <span>or</span>
              <button>
                <span>
                  <AiOutlineGoogle />
                  Google Sign in
                </span>
              </button>
            </div>
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

          <form action="#" onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                value={name || ""}
                id="name"
              />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email || ""}
                id="email"
              />
            </div>
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                value={username || ""}
                id="username"
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                value={password || ""}
                id="password"
              />
            </div>
            <div className="input-group">
              <label htmlFor="avatar">Avatar URL</label>
              <input
                type="url"
                placeholder="Profile URL"
                onChange={(e) => setAvatar(e.target.value)}
                value={avatar || ""}
                id="avatar"
              />
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
