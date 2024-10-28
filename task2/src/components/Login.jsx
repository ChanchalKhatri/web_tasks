import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      username === localStorage.getItem("username") &&
      pass === localStorage.getItem("pass")
    ) {
      console.log(username);

      navigate("../Home");
    }
  };

  return (
    <>
      <div class="wrapper">
        <div class="container">
          <div class="form">
            <h1>Login</h1>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
