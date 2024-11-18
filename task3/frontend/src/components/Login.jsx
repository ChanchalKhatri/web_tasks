import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { Navbar } from "./Navbar";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (pass !== "" && username !== "") {
      const main = [username, pass];

      axios
        .post("http://localhost:8000/login", main)
        .then((res) => {
          if (res.status === 200) {
            console.log("Logged In");
            localStorage.setItem("token", res.data.token);
            navigate("../dashboard");
          }
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      window.alert("Password or username is empty");
    }
  };

  return (
    <>
      <Navbar />
      <div className="wrapper">
        <div className="container">
          <div className="form">
            <h1>Join Us</h1>
            <form id="form" onSubmit={handleSubmit}>
              <label htmlFor="username">
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Username"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </label>

              <label htmlFor="pass">
                <input
                  type="password"
                  name="pass"
                  id="pass"
                  placeholder="Password"
                  onChange={(e) => setPass(e.target.value)}
                />
              </label>

              <input type="submit" value="Login" />
            </form>

            <div class="below">
              <p>
                Don't have an account? <Link to="../register">Register</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
