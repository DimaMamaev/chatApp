const express = require("express");
const socketio = require("socket.io");
const http = require("http");

const PORT = process.env.PORT || 5000;
const router = require("./router");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

//Real-time connection/disconnection
io.on("connection", (socket) => {
  console.log("new connection detected");
  socket.on("join", ({ name, room }, callback) => {
    console.log(name, room);
    callback();
  });

  socket.on("disconnect", () => {
    console.log("user had left");
  });
});

app.use(router);

server.listen(PORT, () =>
  console.log(`Server has been started on port ${PORT}`)
);
