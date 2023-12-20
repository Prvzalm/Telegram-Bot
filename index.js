const express = require('express')
const axios = require('axios')
const PORT = '4000'
const { handler } = require("./controller/index")

const app = express();
app.use(express.json());

app.post("*", async (req,res) => {
    console.log(req.body);
    res.send(await handler(req));
})

app.get("*", async (req,res) => {
    res.send(await handler(req));
})

app.listen( PORT , () => {
    console.log("Server is listening on Port", PORT);
})