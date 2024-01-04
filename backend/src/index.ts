import WebSocket from "ws";
const ws = new WebSocket.Server({ port: 8080 })

ws.on("connection", (socket: WebSocket) => {
    socket.on("message", (message) => {
        socket.send(`Roger: ${message}`)
    })
})