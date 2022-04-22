let inteiros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 21, 23]
let qntPares = 0
let qntImpares = 0
for(i = 0; i < inteiros.length; i++){
    if(inteiros[i] % 2 == 0){
        qntPares++
    }else{
        qntImpares++
    }
}
console.log(qntPares, qntImpares)