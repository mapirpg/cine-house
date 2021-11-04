const cinema = 'Cine House'

const catalogo = [
  {
    codigo: 0,
    titulo: 'Filme Um',
    duracao: 2,
    atores: ['João', 'José', 'Maria'],
    anoLancamento: 2016,
    emCartaz: false
  },
  {
    codigo: 1,
    titulo: 'Segundo filme',
    duracao: 1.5,
    atores: ['Paulo', 'Pedro', 'Daniel'],
    anoLancamento: 2019,
    emCartaz: true
  },
  {
    codigo: 2,
    titulo: 'Filme 3',
    duracao: 2.15,
    atores: ['Ingrid', 'Anna', 'Luis'],
    anoLancamento: 2013,
    emCartaz: false
  },
]

function adicionarFilme(titulo, duracao, atores, anoLancamento, emCartaz) {
  const novoFilme = {
    codigo: catalogo.length, 
    titulo, 
    duracao, 
    atores, 
    anoLancamento, 
    emCartaz
  }
  const novoTamanhoDoCatalogo = catalogo.push(novoFilme)
  console.log('Filme adicionado com sucesso, catálogo agora tem ' + novoTamanhoDoCatalogo + ' filme(s)')
}

function buscarFilme(codigo) {
  const filmeBuscado = catalogo[codigo]
  if(!filmeBuscado) {
    console.log('Filme não encontrado')
    return
  }
  if(filmeBuscado.emCartaz) {
    console.log(filmeBuscado.titulo + ", " + filmeBuscado.duracao + " horas, ano " + filmeBuscado.anoLancamento + ", em cartaz")
  } else {
    console.log(filmeBuscado.titulo + ", " + filmeBuscado.duracao + " horas, ano " + filmeBuscado.anoLancamento + ", fora de cartaz")
  }
  return filmeBuscado
}

function alterarStatusEmCartaz(codigo) {
  const filmeAlterar = buscarFilme(codigo)
  if(filmeAlterar.emCartaz) {
    filmeAlterar.emCartaz = false
  } else {
    filmeAlterar.emCartaz = true
  }
  console.log('Status em cartaz alterado, novo status: ' + filmeAlterar.emCartaz)
}