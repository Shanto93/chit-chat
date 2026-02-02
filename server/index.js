const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("A user connected: ", socket.id);

  socket.on("join_room", (room) => {
    socket.join(room);
    console.log(`${socket.id} joined on room ${room}`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("typing", ({ username, room }) => {
    socket.to(room).emit("message_typing", { username });
  });

  socket.on("disconnect", () => {
    console.log("User disconnected: ", socket.id);
  });
});

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
