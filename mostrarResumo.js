const resumos = [
    {
        id: 1,
        materia: "Portugues",
        texto: "Foco na língua portuguesa, incluindo gramática, literatura, interpretação de textos e produção textual."
    },
    {
        id: 2,
        materia: "Matematica",
        texto: "Estuda-se números, álgebra, geometria, trigonometria e cálculo, desenvolvendo habilidades analíticas e de resolução de problemas."
    },
    {
        id: 3,
        materia: "História",
        texto: "Analisa-se o desenvolvimento da humanidade ao longo do tempo, incluindo eventos históricos, culturais, políticos e sociais."
    },
    {
        id: 4,
        materia: "Geografia",
        texto: "Estuda-se a Terra e seus fenômenos, incluindo clima, relevo, recursos naturais, populações e questões geopolíticas."
    },
    {
        id: 5,
        materia: "Biologia",
        texto: "Explora-se a vida, desde os níveis molecular e celular até a ecologia, abrangendo organismos, sistemas biológicos e processos evolutivos."
    }
]

const mostrarResumos = (req, rest) => {
    rest.send(resumos)
}

module.exports = mostrarResumos