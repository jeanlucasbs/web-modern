//Armazenando um função em um variavel
const imprimirSoma = function(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)

//Armazenando um função arrow em um variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

//retorno implicito 
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))