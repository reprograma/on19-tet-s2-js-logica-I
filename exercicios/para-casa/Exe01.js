// 1 - Solicite o preço de uma mercadoria e o percentual de desconto 20%. 
//Exiba no console o valor do desconto e o preço a pagar.
let precoMercadoria = 500                  //Valor fictício da mercadoria.
const desconto20 = precoMercadoria * 0.20  //Valor fixo do desconto de 20% (20/100 = 0.20)  
let precoDesconto = (precoMercadoria - desconto20)

console.log(`Você recebeu um desconto no valor de R$${desconto20}. E o preço total a pagar será de R$${precoDesconto}.`)
