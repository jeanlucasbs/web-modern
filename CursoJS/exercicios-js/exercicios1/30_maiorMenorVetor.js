function maiorMenor(vetor){
    let maior
    let menor
    for(let i = 0; i < vetor.length; i++ ){
        if (maior === undefined && menor === undefined){
            maior = vetor[i]
            menor = vetor[i]
        }else{
            if(vetor[i] > maior){
                maior = vetor[i]
            }
            if(vetor[i] < menor){
                menor = vetor[i]
            }
        }
    }
    return [maior, menor]
}

vetor = [ 2, 5, 9, 14, 25, 30, 1, 48]

console.log(maiorMenor(vetor))