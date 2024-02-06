const resumos = [
    {
        id: 1,
        materia: "Portugues",
        texto: "Uma linguagem"
    }
]

const mostrarResumos = (req, rest) => {
    rest.send(resumos)
}

module.exports = mostrarResumos