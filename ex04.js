const leia = require('readline-sync');

let vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];
let num;

console.log("\nDigite o numero que voce deseja encontrar:")
num = leia.questionInt();

for(let posicao = 0; posicao < vetor.length; posicao++){
    if(vetor[posicao] === num) {
    console.log(`O número ${num} está localizado na posição: ${posicao}`);
    }
    if(vetor[posicao] !== num && posicao === 0) {
        console.log(`\nO numero ${num} não foi encontrado!`);
    }  
}