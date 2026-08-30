// EXERCÍCIO 28 — map(): transformar em um novo array

const numeros = [1, 2, 3];

// map devolve um array NOVO, do mesmo tamanho
const dobrados = numeros.map((n) => n * 2);
console.log(dobrados); // [ 2, 4, 6 ]
console.log(numeros); // [ 1, 2, 3 ] (intacto)

// A função também recebe o índice
const rotulos = numeros.map((n, i) => i + ": " + n);
console.log(rotulos); // [ '0: 1', '1: 2', '2: 3' ]

// Comum com arrays de objetos
const pessoas = [{ nome: "Ana" }, { nome: "Bruno" }];
console.log(pessoas.map((p) => p.nome)); // [ 'Ana', 'Bruno' ]
