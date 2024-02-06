const mostrarResumos = require("./mostrarResumo")

const express = require("express")

const app = express()

const resumos = [
    {
        id: 1,
        materia: "Portugues",
        texto: "Uma linguagem"
    }
]

app.get("/login", mostrarResumos)

app.listen(3000)