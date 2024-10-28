import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    <Navigate to="./" />;
    navigate("../");
  };
  return (
    <>
      <div class="home">
        <div class="container">
          <h1>Logged In</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </>
  );
};

export default Home;
