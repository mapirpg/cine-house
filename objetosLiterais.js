function Carro(potencia, cor){
    this.nome = "gol 1000cc"
    this.ano = 2003
    this.potencia = potencia
    this.cor = cor
    console.log('Foi criado o carro ' + this.nome)
}

carroDois = new Carro(75, 'Azul' )