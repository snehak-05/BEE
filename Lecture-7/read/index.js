const fs = require("fs");

// Reading users.txt from the write folder (one level up)
fs.readFile("../write/users.txt", "utf-8", function (err, data) {
  if (err) return console.log(err);

  let users = JSON.parse(data);
  console.log(users);
});
