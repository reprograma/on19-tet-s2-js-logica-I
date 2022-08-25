/*4 - Escreva um programa que pergunte a quantidade de km percorridos por um carro alugado pelo usuário, assim como a quantidade de dias pelos quais o carro foi alugado. Calcule o preço a pagar, sabendo que o carro custa 60,00 reais por dia e 0,15 centavos por km rodado.*/

let kmPercorridos = 400

let quantidadeDeDias = 10

let valorPorDia = 60
let valorKmRodado = 0.15

const totalPorDia = valorPorDia*quantidadeDeDias
const totalDeKm = kmPercorridos*valorKmRodado



let precoAPagar = totalPorDia + totalDeKm

console.log(precoAPagar)