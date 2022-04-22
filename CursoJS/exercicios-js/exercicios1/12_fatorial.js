function fatorial(numero){
    if(numero == 0){
        return 1
    }else{
        return numero * fatorial(numero - 1)
    }
}

console.log(fatorial(4))

//outra opção

var resultado = fatorial;
for (var i = 1; i < fatorial; i++) {
    resultado *= i;
}
console.log(resultado);