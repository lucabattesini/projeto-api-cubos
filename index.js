const express = require("express")

const app = express()

app.get("/login", (req, res) => {
    res.send("Olá, mundo")
})

app.listen(3000)