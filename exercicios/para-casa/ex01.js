// 1 - Solicite o preço de uma mercadoria e o percentual de desconto 20%. 
// Exiba no console o valor do desconto e o preço a pagar.

// o valor do produto será R$ 500,00.

const valorProduto = 500
const desconto = valorProduto * 0.20
const valorFinal = valorProduto - desconto

console.log(`O produto de ${valorProduto.toFixed(2)} recebeu um desconto de 20% que equivale a ${desconto.toFixed(2)}. O valor a pagar é ${valorFinal.toFixed(2)}. `)
