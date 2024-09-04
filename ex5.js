const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite uma string para ser invertida: ", (input) => {
  let reversedString = "";

  for (let i = input.length - 1; i >= 0; i--) {
    reversedString += input[i];
  }

  console.log(`String invertida: ${reversedString}`);

  rl.close();
});

//Para rodar o programa, execute esse código no seu console: node ex5.js
