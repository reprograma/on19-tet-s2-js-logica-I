// Exercício 04 - Quero lucrar

// Crie um programa que me diga como lucrar nesta situação: quero vender uma bicicleta que 60% do seu valor é R$300, por quanto devo vendê-la para lucrar 25%

const valorBike = (300 / 60) * 100
const lucroBike = valorBike * 0.25
const valorVenda = valorBike + lucroBike
console.log(valorVenda)
