const ws = require("ws")
const client: WebSocket = new ws("ws://localhost:8080")
console.log("alskdjflkadsjfl")

// listen for them messages
client.onmessage = ({ data }) => {
    console.log(`We recieved a message: ${data}`)
}

client.send("hello server!!!")