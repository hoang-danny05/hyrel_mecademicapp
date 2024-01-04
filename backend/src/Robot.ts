import { Socket } from "node:net"
// import { ZeroArgCommand, ZeroArgRequest, OneArgCommand, OneArgRequest, SixArgumentCommand } from "./lib/Commands";
import { Queue } from 'queue-typescript';

class Robot {
    private socket: Socket;
    connected: boolean = false;
    receivedResponses: Queue<String> = new Queue<String>();

    constructor() {
        this.socket = new Socket();
        this.socket.on("close", () => {
            this.connected = false;
        })
        //TODO: this can be better than console.log
        this.socket.on("data", (response) => {
            this.receivedResponses.enqueue(`Queue: ${response.toString()}`)
            console.log(`Recieved: ${response.toString()}`)
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
        this.socket.on("close", (hadError) => {
            console.log(`Exited with ${hadError? "ERROR" : "with no error"}`)
        })
        this.socket.on("end", () => {
            console.log("END???")
        })
        this.socket.on("ready", () => {
            console.log("READYYYY")
        })
    }

    attemptConnect() {
        this.socket.connect(10000, '192.168.0.100', () => {
            this.connected = true;
        })
    }

    connectPromise(): Promise<null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject("connection took too long dummy")
            }, 1000)
            this.socket.connect(10000, '192.168.0.100', () => {
                this.connected = true;
                resolve(null)
            })
        })
    }

    disconnect() {
        this.socket.end()
    }

    // sendCommand(command: ZeroArgCommand): void {
    //     this.socket.write(`${command}()`)
    // }

    // sendRequest(request: ZeroArgRequest): Promise<String> {
    //     //somewhere in socket.on has to supply the response
    //     this.socket.once("data", (buf) => {
    //         this.receivedResponses.enqueue(buf.toString())
    //     })

    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             const element = this.receivedResponses.dequeue();
    //             element? 
    //                 resolve(element) :
    //                 reject("No response in time")
    //         }, 1000)
    //     })
    // }

    //DEBUGGING METHODS
    sendString(str: string): Promise<String> {
        // this.socket.once("data", (buf) => {
        //     this.receivedResponses.enqueue(buf.toString())
        // })
        this.socket.write(str)

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.printQueue()
                const response = this.receivedResponses.dequeue()
                response? 
                    resolve(response) :
                    reject("No response recieved from the robot in time")
            }, 100)
        })
    }

    public printQueue() {
        let i = 1;
        if (this.receivedResponses.length == 0)
            console.log("QUEUE IS EMPTY")
        for (const response of this.receivedResponses) {
            console.log(`${i++}: ${response}`)
        }
    }
}

export default Robot