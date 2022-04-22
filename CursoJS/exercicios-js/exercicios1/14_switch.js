function estoque(fruta){
    switch(fruta){
        case "Maça":
            return 'Não vendemos essa fruta aqui'
            break
        case "Kiwi":
            return 'Estamos com escasses de Kiwi'
        case "Melancia":
            return 'Aqui está, são três reais o kilo'
        default:
            return 'Opção inválida'

    }
}

console.log(estoque('Maça'))
console.log(estoque('Kiwi'))
console.log(estoque('Melancia'))
console.log(estoque('Banana'))