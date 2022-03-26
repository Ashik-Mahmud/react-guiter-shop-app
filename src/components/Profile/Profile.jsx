import React, { useEffect, useState } from "react";
import { BsFillCartXFill } from "react-icons/bs";
import { FiEdit, FiUserX } from "react-icons/fi";
import { Storage } from "./../Storage/Storage";
import "./Profile.css";
const Profile = () => {
  const [profile, setProfile] = useState({});
  useEffect(() => {
    const sessionUsername = sessionStorage.getItem("user");
    const items = Storage();
    const getUser = items.find((item) => item.username === sessionUsername);
    setProfile(getUser);
  }, []);

  const { avatar, name, email } = profile;
  console.log(profile);

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
          <button>
            <FiEdit />
            Edit
          </button>
          <button>
            <BsFillCartXFill />
            Clear Cart
          </button>
          <button>
            <FiUserX />
            Delete Account
          </button>
        </div>
      </div>
    </section>
  );
};

export default Profile;
