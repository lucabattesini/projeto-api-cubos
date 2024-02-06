const mostrarResumos = require("./mostrarResumo")
const express = require("express")
const app = express()

app.get("/login", mostrarResumos)

app.listen(3000)