import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Register = () => {
  const [data, setData] = useState({
    username: "",
    // fname: "",
    // lname: "",
  });

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [conpass, setConPass] = useState("");

  // const handleInput = (e) => {
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (pass == conpass) {
      localStorage.setItem("username", username);
      localStorage.setItem("fname", fname);
      localStorage.setItem("lname", lname);
      localStorage.setItem("email", email);
      localStorage.setItem("pass", pass);
      console.log(username);

      navigate("/Login");
    } else {
      window.alert("Password doesnt match");
    }
  };

  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div className="form">
            <h1>Join with Us</h1>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
