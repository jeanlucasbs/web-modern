function filtrarNumeros1(array){
    const resultado1 = []
    for(let i = 0; i < array.length; i++){
        if(typeof array[i] === "number"){
            resultado1.push(array[i])
        }
    }
    return resultado1
}
function filtrarNumeros2(array){
    const resultado2 = []
    for(let item of array){
        if(typeof item === "number"){
            resultado2.push(item)
        }
    }
    return resultado2
}

console.log(filtrarNumeros1(["Javascript", 1, "3", "Web", 20, 32]))
console.log(filtrarNumeros2(["a", "c", 2, 45]))
