import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:8000";
const socket = socketIOClient(ENDPOINT);

const SocketIOOn = (event,callback) => {
    socket.on(event, data => {
        callback(data);
    });
}
const SocketIOemit = (event,data) => {
    socket.emit(event, data);
}

module.exports = {
    SocketOn: SocketIOOn,
    SocketEmit: SocketIOemit
};