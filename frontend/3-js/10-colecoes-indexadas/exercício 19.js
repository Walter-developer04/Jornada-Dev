// EXERCÍCIO 19 — sort() e toSorted()

// sort() MUTA e ordena convertendo para texto
const frutas = ["banana", "uva", "maçã"];
frutas.sort();
console.log(frutas); // [ 'banana', 'maçã', 'uva' ]

// Números precisam de função de comparação (a - b = crescente)
const pontos = [10, 2, 33, 4];
pontos.sort((a, b) => a - b);
console.log(pontos); // [ 2, 4, 10, 33 ]

// b - a = decrescente
const outros = [10, 2, 33, 4];
outros.sort((a, b) => b - a);
console.log(outros); // [ 33, 10, 4, 2 ]

// toSorted() (ES2023): igual ao sort, mas devolve cópia
const notas = [7, 3, 9];
const copia = notas.toSorted((a, b) => a - b);
console.log(copia); // [ 3, 7, 9 ]
console.log(notas); // [ 7, 3, 9 ] (intacto)
