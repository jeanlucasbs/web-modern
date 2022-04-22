//pessoa -> 123 -> {...}
const pessoa = {nome: 'Jean'}
pessoa.nome = 'Lucas'
console.log(pessoa)

//pessoa -> 456 -> {...}
//pessoa -> {nome: 'Ana}

Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

//Nem a referencia da variavel e nem o objeto
const pessoaConstante = Object.freeze({nome: 'Joao'})
console.log(pessoaConstante)