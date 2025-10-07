 const express=require('express')
 const app=express()
 app.get('/',(req,res)=>{
    //res.send('Hello')
    //res.send("<h1"OK</h1)
    //res.sendFile(___dirname+"/index.html")
    res.json({
        name:"Rishika",
        age:24
    }) 
    res.end("hi")
 })
 //path variable
 //1.query parameter
 app.get("/watch",(req,res)=>{
    let videoId=req.query.v;
     letnId=req.query.n;
    res.send("id got it"+" "+videoId+" "+nId)
 })
 //2 .params
 app.get("/watch/:v",(req,res)=>{
    console.log(req.params.v)
    res.send("got it !!!!!")
 })
 //3 .multiple params
 app.get("/watch/:v/video/:n",(req,res)=>{
    console.log(req.params.v)
    res.send("got it !!!!!")
 })
 app.listen(4444,function(){
    console.log("server started")
 });