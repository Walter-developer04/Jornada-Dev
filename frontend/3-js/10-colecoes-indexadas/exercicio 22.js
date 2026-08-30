// EXERCÍCIO 22 — includes(): o item existe?

const frutas = ["maçã", "banana", "uva"];

console.log(frutas.includes("uva")); // true
console.log(frutas.includes("pera")); // false

// Segundo argumento: começa a buscar a partir desse índice
console.log(frutas.includes("maçã", 1)); // false

// Detalhe: encontra até NaN (indexOf não encontra)
console.log([NaN].includes(NaN)); // true
