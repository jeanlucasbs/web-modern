const imprimirResultado = function(nota){
    if(nota >=7){
        console.log('Aprovado!')
    }else{
        console.log('Reprovado')
    }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa')/*cuidado ao fazer isso pois ele vai comparar
o 'Epa' como o 7, como é diferente ele vai imprimir reprovado*/