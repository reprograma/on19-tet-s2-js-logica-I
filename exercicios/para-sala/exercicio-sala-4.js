// 4 - Crie um programa que me diga como lucrar nesta situação: quero vender uma bicicleta que 60% do seu valor é R$300, por quanto devo vendê-la para lucrar 25%? 

const parteValor = 300
const porcentagem = 0.6
const valorReal = parteValor / porcentagem
const venda = valorReal * (1+0.25)

console.log(venda)