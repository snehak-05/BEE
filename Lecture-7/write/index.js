let users = [
  {
    name: "Nitish",
    age: "24",
    address: "Delhi"
  },
  {
    name: "ritik",
    age: "25",
    address: "Faridabad"
  }
];

const fs = require("fs");

// Save users.txt in the SAME folder as index.js
fs.writeFile("users.txt", JSON.stringify(users, null, 2), function (err) {
  if (err) return console.log(err);
  console.log("user written!!");
});
