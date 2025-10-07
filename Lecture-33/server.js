const { WebSocketServer } = require("ws");
const wss = new WebSocketServer({ port: 8888 });
const {v4 : uuidv4} = require('uuid');

let rooms = new Map(); 

wss.on("connection", (socket) => {
    console.log("A new user connected");

    socket.on("message", (message) => {
        let parsedMessage = JSON.parse(message);
        let { type, payload } = parsedMessage;

        if (type === "join") {
            let { roomId } = payload;

            if (!rooms.get(roomId)) {
                rooms.set(roomId, new Set());
            }

            rooms.get(roomId).add(socket);
            console.log("Current rooms:", rooms);
            socket.roomId = roomId;
            socket.send("added to room");
        }

        else if (type === "chat") {
            let { message } = payload;
            let roomId = socket.roomId;

            let allClients = rooms.get(roomId);
            if (allClients) {
                allClients.forEach(s => {
                    s.send(message);
                });
            }
        }
    });

    socket.on("close", () => {
        let roomId = socket.roomId;
        if (roomId && rooms.get(roomId)) {
            rooms.get(roomId).delete(socket);
            console.log(`User disconnected from room ${roomId}`);
        }
        else if(type=="create"){
            let roomId = uuidv4();
            socket.send(JSON.stringify({
                type:"create",
                payload:{
                    roomId : roomId
                }
            }))
        }
    });
});
