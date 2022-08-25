//Questão 3: Crie um algoritmo que leia o valor de um jantar,
//calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.

let contaJantar = 350                  // Valor hipotetico
let dezporcento = contaJantar * 0.10  //Valor fixo do desconto de 10% (10/100 = 0.10)
let contJantaTot = contaJantar + dezporcento

console.log("O valor da taxa de serviço será de R$${dezporcento}.")
console.log("E o valor total do jantar será de R$${contJantaTot}.")