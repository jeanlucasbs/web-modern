function repetir(item, quantidade){
    let array = []

    for(let i = 0; i < quantidade; i++){
        array.push(item)
    }
    return array
}

console.log(repetir('Jean', 100))