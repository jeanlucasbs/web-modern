function calculadora(x, y, string){
    switch(string){
        case '+':
            return x + y
        case '-':
            return x - y
        case '*':
            return x * y
        case '/':
            return x / y
        default:
            return 'Operação inválida'
    }
}
console.log(calculadora(10,5,'+'))
console.log(calculadora(10,5,'*'))
console.log(calculadora(10,5,'-'))
console.log(calculadora(10,5,'/'))