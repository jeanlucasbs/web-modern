function compraDeCarros(carro){
    switch(carro){
        case 'hatch':
            return 'Compra efetuada com sucesso'
        case 'sedans':
        case 'motocicletas':
        case 'caminhonetes':
            return 'Tem certeza que não prefere este modelo?'
        default:
            return 'Não trabalhamos com esse tipo de automovel aqui'
    }
}

console.log(compraDeCarros('hatch'))
console.log(compraDeCarros('sedans'))
console.log(compraDeCarros('motocicletas'))
console.log(compraDeCarros('caminhonetes'))
console.log(compraDeCarros('fusca'))