import express from "express";

const app = express();
const port = 3003;

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/api/userData", (req, res) => {
  const user = [
    {
      id: 1,
      name: "John",
      age: 30,
      gender: "male",
      occupation: "student",
      email: "john@example.com",
      password: "john@123",
      address: "123 Main St",
      city: "New York",
      state: "NY",
      zip: 10001,
    },
    {
      id: 2,
      name: "Alice",
      age: 25,
      gender: "female",
      occupation: "teacher",
      email: "alice@example.com",
      password: "alice@123",
      address: "456 Elm St",
      city: "Los Angeles",
      state: "CA",
      zip: 90001,
    },
    {
      id: 3,
      name: "Bob",
      age: 35,
      gender: "male",
      occupation: "engineer",
      email: "bob@example.com",
      password: "bob@123",
      address: "789 Oak St",
      city: "Chicago",
      state: "IL",
      zip: 60001,
    },
    {
      id: 4,
      name: "Emily",
      age: 28,
      gender: "female",
      occupation: "doctor",
      email: "emily@example.com",
      password: "emily@123",
      address: "321 Pine St",
      city: "San Francisco",
      state: "CA",
      zip: 94101,
    },
  ];

  res.json(user);
});

app.listen(port, function () {
  console.log(`Example app listening on port at http://localhost:${port}`);
});
