const leia = require('readline-sync');

let entrada;
let soma = 0;


do {
    entrada = leia.questionInt("\nDigite um numero: ");
    
    if(entrada > 0){
        soma = soma + entrada
    }
}
while(entrada !== 0);

console.log(`A soma dos números positivos é: ${soma}`)