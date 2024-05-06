import express from "express"

const app = express();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log("APP IS LISTENING"));

app.get("/api/test", (req, res) => {
    res.send({"response":"successful"})
})
