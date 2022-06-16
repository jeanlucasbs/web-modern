const primeiroElemento = arrayOuString => arrayOuString[0]
const letraMinuscula = letra => letra.toLowerCase()

new Promise(function(resolve) {
    resolve(['Ana', 'Lucas', 'Silvia', 'Luiz'])
})
    .then(primeiroElemento)
    .then(letraMinuscula)
    .then(console.log)