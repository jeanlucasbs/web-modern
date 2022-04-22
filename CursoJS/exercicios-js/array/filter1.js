const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Notebook', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false},
]

console.log(produtos.filter(function(p){
    return false //true nao filtra e false filtra
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))