import { Socket } from "node:net";
// import { ZeroArgCommand, ZeroArgRequest, OneArgCommand, OneArgRequest, SixArgumentCommand } from "./lib/Commands";
import { Queue } from 'queue-typescript';

type PromisePair = {
    resolve: (value: String | PromiseLike<String>) => void,
    reject: (reason?: any) => void
}

class Robot {
    private socket: Socket;
    connected: boolean = false;
    commandQueue: Queue<String> = new Queue<String>();
    resolveQueue: Queue<PromisePair> = new Queue<PromisePair>();

    constructor() {
        this.socket = new Socket();
        this.socket.on("close", () => {
            this.connected = false;
        })
        this.socket.on("data", (response) => {
            //RESOLVE COMMANDS
            const result = this.resolveQueue.dequeue()
            if(result) {
                result.resolve(response.toString())
            }
            //SEND NEW COMMAND, START THE SETTIMEOUT
            if(this.commandQueue.length > 0)
            {
                this.socket.write(this.commandQueue.dequeue() as string)
                // setTimeout(() => {
                //     console.log("this should reject")
                //     result.reject(new Error("No response recieved from the robot in time"))
                // }, 1000)
            }
            //SEND MORE COMMANDS TO THE ROBOT

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
            // switch (true) {
            //     case (code < 2000):
            //         console.error(response)
            //         break
            //     case (code < 3000):
            //         console.log(response)
            //         break
            //     case (code < 4000):
            //         console.log(response)
            //         break
            // }
        })

        // this.socket.on("close", (hadError) => {
        //     console.log(`Exited with ${hadError? "ERROR" : "with no error"}`)
        // })
        // this.socket.on("end", () => {
        //     console.log("END???")
        // })
        // this.socket.on("ready", () => {
        //     console.log("READYYYY")
        // })

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
            }, 2000)
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
        return new Promise((resolve, reject) => {
            //looks so terrible lmao
            this.resolveQueue.enqueue({resolve: resolve, reject: reject});
            this.commandQueue.enqueue(str)
            // setTimeout(() => {
                // console.log("I know this rejects")
                // reject("No response recieved from the robot in time")
            // }, 5000)
        })
    }
}

export default Robot