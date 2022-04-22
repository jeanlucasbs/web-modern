function calculoAnoBissexto(ano){
    if(ano <= 0){
        return false
    }else if(ano % 400 == 0){
        return true
    }else if(ano % 100 == 0){
        return false
    }else if(ano % 4 == 0){
        return true
    }else{
        return false
    }
}

console.log(calculoAnoBissexto(0))
console.log(calculoAnoBissexto(4))
console.log(calculoAnoBissexto(100))
console.log(calculoAnoBissexto(400))
console.log(calculoAnoBissexto(800))
console.log(calculoAnoBissexto(2020))
console.log(calculoAnoBissexto(2021))
    
