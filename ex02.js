const leia = require('readline-sync');

let idade;
let menor = 0;
let maior = 0;

idade = leia.questionInt("\nDigite uma idade: ");

while(idade > 0){
    if(idade <= 21 && idade >= 0){    
        menor++;
    }
    if(idade >= 50){
        maior++; 
    }

    idade = leia.questionInt("\nDigite uma idade: ");
}
console.log(`\nTotal de pessoas menores de 21 anos: ${menor} \nTotal de pessoas maiores de 50 anos: ${maior}`);

