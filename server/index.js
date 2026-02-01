const express = require('express');
const http = require('http');
const {} = require('socket.io')
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});
