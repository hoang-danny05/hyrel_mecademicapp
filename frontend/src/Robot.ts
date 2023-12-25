import { Socket } from "node:net"
import { ZeroArgCommand, ZeroArgRequest, OneArgCommand, OneArgRequest, SixArgumentCommand } from "./assets/Commands";

class Robot {
    private socket: Socket;
    connected: boolean = false;

    constructor() {
        this.socket = new Socket();
        this.socket.on("close", () => {
            this.connected = false;
        })
        //TODO: this can be better than console.log
        this.socket.on("data", (response) => {
            console.log(response)
            let code: number;
            try {
                code = Number.parseInt(response.toString().substring(1, 5))
            } 
            catch (NumberFormatException) {
                console.log(`Error getting response code, displaying text.\n${response}`)
                return
            }
            //[1***] -> invalid command, error on me
            //[2***] -> status code
            //[3***] -> status update or "general error"
            switch (true) {
                case (code < 2000):
                    console.error(response)
                    break
                case (code < 3000):
                    console.log(response)
                    break
                case (code < 4000):
                    console.log(response)
                    break
            }
        })
    }

    attemptConnect() {
        this.socket.connect(10000, '192.168.0.100', () => {
            this.connected = true;
        })
    }

    disconnect() {
        this.socket.end()
    }

    sendCommand(command: ZeroArgCommand): void {
        this.socket.write(`${command}()`)
    }

    sendRequest(request: ZeroArgRequest): String {
        //somewhere in socket.on has to supply the response
        return "your mom"
    }
}

export default Robot