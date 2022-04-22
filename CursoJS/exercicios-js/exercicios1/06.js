function jurosSimples(capitalInicial, taxaDeJuros, tempoAplicacao){
    montante = capitalInicial * (1 + (taxaDeJuros * tempoAplicacao))
    console.log(`Montante = R$ ${montante}`)
}

function jurosComposto(capitalInicial, taxaDeJuros, tempoAplicacao){
    montante1 = capitalInicial * (1+ taxaDeJuros) ** tempoAplicacao
    console.log(`Montante = R$ ${montante1}`)
}

jurosSimples(100, 10/100, 2)
jurosComposto(100, 10/100, 2)