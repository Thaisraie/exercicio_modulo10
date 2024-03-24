const leia = require("readline-sync");

let somaPar = 0;
let somaImpar = 0;

for (contador = 1; contador <= 10; contador++){    
    let num = leia.questionInt(`Digite o ${contador} numero: `);

        if(num % 2 === 0){
            somaPar++;
        }else {
            somaImpar++;
        }
}
console.log(`\nTotal de números pares: ${somaPar} \nTotal de números ímpares: ${somaImpar}`);