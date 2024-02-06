const mostrarResumos = (req, rest) => {
    rest.send(resumos)
}

module.exports = mostrarResumos