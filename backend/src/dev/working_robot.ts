const net = require('net')
import { Queue } from "queue-typescript";

const commandList = [
    "ActivateRobot",
    "Home",
    "MoveJoints(90,0,0,0,0,0)",
    "MoveJoints(0,0,0,0,0,0)",
    "MoveJoints(90,0,0,0,0,0)",
    "DeactivateRobot",
]
const commands = new Queue<string>();
for (const com of commandList) {
    commands.enqueue(`${com}\r\n`)
}

const client = net.connect(
    {
        port : 10000, 
        host: "192.168.0.100"
    },
    () => {
        console.log("connected")
    }
)
client.on("data", (buf: Buffer) => {
    console.log(buf.toString())
    const com = commands.dequeue();
    if(com) {
        console.log(`Sending command: ${com}`)
        client.write(com)
    }
})