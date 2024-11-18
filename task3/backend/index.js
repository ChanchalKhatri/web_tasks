const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");
const jwt = require("jsonwebtoken");

const app = express();
app.use(cors());
app.use(bodyParser.json());
const secretKey = require("crypto").randomBytes(32).toString("hex");

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "temp_demo",
});

app.post("/register", (req, res) => {
  const { username, fname, lname, email, pass } = req.body;

  const query =
    "INSERT INTO register(username, fname, lname, email, pass) VALUES(?,?,?,?,?)";

  conn.query(query, [username, fname, lname, email, pass], (err, result) => {
    if (err) {
      res.status(400).send("Registration Failed");
    } else {
      res.status(201).send("User Registered");
    }
  });
});

app.post("/login", (req, res) => {
  const { username, pass } = req.body;

  const query = "SELECT * FROM register where username=? AND pass=?";

  conn.query(query, [username, pass], (err, result) => {
    if (err) {
      res.status(401).send("Login Failed");
    } else {
      const token = jwt.sign({ username }, secretKey, { expiresIn: "1h" });
      res.status(200).json({ message: "Logged In", token });
    }
  });
});

function verifyToken(req, res, next) {
  const token = req.headers["authorization"];
  if (!token) return res.status(403).send("Access Denied");

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) return res.status(401).send("Invalid Token");
    req.user = decoded;
    next();
  });
}

app.get("/dashboard", verifyToken, (req, res) => {
  const query = "SELECT * FROM register";
  conn.query(query, (err, result) => {
    if (err) {
      res.status(404).send("Data Fetch Failed");
    } else {
      res.status(200).json(result);
    }
  });
});

app.listen(8000, function () {
  console.log("Backend Started");
});
