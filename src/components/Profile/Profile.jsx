import React, { useEffect, useState } from "react";
import { BsFillCartXFill } from "react-icons/bs";
import { FiEdit, FiUserX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import HandleAccess from "../HandleAccess/HandleAccess";
import { Storage } from "./../Storage/Storage";
import "./Profile.css";
const Profile = ({ setAuth }) => {
  /* for Edit profile  */
  const [loginName, setLoginName] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginAvatar, setLoginAvatar] = useState("");

  /* for show edit panel  */
  const [show, setShow] = useState(false);

  HandleAccess();
  const navigate = useNavigate();
  const [profile, setProfile] = useState({});
  useEffect(() => {
    const sessionUsername = sessionStorage.getItem("user");
    const items = Storage();
    const getUser = items.find((item) => item.username === sessionUsername);
    setProfile(getUser);
  }, []);

  const { avatar, name, email, username, password, id } = profile;

  /* set the default value */

  useEffect(() => {
    setLoginName(name);
    setLoginEmail(email);
    setLoginUsername(username);
    setLoginPassword(password);
    setLoginAvatar(avatar);
  }, [avatar, name, email, username, password]);

  /* Handle Delete Account */
  const HandleDeleteAccount = (username) => {
    if (window.confirm("Do you want to delete you account forever?")) {
      const items = Storage();
      const itemsExceptDeleted = items.filter(
        (item) => item.username !== username
      );
      localStorage.setItem("user-info", JSON.stringify(itemsExceptDeleted));
      sessionStorage.removeItem("user");
      navigate("/");
      setAuth(false);
    }
  };

  /* Handle Edit Profile  */

  const handleUpdate = (event) => {
    event.preventDefault();
    const items = Storage();
    sessionStorage.setItem("user", loginUsername);
    const updatedItem = items.find((item) => item.id === id);
    if (updatedItem) {
      updatedItem.name = loginName;
      updatedItem.email = loginEmail;
      updatedItem.username = loginUsername;
      updatedItem.password = loginPassword;
      updatedItem.avatar = loginAvatar;
    }

    localStorage.setItem("user-info", JSON.stringify(items));
    window.location.reload();
  };

  return (
    <section id="profile">
      <div className="profile-card">
        <div className="avatar">
          <img
            src={
              avatar
                ? avatar
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNL_ZnOTpXSvhf1UaK7beHey2BX42U6solRA&usqp=CAU"
            }
            alt="avatar"
          />
        </div>
        <div className="details">
          <h3>{name}</h3>
          <span>{email}</span>
        </div>
        <div className="btn-group">
          <button onClick={() => setShow((prev) => !prev)}>
            <FiEdit />
            {show ? "Close" : "Open"} Edit
          </button>
          <button>
            <BsFillCartXFill />
            Clear Cart
          </button>
          <button onClick={() => HandleDeleteAccount(username)}>
            <FiUserX />
            Delete Account
          </button>
        </div>

        <div className={`edit-panel ${show ? "active" : null}`}>
          <h3>Update Your Profile</h3>
          <form action="#" onSubmit={handleUpdate}>
            <div className="input-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                onChange={(e) => setLoginName(e.target.value)}
                placeholder="Name"
                value={loginName ? loginName : name || ""}
                id="name"
              />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => setLoginEmail(e.target.value)}
                value={loginEmail ? loginEmail : email || ""}
                id="email"
              />
            </div>
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                onChange={(e) => setLoginUsername(e.target.value)}
                placeholder="Username"
                value={loginUsername ? loginUsername : username || ""}
                id="username"
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="text"
                onChange={(e) => setLoginPassword(e.target.value)}
                placeholder="Password"
                value={loginPassword ? loginPassword : password || ""}
                id="password"
              />
            </div>
            <div className="input-group">
              <label htmlFor="avatar">Avatar URL</label>
              <input
                type="url"
                placeholder="Profile URL"
                onChange={(e) => setLoginAvatar(e.target.value)}
                value={loginAvatar ? loginAvatar : avatar || ""}
                id="avatar"
              />
            </div>
            <button>Update Account </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Profile;