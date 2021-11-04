const lista = ['www.fecebook.com', 'www.twitter.com', 'www.americanas.com', 'www.magazineluiza.com', 'www.qualquercoisa.com']

// function adicionarHttp (URL){
//     return 'http://' + URL
// }

// function processar (listaSites, callback){
//     const processado = []
//     for(let i = 0; i < listaSites.length ; i++){
//         processado.push(callback(listaSites[i]))    
//     }
//     return processado
// }


function adicionarHttp (url) {
    const retorno = "http://" + url
    return retorno
}

function processar (sites, callback){
    const retorno = []
    for(let contador = 0; contador < sites.length; contador++ ){
        const siteAtual = sites[contador]
        const retornoCallback = callback(siteAtual)
        retorno.push(retornoCallback)
    }
    return retorno
}
console.log(processar(lista, adicionarHttp))