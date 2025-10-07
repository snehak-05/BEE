 
const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
 // console.log(req.body);
 let name=req.body.name;
 let password=req.body.password;
 res.json({
    name:name,
    password:password
 })
});
app.listen(3000, () => {
  console.log('Server started at http://localhost:3000');
});
