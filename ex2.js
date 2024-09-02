const readlineSync = require("readline-sync");

function isFibonacci(num) {
  let a = 0;
  let b = 1;

  if (num === 0 || num === 1) {
    return `O número ${num} pertence à sequência de Fibonacci.`;
  }

  let next = a + b;

  while (next <= num) {
    if (next === num) {
      return `O número ${num} pertence à sequência de Fibonacci.`;
    }
    a = b;
    b = next;
    next = a + b;
  }

  return `O número ${num} não pertence à sequência de Fibonacci.`;
}

const userInput = readlineSync.question(
  "Digite um numero para verificar se pertence a sequencia de Fibonacci: "
);

const num = parseInt(userInput, 10);

console.log(isFibonacci(num));

//Para inicializar o exercício na sua máquina
//1º passo: execute o seguinte código no seu console: npm install readline-sync
//2º passo: execute esse código no seu console: node ex2.js
//Cada vez que quiser perguntar novos números, só executar o passo 2 novamente
