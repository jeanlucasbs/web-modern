function planoDeTrabalho(plano, salario){
    switch(plano){
        case 'A':
            return salario += salario* 0.1
        case 'B':
            return salario += salario* 0.15
        case 'C':
            return salario += salario* 0.2
        default:
            return 'Opção inválida'
    }
}

console.log(planoDeTrabalho('A', 1000))
console.log(planoDeTrabalho('B', 2000))
console.log(planoDeTrabalho('C', 3000))
console.log(planoDeTrabalho('D', 1000))