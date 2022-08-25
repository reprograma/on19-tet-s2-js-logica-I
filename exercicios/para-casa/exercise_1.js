// 1 - Solicite o preço de uma mercadoria e o percentual de desconto 20%. Exiba no console o valor do desconto e o preço a pagar.

const productValue = 1337
const discount = productValue*0.2
const discountedPrice = productValue*0.8

console.log(`The original value of the product was $${productValue}. The value with a 20% discount is R$${discount}, with a final price consisting of $${discountedPrice}.`)