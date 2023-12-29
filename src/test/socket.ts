import { Socket } from 'node:net'

const client: Socket = new Socket();
client.connect(1337, '127.0.0.1', () => {
    console.log("I have connected!!")
    client.write("hi i am node")
})

client.on('data', (response) => {
    console.log(`We have recieved ${response}`)
    if (response.toString() === "close\n") {
        client.end()
    }
})

client.on('close', () => {
    console.log("contact is lost...")
})