function somarNumeros(array){
    let resultado = 0
    for(let i in array){
        resultado += array[i]
    }
    return resultado
}
console.log(somarNumeros([10, 10, 10]))
console.log(somarNumeros([15, 15, 15, 15]))
