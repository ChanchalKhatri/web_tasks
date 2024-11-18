import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import "./Dashboard.css";
import axios from "axios";

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token"); // Retrieve JWT token
    axios
      .get("http://localhost:8000/dashboard", {
        headers: { Authorization: token }, // Include Authorization header
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Navbar />
      <div className="dashboard">
        <div className="main">
          <table className="table">
            <thead>
              <tr>
                <th>sr.no</th>
                <th>Username</th>
                <th>User's Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map((user, index) => (
                  <tr key={user.id || index}>
                    {" "}
                    {/* Ensure unique key */}
                    <td>{index + 1}</td>
                    <td>{user.username}</td>
                    <td>{`${user.fname} ${user.lname}`}</td>
                    <td>{user.email}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">No data available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
