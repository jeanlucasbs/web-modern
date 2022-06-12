//não aceita repetição / não indexada

const times = new Set()
times.add('Vasco')
times.add('Sao Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('Vasco'))
times.delete('Vasco')
console.log(times.has('Vasco'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Raquel']
const nomesSet = new Set(nomes)
console.log(nomesSet)
