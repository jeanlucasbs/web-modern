function triangulo(x, y, z){
    if(x == y && y == z){
        return 'Triângulo Equilatero'
    }else{
        if(x == y || x == z || y == z){
            return 'Triângulo Isósceles'
        }else{
            return 'Triângulo Escaleno'
        }
    }
}

console.log(triangulo(5,5,5))
console.log(triangulo(5,6,6))
console.log(triangulo(4,2,3))