//Remover elemento da ultima posição
const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop()
console.log(pilotos)

//Adicionar elemento na ultima posição
pilotos.push('Verstappen')
console.log(pilotos)

//Remover elemento da primeira posição
pilotos.shift()
console.log(pilotos)

//Adiciona elemento na primeira posição
pilotos.unshift('Hamilton')

//Adicionar com o splice
pilotos.splice(2,0, 'Bottas','Massa')
console.log(pilotos)

//Remover com o splice
pilotos.splice(3,1)
console.log(pilotos)

//Novo Array
const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

//Novo array a partir de um intervalo
const algunsPilotos2 = pilotos.slice(1,4)
console.log(algunsPilotos2)
