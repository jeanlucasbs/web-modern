function observarIntervalo(vetor){
    let qntDentro = 0
    let qntFora = 0
    for(let i = 0; i < vetor.length ; i++){
        if(vetor[i] >= 10 && vetor[i] <=20){
            qntDentro++
        }
        else{
            qntFora++
        }
    }
    console.log(`${qntDentro} números estão dentro do intervalo`)
    console.log(`${qntFora} números estão fora do intervalo`)
}

let vetor1 = []
for(let i = 1; i <= 30; i++){
    vetor1.push(i)
}
observarIntervalo(vetor1)