const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
var cors = require('cors')
var app = express();
app.use(cors())
const port = process.env.PORT || 8000;
const index = require("./routes/index");
app.use(index);
const server = http.createServer(app);


var todoList = [{
    name: "Jesús Medina",
    description: "Lavar los trastes en la noche",
    date: new Date()
}]

const io = socketIo(server, {
    cors: {
        origin: '*',
    }
});

io.on("connection", (socket) => {
    console.log("New client connected");

    socket.on("initial_list", () => {
        io.sockets.emit("get_data", todoList);
    });

    socket.on("addItemTodo", itemList => {
        todoList.push(itemList);
        io.sockets.emit("get_data", todoList);
    });

    socket.on("disconnect", () => {
        console.log("Client disconnected");
    });
});

server.listen(port, () => console.log(`Listening on port ${port}`));