// EXERCÍCIO 25 — findIndex() e findLastIndex(): buscar o índice com teste

const numeros = [5, 12, 8, 130, 44];

// findIndex(): índice do primeiro que passa no teste
console.log(numeros.findIndex((n) => n > 10)); // 1

// findLastIndex() (ES2023): índice do último
console.log(numeros.findLastIndex((n) => n > 10)); // 4

// Nada passa? -1
console.log(numeros.findIndex((n) => n > 1000)); // -1
