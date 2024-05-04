import net from "node:net"

const server = net.createServer((socket) => {
  socket.write("Echo Server\r\n");
  socket.pipe(socket);
})

server.listen(1337, "127.0.0.1");
