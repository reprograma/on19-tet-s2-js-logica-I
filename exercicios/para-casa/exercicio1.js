const recebe = require('prompt-sync')({sigint:true});

let valorMercadoria;
let valorDesconto;

valorMercadoria = recebe("Informe o valor da mercadoria que quer consultar: ");
valorDesconto = recebe("Para um desconto de 20% digite o valor decimal(0.80): ")
console.log(`Com o valor da mercadoria informado de ${valorMercadoria}, e desconto de 20%, o preço final da mercadoria será de R$: ${valorMercadoria * valorDesconto} `);
