const { WebSocketServer } = require('ws');
const ws=new WebSocketServer({port:8015});
//event-handler
ws.on("connection", function(socket){
    console.log(socket);
    socket.send("Hi Welcome", 500)
    socket.on('message', function message(data){
        console.log(data.toString(

        ))
    });
});
//app.get("/", (req,res)=>{})