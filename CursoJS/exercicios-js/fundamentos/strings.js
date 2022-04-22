const escola = "Cod3r"

console.log(escola.charAt(4))//vai retornar o que esta na posicao
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('3'))/*aqui ele vai verificar
* se existe o valor 3 dentro da varias*/
console.log(escola.substring(2))/* ele vai retorna o valor
* a partir do indice que deseja*/
console.log(escola.substring(0, 3))

console.log('Escola'.concat(escola).concat("!"))
console.log('Escola'+ escola + "!")
console.log(escola.replace(3, 'e'))//substitui algo que vc deseja por outro
console.log('Ana,Maria,Pedro'.split(','))