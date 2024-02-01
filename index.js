const express = require("express")

const app = express()

const resumos = [
    {
        id: 1,
        materia: "Portugues",
        texto: "Uma linguagem"
    }
]

app.get("/login", (req, res) => {
    res.send("Receba")
})

app.listen(3000)