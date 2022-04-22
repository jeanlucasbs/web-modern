const anonimo = process.argv.indexOf('-a') !== -1
//console.log(anonimo)

if(anonimo) {
    process.stdout.write('Fala Anônimo!\n')
    process.exit()
}else {
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\n', '')

        process.stdout.write(`Fala ${nome}!!\n`)
        process.exit()
    })
}

//Usando a biblioteca do prompt-sync

//primeiramente é necessario instalar o modulo do prompt-sync pelo npm
//segundamente é necessário importar a biblioteca

const prompt = require('prompt-sync')()

console.log('Digite o primeiro valor: ')
let valor1 = prompt()
let valor2 = prompt()

let v1 = parseFloat(valor1)
let v2 = parseFloat(valor2)

let soma = v1 + v2

console.log('A soma dos valores é: ', soma)