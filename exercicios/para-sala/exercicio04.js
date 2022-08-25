/*| Exemplo 04 | Descrição |
| --- | --- |
| `Quero lucrar` | Crie um programa que me diga como lucrar nesta situação: quero vender uma bicicleta que 60% do seu valor é R$300, por quanto devo vendê-la para lucrar 25%? |*/

const valorBicicleta = (300 / 60) * 100
const lucroBicicleta = valorBicicleta / 4
const valorFinal = valorBicicleta + lucroBicicleta
console.log(valorFinal)
