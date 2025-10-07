const express = require("express");
const mongoose = require("mongoose");
const Blogs = require("./model/blog")
const Users = require("./model/user")

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.post("/blogs", async (req, res) => {
    let {title, body} = req.body;
    let newBlog = new Blogs({
      title : title,
      body : body,
      date : Date.now()
    })
    // console.log(title, body);
    // res.send("got it");
    await newBlog.save(); // yahan pe await isliye lagaya kyuki ye i/o functon asynchronous hota hai toh bina save karen hi ye khali hi save kar dega jo hamen nhi chahiye
    res.json({
      success : true,
      data : newBlog,
      message : "Blog added successfully"
    })
})

app.get("/blogs",async (req, res) => {
  let allBlogs = await Blogs.find();
  res.json({
    success:true,
    data: allBlogs,
  })
})

// single id ka data chahiye ho toh 
app.get("/blogs/:id", async (req, res) => {
  let {id} = req.params;
  let blog = await Blogs.findOne({_id:id});
  res.json({
    success:true,
    data:blog
  })
})

app.post("/users", async (req, res) => {
    let {email, username, password} = req.body;
    let newUser = new Users({
      email : email,
      username : username,
      password : password
    })
    await newUser.save();
    res.json({
      success : true,
      data : newUser,
      message : "User added successfully"
    })
})

app.get("/users",async (req, res) => {
  let allUsers = await Users.find();
  res.json({
    success:true,
    data: allUsers,
  })
})

app.get("/users/:id", async (req, res) => {
  let {id} = req.params;
  let user = await Users.findOne({_id:id});
  res.json({
    success:true,
    data:user
  })
})

mongoose.connect('mongodb://127.0.0.1:27017/backend-blog')
  .then(() => console.log('Connected!'));

app.listen(3002, () =>{
    console.log("server started");
})