import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [conpass, setConPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (pass === conpass) {
      const main = { username, fname, lname, email, pass };

      axios
        .post("http://localhost:8000/register", main)
        .then((res) => {
          if (res.status === 201) {
            console.log("User Registered");
            navigate("/login");
          }
        })
        .catch((err) => console.error("Error ", err));
    } else {
      window.alert("Password doesnt match");
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
              <label htmlFor="fname">
                <input
                  type="text"
                  name="fname"
                  id="fname"
                  placeholder="fname"
                  onChange={(e) => setFname(e.target.value)}
                />
              </label>
              <label htmlFor="lname">
                <input
                  type="text"
                  name="lname"
                  id="lname"
                  placeholder="lname"
                  onChange={(e) => setLname(e.target.value)}
                />
              </label>
              <label htmlFor="email">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
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
              <label htmlFor="con_pass">
                <input
                  type="password"
                  name="con_pass"
                  id="con_pass"
                  placeholder="Confirm Password"
                  onChange={(e) => setConPass(e.target.value)}
                />
              </label>

              <input type="submit" value="Register" />
            </form>
            <div class="below">
              <p>
                Already have an account? <Link to="../login">Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
