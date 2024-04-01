import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    console.log("Fired");
    axios
      .get("/api/userData")
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h1>User List</h1>
      <p>Users: {user.length}</p>
      {user.map((user) => (
        <div key={user.id}>
          <div>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Gender: {user.gender}</p>
            <p>Occupation: {user.occupation}</p>
            <p>Email: {user.email}</p>
            <p>Password: {user.password}</p>
            <p>Address: {user.address}</p>
            <p>City: {user.city}</p>
            <p>State: {user.state}</p>
            <p>Zip: {user.zip}</p>
          </div>
          <br />
        </div>
      ))}
    </>
  );
}

export default App;
