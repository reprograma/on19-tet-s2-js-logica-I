// Exercício de Casa 🏠

// 04 - Escreva um programa que pergunte a quantidade de km percorridos por um carro alugado pelo usuário, assim como a quantidade de dias pelos quais o carro foi alugado. Calcule o preço a pagar, sabendo que o carro custa 60,00 reais por dia e 0,15 centavos por km rodado.

console.log('Informe a quantidade de quilômetros percorridos:')
const quilometros = 60
console.log(quilometros)
console.log('Informe por quantos dias o carro foi alugado:')
const dias = 12
console.log(dias)
precoLocacacao = quilometros * 0.15 + dias * 60
console.log('Valor a pagar:' + ' ' + 'R$' + precoLocacacao.toFixed(2))
