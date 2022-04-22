function objetoParaArray(objeto){
    const resultado = []

    for(let chave in objeto){
        resultado.push([chave, objeto[chave]])
    }
    return resultado
}

/*function objetoParaArray(objeto) {
return Object.entries(objeto)
} */

console.log(objetoParaArray({nome: "Maria", profissao: "Desenvolvedora de software"}))