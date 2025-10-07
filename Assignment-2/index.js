 const fs = require("fs");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let todo;
rl.question("title: ", (title) => {
  rl.question("description: ", (desc) => {
    console.log(`title : ${title}`);
    console.log(`desc : ${desc}`);
    fs.readFile("./todo.txt", "utf-8", function (err, data) {
      if (err && err.code !== "ENOENT") {
        console.log("Error reading file:", err);
        rl.close();
        return;
      }
      if (data && data.trim() !== "") {
        todo = JSON.parse(data);
      } else {
        todo = [];
      }
      let task = {
        Title: title,
        Desc: desc,
      };
      todo.push(task);
      fs.writeFile("./todo.txt", JSON.stringify(todo, null, 2), function (err) {
        if (err) {
          console.log("Error:", err);
        } else {
          console.log("task uploaded");
        }
        rl.close();
      });
    }); });
});
