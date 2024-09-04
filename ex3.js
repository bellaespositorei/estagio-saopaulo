/*3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;*/

//Fiquei na dúvida com relação ao usar o JSON disponível, pois não vi nenhum, então fiz com valores fictícios

const faturamentoDiario = [
  { dia: 1, valor: 22174.1664 },
  { dia: 2, valor: 24537.6698 },
  { dia: 3, valor: 26139.6134 },
  { dia: 4, valor: 0.0 },
  { dia: 5, valor: 0.0 },
  { dia: 6, valor: 26742.6612 },
  { dia: 7, valor: 0.0 },
  { dia: 8, valor: 42889.2258 },
  { dia: 9, valor: 46251.174 },
  { dia: 10, valor: 11191.4722 },
];

const diasComFaturamento = faturamentoDiario.filter((dia) => dia.valor > 0);

const menorFaturamento = Math.min(
  ...diasComFaturamento.map((dia) => dia.valor)
);
const maiorFaturamento = Math.max(
  ...diasComFaturamento.map((dia) => dia.valor)
);

const totalFaturamento = diasComFaturamento.reduce(
  (acc, dia) => acc + dia.valor,
  0
);
const mediaMensal = totalFaturamento / diasComFaturamento.length;

const diasAcimaDaMedia = diasComFaturamento.filter(
  (dia) => dia.valor > mediaMensal
).length;

console.log(`Menor faturamento: R$${menorFaturamento.toFixed(2)}`);
console.log(`Maior faturamento: R$${maiorFaturamento.toFixed(2)}`);
console.log(
  `Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`
);

//Para rodar o programa, execute esse código no seu console: node ex3.js
