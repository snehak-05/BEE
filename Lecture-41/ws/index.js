const { WebSocketServer } = require("ws");
const { subscriber } = require("../shared/index");

const wss = new WebSocketServer({ port: 8080 });
const allSockets = [];

console.log("WebSocket server started on port 8080");

wss.on("connection", (socket) => {
  console.log("User connected via WebSocket");
  allSockets.push(socket);

  socket.on("close", () => {
    console.log("User disconnected");
    const index = allSockets.indexOf(socket);
    if (index !== -1) allSockets.splice(index, 1);
  });
});

// Subscribe to book updates ONCE
(async () => {
  await subscriber.subscribe("bookupdate", (message) => {
    const parsed = JSON.parse(message);
    console.log("Received book update:", parsed);

    // Broadcast to all WebSocket clients
    allSockets.forEach((s) => {
      s.send(JSON.stringify({
        event: "bookupdate",
        data: parsed
      }));
    });
  });
})();
