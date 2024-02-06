const mostrarResumos = require("./controladores/mostrarResumo")
const express = require("express")
const app = express()

app.get("/login", mostrarResumos)

app.listen(3000)