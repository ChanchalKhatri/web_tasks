import React from "react";
import { Navbar } from "../components/Navbar";
import "../components/Navbar.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div class="home">
        <div class="container">
          <h1>Welcome to Home</h1>
        </div>
      </div>
    </>
  );
};

export default Home;
