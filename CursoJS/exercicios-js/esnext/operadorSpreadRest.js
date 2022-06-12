//Operarador ... rest(juntar) / spread(espalhar)
//usar rest como parametro de uma função

//usar o spread em objeto
const funcionario = {nome: 'Maria', salario: 12900.99}
const clone = {ativo: true, ...funcionario}
console.log(clone)

//usar o spread em um array
const grupoA = ['Maria', 'João', 'Pedro']
const grupoFinal = ['Lucas', ...grupoA, 'Neto']
console.log(grupoFinal)