const fs = require("fs");

// Read users.txt
fs.readFile("./users.txt", "utf-8", function (err, data1) {
  if (err) return console.log("Error reading users.txt:", err);

  let users1 = JSON.parse(data1);

  // Read users2.txt
  fs.readFile("./users2.txt", "utf-8", function (err, data2) {
    if (err) return console.log("Error reading users2.txt:", err);

    let users2 = JSON.parse(data2);

    // Combine both user arrays
    let allUsers = users1.concat(users2);

    // Write to allusers.txt
    fs.writeFile("./allusers.txt", JSON.stringify(allUsers), function (err) {
      if (err) return console.log("Error writing allusers.txt:", err);

      console.log("✅ All users written");
    });
  });
});
