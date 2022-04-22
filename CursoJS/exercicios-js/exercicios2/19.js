function calcularMedia(array){
    let soma = 0

    for(i in array){
        soma += array[i]
    }
    return soma /array.length
}

console.log(calcularMedia([1,2,3,4,5,6]))