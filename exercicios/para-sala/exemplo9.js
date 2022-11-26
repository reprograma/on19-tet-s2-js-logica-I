// Exemplo 09 | Descrição |

// `Boletim` | Escreva um programa que recebe 4 notas, calcula a média e exibe no console. |
  
let english = 10
let mathematics = 9
let geography = 9
let philosophy = 8

const mediaSchool =( english+ mathematics+ geography + philosophy) / 5

console.log(`Your average is :  ${mediaSchool}`)
if (mediaSchool >= 6){
    console.log("Congratulations ! you've been approved!!")
}
else if (mediaSchool <= 5) {
    console.log("you are in recovery")
    
} else {
    console.log("Is disapproved !")
    
}
