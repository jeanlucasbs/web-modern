function planoDeSaude(idade){
    if(idade >= 0 && idade <= 10){
        let valorPlano = 100 +80
        return `Valor do plano é R$ ${valorPlano}`
    }else if(idade > 10 && idade <= 30){
        let valorPlano = 100 + 50
        return `Valor do plano é R$ ${valorPlano}`
    }else if(idade > 30 && idade <= 60){
        let valorPlano = 100 + 95
        return `Valor do plano é R$ ${valorPlano}`
    }else if(idade > 60){
        valorPlano = 100 + 130
        return `Valor do plano é R$ ${valorPlano}`
    }else{
        return 'Idade inválida'
    }
}

console.log(planoDeSaude(2))
console.log(planoDeSaude(15))
console.log(planoDeSaude(35))
console.log(planoDeSaude(65))
console.log(planoDeSaude(-2))
