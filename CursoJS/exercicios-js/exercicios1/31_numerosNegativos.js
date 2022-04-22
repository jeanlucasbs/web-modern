function contadorNegativos(vetor){
    let qntNegativos = 0
    for(i = 0; i < vetor.length; i++){
        if(vetor[i] < 0){
            qntNegativos++
        }
    }
    return qntNegativos
}

vetor = [-1, 2, -15, -47, 5, -12]

console.log(contadorNegativos(vetor))