function menorNumero(array){
    let menorNumero = array[0]

    for(let i in array){
        if(array[i] <  menorNumero){
            menorNumero = array[i]
        }
    }
    return menorNumero
}
console.log(menorNumero([10, 5, 35, 65]))
console.log(menorNumero([5, -15, 50, 3]))