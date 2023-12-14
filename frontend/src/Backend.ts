
/**
 * class for easy async/await fetch requests
 */
class API {
    static FLASK_URL = "http://localhost:5000"
    public url: string 

    constructor(base_url: string) {
        if (!base_url.match("https?://")) {
            throw new Error("INVALID API URL " + base_url)
        }
        this.url = base_url
    }

    async getJson(path: string) : Promise<Object> {
        return new Promise<Object>((resolve, reject) => {
            // console.log(this.url.concat(path))
            fetch(this.url.concat(path))
                .then(response => response.json()
                    .then(json => {resolve(json)})
                )
                .catch(err => {
                    reject({"error" : err})
                }
            )
        })
    }

    async post(path: string, message: Object) : Promise<Object> {
        return new Promise<Object>((resolve, reject) => {
            fetch(this.url.concat(path), {method: "POST"})
                .then(response => response.json()
                    .then(json => resolve(json))
                )
                .catch(err => reject({"error": err}))
        })
    }
}

export default API