const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //remove o ultimo elemento
console.log(pilotos)

pilotos.push('Verstappen') //add elemento na ultima posição
console.log(pilotos)

pilotos.shift() //remove elemento da primeira posição
console.log(pilotos)

pilotos.unshift('Hamilton') //add elemento na primeira posição
console.log(pilotos)

//splice pode add ou remover elementos

//adicionar
pilotos.splice(2,0, 'Bottas', 'Massa') //vai adicionar os elementos antes do elemento 2
console.log(pilotos)

//remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //cria um novo array a partir de outro
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) //pega o intervalo, porem não pega o elemento 4
console.log(algunsPilotos2)
