function receberSomenteOsParesDeIndicesPares(array){
    let resultado = []
    for(let i = 0; i < array.length; i+=2){
        const numeroPar = array[i] % 2 === 0
        if(numeroPar){
            resultado.push(array[i])
        }
    }
    return resultado
}

console.log(receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]))
console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43, 2]))