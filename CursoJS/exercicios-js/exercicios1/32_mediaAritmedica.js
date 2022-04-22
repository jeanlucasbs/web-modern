function media(vetor){
    let soma = 0
    for(i = 0; i < vetor.length; i++){
        soma += vetor[i]
    }
    return soma / vetor.length
}

vetor = [5, 5, 5, 5, 5, 5, 5]
console.log(media(vetor))