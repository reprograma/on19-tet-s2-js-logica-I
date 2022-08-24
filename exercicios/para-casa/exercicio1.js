/*1 - Solicite o preço de uma mercadoria e o percentual de desconto 20%.
 Exiba no console o valor do desconto e o preço a pagar*/

 let preço = 1200
 let desconto = 20

 const valor_do_desconto = ( preço *desconto) /100
 
 const valor_a_pagar = preço - valor_do_desconto

console.log(`Um desconto de ${desconto}% em uma mercadoria de R$ ${preço}, vale, ${valor_do_desconto}`)
 
 console.log(`O valor a se pagar pela mercadoria é R$ ${valor_a_pagar }`)
