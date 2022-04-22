function produto(codigo, quantidade){
    switch(codigo){
        case 100:
            return `Valor total do Cachorro Quente R$ ${quantidade * 3}`
        case 200:
            return `Valor total do Hambúrguer Simples R$ ${quantidade * 4}`
        case 300:
            return `Valor total do Cheeseburguer R$ ${quantidade * 5.5}`
        case 400:
            return `Valor total do Bauru R$ ${quantidade * 7.5}`
        case 500:
            return `Valor total do Refrigerante R$ ${quantidade * 3.5}`
        case 600:
            return `Valor total do Suco R$ ${quantidade * 2.8}`
        default:
            return 'Código do produto inválido'
    }
}

console.log(produto(100, 1))
console.log(produto(200, 1))
console.log(produto(300, 1))
console.log(produto(400, 1))
console.log(produto(500, 1))
console.log(produto(600, 1))
console.log(produto(1000, 1))

