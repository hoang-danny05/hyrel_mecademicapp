import API from "./Backend"

type SixArgs = {
    x: number,
    y: number, 
    z: number, 
    rx: number, 
    ry: number, 
    rz: number
}
/**
 * Class that uses the BACKEND class to give helper methods to APP
 */
class Robot {
    api : API
    constructor(api: API) {
        this.api = api
    }

    async connectionState() : Promise<object> {
        return await this.api.getJson("/robotstate")
    }

    async attemptReconnect() : Promise<object> {
        return await this.api.getJson("/attemptReconnect")
    }

    async activateAndHome() : Promise<object> {
        return await this.api.getJson("/activateAndHome")
    }

    //commands here
    async moveJoints(coordinates: SixArgs) : Promise<object> {
        return await this.api.post("/")
    }
}