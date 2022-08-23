const AluguelCarroDia = 60
const CustoKmRodados = 0.15
const QuantidadeDeKmRodados = 300
const QuantidadeDeDiasAlugados = 30
const PreçoApagar = AluguelCarroDia * QuantidadeDeDiasAlugados + CustoKmRodados * QuantidadeDeKmRodados
console.log("O preço total a se pagar é de:" + PreçoApagar + "Reais")