const resumos = require("../db")

const mostrarResumos = (req, rest) => {
    rest.send(resumos)
}

module.exports = mostrarResumos