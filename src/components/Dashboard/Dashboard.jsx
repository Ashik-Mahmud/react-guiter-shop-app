import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
const Dashboard = () => {
  const navigate = useNavigate();

  const sessionUsername = sessionStorage.getItem("user");
  useEffect(() => {
    console.log(sessionUsername);
    if (!sessionUsername) {
      navigate("/login");
    }
  }, [navigate, sessionUsername]);

  return (
    <section id="dashboard">
      <div className="container">
        <h1>Welcome To the Dashboard {sessionUsername}</h1>
      </div>
    </section>
  );
};

export default Dashboard;
