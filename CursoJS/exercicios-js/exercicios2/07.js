function estaEntre(numero, minimo, maximo, inclusivo){
    if(inclusivo == true){
        return numero >= minimo && numero <= maximo
    }
    return numero > minimo && numero < maximo
}

console.log(estaEntre(10, 100, 200))
console.log(estaEntre(16, 10, 160))
console.log(estaEntre(3, 150, 3))
console.log(estaEntre(3, 150, 3, true))