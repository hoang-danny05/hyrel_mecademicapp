import net from "node:net"

const client = new net.Socket();

client.connect(1337, "127.0.0.1", () => {
  console.log("I successfully connected to the server!");
  client.write("Hello, server! From the Client.");
});

client.on('data', data => {
  console.log("Recieved: " + data);
  client.destroy();
});

client.on('close', () => {
  console.log("Connection successfully closed. :)");
});
