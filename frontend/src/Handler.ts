import API from "./Backend"

/**
 * Class that uses the BACKEND class to give helper methods to APP
 */
class Robot {
    api : API
    constructor(api: API) {
        this.api = api
    }

    async robotState() : Promise<{"connected": boolean}> {
        await this.api.getJson("/robotstate")
    }
}