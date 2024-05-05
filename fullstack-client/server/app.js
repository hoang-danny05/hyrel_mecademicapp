import express from "express";

const app = express();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log("server started"));

//serves the current build folder as static pages that it will post
app.use(express.static("build"));