function calcularSalario(qtdHoras,valorHoras){
    const salarioBruto = qtdHoras * valorHoras
    const salarioLiquido = salarioBruto - salarioBruto * 0.3
    return `Salario igual a ${salarioLiquido}`
}

console.log(calcularSalario(150, 40.5))