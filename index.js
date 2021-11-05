
const catalogo = (require('./database/catalogo.json'))

console.log('Bem vindo')

adicionarFilme = (titulo, duracao, atores, anoDeLancamento, emCartaz) => {
    catalogo.push({
        codigo: catalogo.length,
        titulo,
        duracao, 
        atores, 
        anoDeLancamento, 
        emCartaz})
    return catalogo
}

let buscarFilme = (codigo) => {
    const resultado = catalogo[codigo]
    if (!resultado){
        console.log("Filme não encontrado")
        return
    } 
    if (resultado.emCartaz){
        console.log("O filme " + resultado.titulo + " tem a duração de: " + resultado.duracao + " e está em cartaz!")
    } else {
        console.log("O filme " + resultado.titulo + " tem a duração de: " + resultado.duracao + " e não está em cartaz.")
    }
    return resultado
}

function listarTodosOsFilmes(){
    let filme = []
    let filmes = []
    let cartaz
    console.log(`O catálogo contém ${catalogo.length -1} filmes:`)
    for (let i = 0; i < catalogo.length; i++){
        filme.push(Object.values(catalogo[i]))
        if(filme[i][5]){
            cartaz = 'está em cartaz!'
        } else {
            cartaz = 'não está em cartaz.'
        }
        filmes[i] = (`${i} - Nome do Filme: ${filme[i][1]}, Duração de: ${filme[i][2]}H. Elenco: ${filme[i][3]}, ano de lançamento: ${filme[i][4]} e ${cartaz}`) 
        } 
        filmes.shift()
        return filmes
}

let listarFilmesdeLongaDuracao = catalogo => catalogo.filter(filme => filme.duracao >= 2)

let listarFilmesEmCartaz = catalogo => catalogo.filter(filme => filme.emCartaz == true)

console.log(listarTodosOsFilmes())



